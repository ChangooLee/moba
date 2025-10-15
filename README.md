# MOBA (Make Ocean Blue Again) 🌊

> 해양 환경 보호를 위한 반응형 다국어 웹사이트

## 📖 프로젝트 개요

MOBA는 해양을 다시 깨끗하고 푸르게 만들기 위한 환경 보호 프로젝트의 공식 웹사이트입니다.

### 주요 특징
- 🌐 **다국어 지원**: 한국어, 영어, 중국어, 일본어
- 📱 **반응형 디자인**: 모바일, 태블릿, 데스크톱 최적화
- ⚡ **빠른 로딩**: Vite + React 기반의 최적화된 정적 사이트
- 🐳 **컨테이너화**: Docker를 통한 일관된 배포 환경
- 🎨 **브랜드 일관성**: PADI AWARE 디자인 가이드라인 적용
## 🛠 기술 스택

| 기술 | 버전 | 용도 |
|------|------|------|
| **React** | ^18.0.0 | UI 컴포넌트 및 상태 관리 |
| **Vite** | ^5.0.0 | 번들러 및 개발 서버 (HMR 지원) |
| **Tailwind CSS** | ^3.0.0 | 유틸리티-퍼스트 CSS 프레임워크 |
| **i18next** | ^23.0.0 | 국제화(i18n) 라이브러리 |
| **react-i18next** | ^13.0.0 | React용 i18next 바인딩 |
| **Docker** | ^24.0.0 | 컨테이너화 및 배포 |
| **Node.js** | ^18.0.0 | 개발 환경 및 빌드 도구 |

### 추가 라이브러리 (선택사항)
- **Chart.js**: 데이터 시각화 (통계, 그래프)
- **React Router**: 클라이언트 사이드 라우팅
- **Framer Motion**: 애니메이션 효과
## 📁 프로젝트 구조

```
moba-project/
├── src/
│   ├── components/           # 재사용 가능한 React 컴포넌트
│   │   ├── common/          # 공통 컴포넌트 (Header, Footer, Button 등)
│   │   ├── ui/              # UI 컴포넌트 (Card, Modal, Form 등)
│   │   └── layout/          # 레이아웃 컴포넌트 (Layout, Container 등)
│   ├── pages/               # 페이지 컴포넌트
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Plan.jsx
│   │   ├── Membership.jsx
│   │   ├── Schedule.jsx
│   │   └── Contact.jsx
│   ├── locales/             # 다국어 번역 파일
│   │   ├── ko/
│   │   │   ├── common.json
│   │   │   ├── pages.json
│   │   │   └── index.js
│   │   ├── en/
│   │   ├── zh/
│   │   └── ja/
│   ├── assets/              # 정적 자산
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   ├── styles/              # 글로벌 스타일
│   │   ├── globals.css
│   │   └── tailwind.css
│   ├── hooks/               # 커스텀 훅
│   ├── utils/               # 유틸리티 함수
│   ├── i18n.js              # i18n 설정
│   ├── App.jsx              # 루트 컴포넌트
│   └── main.jsx             # 진입점
├── public/                  # 정적 파일
│   ├── favicon.ico
│   ├── logo.png
│   └── manifest.json
├── .env.example             # 환경변수 예시
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

### 폴더별 설명

- **`components/`**: 재사용 가능한 React 컴포넌트를 기능별로 분류
- **`pages/`**: 각 라우트에 해당하는 페이지 컴포넌트
- **`locales/`**: 언어별 번역 파일 (JSON 형식)
- **`assets/`**: 이미지, 아이콘, 폰트 등 정적 자산
- **`hooks/`**: 커스텀 React 훅 (useLanguage, useTheme 등)
- **`utils/`**: 공통 유틸리티 함수
## 🧭 네비게이션 구조

### 메인 메뉴
```
├── 홈 (Home)                    # /
├── 소개 (About)                 # /about
│   ├── 프로젝트 개요
│   └── 팀 소개
├── 사업계획 (Plan)              # /plan
│   ├── 추진 배경
│   └── 단계별 계획
├── 멤버십 (Membership)          # /membership
│   ├── 가입 안내
│   └── 회원 혜택
├── 일정 (Schedule)              # /schedule
│   ├── 주요 행사
│   └── 프로젝트 타임라인
└── 문의 (Contact)               # /contact
    ├── 연락처
    └── 후원/협력 제안
