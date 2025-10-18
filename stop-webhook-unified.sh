#!/bin/bash
# stop-webhook-unified.sh
# 통합 webhook 서버 중지

echo "🛑 MOBA 통합 Webhook 서버 중지 중..."

if [ -f webhook-unified.pid ]; then
    PID=$(cat webhook-unified.pid)
    if ps -p $PID > /dev/null; then
        kill $PID
        rm webhook-unified.pid
        echo "✅ 통합 Webhook 서버가 중지되었습니다 (PID: $PID)"
    else
        echo "⚠️ 통합 Webhook 서버가 이미 중지되어 있습니다"
        rm webhook-unified.pid
    fi
else
    echo "⚠️ PID 파일을 찾을 수 없습니다"
    echo "🔍 실행 중인 통합 webhook 프로세스를 찾는 중..."
    pkill -f webhook-unified.cjs
    echo "✅ 통합 Webhook 프로세스가 종료되었습니다"
fi
