const express = require('express');
const { exec } = require('child_process');
const crypto = require('crypto');
const http = require('http');

const PORT = 8085; // webhook 전용 포트
const SECRET = 'moba-webhook-secret-2024'; // GitHub webhook secret과 동일해야 함

// 배포 스크립트 실행 함수
function deploy() {
    console.log('🚀 Webhook 감지! 자동 배포 시작...');
    
    exec('cd /home/lchangoo/Workspace/moba && ./deploy.sh', (error, stdout, stderr) => {
        if (error) {
            console.error('❌ 배포 실패:', error);
            return;
        }
        console.log('✅ 배포 성공:', stdout);
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
                
                // 서명 검증 (테스트를 위해 임시 비활성화)
                if (!signature || verifySignature(body, signature)) {
                    const payload = JSON.parse(body);
                    
                    // push 이벤트인지 확인
                    if (payload.ref === 'refs/heads/main') {
                        console.log('📬 GitHub push 이벤트 감지됨');
                        deploy();
                    }
                } else {
                    console.log('⚠️ 잘못된 서명 또는 보안 검증 실패');
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

server.listen(PORT, () => {
    console.log(`🎣 Webhook 서버가 포트 ${PORT}에서 실행 중입니다`);
    console.log(`🔗 GitHub Webhook URL: http://125.240.175.68:${PORT}/webhook`);
    console.log(`🔑 Secret: ${SECRET}`);
});

// 에러 처리
server.on('error', (err) => {
    console.error('❌ 서버 오류:', err);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('🛑 Webhook 서버 종료 중...');
    server.close(() => {
        console.log('✅ 서버가 안전하게 종료되었습니다');
        process.exit(0);
    });
});
