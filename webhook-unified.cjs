const express = require('express');
const { exec } = require('child_process');
const crypto = require('crypto');
const http = require('http');

const PORT = 8084; // webhook 포트 (기존 웹 포트와 공유)
const MAIN_SECRET = 'moba-webhook-secret-2024'; // main 브랜치용 secret
const DEV_SECRET = 'moba-dev-webhook-secret-2024'; // develop 브랜치용 secret

// 프로덕션 배포 함수
function deployProd() {
    console.log('🚀 프로덕션 Webhook 감지! 자동 배포 시작...');
    
    // 빠른 배포 시도 (Volume Mount 방식)
    exec('cd /home/lchangoo/Workspace/moba && ./deploy-fast.sh', 
         { timeout: 120000 }, // 2분 타임아웃
         (error, stdout, stderr) => {
        if (error) {
            console.log('⚠️ 빠른 배포 실패, 전체 배포로 전환...');
            console.error('❌ 빠른 배포 오류:', error.message);
            
            // 빠른 배포 실패 시 전체 배포 실행
            exec('cd /home/lchangoo/Workspace/moba && git pull origin main && ./deploy.sh', 
                 { timeout: 300000 }, // 5분 타임아웃
                 (error2, stdout2, stderr2) => {
                if (error2) {
                    console.error('❌ 전체 배포도 실패:', error2.message);
                    console.error('❌ 오류 코드:', error2.code);
                    console.error('❌ 표준 출력:', stdout2);
                    console.error('❌ 표준 오류:', stderr2);
                    return;
                }
                console.log('✅ 전체 배포 성공!');
                console.log('📋 표준 출력:', stdout2);
                if (stderr2) console.log('⚠️ 경고:', stderr2);
            });
            return;
        }
        console.log('✅ 빠른 배포 성공!');
        console.log('📋 표준 출력:', stdout);
        if (stderr) console.log('⚠️ 경고:', stderr);
    });
}

// 개발 배포 함수
function deployDev() {
    console.log('⚡ 개발용 Webhook 감지! 초고속 배포 시작...');
    
    exec('cd /home/lchangoo/Workspace/moba && ./deploy-dev.sh', 
         { timeout: 60000 }, // 1분 타임아웃
         (error, stdout, stderr) => {
        if (error) {
            console.error('❌ 개발용 배포 실패:', error.message);
            console.error('❌ 오류 코드:', error.code);
            console.error('❌ 표준 출력:', stdout);
            console.error('❌ 표준 오류:', stderr);
            return;
        }
        console.log('✅ 개발용 배포 성공!');
        console.log('📋 표준 출력:', stdout);
        if (stderr) console.log('⚠️ 경고:', stderr);
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
                
                // main 브랜치 처리
                if (ref === 'refs/heads/main') {
                    if (!signature || verifySignature(body, signature, MAIN_SECRET)) {
                        console.log('📬 GitHub main push 이벤트 감지됨');
                        deployProd();
                    } else {
                        console.log('⚠️ main 브랜치 서명 검증 실패');
                    }
                }
                // develop 브랜치 처리
                else if (ref === 'refs/heads/develop') {
                    if (!signature || verifySignature(body, signature, DEV_SECRET)) {
                        console.log('📬 GitHub develop push 이벤트 감지됨');
                        deployDev();
                    } else {
                        console.log('⚠️ develop 브랜치 서명 검증 실패');
                    }
                }
                else {
                    console.log('⚠️ 알 수 없는 브랜치 push 이벤트 무시:', ref);
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
    console.log('🎯 통합 Webhook 서버가 포트', PORT, '에서 실행 중입니다');
    console.log('🔗 GitHub Webhook URL: http://125.240.175.68:' + PORT + '/webhook');
    console.log('🔑 Main Secret:', MAIN_SECRET);
    console.log('🔑 Dev Secret:', DEV_SECRET);
    console.log('');
    console.log('💡 GitHub 저장소에서 webhook 설정:');
    console.log('   - Payload URL: http://125.240.175.68:' + PORT + '/webhook');
    console.log('   - Main Secret:', MAIN_SECRET, '(main 브랜치용)');
    console.log('   - Dev Secret:', DEV_SECRET, '(develop 브랜치용)');
    console.log('   - Events: Just the push event');
    console.log('   - Branches: main, develop');
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('🛑 통합 Webhook 서버 종료 중...');
    server.close(() => {
        console.log('✅ 서버가 안전하게 종료되었습니다');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('🛑 통합 Webhook 서버 종료 중...');
    server.close(() => {
        console.log('✅ 서버가 안전하게 종료되었습니다');
        process.exit(0);
    });
});
