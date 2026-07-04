import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Reveal, Eyebrow, Icon, PageHero, CtaBand } from '../components/ui/primitives';

const BENEFIT_ICONS = { education: 'book', events: 'calendar', network: 'globe', resources: 'recycle' };

const Membership = () => {
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

    const benefitKeys = ['education', 'events', 'network', 'resources'];
    const planDefs = [
        { key: 'corporate', highlight: true },
        { key: 'instructor', highlight: false },
        { key: 'diver', highlight: false },
    ];

    return (
        <div className="overflow-x-hidden">
            <PageHero
                eyebrow="MEMBERSHIP"
                title={t('pages.membership.title')}
                subtitle={t('pages.membership.description')}
            />

            {/* 멤버 혜택 */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <Reveal className="max-w-3xl">
                        <Eyebrow>BENEFITS</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl text-navy leading-tight">
                            {t('pages.membership.benefits.title')}
                        </h2>
                        <p className="mt-5 text-gray-600 text-lg">{t('pages.membership.benefits.subtitle')}</p>
                    </Reveal>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefitKeys.map((key, i) => (
                            <Reveal key={key} delay={i * 80}>
                                <div className="h-full rounded-2xl border border-mist-deep bg-mist/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900 text-aqua-light">
                                        <Icon name={BENEFIT_ICONS[key]} className="w-6 h-6" />
                                    </div>
                                    <h3 className="mt-5 font-heading font-bold text-lg text-navy">
                                        {t(`pages.membership.benefits.${key}.title`)}
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                                        {t(`pages.membership.benefits.${key}.description`)}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 멤버십 플랜 */}
            <section className="section-padding bg-mist">
                <div className="container-custom">
                    <Reveal className="max-w-3xl">
                        <Eyebrow>PLANS</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl text-navy leading-tight">
                            {t('pages.membership.plans.title')}
                        </h2>
                        <p className="mt-5 text-gray-600 text-lg">{t('pages.membership.plans.subtitle')}</p>
                    </Reveal>
                    <div className="mt-12 grid md:grid-cols-3 gap-6 items-stretch">
                        {planDefs.map((def, i) => {
                            const base = `pages.membership.plans.${def.key}`;
                            const features = arr(`${base}.features`);
                            const dark = def.highlight;
                            return (
                                <Reveal key={def.key} delay={i * 100}>
                                    <div className={`relative h-full rounded-2xl p-7 md:p-8 flex flex-col ${dark ? 'bg-navy-900 text-white shadow-card-lg lg:-translate-y-2' : 'bg-white border border-mist-deep shadow-card'}`}>
                                        {dark && (
                                            <span className="absolute top-5 right-5 rounded-full bg-aqua px-3 py-1 text-xs font-heading font-bold text-ink">
                                                RECOMMENDED
                                            </span>
                                        )}
                                        <h3 className={`font-heading font-bold text-xl ${dark ? 'text-white' : 'text-navy'}`}>
                                            {t(`${base}.title`)}
                                        </h3>
                                        <div className={`mt-3 stat-number text-4xl ${dark ? 'text-aqua-light' : 'text-navy'}`}>
                                            {t(`${base}.price`)}
                                        </div>
                                        <p className={`mt-3 text-sm ${dark ? 'text-sky-100/70' : 'text-gray-500'}`}>
                                            {t(`${base}.description`)}
                                        </p>
                                        <ul className={`mt-6 space-y-3 text-sm flex-1 ${dark ? 'text-sky-100/85' : 'text-gray-600'}`}>
                                            {features.map((f, fi) => (
                                                <li key={fi} className="flex items-start gap-2">
                                                    <Icon name="check" className={`w-4 h-4 mt-0.5 shrink-0 ${dark ? 'text-aqua-light' : 'text-aqua-dark'}`} />
                                                    <span>{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Link
                                            to="/contact"
                                            className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-heading font-bold transition-all ${dark ? 'bg-aqua text-ink hover:bg-aqua-light' : 'bg-navy text-white hover:bg-navy-700'}`}
                                        >
                                            {t(`${base}.buttonText`)} <Icon name="arrowRight" className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            <CtaBand
                eyebrow="NEXT STEP"
                title={t('pages.membership.cta.title')}
                subtitle={t('pages.membership.cta.subtitle')}
                primary={{ to: '/contact', label: t('common.buttons.contact') }}
                secondary={{ to: '/about', label: t('common.buttons.learnMore') }}
            />
        </div>
    );
};

export default Membership;
