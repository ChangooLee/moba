import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const Header = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container-custom">
                <div className="flex justify-between items-center h-16">
                    {/* 로고 */}
                    <Link to="/" className="flex items-center space-x-3">
                        <img 
                            src="/images/logo-64-transparent.png" 
                            alt="MOBA Logo" 
                            className="w-10 h-10 object-contain"
                        />
                        <div className="flex flex-col">
                            <span className="text-lg font-bold text-gray-900 font-heading">Make Ocean Blue Again</span>
                        </div>
                    </Link>

                    {/* 데스크톱 네비게이션 */}
                    <nav className="hidden md:flex space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive(item.href)
                                    ? 'text-padi-blue bg-padi-light-blue'
                                    : 'text-gray-700 hover:text-padi-blue hover:bg-gray-50'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* 언어 선택기 및 모바일 메뉴 버튼 */}
                    <div className="flex items-center space-x-4">
                        <LanguageSelector />

                        {/* 모바일 메뉴 버튼 */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-md text-gray-700 hover:text-padi-blue hover:bg-gray-50"
                            aria-label={t('common.ariaLabels.menuToggle')}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* 모바일 메뉴 */}
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${isActive(item.href)
                                        ? 'text-padi-blue bg-padi-light-blue'
                                        : 'text-gray-700 hover:text-padi-blue hover:bg-white'
                                        }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;

