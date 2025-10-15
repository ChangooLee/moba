# MOBA 웹사이트 빠른 시작 가이드

## 🚀 로컬 개발 환경 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 `http://localhost:5173`으로 접속하세요.

### 3. 빌드 및 미리보기
```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 🐳 Docker로 실행

### 1. Docker 이미지 빌드
```bash
docker build -t moba-web .
```

### 2. 컨테이너 실행
```bash
docker run -d -p 8080:80 --name moba-web moba-web
```

브라우저에서 `http://localhost:8080`으로 접속하세요.

### 3. Docker Compose 사용
```bash
# 프로덕션 모드
docker-compose up -d

# 개발 모드
docker-compose --profile dev up -d
```

## 📁 프로젝트 구조

```
moba/
├── src/
│   ├── components/     # React 컴포넌트
│   ├── pages/         # 페이지 컴포넌트
│   ├── locales/       # 다국어 번역 파일
│   ├── styles/        # CSS 스타일
│   └── App.jsx        # 메인 앱
├── public/            # 정적 파일
├── Dockerfile         # Docker 설정
└── package.json       # 프로젝트 설정
```

## 🌐 지원 언어

- 🇰🇷 한국어 (기본)
- 🇺🇸 영어
- 🇨🇳 중국어
- 🇯🇵 일본어

## 🎨 주요 기능

- ✅ 반응형 디자인
- ✅ 다국어 지원
- ✅ PADI AWARE 디자인 가이드라인
- ✅ SEO 최적화
- ✅ 접근성 고려
- ✅ Docker 컨테이너화

## 📞 문의

문제가 있으시면 이슈를 등록해주세요.

