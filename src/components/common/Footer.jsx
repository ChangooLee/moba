import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    const quickLinks = [
        { name: t('common.nav.about'), href: '/about' },
        { name: t('common.nav.howItWorks'), href: '/how-it-works' },
        { name: t('common.nav.impact'), href: '/impact' },
        { name: t('common.nav.join'), href: '/join' },
        { name: t('common.nav.news'), href: '/news' },
        { name: t('common.nav.contact'), href: '/contact' },
    ];

    return (
        <footer className="bg-navy-950 text-white">
            <div className="container-custom">
                <div className="py-14 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* 브랜드 */}
                    <div className="space-y-4 lg:col-span-1">
                        <img
                            src="/images/logo-256-transparent.png?v=20241022"
                            alt="MOBA"
                            className="h-10 w-auto object-contain [filter:brightness(0)_invert(1)]"
                        />
                        <p className="font-heading font-extrabold text-2xl text-aqua-light">바다를 다시 푸르게.</p>
                        <p className="text-sky-100/60 text-sm leading-relaxed">
                            {t('common.footer.description')}
                        </p>
                    </div>

                    {/* 빠른 링크 */}
                    <div>
                        <h3 className="text-xs font-heading font-semibold tracking-eyebrow text-aqua-light uppercase mb-4">
                            {t('common.footer.quickLinks')}
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="text-sky-100/70 hover:text-aqua-light transition-colors duration-200 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 연락처 */}
                    <div>
                        <h3 className="text-xs font-heading font-semibold tracking-eyebrow text-aqua-light uppercase mb-4">
                            {t('common.footer.contactInfo')}
                        </h3>
                        <div className="space-y-3 text-sm text-sky-100/70">
                            <p><a href="mailto:make.ocean.blue.again.project@gmail.com" className="hover:text-aqua-light transition-colors break-all">make.ocean.blue.again.project@gmail.com</a></p>
                            <p><a href="tel:01075869029" className="hover:text-aqua-light transition-colors">010-7586-9029</a></p>
                            <p>www.moba-project.org</p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="rounded-2xl bg-white/[0.05] border border-white/10 p-6">
                        <p className="font-heading font-bold text-white">시범 기업 2곳 선착순 모집 중</p>
                        <p className="mt-2 text-sm text-sky-100/60 leading-relaxed">
                            60분 킥오프 미팅으로 시작합니다.
                        </p>
                        <Link
                            to="/contact"
                            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-aqua px-6 py-3 text-sm font-heading font-bold text-ink transition-all hover:bg-aqua-light w-full"
                        >
                            {t('common.buttons.contact')} <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>

                {/* 하단 바 */}
                <div className="border-t border-white/10 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sky-100/50 text-sm">
                            © 2026 MOBA · Make Ocean Blue Again. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6 text-sm text-sky-100/60">
                            <span>PADI AWARE Foundation · Dive Against Debris®</span>
                            <Link to="/privacy-policy" className="hover:text-aqua-light transition-colors">
                                {t('common.footer.privacy')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
