import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

/* ── 스크롤 인뷰 훅 ──────────────────────────────── */
export const useInView = (options = { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }) => {
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
export const Reveal = ({ children, className = '', delay = 0, as: Tag = 'div' }) => {
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
export const CountUp = ({ value, className = '' }) => {
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

/* ── eyebrow 라벨 ─────────────────────────────────── */
export const Eyebrow = ({ children, light = false, className = '' }) => (
    <span className={`${light ? 'eyebrow-light' : 'eyebrow'} ${className}`}>
        <span className="inline-block w-6 h-px bg-current opacity-70" />
        {children}
    </span>
);

/* ── 딥오션 히어로 배경 효과 ──────────────────────── */
const BUBBLES = [
    { l: '8%', s: 10, d: 13, delay: 0 }, { l: '18%', s: 6, d: 17, delay: 3 },
    { l: '27%', s: 14, d: 11, delay: 6 }, { l: '38%', s: 8, d: 15, delay: 1 },
    { l: '47%', s: 5, d: 19, delay: 8 }, { l: '58%', s: 12, d: 12, delay: 4 },
    { l: '66%', s: 7, d: 16, delay: 2 }, { l: '74%', s: 10, d: 14, delay: 7 },
    { l: '83%', s: 6, d: 18, delay: 5 }, { l: '91%', s: 13, d: 12, delay: 9 },
];

export const OceanFX = () => (
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

/* ── 라인 아이콘 세트 (이모지 대체) ───────────────── */
const PATHS = {
    check: <path d="M20 6 9 17l-5-5" />,
    arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
    arrowUpRight: <path d="M7 17 17 7M8 7h9v9" />,
    chevronDown: <path d="m6 9 6 6 6-6" />,
    target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.2" /></>,
    eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></>,
    leaf: <><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6" /></>,
    link: <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></>,
    bulb: <><path d="M9 18h6" /><path d="M10 22h4" /><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" /></>,
    shield: <><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></>,
    waves: <><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.5 0 2.5 2 5 2s2.5-2 5-2c1.3 0 1.9.5 2.5 1" /><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.5 0 2.5 2 5 2s2.5-2 5-2c1.3 0 1.9.5 2.5 1" /><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.5 0 2.5 2 5 2s2.5-2 5-2c1.3 0 1.9.5 2.5 1" /></>,
    book: <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
    calendar: <><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M8 2v4M16 2v4M3 10h18" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    pin: <><path d="M20 10c0 4.4-8 12-8 12s-8-7.6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
    mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></>,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M2.5 12h19" /><path d="M12 3a15 15 0 0 1 4 9 15 15 0 0 1-4 9 15 15 0 0 1-4-9 15 15 0 0 1 4-9z" /></>,
    chat: <path d="M7.5 19.5 3 21l1.5-4.5A9 9 0 1 1 7.5 19.5Z" />,
    mic: <><rect x="9" y="2" width="6" height="11" rx="3" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><path d="M12 19v3" /></>,
    flask: <><path d="M9 3h6" /><path d="M10 3v6.5L4.7 18.2A2 2 0 0 0 6.4 21h11.2a2 2 0 0 0 1.7-2.8L14 9.5V3" /><path d="M7 15h10" /></>,
    camera: <><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3.2" /></>,
    chart: <><path d="M3 3v16a2 2 0 0 0 2 2h16" /><path d="M18 17V9M13 17V5M8 17v-3" /></>,
    award: <><circle cx="12" cy="8" r="6" /><path d="M15.5 12.9 17 22l-5-3-5 3 1.5-9.1" /></>,
    sparkles: <path d="M12 3l1.9 5.6L19.5 10.5l-5.6 1.9L12 18l-1.9-5.6L4.5 10.5l5.6-1.9L12 3Z" />,
    recycle: <><path d="M7 19H4.8a2 2 0 0 1-1.7-3l1.3-2.2" /><path d="m9.3 4.9 1.1-1.9a2 2 0 0 1 3.4 0l1.3 2.2" /><path d="M14.7 19H19a2 2 0 0 0 1.7-3l-1.1-1.9" /><path d="m7.3 8.2-2.6 1.5 1.5 2.6" /><path d="M12 22l2.6-1.5-1.5-2.6" /><path d="m19 10-.6-3-3 .6" /></>,
    ship: <><path d="M4 11 2 20a1 1 0 0 0 .9 1.3c3 .3 5.1-1.3 5.1-1.3s2 1.5 4 1.5 4-1.5 4-1.5 2.1 1.6 5.1 1.3A1 1 0 0 0 22 20l-2-9" /><path d="M6 11V6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5" /><path d="M12 3v3" /></>,
    document: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M8 13h8M8 17h8" /></>,
};

export const Icon = ({ name, className = 'w-6 h-6', strokeWidth = 1.75 }) => {
    const inner = PATHS[name];
    if (!inner) return null;
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            {inner}
        </svg>
    );
};

/* ── 서브페이지 히어로 (실사진 배경 옵션) ──────────── */
export const PageHero = ({ eyebrow, title, subtitle, image }) => (
    <section className="ocean-hero relative text-white overflow-hidden">
        {image && (
            <>
                <img src={image} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/45" aria-hidden="true" />
                <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" aria-hidden="true" />
            </>
        )}
        <OceanFX />
        <div className="container-custom relative z-10 pt-28 pb-20 md:pt-36 md:pb-28">
            <div className="max-w-3xl">
                {eyebrow && (
                    <div className="animate-fade-in">
                        <Eyebrow light>{eyebrow}</Eyebrow>
                    </div>
                )}
                <h1 className="mt-5 font-heading font-extrabold leading-[1.08] tracking-tight text-4xl md:text-6xl animate-slide-up">
                    {title}
                </h1>
                {subtitle && (
                    <p className="mt-5 text-lg md:text-xl text-sky-100/85 leading-relaxed whitespace-pre-line max-w-2xl animate-slide-up">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    </section>
);

/* ── 최종 CTA 밴드 ────────────────────────────────── */
export const CtaBand = ({ eyebrow, title, subtitle, primary, secondary }) => (
    <section className="ocean-hero relative text-white">
        <OceanFX />
        <div className="container-custom relative z-10 section-padding text-center">
            <Reveal className="max-w-3xl mx-auto">
                {eyebrow && <Eyebrow light>{eyebrow}</Eyebrow>}
                <h2 className="mt-5 font-heading font-extrabold text-3xl md:text-5xl leading-tight">
                    {title}
                </h2>
                {subtitle && <p className="mt-5 text-lg text-sky-100/85 max-w-2xl mx-auto">{subtitle}</p>}
                <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
                    {primary && (
                        <Link to={primary.to} className="inline-flex items-center justify-center gap-2 rounded-full bg-aqua px-8 py-4 text-base font-heading font-bold text-ink shadow-glow transition-all duration-200 hover:bg-aqua-light hover:-translate-y-0.5">
                            {primary.label} <Icon name="arrowRight" className="w-5 h-5" />
                        </Link>
                    )}
                    {secondary && (
                        <Link to={secondary.to} className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-8 py-4 text-base font-heading font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/15">
                            {secondary.label}
                        </Link>
                    )}
                </div>
            </Reveal>
        </div>
    </section>
);
