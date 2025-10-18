#!/bin/bash

# MOBA 자동 배포 스크립트
# Git push 시 자동으로 실행됩니다

echo "🚀 MOBA 자동 배포 시작..."

# 현재 디렉토리로 이동
cd /home/lchangoo/Workspace/moba

# 최신 코드 pull
echo "📥 최신 코드 가져오는 중..."
git pull origin main

# Docker 컨테이너 중지 및 제거
echo "🐳 Docker 컨테이너 중지 중..."
docker-compose down

# Docker 이미지 빌드 및 실행
echo "🔨 Docker 이미지 빌드 중..."
docker-compose up --build -d

# 배포 상태 확인
echo "✅ 배포 상태 확인 중..."
sleep 10

# 서비스 상태 확인
if docker-compose ps | grep -q "Up"; then
    echo "🎉 MOBA 배포 성공!"
    echo "🌐 서비스 URL: http://125.240.175.68:8084/"
    
    # 헬스체크
    if curl -f http://localhost:8084 > /dev/null 2>&1; then
        echo "✅ 서비스 정상 작동 확인"
    else
        echo "❌ 서비스 헬스체크 실패"
    fi
else
    echo "❌ MOBA 배포 실패!"
    exit 1
fi

echo "🏁 자동 배포 완료!"
