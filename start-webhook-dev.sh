#!/bin/bash
# start-webhook-dev.sh
# 개발용 webhook 서버 시작

echo "🎯 MOBA 개발용 Webhook 서버 시작 중..."

# 기존 개발용 webhook 서버 중지
if [ -f webhook-dev.pid ]; then
    PID=$(cat webhook-dev.pid)
    if ps -p $PID > /dev/null; then
        kill $PID
        echo "✅ 기존 개발용 webhook 서버 중지됨 (PID: $PID)"
    fi
    rm webhook-dev.pid
fi

# 개발용 webhook 서버 시작
echo "🚀 개발용 Webhook 서버 실행 중..."
nohup node webhook-dev.cjs > webhook-dev.log 2>&1 &

# PID 저장
echo $! > webhook-dev.pid

echo "✅ 개발용 Webhook 서버가 백그라운드에서 실행 중입니다 (PID: $(cat webhook-dev.pid))"
echo "🔗 GitHub Webhook URL: http://125.240.175.68:8086/webhook"
echo "🔑 Secret: moba-dev-webhook-secret-2024"
echo "📋 로그 확인: tail -f webhook-dev.log"
echo "🛑 서버 중지: ./stop-webhook-dev.sh"