```

### 라우팅 설정 예시
```javascript
// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};
```
## 🌐 다국어 지원 (i18n)

### 지원 언어
- 🇰🇷 한국어 (ko)
- 🇺🇸 영어 (en) 
- 🇨🇳 중국어 (zh)
- 🇯🇵 일본어 (ja)

### 설정 방법

#### 1. i18n 초기화
```javascript
// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 번역 리소스 import
import ko from './locales/ko';
import en from './locales/en';
import zh from './locales/zh';
import ja from './locales/ja';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
  resources: {
      ko: { translation: ko },
      en: { translation: en },
      zh: { translation: zh },
      ja: { translation: ja }
    },
    lng: 'ko',                    // 기본 언어
    fallbackLng: 'en',            // 폴백 언어
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
```

#### 2. 번역 파일 구조
```json
// src/locales/ko/common.json
{
  "nav": {
    "home": "홈",
    "about": "소개",
    "plan": "사업계획",
    "membership": "멤버십",
    "schedule": "일정",
    "contact": "문의"
  },
  "buttons": {
    "join": "가입하기",
    "learnMore": "더 알아보기",
    "contact": "문의하기"
  }
}
```

#### 3. 컴포넌트에서 사용
```javascript
// src/components/Header.jsx
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav>
      <h1>{t('nav.home')}</h1>
      <button onClick={() => changeLanguage('ko')}>한국어</button>
      <button onClick={() => changeLanguage('en')}>English</button>
    </nav>
  );
};
```

### 언어 전환 컴포넌트
```javascript
// src/components/LanguageSelector.jsx
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' }
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  return (
    <select 
      value={i18n.language} 
      onChange={(e) => i18n.changeLanguage(e.target.value)}
    >
      {languages.map(lang => (
        <option key={lang.code} value={lang.code}>
          {lang.flag} {lang.name}
        </option>
      ))}
    </select>
  );
};
```
## 🎨 디자인 가이드

### 색상 팔레트
```css
/* PADI AWARE 브랜드 컬러 기반 */
:root {
  /* Primary Colors */
  --padi-blue: #0070D3;        /* 메인 브랜드 컬러 */
  --padi-red: #F23D4E;         /* 강조 컬러 (CTA 버튼 등) */
  --white: #FFFFFF;            /* 배경색 */
  
  /* Neutral Colors */
  --gray-50: #F9FAFB;
  --gray-100: #F3F4F6;
  --gray-200: #E5E7EB;
  --gray-300: #D1D5DB;
  --gray-400: #9CA3AF;
  --gray-500: #6B7280;
  --gray-600: #4B5563;
  --gray-700: #374151;
  --gray-800: #1F2937;
  --gray-900: #111827;
  
  /* Semantic Colors */
  --success: #10B981;
  --warning: #F59E0B;
  --error: #EF4444;
  --info: #3B82F6;
}
```

### 타이포그래피
```css
/* Noto Sans 폰트 패밀리 */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&display=swap');

:root {
  --font-family: 'Noto Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  
  /* 폰트 크기 */
  --text-xs: 0.75rem;      /* 12px */
  --text-sm: 0.875rem;     /* 14px */
  --text-base: 1rem;       /* 16px */
  --text-lg: 1.125rem;     /* 18px */
  --text-xl: 1.25rem;      /* 20px */
  --text-2xl: 1.5rem;      /* 24px */
  --text-3xl: 1.875rem;    /* 30px */
  --text-4xl: 2.25rem;     /* 36px */
  --text-5xl: 3rem;        /* 48px */
  
  /* 폰트 두께 */
  --font-light: 300;
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
}
```

### Tailwind CSS 커스터마이징
```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'padi-blue': '#0070D3',
        'padi-red': '#F23D4E',
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
}
```

### 컴포넌트 스타일 예시
```javascript
// src/components/Button.jsx
const Button = ({ variant = 'primary', size = 'md', children, ...props }) => {
  const baseClasses = 'font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-padi-blue text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    danger: 'bg-padi-red text-white hover:bg-red-700 focus:ring-red-500',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {children}
    </button>
  );
};
```

### 반응형 디자인 브레이크포인트
```css
/* Tailwind CSS 기본 브레이크포인트 */
sm: 640px   /* 모바일 가로 */
md: 768px   /* 태블릿 */
lg: 1024px  /* 데스크톱 */
xl: 1280px  /* 대형 데스크톱 */
2xl: 1536px /* 초대형 화면 */
```

### 접근성 가이드라인
- **색상 대비**: WCAG AA 기준 (4.5:1 이상)
- **키보드 네비게이션**: Tab, Enter, Space 키 지원
- **스크린 리더**: 적절한 ARIA 라벨 및 시맨틱 HTML 사용
- **포커스 표시**: 명확한 포커스 인디케이터 제공
## 🚀 시작하기

### 사전 요구사항
- **Node.js**: 18.0.0 이상 (LTS 버전 권장)
- **npm**: 9.0.0 이상
- **Docker**: 24.0.0 이상 (선택사항)

### 로컬 개발 환경 설정

#### 1. 프로젝트 클론 및 설치
```bash
# 저장소 클론
git clone https://github.com/your-org/moba.git
cd moba

