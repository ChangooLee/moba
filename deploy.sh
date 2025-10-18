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
npm run build

# 빌드된 파일을 Docker 컨테이너로 복사
echo "🔄 빌드된 파일을 컨테이너로 복사 중..."
docker cp dist/. moba-web-1:/usr/share/nginx/html/

# Nginx 설정 리로드 (컨테이너 재시작 없이)
echo "🌐 Nginx 설정 리로드 중..."
docker exec moba-web-1 nginx -s reload

# 배포 상태 확인
echo "✅ 배포 상태 확인 중..."
sleep 3

# 서비스 상태 확인
if docker ps | grep -q "moba-web-1.*Up"; then
    echo "🎉 MOBA Hot Swap 배포 성공!"
    echo "🌐 서비스 URL: http://125.240.175.68:8084/"
    
    # 헬스체크
    if curl -f http://localhost:8084 > /dev/null 2>&1; then
        echo "✅ 서비스 정상 작동 확인"
    else
        echo "❌ 서비스 헬스체크 실패"
    fi
else
    echo "❌ MOBA Hot Swap 배포 실패!"
    exit 1
fi

echo "🏁 Hot Swap 배포 완료!"
