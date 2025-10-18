#!/bin/bash

# MOBA Webhook 서버 시작 스크립트

echo "🎣 MOBA Webhook 서버 시작 중..."

# Node.js가 설치되어 있는지 확인
if ! command -v node &> /dev/null; then
    echo "❌ Node.js가 설치되어 있지 않습니다."
    echo "📦 Node.js 설치 중..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# webhook 서버 실행
echo "🚀 Webhook 서버 실행 중..."
echo "🔗 GitHub Webhook URL: http://125.240.175.68:8085/webhook"
echo "🔑 Secret: moba-webhook-secret-2024"
echo ""
echo "💡 GitHub 저장소에서 이 URL과 Secret을 설정하세요:"
echo "   - Payload URL: http://125.240.175.68:8085/webhook"
echo "   - Secret: moba-webhook-secret-2024"
echo "   - Events: Just the push event"
echo ""

# 백그라운드에서 webhook 서버 실행
nohup node webhook-server.js > webhook.log 2>&1 &

# PID 저장
echo $! > webhook.pid

echo "✅ Webhook 서버가 백그라운드에서 실행 중입니다 (PID: $(cat webhook.pid))"
echo "📋 로그 확인: tail -f webhook.log"
echo "🛑 서버 중지: ./stop-webhook.sh"
