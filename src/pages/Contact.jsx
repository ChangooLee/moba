import React, { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../components/layout/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Contact = () => {
    const { t, ready } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [contactInfo, setContactInfo] = useState([]);
    const [faqs, setFaqs] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 폼 제출 로직 (실제 구현에서는 API 호출)
        console.log('Form submitted:', formData);
        alert(t('pages.contact.form.successMessage'));
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    useEffect(() => {
        if (ready) {
            setContactInfo([
                {
                    icon: '📧',
                    key: 'email',
                    title: t('pages.contact.contactMethods.email.title'),
                    value: t('pages.contact.contactMethods.email.value'),
                    description: t('pages.contact.contactMethods.email.description')
                },
                {
                    icon: '📞',
                    key: 'phone',
                    title: t('pages.contact.contactMethods.phone.title'),
                    value: t('pages.contact.contactMethods.phone.value'),
                    description: t('pages.contact.contactMethods.phone.description')
                },
                {
                    icon: '🌐',
                    key: 'website',
                    title: t('pages.contact.contactMethods.website.title'),
                    value: t('pages.contact.contactMethods.website.value'),
                    description: t('pages.contact.contactMethods.website.description')
                },
                {
                    icon: '💬',
                    key: 'kakao',
                    title: t('pages.contact.contactMethods.kakao.title'),
                    value: t('pages.contact.contactMethods.kakao.value'),
                    description: t('pages.contact.contactMethods.kakao.description')
                }
            ]);

            setFaqs([
                {
                    key: 'membership',
                    question: t('pages.contact.faq.questions.membership.question'),
                    answer: t('pages.contact.faq.questions.membership.answer')
                },
                {
                    key: 'activities',
                    question: t('pages.contact.faq.questions.activities.question'),
                    answer: t('pages.contact.faq.questions.activities.answer')
                },
                {
                    key: 'corporate',
                    question: t('pages.contact.faq.questions.corporate.question'),
                    answer: t('pages.contact.faq.questions.corporate.answer')
                },
                {
                    key: 'funding',
                    question: t('pages.contact.faq.questions.funding.question'),
                    answer: t('pages.contact.faq.questions.funding.answer')
                }
            ]);
        }
    }, [ready, t]);

    if (!ready) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-padi-blue mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            {/* 히어로 섹션 */}
            <section className="bg-gradient-to-r from-padi-blue to-padi-dark-blue text-white section-padding">
                <Container>
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {t('pages.contact.title')}
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            {t('pages.contact.description')}
                        </p>
                    </div>
                </Container>
            </section>

            {/* 연락처 정보 및 문의 폼 */}
            <section className="section-padding">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* 연락처 정보 */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                {t('pages.contact.info.title')}
                            </h2>
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <Card key={index} className="flex items-start gap-4">
                                        <div className="text-3xl">{info.icon}</div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                                {info.title}
                                            </h3>
                                            <p className="text-padi-blue font-medium mb-1">
                                                {info.value}
                                            </p>
                                            <p className="text-gray-600 text-sm">
                                                {info.description}
                                            </p>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* 문의 폼 */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                {t('pages.contact.form.title')}
                            </h2>
                            <Card>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            {t('pages.contact.form.name')}
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-padi-blue focus:border-padi-blue"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            {t('pages.contact.form.email')}
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-padi-blue focus:border-padi-blue"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                            {t('pages.contact.form.subject')}
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-padi-blue focus:border-padi-blue"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            {t('pages.contact.form.message')}
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={6}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-padi-blue focus:border-padi-blue"
                                        />
                                    </div>

                                    <Button type="submit" size="lg" className="w-full">
                                        {t('pages.contact.form.send')}
                                    </Button>
                                </form>
                            </Card>
                        </div>
                    </div>
                </Container>
            </section>

            {/* FAQ 섹션 */}
            <section className="bg-gray-50 section-padding">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {t('pages.contact.faq.title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('pages.contact.faq.subtitle')}
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {faqs.map((faq, index) => (
                            <Card key={index}>
                                <details className="group">
                                    <summary className="flex justify-between items-center cursor-pointer list-none">
                                        <h3 className="text-lg font-semibold text-gray-900 group-open:text-padi-blue">
                                            {faq.question}
                                        </h3>
                                        <span className="text-padi-blue group-open:rotate-180 transition-transform duration-200">
                                            ▼
                                        </span>
                                    </summary>
                                    <div className="mt-4 text-gray-600">
                                        {faq.answer}
                                    </div>
                                </details>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA 섹션 */}
            <section className="bg-padi-blue text-white section-padding">
                <Container>
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            {t('pages.contact.cta.title')}
                        </h2>
                        <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                            {t('pages.contact.cta.subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button to="/contact" size="lg" className="bg-white text-padi-blue hover:bg-gray-100">
                                {t('common.buttons.contact')}
                            </Button>
                            <Button to="/about" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-padi-blue">
                                {t('common.buttons.learnMore')}
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Contact;

