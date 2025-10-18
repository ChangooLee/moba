#!/bin/bash
# start-webhook-8085.sh
# Starts the webhook-8085.cjs in the background for develop branch deployment on port 8085.

# Navigate to the project directory
cd /home/lchangoo/Workspace/moba || exit

echo "🎯 MOBA Develop Webhook 서버 시작 중 (포트 8085)..."

# 기존 webhook 서버들 중지
echo "🛑 기존 webhook 서버들 중지 중..."
pkill -f webhook > /dev/null 2>&1

# Node.js 설치 확인
if ! command -v node &> /dev/null
then
    echo "Node.js가 설치되어 있지 않습니다. webhook 서버를 실행하려면 Node.js를 설치해주세요."
    exit 1
fi

# npm 의존성 설치 확인
if [ ! -d "node_modules" ]; then
    echo "webhook 서버를 위한 npm 의존성 설치 중..."
    npm install express crypto child_process fs path
fi

echo "🚀 개발용 Webhook 서버 실행 중..."
nohup node webhook-8085.cjs > webhook-8085.log 2>&1 &

# PID 저장
echo $! > webhook-8085.pid

echo "✅ 개발용 Webhook 서버가 백그라운드에서 실행 중입니다 (PID: $(cat webhook-8085.pid))"
echo "🔗 GitHub Webhook URL: http://125.240.175.68:8085/webhook"
echo "🔑 Secret: moba-dev-webhook-secret-2024"
echo "📋 로그 확인: tail -f webhook-8085.log"
echo "🛑 서버 중지: ./stop-webhook-8085.sh"
