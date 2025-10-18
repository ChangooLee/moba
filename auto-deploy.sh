#!/bin/bash

# MOBA 로컬 자동 배포 스크립트
# 개발 중에 사용할 수 있는 간단한 배포 스크립트

echo "🚀 MOBA 로컬 자동 배포 시작..."

# Git 상태 확인
echo "📊 Git 상태 확인 중..."
git status

# 변경사항이 있는지 확인
if [[ -n $(git status -s) ]]; then
    echo "📝 변경사항이 있습니다. 커밋하시겠습니까? (y/n)"
    read -r response
    if [[ "$response" =~ ^[Yy]$ ]]; then
        echo "💾 변경사항 커밋 중..."
        git add .
        git commit -m "Auto deploy: $(date '+%Y-%m-%d %H:%M:%S')"
        
        echo "📤 원격 저장소에 푸시 중..."
        git push origin main
    fi
else
    echo "✅ 변경사항이 없습니다."
fi

# Docker 재배포
echo "🐳 Docker 재배포 중..."
docker-compose down
docker-compose up --build -d

# 배포 상태 확인
echo "✅ 배포 상태 확인 중..."
sleep 5

if docker-compose ps | grep -q "Up"; then
    echo "🎉 MOBA 배포 성공!"
    echo "🌐 서비스 URL: http://125.240.175.68:8084/"
    echo "🔗 로컬 URL: http://localhost:8084/"
else
    echo "❌ MOBA 배포 실패!"
    exit 1
fi

echo "🏁 자동 배포 완료!"
