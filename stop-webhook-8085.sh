#!/bin/bash
# stop-webhook-8085.sh
# Stops the webhook-8085.cjs process.

echo "🛑 MOBA Develop Webhook 서버 중지 중..."

if [ -f webhook-8085.pid ]; then
    PID=$(cat webhook-8085.pid)
    if ps -p $PID > /dev/null; then
        kill "$PID"
        rm webhook-8085.pid
        echo "✅ 개발용 Webhook 서버가 중지되었습니다 (PID: $PID)"
    else
        echo "⚠️ 개발용 Webhook 서버가 이미 중지되어 있습니다"
        rm webhook-8085.pid
    fi
else
    echo "⚠️ PID 파일을 찾을 수 없습니다"
    echo "🔍 실행 중인 개발용 webhook 프로세스를 찾는 중..."
    pkill -f webhook-8085.cjs
    echo "✅ 개발용 Webhook 프로세스가 종료되었습니다"
fi
