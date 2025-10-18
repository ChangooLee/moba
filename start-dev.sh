#!/bin/bash
# start-dev.sh
# 개발용 Hot Reload 서버 시작

echo "🎯 MOBA 개발 서버 시작 중..."

# 기존 컨테이너 중지
echo "🛑 기존 컨테이너 중지 중..."
docker-compose -f docker-compose.dev.yml down

# 개발용 컨테이너 시작
echo "🚀 개발용 컨테이너 시작 중..."
docker-compose -f docker-compose.dev.yml up --build -d

echo "✅ 개발 서버 시작 완료!"
echo "🌐 개발 URL: http://localhost:8084"
echo "📋 로그 확인: docker-compose -f docker-compose.dev.yml logs -f"
echo "🛑 서버 중지: docker-compose -f docker-compose.dev.yml down"
