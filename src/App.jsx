import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Impact from './pages/Impact';
import Join from './pages/Join';
import JoinBusiness from './pages/JoinBusiness';
import News from './pages/News';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import './i18n';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/how-it-works" element={<HowItWorks />} />
                    <Route path="/impact" element={<Impact />} />
                    <Route path="/join" element={<Join />} />
                    <Route path="/join/business" element={<JoinBusiness />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />

                    {/* 구 라우트 → 신 라우트 리다이렉트 (링크 보존) */}
                    <Route path="/plan" element={<Navigate to="/how-it-works" replace />} />
                    <Route path="/membership" element={<Navigate to="/join" replace />} />
                    <Route path="/schedule" element={<Navigate to="/news" replace />} />

                    {/* 알 수 없는 경로 → 홈 */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
