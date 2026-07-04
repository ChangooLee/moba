import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Reveal, CountUp, Eyebrow, OceanFX, Icon } from '../components/ui/primitives';

const AUDIENCE_ICONS = ['ship', 'shield', 'waves'];

const Home = () => {
    const { t, ready } = useTranslation();
    const obj = (key, fallback = []) => {
        const v = t(key, { returnObjects: true });
        return v && typeof v === 'object' ? v : fallback;
    };

    if (!ready) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-ink">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-aqua mx-auto mb-4" />
                    <p className="text-aqua-light font-mono tracking-eyebrow text-sm">MOBA</p>
                </div>
            </div>
        );
    }

    const hero = obj('pages.home.hero', {});
    const definition = obj('pages.home.definition', {});
    const stats = obj('pages.home.stats', {});
    const crisis = obj('pages.home.crisis', {});
    const cycle = obj('pages.home.cycle', {});
    const audiences = obj('pages.home.audiences', {});
    const partners = obj('pages.home.partners', {});
    const cta = obj('pages.home.cta', {});

    return (
        <div className="overflow-x-hidden">
            {/* ═══ HERO ═══ */}
            <section className="ocean-hero relative min-h-[92vh] flex items-center text-white">
                <img
                    src="/images/padi/featured/hero-descend.jpg"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover opacity-45"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/45" aria-hidden="true" />
                <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" aria-hidden="true" />
                <OceanFX />
                <div className="container-custom relative z-10 py-24">
                    <div className="max-w-3xl">
                        <div className="animate-fade-in"><Eyebrow light>{hero.eyebrow}</Eyebrow></div>
                        <h1 className="mt-6 font-heading font-extrabold leading-[1.05] tracking-tight text-5xl md:text-7xl xl:text-8xl animate-slide-up">
                            {hero.title}
                        </h1>
                        <p className="mt-6 text-lg md:text-2xl text-sky-100/90 leading-relaxed whitespace-pre-line max-w-2xl animate-slide-up">
                            {hero.subtitle}
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <Link to="/join" className="inline-flex items-center justify-center gap-2 rounded-full bg-aqua px-8 py-4 text-base font-heading font-bold text-ink shadow-glow transition-all duration-200 hover:bg-aqua-light hover:-translate-y-0.5">
                                {t('common.buttons.getInvolved')} <Icon name="arrowRight" className="w-5 h-5" />
                            </Link>
                            <Link to="/how-it-works" className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-8 py-4 text-base font-heading font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/15">
                                {t('common.buttons.viewHowItWorks')}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 inset-x-0 z-10 border-t border-white/10 bg-ink/40 backdrop-blur-sm">
                    <div className="container-custom py-4">
                        <ul className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-6 text-sm text-sky-100/80">
                            {(hero.trust || []).map((item, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <Icon name="check" className="w-4 h-4 text-aqua-light shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ═══ 한 줄 정의 ═══ */}
            <section className="bg-navy-900 text-white">
                <div className="container-custom py-12 md:py-16">
                    <Reveal><Eyebrow light>{definition.eyebrow}</Eyebrow></Reveal>
                    <Reveal className="mt-6 flex flex-col md:flex-row md:items-center md:flex-wrap gap-x-4 gap-y-4">
                        {(definition.steps || []).map((step, i, arr) => (
                            <React.Fragment key={i}>
                                <span className="font-heading font-extrabold text-2xl md:text-4xl">{step}</span>
                                {i < arr.length - 1 && <span className="text-aqua text-2xl md:text-3xl" aria-hidden="true">→</span>}
                            </React.Fragment>
                        ))}
                    </Reveal>
                    <Reveal className="mt-5 text-sky-100/70 text-lg">{definition.note}</Reveal>
                </div>
            </section>

            {/* ═══ 문제 (해양 위기) ═══ */}
            <section className="section-padding bg-ink text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-gradient-to-br from-navy-600 via-transparent to-transparent" />
                <div className="container-custom relative">
                    <Reveal className="max-w-3xl">
                        <Eyebrow light>{crisis.eyebrow}</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl leading-tight">{crisis.title}</h2>
                        <p className="mt-5 text-sky-100/75 text-lg leading-relaxed">{crisis.lead}</p>
                    </Reveal>
                    <div className="mt-14 grid md:grid-cols-3 gap-6">
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
                    <Reveal className="mt-8 rounded-2xl border-l-4 border-coral bg-white/[0.04] p-6 md:p-7">
                        <p className="text-sky-100/85 leading-relaxed">{crisis.note}</p>
                    </Reveal>
                </div>
            </section>

            {/* ═══ 한눈에 (임팩트 증거) ═══ */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <Reveal className="text-center max-w-3xl mx-auto">
                        <Eyebrow className="justify-center">{stats.eyebrow}</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl text-navy text-balance">{stats.title}</h2>
                        {stats.subtitle && <p className="mt-4 text-gray-500 text-lg">{stats.subtitle}</p>}
                    </Reveal>
                    <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {(stats.items || []).map((s, i) => (
                            <Reveal key={i} delay={i * 90}>
                                <div className="h-full rounded-2xl border border-mist-deep bg-mist p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                                    <div className="flex items-baseline gap-1">
                                        <CountUp value={s.value} className="stat-number text-5xl md:text-6xl text-navy" />
                                        <span className="font-heading font-bold text-xl md:text-2xl text-aqua-dark">{s.unit}</span>
                                    </div>
                                    <div className="mt-3 font-heading font-bold text-navy">{s.label}</div>
                                    <div className="mt-1 text-sm text-gray-500 leading-relaxed">{s.sub}</div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                    <Reveal className="mt-10 text-center">
                        <Link to="/impact" className="inline-flex items-center gap-2 font-heading font-semibold text-navy hover:text-aqua-dark transition-colors">
                            {t('common.buttons.viewImpact')} <Icon name="arrowRight" className="w-4 h-4" />
                        </Link>
                    </Reveal>
                </div>
            </section>

            {/* ═══ 4-STEP 사이클 요약 ═══ */}
            <section className="section-padding bg-ocean-deep text-white relative overflow-hidden">
                <div className="container-custom relative">
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
                    <Reveal className="mt-8 text-center">
                        <Link to="/how-it-works" className="inline-flex items-center gap-2 font-heading font-semibold text-aqua-light hover:text-white transition-colors">
                            {t('common.buttons.viewHowItWorks')} <Icon name="arrowRight" className="w-4 h-4" />
                        </Link>
                    </Reveal>
                </div>
            </section>

            {/* ═══ 풀블리드 정화 이미지 밴드 ═══ */}
            <section className="relative h-[52vh] min-h-[380px] flex items-end overflow-hidden">
                <img
                    src="/images/padi/featured/cleanup-bottle.jpg"
                    alt="다이버가 수중에서 폐플라스틱을 수거하는 모습"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" aria-hidden="true" />
                <div className="container-custom relative z-10 pb-12 md:pb-16 text-white">
                    <Reveal className="max-w-2xl">
                        <Eyebrow light>REAL ACTION · NOT A PLEDGE</Eyebrow>
                        <p className="mt-4 font-heading font-extrabold text-2xl md:text-4xl leading-snug">
                            임직원이 직접 바다에 들어가 수거합니다.<br />모든 수거물은 kg·품목·GPS로 기록됩니다.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* ═══ 누구와 함께하나요 (오디언스 라우터) ═══ */}
            <section className="section-padding bg-mist">
                <div className="container-custom">
                    <Reveal className="max-w-3xl">
                        <Eyebrow>{audiences.eyebrow}</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl text-navy leading-tight">{audiences.title}</h2>
                        <p className="mt-5 text-gray-600 text-lg">{audiences.lead}</p>
                    </Reveal>
                    <div className="mt-12 grid md:grid-cols-3 gap-6 items-stretch">
                        {(audiences.items || []).map((a, i) => {
                            const primary = i === 0;
                            return (
                                <Reveal key={i} delay={i * 100}>
                                    <div className={`h-full rounded-2xl p-8 flex flex-col ${primary ? 'bg-navy-900 text-white shadow-card-lg' : 'bg-white border border-mist-deep'}`}>
                                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${primary ? 'bg-aqua text-ink' : 'bg-navy-900 text-aqua-light'}`}>
                                            <Icon name={AUDIENCE_ICONS[i] || 'waves'} className="w-6 h-6" />
                                        </div>
                                        <div className={`mt-5 text-xs font-mono font-semibold tracking-eyebrow ${primary ? 'text-aqua-light' : 'text-aqua-dark'}`}>{a.tag}</div>
                                        <h3 className={`mt-2 font-heading font-extrabold text-2xl ${primary ? 'text-white' : 'text-navy'}`}>{a.title}</h3>
                                        <p className={`mt-3 flex-1 leading-relaxed ${primary ? 'text-sky-100/75' : 'text-gray-600'}`}>{a.desc}</p>
                                        <Link to={a.to} className={`mt-6 inline-flex items-center gap-2 font-heading font-bold transition-colors ${primary ? 'text-aqua-light hover:text-white' : 'text-navy hover:text-aqua-dark'}`}>
                                            {a.cta} <Icon name="arrowRight" className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══ 파트너 (사회적 증명) ═══ */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <Reveal className="rounded-3xl bg-navy-900 text-white p-8 md:p-12 relative overflow-hidden">
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
                        <div className="flex justify-center"><img src="/images/padi/featured/padi-aware-logo.png" alt="PADI AWARE Foundation" className="h-14 md:h-16 w-auto object-contain" loading="lazy" /></div>
                        <div className="flex justify-center"><img src="/images/ISO_Logo_(Red_square).svg.png" alt="ISO 14001" className="h-20 md:h-24 w-auto object-contain" loading="lazy" /></div>
                        <div className="flex justify-center"><img src="/images/O431-Global-Reporting-Initative.png" alt="GRI Standards" className="h-16 md:h-20 w-auto object-contain" loading="lazy" /></div>
                    </Reveal>
                </div>
            </section>

            {/* ═══ 최종 CTA ═══ */}
            <section className="ocean-hero relative text-white">
                <OceanFX />
                <div className="container-custom relative z-10 section-padding">
                    <Reveal className="max-w-3xl">
                        <Eyebrow light>{cta.eyebrow}</Eyebrow>
                        <h2 className="mt-5 font-heading font-extrabold text-5xl md:text-7xl leading-[1.05]">{cta.title}</h2>
                        <p className="mt-6 text-lg md:text-xl text-sky-100/85">{cta.subtitle}</p>
                    </Reveal>
                    <div className="mt-12 grid md:grid-cols-3 gap-5">
                        {(cta.steps || []).map((s, i, arr) => {
                            const last = i === arr.length - 1;
                            return (
                                <Reveal key={i} delay={i * 100}>
                                    <div className={`h-full rounded-2xl p-7 border ${last ? 'bg-aqua text-ink border-aqua' : 'bg-white/[0.06] border-white/15 backdrop-blur-sm'}`}>
                                        <div className={`font-heading font-extrabold text-4xl ${last ? 'text-ink' : 'text-aqua-light'}`}>{s.no}</div>
                                        <div className={`mt-3 font-heading font-bold text-lg ${last ? 'text-ink' : 'text-white'}`}>{s.title}</div>
                                        <p className={`mt-2 text-sm ${last ? 'text-ink/75' : 'text-sky-100/75'}`}>{s.desc}</p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                    <Reveal className="mt-10 flex flex-col sm:flex-row gap-4">
                        <Link to="/join" className="inline-flex items-center justify-center gap-2 rounded-full bg-aqua px-8 py-4 text-base font-heading font-bold text-ink shadow-glow transition-all duration-200 hover:bg-aqua-light hover:-translate-y-0.5">
                            {t('common.buttons.getInvolved')} <Icon name="arrowRight" className="w-5 h-5" />
                        </Link>
                        <Link to="/join/business" className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-8 py-4 text-base font-heading font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15">
                            {t('common.buttons.businessInquiry')}
                        </Link>
                    </Reveal>
                    <Reveal className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row md:justify-between gap-3 text-sm text-sky-100/70">
                        <span>{cta.contact}</span>
                        <span>{cta.partner}</span>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

export default Home;
