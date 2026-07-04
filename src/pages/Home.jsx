import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

/* ── 스크롤 인뷰 훅 ──────────────────────────────── */
const useInView = (options = { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (typeof IntersectionObserver === 'undefined') {
            setInView(true);
            return;
        }
        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true);
                obs.disconnect();
            }
        }, options);
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return [ref, inView];
};

/* ── 스크롤 리빌 래퍼 ─────────────────────────────── */
const Reveal = ({ children, className = '', delay = 0, as: Tag = 'div' }) => {
    const [ref, inView] = useInView();
    return (
        <Tag
            ref={ref}
            className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
        >
            {children}
        </Tag>
    );
};

/* ── 숫자 카운트업 (정수형만) ─────────────────────── */
const CountUp = ({ value, className = '' }) => {
    const match = /^(\d[\d,]*)/.exec(String(value));
    const numeric = match ? parseInt(match[1].replace(/,/g, ''), 10) : null;
    const suffix = match ? String(value).slice(match[1].length) : String(value);
    const [ref, inView] = useInView({ threshold: 0.4 });
    const [display, setDisplay] = useState(numeric === null ? value : '0');

    useEffect(() => {
        if (numeric === null || !inView) return;
        if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
            setDisplay(numeric.toLocaleString());
            return;
        }
        let raf;
        const start = performance.now();
        const dur = 1400;
        const tick = (now) => {
            const p = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(Math.round(numeric * eased).toLocaleString());
            if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [inView, numeric]);

    if (numeric === null) return <span className={className}>{value}</span>;
    return (
        <span ref={ref} className={className}>
            {display}
            {suffix}
        </span>
    );
};

const Eyebrow = ({ children, light = false, className = '' }) => (
    <span className={`${light ? 'eyebrow-light' : 'eyebrow'} ${className}`}>
        <span className="inline-block w-6 h-px bg-current opacity-70" />
        {children}
    </span>
);

const BUBBLES = [
    { l: '8%', s: 10, d: 13, delay: 0 }, { l: '18%', s: 6, d: 17, delay: 3 },
    { l: '27%', s: 14, d: 11, delay: 6 }, { l: '38%', s: 8, d: 15, delay: 1 },
    { l: '47%', s: 5, d: 19, delay: 8 }, { l: '58%', s: 12, d: 12, delay: 4 },
    { l: '66%', s: 7, d: 16, delay: 2 }, { l: '74%', s: 10, d: 14, delay: 7 },
    { l: '83%', s: 6, d: 18, delay: 5 }, { l: '91%', s: 13, d: 12, delay: 9 },
];

const OceanFX = () => (
    <>
        <div className="ocean-rays" aria-hidden="true" />
        <div className="ocean-bubbles" aria-hidden="true">
            {BUBBLES.map((b, i) => (
                <span
                    key={i}
                    style={{
                        left: b.l,
                        width: `${b.s}px`,
                        height: `${b.s}px`,
                        animationDuration: `${b.d}s`,
                        animationDelay: `${b.delay}s`,
                    }}
                />
            ))}
        </div>
    </>
);

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
                    <p className="text-aqua-light font-heading tracking-eyebrow text-sm">MOBA</p>
                </div>
            </div>
        );
    }

    const hero = obj('pages.home.hero', {});
    const definition = obj('pages.home.definition', {});
    const stats = obj('pages.home.stats', {});
    const crisis = obj('pages.home.crisis', {});
    const standard = obj('pages.home.standard', {});
    const cycle = obj('pages.home.cycle', {});
    const difference = obj('pages.home.difference', {});
    const value = obj('pages.home.value', {});
    const metrics = obj('pages.home.metrics', {});
    const employee = obj('pages.home.employee', {});
    const partners = obj('pages.home.partners', {});
    const disclosure = obj('pages.home.disclosure', {});
    const pricing = obj('pages.home.pricing', {});
    const cta = obj('pages.home.cta', {});

    return (
        <div className="overflow-x-hidden">
            {/* ═══════════════ HERO ═══════════════ */}
            <section className="ocean-hero relative min-h-[92vh] flex items-center text-white">
                <OceanFX />
                <div className="container-custom relative z-10 py-24">
                    <div className="max-w-3xl">
                        <div className="animate-fade-in">
                            <Eyebrow light>{hero.eyebrow}</Eyebrow>
                        </div>
                        <h1 className="mt-6 font-heading font-extrabold leading-[1.05] tracking-tight text-5xl md:text-7xl xl:text-8xl animate-slide-up">
                            {hero.title}
                        </h1>
                        <p className="mt-6 text-lg md:text-2xl text-sky-100/90 leading-relaxed whitespace-pre-line max-w-2xl animate-slide-up">
                            {hero.subtitle}
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-aqua px-8 py-4 text-base font-heading font-bold text-ink shadow-glow transition-all duration-200 hover:bg-aqua-light hover:-translate-y-0.5"
                            >
                                {hero.ctaPrimary}
                                <span aria-hidden="true">→</span>
                            </Link>
                            <Link
                                to="/membership"
                                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-8 py-4 text-base font-heading font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/15"
                            >
                                {hero.ctaSecondary}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* 하단 신뢰 스트립 */}
                <div className="absolute bottom-0 inset-x-0 z-10 border-t border-white/10 bg-ink/40 backdrop-blur-sm">
                    <div className="container-custom py-4">
                        <ul className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-6 text-sm text-sky-100/80">
                            {(hero.trust || []).map((item, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <span className="text-aqua-light" aria-hidden="true">✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ═══════════════ 한 줄 정의 ═══════════════ */}
            <section className="bg-navy-900 text-white">
                <div className="container-custom py-12 md:py-16">
                    <Reveal>
                        <Eyebrow light>{definition.eyebrow}</Eyebrow>
                    </Reveal>
                    <Reveal className="mt-6 flex flex-col md:flex-row md:items-center md:flex-wrap gap-x-4 gap-y-4">
                        {(definition.steps || []).map((step, i, arr) => (
                            <React.Fragment key={i}>
                                <span className="font-heading font-extrabold text-2xl md:text-4xl">
                                    {step}
                                </span>
                                {i < arr.length - 1 && (
                                    <span className="text-aqua text-2xl md:text-3xl" aria-hidden="true">→</span>
                                )}
                            </React.Fragment>
                        ))}
                    </Reveal>
                    <Reveal className="mt-5 text-sky-100/70 text-lg">{definition.note}</Reveal>
                </div>
            </section>

            {/* ═══════════════ 통계 (한눈에) ═══════════════ */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <Reveal className="text-center max-w-3xl mx-auto">
                        <Eyebrow>{stats.eyebrow}</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl text-navy text-balance">
                            {stats.title}
                        </h2>
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
                </div>
            </section>

            {/* ═══════════════ 해양 위기 (WHY NOW) ═══════════════ */}
            <section className="section-padding bg-ink text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-gradient-to-br from-navy-600 via-transparent to-transparent" />
                <div className="container-custom relative">
                    <Reveal className="max-w-3xl">
                        <Eyebrow light>{crisis.eyebrow}</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl leading-tight">
                            {crisis.title}
                        </h2>
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

            {/* ═══════════════ 새로운 기준 (실천 증명) ═══════════════ */}
            <section className="section-padding bg-mist">
                <div className="container-custom">
                    <Reveal className="max-w-3xl">
                        <Eyebrow>{standard.eyebrow}</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl text-navy leading-tight">
                            {standard.title}
                        </h2>
                        <p className="mt-5 text-gray-600 text-lg leading-relaxed">{standard.lead}</p>
                    </Reveal>
                    <div className="mt-12 grid md:grid-cols-3 gap-6">
                        {(standard.questions || []).map((q, i) => (
                            <Reveal key={i} delay={i * 100}>
                                <div className="h-full rounded-2xl bg-white p-7 shadow-card border-t-4 border-coral">
                                    <div className="font-heading font-extrabold text-4xl text-coral">{q.q}</div>
                                    <div className="mt-4 font-heading font-bold text-lg text-navy leading-snug">{q.text}</div>
                                    <p className="mt-3 text-sm text-gray-500">{q.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                    <Reveal className="mt-6 rounded-2xl bg-navy-900 text-sky-100/90 p-6 md:p-7">
                        <p className="leading-relaxed">{standard.warn}</p>
                    </Reveal>

                    <Reveal className="mt-16 max-w-3xl">
                        <Eyebrow>{standard.answerEyebrow}</Eyebrow>
                        <h3 className="mt-4 font-heading font-extrabold text-2xl md:text-4xl text-navy">
                            {standard.answer}
                        </h3>
                    </Reveal>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {(standard.proofs || []).map((p, i) => (
                            <Reveal key={i} delay={i * 80}>
                                <div className="h-full rounded-xl bg-white border border-mist-deep p-6 border-t-2 border-t-aqua">
                                    <div className="font-heading font-bold text-navy">{p.title}</div>
                                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ 4-STEP 사이클 ═══════════════ */}
            <section className="section-padding bg-ocean-deep text-white relative overflow-hidden">
                <div className="container-custom relative">
                    <Reveal className="max-w-3xl">
                        <Eyebrow light>{cycle.eyebrow}</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl leading-tight">
                            {cycle.title}
                        </h2>
                        <p className="mt-5 text-sky-100/75 text-lg">{cycle.lead}</p>
                    </Reveal>
                    <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {(cycle.steps || []).map((s, i, arr) => {
                            const last = i === arr.length - 1;
                            return (
                                <Reveal key={i} delay={i * 100}>
                                    <div className={`relative h-full rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 ${last ? 'bg-aqua text-ink border-aqua' : 'bg-white/[0.04] border-white/10 backdrop-blur-sm'}`}>
                                        <div className={`font-heading font-extrabold text-5xl ${last ? 'text-ink' : 'text-aqua-light'}`}>{s.no}</div>
                                        <div className={`mt-4 text-xs font-heading font-semibold tracking-eyebrow ${last ? 'text-ink/70' : 'text-sky-100/50'}`}>
                                            STEP — {s.tag}
                                        </div>
                                        <div className={`mt-2 font-heading font-extrabold text-2xl ${last ? 'text-ink' : 'text-white'}`}>{s.title}</div>
                                        <p className={`mt-3 text-sm leading-relaxed ${last ? 'text-ink/75' : 'text-sky-100/70'}`}>{s.desc}</p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                    <Reveal className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5">
                        <span className="text-sky-100/85 flex items-center gap-2">
                            <span className="text-aqua" aria-hidden="true">↻</span>{cycle.freq}
                        </span>
                        <span className="font-heading font-extrabold text-aqua-light text-lg md:text-xl tracking-wide">Q1 · Q2 · Q3 · Q4</span>
                    </Reveal>
                </div>
            </section>

            {/* ═══════════════ 차별점 비교 ═══════════════ */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <Reveal className="max-w-3xl">
                        <Eyebrow>{difference.eyebrow}</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl text-navy leading-tight">
                            {difference.title}
                        </h2>
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
                    <Reveal className="mt-6 text-center text-navy font-heading font-semibold text-lg">
                        → {difference.footnote}
                    </Reveal>
                </div>
            </section>

            {/* ═══════════════ 5가지 기업 가치 ═══════════════ */}
            <section className="section-padding bg-mist">
                <div className="container-custom">
                    <Reveal className="max-w-3xl">
                        <Eyebrow>{value.eyebrow}</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl text-navy leading-tight">
                            {value.title}
                        </h2>
                        <p className="mt-5 text-gray-600 text-lg">{value.lead}</p>
                    </Reveal>
                    <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {(value.items || []).map((v, i) => {
                            const accent = !!v.tag;
                            const featured = i === 0;
                            return (
                                <Reveal
                                    key={i}
                                    delay={i * 80}
                                    className={featured ? 'lg:col-span-2' : accent ? 'lg:col-span-1' : ''}
                                >
                                    <div className={`h-full rounded-2xl p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 ${accent ? 'bg-aqua text-ink' : featured ? 'bg-navy-900 text-white' : 'bg-white border border-mist-deep shadow-card'}`}>
                                        <div className={`font-heading font-semibold text-xs tracking-eyebrow ${accent ? 'text-ink/60' : featured ? 'text-aqua-light' : 'text-aqua-dark'}`}>
                                            VALUE {v.no}{v.tag ? ` · ${v.tag}` : ''}
                                        </div>
                                        <h3 className={`mt-3 font-heading font-extrabold text-xl md:text-2xl leading-snug ${accent ? 'text-ink' : featured ? 'text-white' : 'text-navy'}`}>
                                            {v.title}
                                        </h3>
                                        <p className={`mt-4 leading-relaxed ${accent ? 'text-ink/80' : featured ? 'text-sky-100/80' : 'text-gray-500'}`}>
                                            {v.desc}
                                        </p>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════════ ESG 정량 지표 ═══════════════ */}
            <section className="section-padding bg-ink text-white">
                <div className="container-custom">
                    <Reveal className="max-w-3xl">
                        <Eyebrow light>{metrics.eyebrow}</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl leading-tight">
                            {metrics.title}
                        </h2>
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

            {/* ═══════════════ 임직원 가치 ═══════════════ */}
            <section className="bg-navy-900 text-white">
                <div className="grid lg:grid-cols-2">
                    <div className="section-padding">
                        <div className="max-w-xl mx-auto lg:ml-auto lg:mr-0 px-4 sm:px-6 lg:px-12">
                            <Reveal>
                                <Eyebrow light>{employee.eyebrow}</Eyebrow>
                                <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl leading-tight">
                                    {employee.title}
                                </h2>
                                <p className="mt-5 text-sky-100/75 leading-relaxed">{employee.lead}</p>
                            </Reveal>
                            <Reveal className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                                <div className="text-xs font-heading font-semibold tracking-eyebrow text-sky-100/50">
                                    개인 부담 시 자격증 취득 비용
                                </div>
                                <div className="mt-4 grid grid-cols-2 gap-6">
                                    {(employee.costs || []).map((c, i) => (
                                        <div key={i}>
                                            <div className="text-sm text-sky-100/70">{c.name}</div>
                                            <div className="mt-1 stat-number text-2xl md:text-3xl text-aqua-light">{c.price}</div>
                                            <div className="mt-1 text-xs text-sky-100/50">{c.dur}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 border-t border-white/10 pt-4 font-heading font-bold text-aqua-light">
                                    → {employee.free}
                                </div>
                            </Reveal>
                        </div>
                    </div>
                    <div className="relative min-h-[340px] lg:min-h-full">
                        <img
                            src="/images/IMG_8779.jpg"
                            alt="MOBA 임직원 해양 정화 활동"
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                        <div className="absolute bottom-0 inset-x-0 p-8">
                            <div className="text-xs font-heading font-semibold tracking-eyebrow text-aqua-light">
                                {employee.quoteSub}
                            </div>
                            <p className="mt-2 font-heading font-bold text-xl md:text-2xl text-white">{employee.quote}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════ 파트너십 & 국제 표준 ═══════════════ */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <Reveal className="max-w-3xl">
                        <Eyebrow>{partners.eyebrow}</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl text-navy leading-tight">
                            {partners.title}
                        </h2>
                        <p className="mt-5 text-gray-600 text-lg">{partners.lead}</p>
                    </Reveal>

                    {/* PADI AWARE 핵심 파트너 카드 */}
                    <Reveal className="mt-12 rounded-3xl bg-navy-900 text-white p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full border border-aqua/20" aria-hidden="true" />
                        <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full border border-aqua/10" aria-hidden="true" />
                        <div className="relative grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="text-xs font-heading font-semibold tracking-eyebrow text-aqua-light">CORE GLOBAL PARTNER</div>
                                <h3 className="mt-3 font-heading font-extrabold text-3xl md:text-4xl leading-tight">
                                    {partners.padiName}
                                </h3>
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

                    {/* 국제 표준 6 */}
                    <Reveal className="mt-14">
                        <h3 className="font-heading font-bold text-xl md:text-2xl text-navy">{partners.standardsTitle}</h3>
                    </Reveal>
                    <div className="mt-6 grid grid-cols-2 lg:grid-cols-3 gap-4">
                        {(partners.standards || []).map((s, i) => (
                            <Reveal key={i} delay={i * 60}>
                                <div className="h-full rounded-xl border border-mist-deep bg-mist/60 p-5">
                                    <div className="text-[0.7rem] font-heading font-semibold tracking-eyebrow text-aqua-dark">{s.org}</div>
                                    <div className="mt-2 font-heading font-extrabold text-xl text-navy">{s.name}</div>
                                    <div className="mt-1 text-sm text-gray-500">{s.desc}</div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    {/* 평가기관 배지 */}
                    <Reveal className="mt-10 rounded-2xl bg-mist p-6 border border-mist-deep">
                        <div className="text-xs font-heading font-semibold tracking-eyebrow text-aqua-dark">{partners.agenciesNote}</div>
                        <div className="mt-4 flex flex-wrap gap-3">
                            {(partners.agencies || []).map((a, i) => (
                                <span key={i} className="rounded-full border border-navy/15 bg-white px-4 py-2 text-sm font-heading font-semibold text-navy">
                                    {a}
                                </span>
                            ))}
                        </div>
                    </Reveal>

                    {/* 인증 로고 */}
                    <Reveal className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 items-center opacity-90">
                        <div className="flex justify-center"><img src="/images/PADI-AWARE-Logo.webp" alt="PADI AWARE Foundation" className="h-20 md:h-24 w-auto object-contain" loading="lazy" /></div>
                        <div className="flex justify-center"><img src="/images/ISO_Logo_(Red_square).svg.png" alt="ISO 14001" className="h-20 md:h-24 w-auto object-contain" loading="lazy" /></div>
                        <div className="flex justify-center"><img src="/images/O431-Global-Reporting-Initative.png" alt="GRI Standards" className="h-16 md:h-20 w-auto object-contain" loading="lazy" /></div>
                    </Reveal>
                </div>
            </section>

            {/* ═══════════════ 2028 공시 D-DAY ═══════════════ */}
            <section className="section-padding bg-ocean-deep text-white">
                <div className="container-custom">
                    <Reveal className="max-w-3xl">
                        <Eyebrow light>{disclosure.eyebrow}</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl leading-tight">
                            {disclosure.title}
                        </h2>
                        <p className="mt-5 text-sky-100/75 text-lg">{disclosure.lead}</p>
                    </Reveal>
                    <div className="mt-12 grid lg:grid-cols-2 gap-6">
                        <Reveal className="rounded-2xl border-l-4 border-coral bg-white/[0.04] p-7">
                            <div className="text-xs font-heading font-semibold tracking-eyebrow text-coral-light">
                                URGENCY — DATA COLLECTION DEADLINE
                            </div>
                            <p className="mt-4 text-lg leading-relaxed text-white">{disclosure.warning}</p>
                        </Reveal>
                        <Reveal delay={120} className="rounded-2xl bg-aqua text-ink p-7 flex flex-col justify-center">
                            <div className="text-xs font-heading font-semibold tracking-eyebrow text-ink/60">
                                KEY MESSAGE · COMPETITIVE EDGE
                            </div>
                            <div className="mt-3 flex items-baseline gap-2">
                                <span className="stat-number text-6xl md:text-7xl text-ink">{disclosure.edgeValue}</span>
                                <span className="font-heading font-bold text-2xl text-ink/70">{disclosure.edgeLabel}</span>
                            </div>
                            <p className="mt-4 text-ink/80 leading-relaxed">{disclosure.edgeDesc}</p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ═══════════════ 멤버십 & 가격 ═══════════════ */}
            <section className="section-padding bg-mist">
                <div className="container-custom">
                    <Reveal className="max-w-3xl">
                        <Eyebrow>{pricing.eyebrow}</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl text-navy leading-tight">
                            {pricing.title}
                        </h2>
                        <p className="mt-5 text-gray-600 text-lg">{pricing.lead}</p>
                    </Reveal>
                    <div className="mt-12 grid md:grid-cols-3 gap-6 items-stretch">
                        {(pricing.plans || []).map((p, i) => {
                            const dark = p.highlight;
                            const accent = p.accent;
                            return (
                                <Reveal key={i} delay={i * 100}>
                                    <div className={`relative h-full rounded-2xl p-7 md:p-8 flex flex-col ${dark ? 'bg-navy-900 text-white shadow-card-lg lg:-translate-y-2' : accent ? 'bg-aqua text-ink' : 'bg-white border border-mist-deep shadow-card'}`}>
                                        {p.badge && (
                                            <span className="absolute top-5 right-5 rounded-full bg-aqua px-3 py-1 text-xs font-heading font-bold text-ink">{p.badge}</span>
                                        )}
                                        <div className={`text-xs font-heading font-semibold tracking-eyebrow ${dark ? 'text-aqua-light' : accent ? 'text-ink/60' : 'text-aqua-dark'}`}>{p.tag}</div>
                                        <div className={`mt-3 font-heading font-bold text-xl ${dark ? 'text-white' : 'text-navy'}`}>{p.name}</div>
                                        <div className="mt-4 flex items-baseline gap-1">
                                            <span className={`stat-number text-5xl ${dark ? 'text-white' : accent ? 'text-ink' : 'text-navy'}`}>{p.price}</span>
                                            <span className={`font-heading font-bold ${dark ? 'text-aqua-light' : accent ? 'text-ink/70' : 'text-aqua-dark'}`}>{p.unit}</span>
                                        </div>
                                        <div className={`mt-2 text-sm ${dark ? 'text-sky-100/60' : accent ? 'text-ink/70' : 'text-gray-500'}`}>{p.note}</div>
                                        <ul className={`mt-6 space-y-3 text-sm flex-1 ${dark ? 'text-sky-100/85' : accent ? 'text-ink/85' : 'text-gray-600'}`}>
                                            {(p.features || []).map((f, fi) => (
                                                <li key={fi} className="flex items-start gap-2">
                                                    <span className={`mt-0.5 ${dark ? 'text-aqua-light' : accent ? 'text-ink' : 'text-aqua-dark'}`} aria-hidden="true">✓</span>
                                                    <span>{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                    <Reveal className="mt-8 text-center">
                        <Link to="/membership" className="inline-flex items-center gap-2 font-heading font-semibold text-navy hover:text-aqua-dark transition-colors">
                            멤버십 상세 보기 <span aria-hidden="true">→</span>
                        </Link>
                    </Reveal>
                </div>
            </section>

            {/* ═══════════════ 최종 CTA ═══════════════ */}
            <section className="ocean-hero relative text-white">
                <OceanFX />
                <div className="container-custom relative z-10 section-padding">
                    <Reveal className="max-w-3xl">
                        <Eyebrow light>{cta.eyebrow}</Eyebrow>
                        <h2 className="mt-5 font-heading font-extrabold text-5xl md:text-7xl leading-[1.05]">
                            {cta.title}
                        </h2>
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
                        <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-aqua px-8 py-4 text-base font-heading font-bold text-ink shadow-glow transition-all duration-200 hover:bg-aqua-light hover:-translate-y-0.5">
                            {cta.buttonPrimary} <span aria-hidden="true">→</span>
                        </Link>
                        <Link to="/membership" className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-8 py-4 text-base font-heading font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15">
                            {cta.buttonSecondary}
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
