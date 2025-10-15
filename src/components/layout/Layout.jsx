import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

/**
 * 페이지 레이아웃 컴포넌트
 * @param {Object} props - 컴포넌트 props
 * @param {React.ReactNode} props.children - 페이지 내용
 * @param {boolean} props.fullHeight - 전체 높이 사용 여부
 */
const Layout = ({ children, fullHeight = false }) => {
    return (
        <div className={`min-h-screen flex flex-col ${fullHeight ? 'h-screen' : ''}`}>
            <Header />
            <main className={`flex-1 ${fullHeight ? 'overflow-hidden' : ''}`}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;


