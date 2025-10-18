#!/bin/bash
# deploy-fast.sh
# 빠른 배포 스크립트 (Volume Mount 방식)

echo "🚀 MOBA 빠른 배포 시작..."

# 최신 코드 가져오기
echo "📥 최신 코드 가져오는 중..."
git pull origin main

# 빌드만 실행
echo "🔨 애플리케이션 빌드 중..."
npm run build

# 빌드된 파일을 컨테이너에 복사
echo "📋 빌드된 파일 복사 중..."
docker cp ./dist/. moba-web-1:/usr/share/nginx/html/

# Nginx 리로드
echo "🔄 Nginx 리로드 중..."
docker exec moba-web-1 nginx -s reload

echo "✅ 빠른 배포 완료!"
echo "🌐 서비스 URL: http://125.240.175.68:8084/"
