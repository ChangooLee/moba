#!/bin/bash
# start-webhook-unified.sh
# 통합 webhook 서버 시작 (main + develop 브랜치)

echo "🎯 MOBA 통합 Webhook 서버 시작 중..."

# 기존 webhook 서버들 중지
echo "🛑 기존 webhook 서버들 중지 중..."
./stop-webhook.sh 2>/dev/null || true
./stop-webhook-dev.sh 2>/dev/null || true

# 통합 webhook 서버 시작
echo "🚀 통합 Webhook 서버 실행 중..."
nohup node webhook-unified.cjs > webhook-unified.log 2>&1 &

# PID 저장
echo $! > webhook-unified.pid

echo "✅ 통합 Webhook 서버가 백그라운드에서 실행 중입니다 (PID: $(cat webhook-unified.pid))"
echo "🔗 GitHub Webhook URL: http://125.240.175.68:8084/webhook"
echo "🔑 Main Secret: moba-webhook-secret-2024 (main 브랜치용)"
echo "🔑 Dev Secret: moba-dev-webhook-secret-2024 (develop 브랜치용)"
echo "📋 로그 확인: tail -f webhook-unified.log"
echo "🛑 서버 중지: ./stop-webhook-unified.sh"