# 의존성 설치
npm install
```

#### 2. 환경 변수 설정
```bash
# .env.example을 .env로 복사
cp .env.example .env

# 필요한 환경 변수 설정
VITE_APP_TITLE=MOBA
VITE_APP_DESCRIPTION=Make Ocean Blue Again
```

#### 3. 개발 서버 실행
```bash
# 개발 서버 시작 (HMR 지원)
npm run dev

# 브라우저에서 http://localhost:5173 접속
```

### 사용 가능한 스크립트

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 실행 (HMR) |
| `npm run build` | 프로덕션 빌드 |
| `npm run preview` | 빌드 결과 미리보기 |
| `npm run lint` | ESLint 검사 |
| `npm run lint:fix` | ESLint 자동 수정 |
| `npm run format` | Prettier 포맷팅 |
| `npm run type-check` | TypeScript 타입 검사 |

### Docker를 사용한 실행

#### 1. Docker 이미지 빌드
```bash
# 프로덕션 이미지 빌드
docker build -t moba-web .

# 개발 이미지 빌드 (선택사항)
docker build -f Dockerfile.dev -t moba-web:dev .
```

#### 2. 컨테이너 실행
```bash
# 프로덕션 모드 실행
docker run -d -p 8080:80 --name moba-web moba-web

# 개발 모드 실행 (볼륨 마운트)
docker run -d -p 5173:5173 -v $(pwd):/app --name moba-web-dev moba-web:dev
```

#### 3. Docker Compose 사용
```yaml
# docker-compose.yml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "8080:80"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

```bash
# Docker Compose로 실행
docker-compose up -d

# 로그 확인
docker-compose logs -f web
```

### Dockerfile 예시
```dockerfile
# 멀티스테이지 빌드
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

# 프로덕션 이미지
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### 배포 가이드

#### 1. 정적 호스팅 (Vercel, Netlify)
```bash
# 빌드
npm run build

# dist/ 폴더를 호스팅 서비스에 업로드
```

#### 2. Docker 배포
```bash
# 이미지 태그 지정
docker tag moba-web:latest your-registry/moba-web:v1.0.0

# 레지스트리에 푸시
docker push your-registry/moba-web:v1.0.0

# 서버에서 실행
docker pull your-registry/moba-web:v1.0.0
docker run -d -p 80:80 your-registry/moba-web:v1.0.0
```
## 🤝 기여 가이드

### 개발 워크플로우

#### 1. 저장소 포크 및 클론
```bash
# 1. GitHub에서 저장소 포크
# 2. 로컬에 클론
git clone https://github.com/your-username/moba.git
cd moba

# 3. 원본 저장소를 upstream으로 추가
git remote add upstream https://github.com/original-org/moba.git
```

#### 2. 브랜치 전략
```bash
# 메인 브랜치에서 최신 상태로 업데이트
git checkout main
git pull upstream main

# 새로운 기능 브랜치 생성
git checkout -b feature/add-membership-section
git checkout -b fix/header-responsive-issue
git checkout -b docs/update-readme
```

#### 3. 커밋 컨벤션
```bash
# 커밋 메시지 형식
<type>(<scope>): <description>

# 예시
feat(membership): add membership benefits section
fix(header): resolve mobile navigation issue
docs(readme): update installation instructions
style(button): improve button hover effects
refactor(i18n): optimize translation loading
test(components): add unit tests for Button component
```

### 코드 품질 관리

#### 1. 린팅 및 포맷팅
```bash
# 코드 스타일 검사
npm run lint

# 자동 수정
npm run lint:fix

# 코드 포맷팅
npm run format

# 타입 검사 (TypeScript 사용 시)
npm run type-check
```

#### 2. ESLint 설정 예시
```javascript
// .eslintrc.js
module.exports = {
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'prefer-const': 'error'
  }
};
```

#### 3. Prettier 설정
```javascript
// .prettierrc
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```

### 개발 팁

#### 1. 다국어 테스트
```bash
# 모든 언어로 번역 테스트
npm run dev

