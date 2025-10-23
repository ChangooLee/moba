const express = require('express');
const { exec } = require('child_process');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const PORT = 8085; // webhook 포트
const DEV_SECRET = 'moba-dev-webhook-secret-2024'; // 개발용 webhook secret
const PROJECT_ROOT = '/home/lchangoo/Workspace/moba';
const DEPLOY_SCRIPT = path.join(PROJECT_ROOT, 'deploy.sh');
const LOG_FILE = path.join(PROJECT_ROOT, 'webhook-8085.log');

// 로그 파일 초기화 (서버 시작 시)
fs.writeFileSync(LOG_FILE, `🎯 Develop Webhook 서버 시작 중 (포트 ${PORT})...\n`);

// 배포 스크립트 실행 함수
function deploy() {
    console.log('⚡ Develop Webhook 감지! 자동 배포 시작...');
    fs.appendFileSync(LOG_FILE, `[${new Date().toISOString()}] ⚡ Develop Webhook 감지! 자동 배포 시작...\n`);

    exec(DEPLOY_SCRIPT,
         { cwd: PROJECT_ROOT, timeout: 120000 }, // 2분 타임아웃
         (error, stdout, stderr) => {
        if (error) {
            console.error('❌ 배포 실패:', error.message);
            console.error('❌ 오류 코드:', error.code);
            console.error('❌ 표준 출력:', stdout);
            console.error('❌ 표준 오류:', stderr);
            fs.appendFileSync(LOG_FILE, `[${new Date().toISOString()}] ❌ 배포 실패: ${error.message}\n`);
            fs.appendFileSync(LOG_FILE, `[${new Date().toISOString()}] ❌ 오류 코드: ${error.code}\n`);
            fs.appendFileSync(LOG_FILE, `[${new Date().toISOString()}] ❌ 표준 출력: ${stdout}\n`);
            fs.appendFileSync(LOG_FILE, `[${new Date().toISOString()}] ❌ 표준 오류: ${stderr}\n`);
            return;
        }
        console.log('✅ 배포 성공!');
        console.log('📋 표준 출력:', stdout);
        if (stderr) console.log('⚠️ 경고:', stderr);
        fs.appendFileSync(LOG_FILE, `[${new Date().toISOString()}] ✅ 배포 성공!\n`);
        fs.appendFileSync(LOG_FILE, `[${new Date().toISOString()}] 📋 표준 출력: ${stdout}\n`);
        if (stderr) fs.appendFileSync(LOG_FILE, `[${new Date().toISOString()}] ⚠️ 경고: ${stderr}\n`);
    });
}

// HMAC 서명 검증 함수
function verifySignature(payload, signature, secret) {
    const expectedSignature = 'sha256=' +
        crypto.createHmac('sha256', secret)
              .update(payload)
              .digest('hex');

    return crypto.timingSafeEqual(
        Buffer.from(signature),
        Buffer.from(expectedSignature)
    );
}

// Express 앱 설정
const app = express();
app.use(express.json());

// 모든 요청 로깅
app.use((req, res, next) => {
    const logEntry = `[${new Date().toISOString()}] ${req.method} ${req.url} - ${req.ip}\n`;
    fs.appendFileSync(LOG_FILE, logEntry);
    next();
});

app.post('/webhook', (req, res) => {
    const event = req.headers['x-github-event'];
    const ref = req.body.ref;
    const signature = req.headers['x-hub-signature-256'];
    const payload = JSON.stringify(req.body);

    if (event === 'push' && ref === 'refs/heads/develop') {
        console.log('📬 GitHub develop push 이벤트 감지됨');
        fs.appendFileSync(LOG_FILE, `[${new Date().toISOString()}] 📬 GitHub develop push 이벤트 감지됨\n`);
        deploy();
    } else {
        console.log('⚠️ develop 브랜치가 아닌 push 이벤트 무시 또는 비 push 이벤트 무시:', ref || event);
        fs.appendFileSync(LOG_FILE, `[${new Date().toISOString()}] ⚠️ develop 브랜치가 아닌 push 이벤트 무시 또는 비 push 이벤트 무시: ${ref || event}\n`);
    }

    res.status(200).send('Webhook received');
});

app.get('/', (req, res) => {
    res.status(200).send('MOBA Develop Webhook Server is running.');
});

app.listen(PORT, () => {
    console.log(`🎯 Develop Webhook 서버가 포트 ${PORT} 에서 실행 중입니다`);
    console.log(`🔗 GitHub Webhook URL: http://125.240.175.68:${PORT}/webhook`);
    console.log(`🔑 Secret: ${DEV_SECRET}`);
    console.log(`💡 GitHub 저장소에서 develop 브랜치 webhook 설정:`);
    console.log(`   - Payload URL: http://125.240.175.68:${PORT}/webhook`);
    console.log(`   - Secret: ${DEV_SECRET}`);
    console.log(`   - Events: Just the push event`);
    console.log(`   - Branch: develop`);
});
