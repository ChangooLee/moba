const express = require('express');
const { exec } = require('child_process');
const crypto = require('crypto');
const http = require('http');

const PORT = 8085; // 8085 포트 전용
const SECRET = 'moba-dev-webhook-secret-2024'; // develop 브랜치용 secret

// develop 브랜치 배포 함수
function deployDev() {
    console.log('⚡ Develop Webhook 감지! 초고속 배포 시작...');
    
    exec('cd /home/lchangoo/Workspace/moba && ./deploy-dev.sh', 
         { timeout: 60000 }, // 1분 타임아웃
         (error, stdout, stderr) => {
        if (error) {
            console.error('❌ Develop 배포 실패:', error.message);
            console.error('❌ 오류 코드:', error.code);
            console.error('❌ 표준 출력:', stdout);
            console.error('❌ 표준 오류:', stderr);
            return;
        }
        console.log('✅ Develop 배포 성공!');
        console.log('📋 표준 출력:', stdout);
        if (stderr) console.log('⚠️ 경고:', stderr);
    });
}

// HMAC 서명 검증 함수
function verifySignature(payload, signature) {
    const expectedSignature = 'sha256=' + 
        crypto.createHmac('sha256', SECRET)
              .update(payload)
              .digest('hex');
    
    return crypto.timingSafeEqual(
        Buffer.from(signature),
        Buffer.from(expectedSignature)
    );
}

// HTTP 서버 생성
const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/webhook') {
        let body = '';
        
        req.on('data', chunk => {
            body += chunk.toString();
        });
        
        req.on('end', () => {
            try {
                const signature = req.headers['x-hub-signature-256'];
                const payload = JSON.parse(body);
                const ref = payload.ref;
                
                // develop 브랜치만 처리
                if (ref === 'refs/heads/develop') {
                    if (!signature || verifySignature(body, signature)) {
                        console.log('📬 GitHub develop push 이벤트 감지됨');
                        deployDev();
                    } else {
                        console.log('⚠️ develop 브랜치 서명 검증 실패');
                    }
                } else {
                    console.log('⚠️ develop 브랜치가 아닌 push 이벤트 무시:', ref);
                }
                
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ status: 'success' }));
                
            } catch (error) {
                console.error('❌ Webhook 처리 오류:', error);
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Bad Request' }));
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
});

// 서버 시작
server.listen(PORT, () => {
    console.log('🎯 Develop Webhook 서버가 포트', PORT, '에서 실행 중입니다');
    console.log('🔗 GitHub Webhook URL: http://125.240.175.68:' + PORT + '/webhook');
    console.log('🔑 Secret:', SECRET);
    console.log('');
    console.log('💡 GitHub 저장소에서 develop 브랜치 webhook 설정:');
    console.log('   - Payload URL: http://125.240.175.68:' + PORT + '/webhook');
    console.log('   - Secret:', SECRET);
    console.log('   - Events: Just the push event');
    console.log('   - Branch: develop');
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('🛑 Develop Webhook 서버 종료 중...');
    server.close(() => {
        console.log('✅ 서버가 안전하게 종료되었습니다');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('🛑 Develop Webhook 서버 종료 중...');
    server.close(() => {
        console.log('✅ 서버가 안전하게 종료되었습니다');
        process.exit(0);
    });
});
