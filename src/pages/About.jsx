import React from 'react';
import { useTranslation } from 'react-i18next';
import { Reveal, Eyebrow, Icon, PageHero, CtaBand } from '../components/ui/primitives';

const VALUE_ICONS = { sustainability: 'leaf', collaboration: 'link', innovation: 'bulb', transparency: 'shield' };

const About = () => {
    const { t, ready } = useTranslation();
    if (!ready) {
        return <div className="min-h-screen flex items-center justify-center bg-ink"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-aqua" /></div>;
    }
    const obj = (key, fb = []) => { const v = t(key, { returnObjects: true }); return v && typeof v === 'object' ? v : fb; };

    const valueKeys = ['sustainability', 'collaboration', 'innovation', 'transparency'];
    const vizItems = obj('pages.about.visualization.process.items', []);
    const crisis = obj('pages.home.crisis', {});
    const disclosure = obj('pages.home.disclosure', {});
    const phases = [1, 2, 3, 4].map((n) => ({
        no: n,
        title: t(`pages.plan.phases.phase${n}.title`),
        description: t(`pages.plan.phases.phase${n}.description`),
    }));

    return (
        <div className="overflow-x-hidden">
            <PageHero eyebrow="ABOUT MOBA" title={t('pages.about.title')} subtitle={t('pages.about.description')} image="/images/padi/featured/reef-diver.jpg" />

            {/* 미션 · 비전 */}
            <section className="section-padding bg-white">
                <div className="container-custom grid md:grid-cols-2 gap-6">
                    {[{ key: 'mission', icon: 'target' }, { key: 'vision', icon: 'eye' }].map((item, i) => (
                        <Reveal key={item.key} delay={i * 100}>
                            <div className="h-full rounded-2xl border border-mist-deep bg-mist/50 p-8 md:p-10">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-aqua-light">
                                    <Icon name={item.icon} className="w-6 h-6" />
                                </div>
                                <h2 className="mt-6 font-heading font-extrabold text-2xl md:text-3xl text-navy">{t(`pages.about.${item.key}.title`)}</h2>
                                <p className="mt-4 text-gray-600 text-lg leading-relaxed">{t(`pages.about.${item.key}.description`)}</p>
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
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl text-navy leading-tight">{t('pages.about.values.title')}</h2>
                        <p className="mt-5 text-gray-600 text-lg">{t('pages.about.values.subtitle')}</p>
                    </Reveal>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {valueKeys.map((key, i) => (
                            <Reveal key={key} delay={i * 80}>
                                <div className="h-full rounded-2xl bg-white border border-mist-deep p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-aqua-50 text-aqua-dark">
                                        <Icon name={VALUE_ICONS[key]} className="w-6 h-6" />
                                    </div>
                                    <h3 className="mt-5 font-heading font-bold text-lg text-navy">{t(`pages.about.values.${key}.title`)}</h3>
                                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">{t(`pages.about.values.${key}.description`)}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 왜 지금인가 */}
            <section className="section-padding bg-ink text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-gradient-to-br from-navy-600 via-transparent to-transparent" />
                <div className="container-custom relative">
                    <Reveal className="max-w-3xl">
                        <Eyebrow light>WHY NOW</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl leading-tight">{crisis.title}</h2>
                        <p className="mt-5 text-sky-100/75 text-lg leading-relaxed">{crisis.lead}</p>
                    </Reveal>
                    <div className="mt-12 grid md:grid-cols-3 gap-6">
                        {(crisis.items || []).map((c, i) => (
                            <Reveal key={i} delay={i * 100}>
                                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm">
                                    <div className="flex items-baseline gap-1 flex-wrap">
                                        <span className="stat-number text-4xl md:text-5xl text-aqua-light">{c.value}</span>
                                        <span className="font-heading font-semibold text-sm text-sky-100/60">{c.unit}</span>
                                    </div>
                                    <div className="mt-4 font-heading font-bold text-lg">{c.label}</div>
                                    <p className="mt-2 text-sm text-sky-100/70 leading-relaxed">{c.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                    {disclosure.edgeDesc && (
                        <Reveal className="mt-8 rounded-2xl bg-aqua text-ink p-7 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
                            <div className="flex items-baseline gap-2 shrink-0">
                                <span className="stat-number text-5xl md:text-6xl text-ink">{disclosure.edgeValue}</span>
                                <span className="font-heading font-bold text-xl text-ink/70">{disclosure.edgeLabel}</span>
                            </div>
                            <p className="text-ink/80 leading-relaxed">{disclosure.title} — {disclosure.edgeDesc}</p>
                        </Reveal>
                    )}
                </div>
            </section>

            {/* 성과 시각화 프로세스 */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <Reveal className="max-w-3xl">
                        <Eyebrow>IMPACT VISUALIZATION</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl text-navy leading-tight">{t('pages.about.visualization.title')}</h2>
                        <p className="mt-5 text-gray-600 text-lg">{t('pages.about.visualization.subtitle')}</p>
                        <p className="mt-3 text-gray-500">{t('pages.about.visualization.description')}</p>
                    </Reveal>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {vizItems.map((item, i) => (
                            <Reveal key={i} delay={i * 90}>
                                <div className="h-full rounded-2xl border border-mist-deep bg-mist/50 p-7">
                                    <div className="stat-number text-4xl text-aqua-dark">{String(i + 1).padStart(2, '0')}</div>
                                    <h3 className="mt-4 font-heading font-bold text-lg text-navy">{item.title}</h3>
                                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">{item.description}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 우리의 여정 (로드맵) */}
            <section className="section-padding bg-mist">
                <div className="container-custom">
                    <Reveal className="max-w-3xl">
                        <Eyebrow>OUR JOURNEY</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl text-navy leading-tight">{t('pages.plan.phases.title')}</h2>
                        <p className="mt-5 text-gray-600 text-lg">{t('pages.plan.phases.subtitle')}</p>
                    </Reveal>
                    <div className="mt-12 relative">
                        <div className="absolute left-6 top-3 bottom-3 w-px bg-navy/15 hidden md:block" aria-hidden="true" />
                        <div className="space-y-6">
                            {phases.map((p, i) => (
                                <Reveal key={p.no} delay={i * 70}>
                                    <div className="relative flex flex-col md:flex-row gap-5 md:gap-8">
                                        <div className="flex-shrink-0 relative z-10">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-aqua-light font-heading font-extrabold ring-4 ring-mist">{p.no}</div>
                                        </div>
                                        <div className="flex-1 rounded-2xl bg-white border border-mist-deep p-6 md:p-7">
                                            <h3 className="font-heading font-bold text-xl text-navy">{p.title}</h3>
                                            <p className="mt-3 text-gray-600 leading-relaxed">{p.description}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <CtaBand
                eyebrow="JOIN MOBA"
                title={t('pages.about.cta.title')}
                subtitle={t('pages.about.cta.description')}
                primary={{ to: '/join', label: t('common.buttons.getInvolved') }}
                secondary={{ to: '/how-it-works', label: t('common.buttons.viewHowItWorks') }}
            />
        </div>
    );
};

export default About;
