import React from 'react';
import { useTranslation } from 'react-i18next';
import { Reveal, Eyebrow, Icon, PageHero, CtaBand } from '../components/ui/primitives';

const ROLE_ICONS = ['users', 'shield', 'waves'];
const RESULT_ICONS = { community: 'users', cleanup: 'waves', education: 'book' };

const HowItWorks = () => {
    const { t, ready } = useTranslation();
    if (!ready) {
        return <div className="min-h-screen flex items-center justify-center bg-ink"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-aqua" /></div>;
    }
    const obj = (k, fb) => { const v = t(k, { returnObjects: true }); return v && typeof v === 'object' ? v : fb; };

    const cycle = obj('pages.home.cycle', {});
    const roles = obj('pages.howItWorks.roles', {});
    const verify = obj('pages.howItWorks.verify', {});
    const results = ['community', 'cleanup', 'education'];

    return (
        <div className="overflow-x-hidden">
            <PageHero eyebrow="HOW IT WORKS" title={t('pages.howItWorks.title')} subtitle={t('pages.howItWorks.subtitle')} image="/images/padi/featured/data-reef.jpg" />

            {/* 4단계 사이클 */}
            <section className="section-padding bg-ocean-deep text-white">
                <div className="container-custom">
                    <Reveal className="max-w-3xl">
                        <Eyebrow light>{cycle.eyebrow}</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl leading-tight">{cycle.title}</h2>
                        <p className="mt-5 text-sky-100/75 text-lg">{cycle.lead}</p>
                    </Reveal>
                    <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {(cycle.steps || []).map((s, i, arr) => {
                            const last = i === arr.length - 1;
                            return (
                                <Reveal key={i} delay={i * 100}>
                                    <div className={`relative h-full rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 ${last ? 'bg-aqua text-ink border-aqua' : 'bg-white/[0.04] border-white/10 backdrop-blur-sm'}`}>
                                        <div className={`font-heading font-extrabold text-5xl ${last ? 'text-ink' : 'text-aqua-light'}`}>{s.no}</div>
                                        <div className={`mt-4 text-xs font-mono font-semibold tracking-eyebrow ${last ? 'text-ink/70' : 'text-sky-100/50'}`}>STEP — {s.tag}</div>
                                        <div className={`mt-2 font-heading font-extrabold text-2xl ${last ? 'text-ink' : 'text-white'}`}>{s.title}</div>
                                        <p className={`mt-3 text-sm leading-relaxed ${last ? 'text-ink/75' : 'text-sky-100/70'}`}>{s.desc}</p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                    <Reveal className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5">
                        <span className="text-sky-100/85">{cycle.freq}</span>
                        <span className="font-heading font-extrabold text-aqua-light text-lg md:text-xl">Q1 · Q2 · Q3 · Q4</span>
                    </Reveal>
                </div>
            </section>

            {/* 세 주체의 역할 */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <Reveal className="max-w-3xl">
                        <Eyebrow>{roles.eyebrow}</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl text-navy leading-tight">{roles.title}</h2>
                        <p className="mt-5 text-gray-600 text-lg">{roles.lead}</p>
                    </Reveal>
                    <div className="mt-12 grid md:grid-cols-3 gap-6">
                        {(roles.items || []).map((r, i) => (
                            <Reveal key={i} delay={i * 100}>
                                <div className="h-full rounded-2xl border border-mist-deep bg-mist/50 p-7">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900 text-aqua-light">
                                        <Icon name={ROLE_ICONS[i] || 'users'} className="w-6 h-6" />
                                    </div>
                                    <h3 className="mt-5 font-heading font-bold text-xl text-navy">{r.who}</h3>
                                    <div className="mt-1 text-sm font-mono uppercase tracking-eyebrow text-aqua-dark">{r.role}</div>
                                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">{r.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 국제 검증 */}
            <section className="section-padding bg-mist">
                <div className="container-custom">
                    <Reveal className="rounded-3xl bg-navy-900 text-white p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full border border-aqua/20" aria-hidden="true" />
                        <div className="relative max-w-3xl">
                            <Eyebrow light>{verify.eyebrow}</Eyebrow>
                            <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-4xl leading-tight">{verify.title}</h2>
                            <p className="mt-5 text-sky-100/80 text-lg leading-relaxed">{verify.desc}</p>
                            <div className="mt-8 flex flex-wrap gap-3">
                                {['GRI 306', 'ISO 14001', 'SDG 14', 'PADI AWARE', 'Dive Against Debris®'].map((b) => (
                                    <span key={b} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-heading font-semibold text-sky-100/85">{b}</span>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 기대 성과 */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <Reveal className="max-w-3xl">
                        <Eyebrow>EXPECTED RESULTS</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl text-navy leading-tight">{t('pages.plan.expectedResults.title')}</h2>
                        <p className="mt-5 text-gray-600 text-lg">{t('pages.plan.expectedResults.subtitle')}</p>
                    </Reveal>
                    <div className="mt-12 grid md:grid-cols-3 gap-6">
                        {results.map((key, i) => (
                            <Reveal key={key} delay={i * 100}>
                                <div className="h-full rounded-2xl border border-mist-deep bg-mist/50 p-7">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-aqua-50 text-aqua-dark">
                                        <Icon name={RESULT_ICONS[key]} className="w-6 h-6" />
                                    </div>
                                    <h3 className="mt-5 font-heading font-bold text-lg text-navy">{t(`pages.plan.expectedResults.${key}.title`)}</h3>
                                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">{t(`pages.plan.expectedResults.${key}.description`)}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <CtaBand
                title={t('pages.home.cta.title')}
                subtitle={t('pages.home.cta.subtitle')}
                primary={{ to: '/join', label: t('common.buttons.getInvolved') }}
                secondary={{ to: '/impact', label: t('common.buttons.viewImpact') }}
            />
        </div>
    );
};

export default HowItWorks;
