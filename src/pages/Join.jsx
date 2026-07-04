import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Reveal, Eyebrow, Icon, PageHero, CtaBand } from '../components/ui/primitives';

const BENEFIT_ICONS = { education: 'book', events: 'calendar', network: 'globe', resources: 'recycle' };
const LANE_ICONS = ['ship', 'shield', 'waves'];

const Join = () => {
    const { t, ready } = useTranslation();
    if (!ready) {
        return <div className="min-h-screen flex items-center justify-center bg-ink"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-aqua" /></div>;
    }
    const obj = (k, fb) => { const v = t(k, { returnObjects: true }); return v && typeof v === 'object' ? v : fb; };
    const arr = (k) => { const v = t(k, { returnObjects: true }); return Array.isArray(v) ? v : []; };

    const lanes = obj('pages.join.lanes', {});
    const benefitKeys = ['education', 'events', 'network', 'resources'];
    const planDefs = ['instructor', 'diver'];

    return (
        <div className="overflow-x-hidden">
            <PageHero eyebrow="GET INVOLVED" title={t('pages.join.title')} subtitle={t('pages.join.subtitle')} image="/images/padi/featured/lifestyle-sunrise.jpg" />

            {/* 3 레인 라우터 */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <Reveal><Eyebrow>{lanes.eyebrow}</Eyebrow></Reveal>
                    <div className="mt-8 grid md:grid-cols-3 gap-6 items-stretch">
                        {(lanes.items || []).map((lane, i) => {
                            const primary = i === 0;
                            return (
                                <Reveal key={i} delay={i * 100}>
                                    <div className={`h-full rounded-2xl p-8 flex flex-col ${primary ? 'bg-navy-900 text-white shadow-card-lg' : 'bg-mist/60 border border-mist-deep'}`}>
                                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${primary ? 'bg-aqua text-ink' : 'bg-navy-900 text-aqua-light'}`}>
                                            <Icon name={LANE_ICONS[i] || 'waves'} className="w-6 h-6" />
                                        </div>
                                        <div className={`mt-5 text-xs font-mono font-semibold tracking-eyebrow ${primary ? 'text-aqua-light' : 'text-aqua-dark'}`}>{lane.tag}</div>
                                        <h3 className={`mt-2 font-heading font-extrabold text-2xl ${primary ? 'text-white' : 'text-navy'}`}>{lane.title}</h3>
                                        <p className={`mt-3 flex-1 leading-relaxed ${primary ? 'text-sky-100/75' : 'text-gray-600'}`}>{lane.desc}</p>
                                        <Link
                                            to={lane.to}
                                            className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-heading font-bold transition-all ${primary ? 'bg-aqua text-ink hover:bg-aqua-light' : 'bg-navy text-white hover:bg-navy-700'}`}
                                        >
                                            {lane.cta} <Icon name="arrowRight" className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 참여 혜택 */}
            <section className="section-padding bg-mist">
                <div className="container-custom">
                    <Reveal className="max-w-3xl">
                        <Eyebrow>BENEFITS</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl text-navy leading-tight">{t('pages.membership.benefits.title')}</h2>
                        <p className="mt-5 text-gray-600 text-lg">{t('pages.membership.benefits.subtitle')}</p>
                    </Reveal>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefitKeys.map((key, i) => (
                            <Reveal key={key} delay={i * 80}>
                                <div className="h-full rounded-2xl border border-mist-deep bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900 text-aqua-light">
                                        <Icon name={BENEFIT_ICONS[key]} className="w-6 h-6" />
                                    </div>
                                    <h3 className="mt-5 font-heading font-bold text-lg text-navy">{t(`pages.membership.benefits.${key}.title`)}</h3>
                                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">{t(`pages.membership.benefits.${key}.description`)}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 강사 · 다이버 멤버십 */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <Reveal className="max-w-3xl">
                        <Eyebrow>INDIVIDUAL &amp; INSTRUCTOR</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl text-navy leading-tight">{t('pages.membership.plans.title')}</h2>
                        <p className="mt-5 text-gray-600 text-lg">{t('pages.membership.plans.subtitle')}</p>
                    </Reveal>
                    <div className="mt-12 grid md:grid-cols-2 gap-6 items-stretch max-w-4xl">
                        {planDefs.map((key, i) => {
                            const base = `pages.membership.plans.${key}`;
                            const features = arr(`${base}.features`);
                            return (
                                <Reveal key={key} delay={i * 100}>
                                    <div className="h-full rounded-2xl bg-mist/50 border border-mist-deep p-7 md:p-8 flex flex-col">
                                        <h3 className="font-heading font-bold text-xl text-navy">{t(`${base}.title`)}</h3>
                                        <div className="mt-2 stat-number text-3xl text-navy">{t(`${base}.price`)}</div>
                                        <p className="mt-3 text-sm text-gray-500">{t(`${base}.description`)}</p>
                                        <ul className="mt-5 space-y-2.5 text-sm flex-1 text-gray-600">
                                            {features.map((f, fi) => (
                                                <li key={fi} className="flex items-start gap-2">
                                                    <Icon name="check" className="w-4 h-4 mt-0.5 shrink-0 text-aqua-dark" />
                                                    <span>{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Link to="/contact" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-heading font-bold text-white transition-all hover:bg-navy-700">
                                            {t(`${base}.buttonText`)} <Icon name="arrowRight" className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                    <Reveal className="mt-8">
                        <div className="rounded-2xl border border-aqua/40 bg-aqua-50 p-6 md:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                                <div className="font-heading font-bold text-navy">기업으로 참여하시나요?</div>
                                <p className="mt-1 text-sm text-gray-600">임직원 단위 도입은 전용 제안서로 안내드립니다.</p>
                            </div>
                            <Link to="/join/business" className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-heading font-bold text-white transition-all hover:bg-navy-700 shrink-0">
                                {t('common.buttons.businessInquiry')} <Icon name="arrowRight" className="w-4 h-4" />
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            <CtaBand
                eyebrow="NEXT STEP"
                title={t('pages.membership.cta.title')}
                subtitle={t('pages.membership.cta.subtitle')}
                primary={{ to: '/contact', label: t('common.buttons.contact') }}
                secondary={{ to: '/how-it-works', label: t('common.buttons.viewHowItWorks') }}
            />
        </div>
    );
};

export default Join;
