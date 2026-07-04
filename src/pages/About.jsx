import React from 'react';
import { useTranslation } from 'react-i18next';
import { Reveal, Eyebrow, Icon, PageHero, CtaBand } from '../components/ui/primitives';

const VALUE_ICONS = {
    sustainability: 'leaf',
    collaboration: 'link',
    innovation: 'bulb',
    transparency: 'shield',
};

const About = () => {
    const { t, ready } = useTranslation();

    if (!ready) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-ink">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-aqua" />
            </div>
        );
    }

    const obj = (key, fb = []) => {
        const v = t(key, { returnObjects: true });
        return v && typeof v === 'object' ? v : fb;
    };

    const valueKeys = ['sustainability', 'collaboration', 'innovation', 'transparency'];
    const vizItems = obj('pages.about.visualization.process.items', []);

    return (
        <div className="overflow-x-hidden">
            <PageHero
                eyebrow="ABOUT MOBA"
                title={t('pages.about.title')}
                subtitle={t('pages.about.description')}
            />

            {/* 미션 · 비전 */}
            <section className="section-padding bg-white">
                <div className="container-custom grid md:grid-cols-2 gap-6">
                    {[
                        { key: 'mission', icon: 'target' },
                        { key: 'vision', icon: 'eye' },
                    ].map((item, i) => (
                        <Reveal key={item.key} delay={i * 100}>
                            <div className="h-full rounded-2xl border border-mist-deep bg-mist/50 p-8 md:p-10">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-aqua-light">
                                    <Icon name={item.icon} className="w-6 h-6" />
                                </div>
                                <h2 className="mt-6 font-heading font-extrabold text-2xl md:text-3xl text-navy">
                                    {t(`pages.about.${item.key}.title`)}
                                </h2>
                                <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                                    {t(`pages.about.${item.key}.description`)}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* 핵심 가치 */}
            <section className="section-padding bg-mist">
                <div className="container-custom">
                    <Reveal className="max-w-3xl">
                        <Eyebrow>CORE VALUES</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl text-navy leading-tight">
                            {t('pages.about.values.title')}
                        </h2>
                        <p className="mt-5 text-gray-600 text-lg">{t('pages.about.values.subtitle')}</p>
                    </Reveal>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {valueKeys.map((key, i) => (
                            <Reveal key={key} delay={i * 80}>
                                <div className="h-full rounded-2xl bg-white border border-mist-deep p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-aqua-50 text-aqua-dark">
                                        <Icon name={VALUE_ICONS[key]} className="w-6 h-6" />
                                    </div>
                                    <h3 className="mt-5 font-heading font-bold text-lg text-navy">
                                        {t(`pages.about.values.${key}.title`)}
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                                        {t(`pages.about.values.${key}.description`)}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 성과 시각화 프로세스 */}
            <section className="section-padding bg-ocean-deep text-white">
                <div className="container-custom">
                    <Reveal className="max-w-3xl">
                        <Eyebrow light>IMPACT VISUALIZATION</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl leading-tight">
                            {t('pages.about.visualization.title')}
                        </h2>
                        <p className="mt-5 text-sky-100/75 text-lg">{t('pages.about.visualization.subtitle')}</p>
                        <p className="mt-3 text-sky-100/60">{t('pages.about.visualization.description')}</p>
                    </Reveal>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {vizItems.map((item, i) => (
                            <Reveal key={i} delay={i * 90}>
                                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm">
                                    <div className="stat-number text-4xl text-aqua-light">{String(i + 1).padStart(2, '0')}</div>
                                    <h3 className="mt-4 font-heading font-bold text-lg">{item.title}</h3>
                                    <p className="mt-2 text-sm text-sky-100/70 leading-relaxed">{item.description}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <CtaBand
                eyebrow="JOIN MOBA"
                title={t('pages.about.cta.title')}
                subtitle={t('pages.about.cta.description')}
                primary={{ to: '/membership', label: t('common.buttons.join') }}
                secondary={{ to: '/contact', label: t('common.buttons.contact') }}
            />
        </div>
    );
};

export default About;
