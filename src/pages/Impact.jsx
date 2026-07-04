import React from 'react';
import { useTranslation } from 'react-i18next';
import { Reveal, CountUp, Eyebrow, Icon, PageHero, CtaBand } from '../components/ui/primitives';

const Impact = () => {
    const { t, ready } = useTranslation();
    if (!ready) {
        return <div className="min-h-screen flex items-center justify-center bg-ink"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-aqua" /></div>;
    }
    const obj = (k, fb) => { const v = t(k, { returnObjects: true }); return v && typeof v === 'object' ? v : fb; };

    const stats = obj('pages.home.stats', {});
    const metrics = obj('pages.home.metrics', {});
    const partners = obj('pages.home.partners', {});
    const past = obj('pages.schedule.pastEvents.pohang20250920', {});
    const results = past.results || {};
    const images = Array.isArray(past.images) ? past.images : [];

    return (
        <div className="overflow-x-hidden">
            <PageHero eyebrow="IMPACT" title={t('pages.impact.title')} subtitle={t('pages.impact.subtitle')} />

            {/* 한눈에 보는 성과 */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <Reveal className="max-w-3xl">
                        <Eyebrow>{stats.eyebrow}</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl text-navy leading-tight">{stats.title}</h2>
                    </Reveal>
                    <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {(stats.items || []).map((s, i) => (
                            <Reveal key={i} delay={i * 90}>
                                <div className="h-full rounded-2xl border border-mist-deep bg-mist p-6 md:p-8">
                                    <div className="flex items-baseline gap-1">
                                        <CountUp value={s.value} className="stat-number text-5xl md:text-6xl text-navy" />
                                        <span className="font-heading font-bold text-xl text-aqua-dark">{s.unit}</span>
                                    </div>
                                    <div className="mt-3 font-heading font-bold text-navy">{s.label}</div>
                                    <div className="mt-1 text-sm text-gray-500 leading-relaxed">{s.sub}</div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ESG 정량 지표 */}
            <section className="section-padding bg-ink text-white">
                <div className="container-custom">
                    <Reveal className="max-w-3xl">
                        <Eyebrow light>{metrics.eyebrow}</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl leading-tight">{metrics.title}</h2>
                        <p className="mt-5 text-sky-100/75 text-lg">{metrics.lead}</p>
                    </Reveal>
                    <div className="mt-14 grid md:grid-cols-3 gap-6">
                        {(metrics.groups || []).map((g, gi) => {
                            const head = ['bg-navy-800', 'bg-navy-600', 'bg-aqua text-ink'][gi] || 'bg-navy-800';
                            return (
                                <Reveal key={gi} delay={gi * 120}>
                                    <div className="h-full rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10">
                                        <div className={`flex items-center gap-3 px-6 py-5 ${head}`}>
                                            <span className="font-heading font-extrabold text-3xl">{g.key}</span>
                                            <span className="font-heading font-bold">{g.name}</span>
                                        </div>
                                        <div className="p-6 divide-y divide-white/10">
                                            {(g.items || []).map((m, mi) => (
                                                <div key={mi} className="flex items-baseline justify-between gap-3 py-3">
                                                    <span className="text-sm text-sky-100/70">{m.label}</span>
                                                    <span className="whitespace-nowrap">
                                                        <CountUp value={m.value} className="stat-number text-2xl text-white" />
                                                        <span className="ml-0.5 text-xs text-aqua-light font-heading font-semibold">{m.unit}</span>
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 포항 실증 데이터 */}
            <section className="section-padding bg-mist">
                <div className="container-custom">
                    <Reveal className="max-w-3xl">
                        <Eyebrow>FIELD RECORD</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl text-navy leading-tight">{t('pages.schedule.pastEvents.title')}</h2>
                        <p className="mt-5 text-gray-600 text-lg">{t('pages.schedule.pastEvents.subtitle')}</p>
                    </Reveal>
                    <Reveal className="mt-12 rounded-3xl bg-navy-900 text-white p-7 md:p-10">
                        <h3 className="font-heading font-extrabold text-2xl md:text-3xl">{past.title}</h3>
                        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-sky-100/70">
                            {past.host && <span>주관 · {past.host}</span>}
                            {past.date && <span>{past.date}</span>}
                            {past.location && <span>{past.location}</span>}
                        </div>
                        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-5">
                            <div className="rounded-2xl bg-white/[0.05] p-5">
                                <div className="stat-number text-3xl md:text-4xl text-aqua-light">{past.attendees}</div>
                                <div className="mt-1 text-sm text-sky-100/60">참여 인원</div>
                            </div>
                            {results.totalVolume && (
                                <div className="rounded-2xl bg-white/[0.05] p-5">
                                    <div className="stat-number text-3xl md:text-4xl text-aqua-light">{results.totalVolume}</div>
                                    <div className="mt-1 text-sm text-sky-100/60">총 수거량</div>
                                </div>
                            )}
                            {Array.isArray(results.categories) && results.categories.map((c, i) => (
                                <div key={i} className="rounded-2xl bg-white/[0.05] p-5">
                                    <div className="stat-number text-3xl md:text-4xl text-aqua-light">{c.percentage}</div>
                                    <div className="mt-1 text-sm text-sky-100/60">{c.name}</div>
                                </div>
                            ))}
                        </div>
                        {images.length > 0 && (
                            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                                {images.map((src, i) => (
                                    <div key={i} className="aspect-square overflow-hidden rounded-xl">
                                        <img src={src} alt={`포항 정화활동 ${i + 1}`} loading="lazy" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" onError={(e) => { e.currentTarget.parentElement.style.display = 'none'; }} />
                                    </div>
                                ))}
                            </div>
                        )}
                        {past.press && (
                            <div className="mt-8">
                                <a href={past.press} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-aqua px-6 py-3 text-sm font-heading font-bold text-ink transition-colors hover:bg-aqua-light">
                                    관련 보도자료 보기 <Icon name="arrowUpRight" className="w-4 h-4" />
                                </a>
                            </div>
                        )}
                    </Reveal>
                </div>
            </section>

            {/* 국제 표준 매핑 + PADI AWARE */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <Reveal className="max-w-3xl">
                        <Eyebrow>INTERNATIONAL STANDARDS</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl text-navy leading-tight">{partners.standardsTitle}</h2>
                        <p className="mt-5 text-gray-600 text-lg">{t('pages.impact.standardsNote')}</p>
                    </Reveal>
                    <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-4">
                        {(partners.standards || []).map((s, i) => (
                            <Reveal key={i} delay={i * 60}>
                                <div className="h-full rounded-xl border border-mist-deep bg-mist/60 p-5">
                                    <div className="text-[0.7rem] font-mono font-semibold tracking-eyebrow text-aqua-dark">{s.org}</div>
                                    <div className="mt-2 font-heading font-extrabold text-xl text-navy">{s.name}</div>
                                    <div className="mt-1 text-sm text-gray-500">{s.desc}</div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal className="mt-12 rounded-3xl bg-navy-900 text-white p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full border border-aqua/20" aria-hidden="true" />
                        <div className="relative grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="text-xs font-mono font-semibold tracking-eyebrow text-aqua-light">CORE GLOBAL PARTNER</div>
                                <h3 className="mt-3 font-heading font-extrabold text-3xl md:text-4xl leading-tight">{partners.padiName}</h3>
                                <p className="mt-4 text-sky-100/75 leading-relaxed">{partners.padiDesc}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                {(partners.padiStats || []).map((s, i) => (
                                    <div key={i}>
                                        <div className="stat-number text-4xl md:text-5xl text-aqua-light">{s.value}</div>
                                        <div className="mt-2 text-sm text-sky-100/70 leading-relaxed">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    <Reveal className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 items-center opacity-90">
                        <div className="flex justify-center"><img src="/images/PADI-AWARE-Logo.webp" alt="PADI AWARE Foundation" className="h-20 md:h-24 w-auto object-contain" loading="lazy" /></div>
                        <div className="flex justify-center"><img src="/images/ISO_Logo_(Red_square).svg.png" alt="ISO 14001" className="h-20 md:h-24 w-auto object-contain" loading="lazy" /></div>
                        <div className="flex justify-center"><img src="/images/O431-Global-Reporting-Initative.png" alt="GRI Standards" className="h-16 md:h-20 w-auto object-contain" loading="lazy" /></div>
                    </Reveal>
                </div>
            </section>

            <CtaBand
                title={t('pages.home.cta.title')}
                subtitle={t('pages.home.cta.subtitle')}
                primary={{ to: '/join', label: t('common.buttons.getInvolved') }}
                secondary={{ to: '/how-it-works', label: t('common.buttons.viewHowItWorks') }}
            />
        </div>
    );
};

export default Impact;
