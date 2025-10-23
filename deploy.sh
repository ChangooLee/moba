#!/bin/bash

# MOBA Hot Swap 배포 스크립트
# Git push 시 자동으로 실행됩니다 (Docker 재시작 없이)

echo "⚡ MOBA Hot Swap 배포 시작..."

# 현재 디렉토리로 이동
cd /home/lchangoo/Workspace/moba

# 최신 코드 pull
echo "📥 최신 코드 가져오는 중..."
git pull origin develop

# 프론트엔드 빌드만 실행
echo "🔨 프론트엔드 빌드 중..."
npm run build || { echo "❌ 빌드 실패"; exit 1; }

# 현재 이미지 백업 태깅 (롤백용)
echo "🧩 현재 이미지 백업 태깅(moba-web:prev)"
docker image inspect moba-web:latest >/dev/null 2>&1 && docker tag moba-web:latest moba-web:prev || echo "ℹ️ 기존 latest 이미지 없음 - 최초 배포로 간주"

# 신규 컨테이너 배포
echo "🔄 Docker 컨테이너 재시작 중..."
docker-compose down
docker-compose up -d --build || DEPLOY_UP_STATUS=$?

# 헬스체크 (재시도 포함)
echo "🩺 헬스체크 시작 (최대 10회, 2초 간격)"
HEALTH_OK=0
for i in $(seq 1 10); do
    if curl -fsS http://localhost:8084 >/dev/null 2>&1; then
        HEALTH_OK=1
        break
    fi
    echo "⏳ 대기 중...(${i}/10)"
    sleep 2
done

if [ "$HEALTH_OK" = "1" ]; then
    echo "🎉 MOBA Hot Swap 배포 성공!"
    echo "🌐 서비스 URL: https://moba-project.org"
    echo "🏁 Hot Swap 배포 완료!"
    exit 0
fi

# 롤백 수행
echo "🚨 배포 실패 감지 - 롤백 진행"
echo "🛑 신규 컨테이너 중지"
docker-compose down || true

if docker image inspect moba-web:prev >/dev/null 2>&1; then
    echo "↩️ 이전 안정 이미지(moba-web:prev)로 복구"
    docker rm -f moba-web-1 >/dev/null 2>&1 || true
    docker run -d --name moba-web-1 -p 8084:80 moba-web:prev || {
        echo "❌ 롤백 컨테이너 기동 실패";
        exit 1;
    }

    echo "🩺 롤백 서비스 헬스체크"
    sleep 2
    if curl -fsS http://localhost:8084 >/dev/null 2>&1; then
        echo "✅ 롤백 성공 - 이전 버전으로 서비스 복구"
        exit 1
    else
        echo "❌ 롤백 후에도 서비스 비정상"
        exit 1
    fi
else
    echo "⚠️ 롤백용 이미지(moba-web:prev) 없음 - 수동 조치 필요"
    exit 1
fi
