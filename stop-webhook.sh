#!/bin/bash

# MOBA Webhook 서버 중지 스크립트

echo "🛑 MOBA Webhook 서버 중지 중..."

if [ -f webhook.pid ]; then
    PID=$(cat webhook.pid)
    if ps -p $PID > /dev/null; then
        kill $PID
        rm webhook.pid
        echo "✅ Webhook 서버가 중지되었습니다 (PID: $PID)"
    else
        echo "⚠️ Webhook 서버가 이미 중지되어 있습니다"
        rm webhook.pid
    fi
else
    echo "⚠️ PID 파일을 찾을 수 없습니다"
    echo "🔍 실행 중인 webhook 프로세스를 찾는 중..."
    pkill -f webhook-server.js
    echo "✅ Webhook 프로세스가 종료되었습니다"
fi
