import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Reveal, Eyebrow, Icon, PageHero, CtaBand } from '../components/ui/primitives';

const METHOD_ICONS = { email: 'mail', phone: 'phone', website: 'globe', kakao: 'chat' };
const CONTACT_EMAIL = 'make.ocean.blue.again.project@gmail.com';

const Contact = () => {
    const { t, ready } = useTranslation();
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(formData.subject || 'MOBA 문의');
        const body = encodeURIComponent(
            `${formData.message}\n\n---\n${formData.name} (${formData.email})`
        );
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    };

    if (!ready) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-ink">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-aqua" />
            </div>
        );
    }

    const methodKeys = ['email', 'phone', 'website', 'kakao'];
    const faqKeys = ['membership', 'activities', 'corporate', 'funding'];
    const inputClass =
        'w-full rounded-lg border border-mist-deep bg-white px-4 py-3 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-aqua/40 focus:border-aqua transition';

    return (
        <div className="overflow-x-hidden">
            <PageHero
                eyebrow="CONTACT"
                title={t('pages.contact.title')}
                subtitle={t('pages.contact.description')}
                image="/images/padi/featured/team-surface.jpg"
            />

            {/* 연락처 + 폼 */}
            <section className="section-padding bg-white">
                <div className="container-custom grid lg:grid-cols-2 gap-10 lg:gap-14">
                    {/* 연락처 방법 */}
                    <Reveal>
                        <Eyebrow>GET IN TOUCH</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-2xl md:text-4xl text-navy">
                            {t('pages.contact.info.title')}
                        </h2>
                        <div className="mt-8 space-y-4">
                            {methodKeys.map((key) => {
                                const base = `pages.contact.contactMethods.${key}`;
                                return (
                                    <div key={key} className="flex items-start gap-4 rounded-2xl border border-mist-deep bg-mist/40 p-5">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-aqua-light">
                                            <Icon name={METHOD_ICONS[key]} className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading font-bold text-navy">{t(`${base}.title`)}</h3>
                                            <p className="mt-0.5 text-aqua-dark font-medium">{t(`${base}.value`)}</p>
                                            <p className="mt-1 text-sm text-gray-500">{t(`${base}.description`)}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Reveal>

                    {/* 문의 폼 */}
                    <Reveal delay={120}>
                        <div className="rounded-2xl border border-mist-deep bg-mist/40 p-7 md:p-8">
                            <h2 className="font-heading font-extrabold text-2xl text-navy">
                                {t('pages.contact.form.title')}
                            </h2>
                            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">
                                        {t('pages.contact.form.name')}
                                    </label>
                                    <input id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange} className={inputClass} />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
                                        {t('pages.contact.form.email')}
                                    </label>
                                    <input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} className={inputClass} />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-navy mb-1.5">
                                        {t('pages.contact.form.subject')}
                                    </label>
                                    <input id="subject" name="subject" type="text" required value={formData.subject} onChange={handleInputChange} className={inputClass} />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-navy mb-1.5">
                                        {t('pages.contact.form.message')}
                                    </label>
                                    <textarea id="message" name="message" rows={6} required value={formData.message} onChange={handleInputChange} className={inputClass} />
                                </div>
                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-heading font-bold text-white transition-colors hover:bg-navy-700"
                                >
                                    {t('pages.contact.form.send')} <Icon name="arrowRight" className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-padding bg-mist">
                <div className="container-custom">
                    <Reveal className="max-w-3xl">
                        <Eyebrow>FAQ</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl text-navy leading-tight">
                            {t('pages.contact.faq.title')}
                        </h2>
                        <p className="mt-5 text-gray-600 text-lg">{t('pages.contact.faq.subtitle')}</p>
                    </Reveal>
                    <div className="mt-10 max-w-3xl space-y-4">
                        {faqKeys.map((key, i) => (
                            <Reveal key={key} delay={i * 60}>
                                <details className="group rounded-2xl border border-mist-deep bg-white p-6">
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                                        <h3 className="font-heading font-bold text-navy group-open:text-aqua-dark transition-colors">
                                            {t(`pages.contact.faq.questions.${key}.question`)}
                                        </h3>
                                        <Icon name="chevronDown" className="w-5 h-5 shrink-0 text-aqua-dark transition-transform duration-200 group-open:rotate-180" strokeWidth={2} />
                                    </summary>
                                    <p className="mt-4 text-gray-600 leading-relaxed">
                                        {t(`pages.contact.faq.questions.${key}.answer`)}
                                    </p>
                                </details>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <CtaBand
                title={t('pages.contact.cta.title')}
                subtitle={t('pages.contact.cta.subtitle')}
                primary={{ to: '/join', label: t('common.buttons.getInvolved') }}
                secondary={{ to: '/how-it-works', label: t('common.buttons.viewHowItWorks') }}
            />
        </div>
    );
};

export default Contact;
