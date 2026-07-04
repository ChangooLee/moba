import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const Header = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const navigation = [
        { name: t('common.nav.home'), href: '/' },
        { name: t('common.nav.about'), href: '/about' },
        { name: t('common.nav.plan'), href: '/plan' },
        { name: t('common.nav.membership'), href: '/membership' },
        { name: t('common.nav.schedule'), href: '/schedule' },
        { name: t('common.nav.contact'), href: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className={`sticky top-0 z-50 transition-shadow duration-200 bg-white/90 backdrop-blur-md border-b ${scrolled ? 'shadow-card border-mist-deep' : 'border-transparent'}`}>
            <div className="container-custom">
                <div className="flex justify-between items-center h-16">
                    {/* 로고 */}
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src="/images/logo-64-transparent.png?v=20241022"
                            alt="MOBA Logo"
                            className="w-9 h-9 object-contain"
                        />
                        <span className="font-heading font-extrabold text-lg text-navy tracking-tight">MOBA</span>
                    </Link>

                    {/* 데스크톱 네비게이션 */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive(item.href)
                                    ? 'text-aqua-dark'
                                    : 'text-gray-600 hover:text-navy'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* 우측: 언어 + CTA + 모바일 토글 */}
                    <div className="flex items-center gap-3">
                        <LanguageSelector />
                        <Link
                            to="/contact"
                            className="hidden md:inline-flex items-center rounded-full bg-navy px-5 py-2 text-sm font-heading font-bold text-white transition-colors hover:bg-navy-700"
                        >
                            {t('common.buttons.contact')}
                        </Link>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-md text-navy hover:bg-mist"
                            aria-label={t('common.ariaLabels.menuToggle')}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* 모바일 메뉴 */}
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-mist rounded-lg mt-2 mb-3">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${isActive(item.href)
                                        ? 'text-aqua-dark bg-white'
                                        : 'text-gray-700 hover:text-navy hover:bg-white'
                                        }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block mt-2 rounded-full bg-navy px-4 py-2.5 text-center text-sm font-heading font-bold text-white"
                            >
                                {t('common.buttons.contact')}
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
