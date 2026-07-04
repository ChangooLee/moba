import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Reveal, Eyebrow, Icon, PageHero } from '../components/ui/primitives';

const JoinBusiness = () => {
    const { t, ready } = useTranslation();
    if (!ready) {
        return <div className="min-h-screen flex items-center justify-center bg-ink"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-aqua" /></div>;
    }
    const obj = (k, fb) => { const v = t(k, { returnObjects: true }); return v && typeof v === 'object' ? v : fb; };
    const arr = (k) => { const v = t(k, { returnObjects: true }); return Array.isArray(v) ? v : []; };

    const value = obj('pages.home.value', {});
    const difference = obj('pages.home.difference', {});
    const disclosure = obj('pages.home.disclosure', {});
    const pricing = obj('pages.home.pricing', {});
    const bcta = obj('pages.business.cta', {});
    const corpPlans = (pricing.plans || []).filter((p) => !p.accent); // 최초/갱신 (시범 제외)

    return (
        <div className="overflow-x-hidden">
            <PageHero eyebrow="FOR BUSINESS" title={t('pages.business.title')} subtitle={t('pages.business.subtitle')} image="/images/padi/featured/data-diver.jpg" />

            {/* 5가지 기업 가치 */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <Reveal className="max-w-3xl">
                        <Eyebrow>{value.eyebrow}</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl text-navy leading-tight">{value.title}</h2>
                        <p className="mt-5 text-gray-600 text-lg">{value.lead}</p>
                    </Reveal>
                    <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {(value.items || []).map((v, i) => {
                            const accent = !!v.tag;
                            const featured = i === 0;
                            return (
                                <Reveal key={i} delay={i * 80} className={featured ? 'lg:col-span-2' : ''}>
                                    <div className={`h-full rounded-2xl p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 ${accent ? 'bg-aqua text-ink' : featured ? 'bg-navy-900 text-white' : 'bg-mist/50 border border-mist-deep'}`}>
                                        <div className={`font-mono font-semibold text-xs tracking-eyebrow ${accent ? 'text-ink/60' : featured ? 'text-aqua-light' : 'text-aqua-dark'}`}>VALUE {v.no}{v.tag ? ` · ${v.tag}` : ''}</div>
                                        <h3 className={`mt-3 font-heading font-extrabold text-xl md:text-2xl leading-snug ${accent ? 'text-ink' : featured ? 'text-white' : 'text-navy'}`}>{v.title}</h3>
                                        <p className={`mt-4 leading-relaxed ${accent ? 'text-ink/80' : featured ? 'text-sky-100/80' : 'text-gray-500'}`}>{v.desc}</p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 일반 ESG와의 차이 */}
            <section className="section-padding bg-mist">
                <div className="container-custom">
                    <Reveal className="max-w-3xl">
                        <Eyebrow>{difference.eyebrow}</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl text-navy leading-tight">{difference.title}</h2>
                        <p className="mt-5 text-gray-600 text-lg">{difference.lead}</p>
                    </Reveal>
                    <Reveal className="mt-12 overflow-hidden rounded-2xl border border-mist-deep shadow-card">
                        <div className="grid grid-cols-3 bg-navy-900 text-white text-sm font-heading font-semibold">
                            <div className="p-4 md:p-5 tracking-eyebrow text-sky-100/70 text-xs md:text-sm">{difference.colLabel}</div>
                            <div className="p-4 md:p-5 text-sky-100/70">{difference.colGeneric}</div>
                            <div className="p-4 md:p-5 bg-aqua text-ink">{difference.colMoba}</div>
                        </div>
                        {(difference.rows || []).map((r, i) => (
                            <div key={i} className={`grid grid-cols-3 text-sm md:text-base ${i % 2 ? 'bg-mist/50' : 'bg-white'}`}>
                                <div className="p-4 md:p-5 font-heading font-bold text-navy">{r.label}</div>
                                <div className="p-4 md:p-5 text-gray-500 leading-relaxed">{r.generic}</div>
                                <div className="p-4 md:p-5 text-navy font-medium leading-relaxed bg-aqua-50/60 border-l border-aqua/30">{r.moba}</div>
                            </div>
                        ))}
                    </Reveal>
                </div>
            </section>

            {/* 2028 공시 긴급성 */}
            <section className="section-padding bg-ocean-deep text-white">
                <div className="container-custom">
                    <Reveal className="max-w-3xl">
                        <Eyebrow light>{disclosure.eyebrow}</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl leading-tight">{disclosure.title}</h2>
                        <p className="mt-5 text-sky-100/75 text-lg">{disclosure.lead}</p>
                    </Reveal>
                    <div className="mt-12 grid lg:grid-cols-2 gap-6">
                        <Reveal className="rounded-2xl border-l-4 border-coral bg-white/[0.04] p-7">
                            <div className="text-xs font-mono font-semibold tracking-eyebrow text-coral-light">URGENCY — DATA COLLECTION DEADLINE</div>
                            <p className="mt-4 text-lg leading-relaxed text-white">{disclosure.warning}</p>
                        </Reveal>
                        <Reveal delay={120} className="rounded-2xl bg-aqua text-ink p-7 flex flex-col justify-center">
                            <div className="text-xs font-mono font-semibold tracking-eyebrow text-ink/60">KEY MESSAGE · COMPETITIVE EDGE</div>
                            <div className="mt-3 flex items-baseline gap-2">
                                <span className="stat-number text-6xl md:text-7xl text-ink">{disclosure.edgeValue}</span>
                                <span className="font-heading font-bold text-2xl text-ink/70">{disclosure.edgeLabel}</span>
                            </div>
                            <p className="mt-4 text-ink/80 leading-relaxed">{disclosure.edgeDesc}</p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* 기업 멤버십 포함 사항 (가격표 대신 안내) */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <Reveal className="max-w-3xl">
                        <Eyebrow>WHAT'S INCLUDED</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl text-navy leading-tight">{pricing.title}</h2>
                        <p className="mt-5 text-gray-600 text-lg">{t('pages.business.membershipNote')}</p>
                    </Reveal>
                    <div className="mt-12 grid md:grid-cols-2 gap-6 items-stretch max-w-4xl">
                        {corpPlans.map((p, i) => {
                            const dark = p.highlight;
                            return (
                                <Reveal key={i} delay={i * 100}>
                                    <div className={`relative h-full rounded-2xl p-7 md:p-8 flex flex-col ${dark ? 'bg-navy-900 text-white shadow-card-lg' : 'bg-mist/50 border border-mist-deep'}`}>
                                        {p.badge && <span className="absolute top-5 right-5 rounded-full bg-aqua px-3 py-1 text-xs font-heading font-bold text-ink">{p.badge}</span>}
                                        <div className={`text-xs font-mono font-semibold tracking-eyebrow ${dark ? 'text-aqua-light' : 'text-aqua-dark'}`}>{p.tag}</div>
                                        <div className={`mt-3 font-heading font-bold text-xl ${dark ? 'text-white' : 'text-navy'}`}>{p.name}</div>
                                        <div className="mt-4 flex items-baseline gap-1">
                                            <span className={`stat-number text-5xl ${dark ? 'text-white' : 'text-navy'}`}>{p.price}</span>
                                            <span className={`font-heading font-bold ${dark ? 'text-aqua-light' : 'text-aqua-dark'}`}>{p.unit}</span>
                                        </div>
                                        <div className={`mt-2 text-sm ${dark ? 'text-sky-100/60' : 'text-gray-500'}`}>{p.note}</div>
                                        <ul className={`mt-6 space-y-3 text-sm flex-1 ${dark ? 'text-sky-100/85' : 'text-gray-600'}`}>
                                            {(p.features || []).map((f, fi) => (
                                                <li key={fi} className="flex items-start gap-2">
                                                    <Icon name="check" className={`w-4 h-4 mt-0.5 shrink-0 ${dark ? 'text-aqua-light' : 'text-aqua-dark'}`} />
                                                    <span>{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 제안서 요청 CTA */}
            <section className="ocean-hero relative text-white">
                <div className="ocean-rays" aria-hidden="true" />
                <div className="container-custom relative z-10 section-padding text-center">
                    <Reveal className="max-w-3xl mx-auto">
                        <Eyebrow light>{bcta.eyebrow}</Eyebrow>
                        <h2 className="mt-5 font-heading font-extrabold text-3xl md:text-5xl leading-tight">{bcta.title}</h2>
                        <p className="mt-5 text-lg text-sky-100/85 max-w-2xl mx-auto">{bcta.subtitle}</p>
                        <div className="mt-9">
                            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-aqua px-8 py-4 text-base font-heading font-bold text-ink shadow-glow transition-all duration-200 hover:bg-aqua-light hover:-translate-y-0.5">
                                {bcta.button} <Icon name="arrowRight" className="w-5 h-5" />
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

export default JoinBusiness;