# 브라우저에서 언어 전환 테스트
# - 한국어 → 영어 → 중국어 → 일본어
# - 각 언어별 레이아웃 깨짐 확인
# - 번역 누락 확인
```

#### 2. 반응형 디자인 테스트
```bash
# Chrome DevTools 디바이스 모드에서 테스트
# - 모바일: 375px, 414px
# - 태블릿: 768px, 1024px  
# - 데스크톱: 1280px, 1920px
```

#### 3. 성능 최적화 체크리스트
- [ ] 이미지 최적화 (WebP 형식 사용)
- [ ] 번들 크기 확인 (`npm run build` 후 dist/ 폴더 크기)
- [ ] 불필요한 라이브러리 제거
- [ ] Tailwind CSS Purge 설정 확인
- [ ] Lighthouse 점수 확인

### Pull Request 가이드라인

#### 1. PR 템플릿
```markdown
## 변경 사항
- [ ] 새로운 기능 추가
- [ ] 버그 수정
- [ ] 문서 업데이트
- [ ] 스타일 변경
- [ ] 리팩토링

## 설명
변경 사항에 대한 자세한 설명을 작성해주세요.

## 테스트
- [ ] 로컬에서 테스트 완료
- [ ] 모든 언어에서 테스트 완료
- [ ] 반응형 디자인 테스트 완료

## 스크린샷 (UI 변경 시)
변경 전/후 스크린샷을 첨부해주세요.
```

#### 2. 리뷰 체크리스트
- [ ] 코드 스타일 일관성
- [ ] 하드코딩된 문자열 없음 (i18n 적용)
- [ ] 접근성 고려사항
- [ ] 성능 영향 최소화
- [ ] 문서 업데이트 필요성

### 이슈 관리

#### 1. 버그 리포트
```markdown
## 버그 설명
간단명료한 버그 설명

## 재현 단계
1. 
2. 
3. 

## 예상 결과
어떤 결과를 기대했는지

## 실제 결과
실제로 발생한 결과

## 환경 정보
- OS: 
- 브라우저: 
- Node.js 버전: 
```

#### 2. 기능 제안
```markdown
## 기능 설명
제안하는 기능에 대한 설명

## 사용 사례
이 기능이 왜 필요한지

## 구현 방안
구현 방법에 대한 아이디어

## 대안
다른 해결 방법이 있다면
```

### 테스트 가이드

#### 1. 수동 테스트 체크리스트
- [ ] 모든 페이지 정상 로드
- [ ] 네비게이션 동작 확인
- [ ] 언어 전환 기능 확인
- [ ] 반응형 디자인 확인
- [ ] 접근성 테스트 (키보드 네비게이션)
- [ ] 성능 테스트 (Lighthouse)

#### 2. 자동화 테스트 (선택사항)
```bash
# E2E 테스트 (Cypress)
npm run test:e2e

# 단위 테스트 (Jest)
npm run test

# 시각적 회귀 테스트 (Storybook)
npm run storybook
```

### 문서화

#### 1. 코드 주석
```javascript
/**
 * 다국어 지원 버튼 컴포넌트
 * @param {Object} props - 컴포넌트 props
 * @param {string} props.variant - 버튼 스타일 ('primary' | 'secondary' | 'danger')
 * @param {string} props.size - 버튼 크기 ('sm' | 'md' | 'lg')
 * @param {Function} props.onClick - 클릭 이벤트 핸들러
 * @param {React.ReactNode} props.children - 버튼 내용
 */
const Button = ({ variant = 'primary', size = 'md', onClick, children }) => {
  // 컴포넌트 구현
};
```

#### 2. README 업데이트
- 새로운 기능 추가 시 사용법 문서화
- API 변경 시 예시 코드 업데이트
- 설치/실행 방법 변경 시 가이드 업데이트

---

## 📞 문의 및 지원

- **이슈 리포트**: [GitHub Issues](https://github.com/your-org/moba/issues)
- **기능 제안**: [GitHub Discussions](https://github.com/your-org/moba/discussions)
- **문서**: [프로젝트 위키](https://github.com/your-org/moba/wiki)

---

**MOBA 프로젝트에 기여해주셔서 감사합니다! 🌊 함께 깨끗한 바다를 만들어가요! 🚀**
