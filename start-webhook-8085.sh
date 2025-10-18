#!/bin/bash
# start-webhook-8085.sh
# 8085 포트 전용 develop webhook 서버 시작

echo "🎯 MOBA Develop Webhook 서버 시작 중 (포트 8085)..."

# 기존 webhook 서버들 모두 중지
echo "🛑 기존 webhook 서버들 중지 중..."
pkill -f webhook 2>/dev/null || true

# 8085 포트 webhook 서버 시작
echo "🚀 Develop Webhook 서버 실행 중..."
nohup node webhook-8085.cjs > webhook-8085.log 2>&1 &

# PID 저장
echo $! > webhook-8085.pid

echo "✅ Develop Webhook 서버가 백그라운드에서 실행 중입니다 (PID: $(cat webhook-8085.pid))"
echo "🔗 GitHub Webhook URL: http://125.240.175.68:8085/webhook"
echo "🔑 Secret: moba-dev-webhook-secret-2024"
echo "📋 로그 확인: tail -f webhook-8085.log"
echo "🛑 서버 중지: ./stop-webhook-8085.sh"
