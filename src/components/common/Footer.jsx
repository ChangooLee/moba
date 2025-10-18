import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    const quickLinks = [
        { name: t('common.nav.about'), href: '/about' },
        { name: t('common.nav.plan'), href: '/plan' },
        { name: t('common.nav.membership'), href: '/membership' },
        { name: t('common.nav.schedule'), href: '/schedule' },
        { name: t('common.nav.contact'), href: '/contact' },
    ];

    const socialLinks = [
        { name: 'Facebook', href: '#', icon: '📘' },
        { name: 'Twitter', href: '#', icon: '🐦' },
        { name: 'Instagram', href: '#', icon: '📷' },
        { name: 'YouTube', href: '#', icon: '📺' },
    ];

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container-custom">
                <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* 브랜드 정보 */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-padi-blue rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-lg">M</span>
                            </div>
                            <span className="text-xl font-bold">MOBA</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {t('common.footer.description')}
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="text-gray-400 hover:text-padi-blue transition-colors duration-200"
                                    aria-label={social.name}
                                >
                                    <span className="text-xl">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* 빠른 링크 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t('common.footer.quickLinks')}</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="text-gray-300 hover:text-padi-blue transition-colors duration-200 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 연락처 정보 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t('common.footer.contactInfo')}</h3>
                        <div className="space-y-2 text-sm text-gray-300">
                            <p>📧 make.ocean.blue.again.project@gmail.com</p>
                            <p>📞 010-7586-9029</p>
                            <p>🌐 www.moba-project.org</p>
                        </div>
                    </div>

                    {/* 뉴스레터 구독 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t('common.footer.newsletter')}</h3>
                        <p className="text-gray-300 text-sm mb-4">
                            {t('common.footer.newsletterDescription')}
                        </p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder={t('common.footer.newsletterPlaceholder')}
                                className="flex-1 px-3 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-padi-blue focus:border-padi-blue"
                            />
                            <button className="px-4 py-2 bg-padi-blue text-white text-sm font-medium rounded-r-md hover:bg-padi-dark-blue transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-padi-blue focus:ring-offset-2">
                                {t('common.footer.newsletterButton')}
                            </button>
                        </div>
                    </div>
                </div>

                {/* 하단 정보 */}
                <div className="border-t border-gray-800 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm">
                            {t('common.footer.copyright')}
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-padi-blue transition-colors duration-200"
                            >
                                {t('common.footer.privacy')}
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-padi-blue transition-colors duration-200"
                            >
                                {t('common.footer.terms')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

