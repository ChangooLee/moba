import React from 'react';
import { useTranslation } from 'react-i18next';
import { Reveal, Eyebrow, Icon, PageHero, CtaBand } from '../components/ui/primitives';

const RESULT_ICONS = { community: 'users', cleanup: 'waves', education: 'book' };

const Plan = () => {
    const { t, ready } = useTranslation();

    if (!ready) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-ink">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-aqua" />
            </div>
        );
    }

    const arr = (key) => {
        const v = t(key, { returnObjects: true });
        return Array.isArray(v) ? v : [];
    };

    const phases = [1, 2, 3, 4].map((n) => ({
        no: n,
        title: t(`pages.plan.phases.phase${n}.title`),
        description: t(`pages.plan.phases.phase${n}.description`),
        activities: arr(`pages.plan.phases.phase${n}.activities`),
    }));

    const results = ['community', 'cleanup', 'education'];

    return (
        <div className="overflow-x-hidden">
            <PageHero
                eyebrow="PROJECT PLAN"
                title={t('pages.plan.title')}
                subtitle={t('pages.plan.overview.description')}
            />

            {/* 개요 */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <Reveal className="mx-auto max-w-4xl rounded-2xl border border-mist-deep bg-mist/50 p-8 md:p-12 text-center">
                        <Eyebrow className="justify-center">OVERVIEW</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-2xl md:text-4xl text-navy">
                            {t('pages.plan.overview.title')}
                        </h2>
                        <p className="mt-5 text-gray-600 text-lg leading-relaxed">
                            {t('pages.plan.overview.detailedDescription')}
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* 단계별 로드맵 (타임라인) */}
            <section className="section-padding bg-mist">
                <div className="container-custom">
                    <Reveal className="max-w-3xl">
                        <Eyebrow>ROADMAP</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl text-navy leading-tight">
                            {t('pages.plan.phases.title')}
                        </h2>
                        <p className="mt-5 text-gray-600 text-lg">{t('pages.plan.phases.subtitle')}</p>
                    </Reveal>

                    <div className="mt-12 relative">
                        <div className="absolute left-6 top-3 bottom-3 w-px bg-navy/15 hidden md:block" aria-hidden="true" />
                        <div className="space-y-6">
                            {phases.map((p, i) => (
                                <Reveal key={p.no} delay={i * 70}>
                                    <div className="relative flex flex-col md:flex-row gap-5 md:gap-8">
                                        <div className="flex-shrink-0 relative z-10">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-aqua-light font-heading font-extrabold ring-4 ring-mist">
                                                {p.no}
                                            </div>
                                        </div>
                                        <div className="flex-1 rounded-2xl bg-white border border-mist-deep p-6 md:p-7 shadow-card">
                                            <h3 className="font-heading font-bold text-xl md:text-2xl text-navy">{p.title}</h3>
                                            <p className="mt-3 text-gray-600 leading-relaxed">{p.description}</p>
                                            {p.activities.length > 0 && (
                                                <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                                                    {p.activities.map((a, ai) => (
                                                        <li key={ai} className="flex items-start gap-2 text-sm text-gray-600">
                                                            <Icon name="check" className="w-4 h-4 mt-0.5 shrink-0 text-aqua-dark" />
                                                            <span>{a}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 기대 성과 */}
            <section className="section-padding bg-ink text-white">
                <div className="container-custom">
                    <Reveal className="max-w-3xl">
                        <Eyebrow light>EXPECTED RESULTS</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl leading-tight">
                            {t('pages.plan.expectedResults.title')}
                        </h2>
                        <p className="mt-5 text-sky-100/75 text-lg">{t('pages.plan.expectedResults.subtitle')}</p>
                    </Reveal>
                    <div className="mt-12 grid md:grid-cols-3 gap-6">
                        {results.map((key, i) => (
                            <Reveal key={key} delay={i * 100}>
                                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-aqua/15 text-aqua-light">
                                        <Icon name={RESULT_ICONS[key]} className="w-6 h-6" />
                                    </div>
                                    <h3 className="mt-5 font-heading font-bold text-lg">
                                        {t(`pages.plan.expectedResults.${key}.title`)}
                                    </h3>
                                    <p className="mt-2 text-sm text-sky-100/70 leading-relaxed">
                                        {t(`pages.plan.expectedResults.${key}.description`)}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <CtaBand
                title={t('pages.about.cta.title')}
                subtitle={t('pages.about.cta.description')}
                primary={{ to: '/membership', label: t('common.buttons.join') }}
                secondary={{ to: '/contact', label: t('common.buttons.contact') }}
            />
        </div>
    );
};

export default Plan;
