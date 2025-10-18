#!/bin/bash
# deploy-dev.sh
# 개발용 초고속 배포 (Hot Reload)

echo "⚡ MOBA 개발용 초고속 배포 시작..."

# 최신 코드 가져오기
echo "📥 최신 코드 가져오는 중..."
git pull origin develop

# 개발 서버가 실행 중인지 확인
if ! docker ps | grep -q "moba-dev"; then
    echo "🚀 개발 서버 시작 중..."
    ./start-dev.sh
else
    echo "🔄 개발 서버 리로드 중..."
    # Volume Mount로 파일만 교체
    docker exec moba-dev-web-1 sh -c "cd /app && npm run build"
    docker exec moba-dev-web-1 nginx -s reload 2>/dev/null || true
fi

echo "✅ 개발용 배포 완료!"
echo "🌐 개발 URL: http://localhost:8084"
echo "📋 로그 확인: docker-compose -f docker-compose.dev.yml logs -f"
