import React, { useMemo, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../components/layout/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Membership = () => {
    const { t, ready } = useTranslation();
    const [benefits, setBenefits] = useState([]);
    const [plans, setPlans] = useState([]);
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        if (ready) {
            setBenefits([
                {
                    icon: '📚',
                    key: 'education',
                    title: t('pages.membership.benefits.education.title'),
                    description: t('pages.membership.benefits.education.description')
                },
                {
                    icon: '🎉',
                    key: 'events',
                    title: t('pages.membership.benefits.events.title'),
                    description: t('pages.membership.benefits.events.description')
                },
                {
                    icon: '🌐',
                    key: 'network',
                    title: t('pages.membership.benefits.network.title'),
                    description: t('pages.membership.benefits.network.description')
                },
                {
                    icon: '🛠️',
                    key: 'resources',
                    title: t('pages.membership.benefits.resources.title'),
                    description: t('pages.membership.benefits.resources.description')
                }
            ]);

            setPlans([
                {
                    name: t('pages.membership.plans.corporate.title'),
                    price: t('pages.membership.plans.corporate.price'),
                    description: t('pages.membership.plans.corporate.description'),
                    features: t('pages.membership.plans.corporate.features', { returnObjects: true }) || [],
                    popular: true,
                    buttonText: t('pages.membership.plans.corporate.buttonText'),
                    buttonVariant: 'primary'
                },
                {
                    name: t('pages.membership.plans.instructor.title'),
                    price: t('pages.membership.plans.instructor.price'),
                    description: t('pages.membership.plans.instructor.description'),
                    features: t('pages.membership.plans.instructor.features', { returnObjects: true }) || [],
                    popular: false,
                    buttonText: t('pages.membership.plans.instructor.buttonText'),
                    buttonVariant: 'outline'
                },
                {
                    name: t('pages.membership.plans.diver.title'),
                    price: t('pages.membership.plans.diver.price'),
                    description: t('pages.membership.plans.diver.description'),
                    features: t('pages.membership.plans.diver.features', { returnObjects: true }) || [],
                    popular: false,
                    buttonText: t('pages.membership.plans.diver.buttonText'),
                    buttonVariant: 'outline'
                }
            ]);

            setTestimonials([
                {
                    key: 'kimBada',
                    name: t('pages.membership.testimonials.members.kimBada.name'),
                    role: t('pages.membership.testimonials.members.kimBada.role'),
                    content: t('pages.membership.testimonials.members.kimBada.content'),
                    avatar: '👨‍🔬'
                },
                {
                    key: 'parkGreen',
                    name: t('pages.membership.testimonials.members.parkGreen.name'),
                    role: t('pages.membership.testimonials.members.parkGreen.role'),
                    content: t('pages.membership.testimonials.members.parkGreen.content'),
                    avatar: '👩‍💼'
                },
                {
                    key: 'leeBlue',
                    name: t('pages.membership.testimonials.members.leeBlue.name'),
                    role: t('pages.membership.testimonials.members.leeBlue.role'),
                    content: t('pages.membership.testimonials.members.leeBlue.content'),
                    avatar: '👨‍💻'
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
                            {t('pages.membership.title')}
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            {t('pages.membership.description')}
                        </p>
                    </div>
                </Container>
            </section>

            {/* 멤버 혜택 */}
            <section className="section-padding">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {t('pages.membership.benefits.title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('pages.membership.benefits.subtitle')}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <Card key={index} className="text-center">
                                <div className="text-4xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600">
                                    {benefit.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* 멤버십 플랜 */}
            <section className="bg-gray-50 section-padding">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {t('pages.membership.plans.title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('pages.membership.plans.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <Card
                                key={index}
                                className={`relative ${plan.popular ? 'ring-2 ring-padi-blue' : ''}`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-padi-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                                            인기
                                        </span>
                                    </div>
                                )}

                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {plan.name}
                                    </h3>
                                    <div className="text-3xl font-bold text-padi-blue mb-4">
                                        {plan.price}
                                    </div>
                                    <p className="text-gray-600 mb-6">
                                        {plan.description}
                                    </p>

                                    <ul className="space-y-3 mb-8 text-left">
                                        {Array.isArray(plan.features) ? plan.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start gap-2">
                                                <span className="text-green-500 mt-1">✓</span>
                                                <span className="text-gray-600">{feature}</span>
                                            </li>
                                        )) : (
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-500 mt-1">✓</span>
                                                <span className="text-gray-600">{plan.features}</span>
                                            </li>
                                        )}
                                    </ul>

                                    <Button
                                        variant={plan.buttonVariant}
                                        size="lg"
                                        className="w-full"
                                    >
                                        {plan.buttonText}
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* 멤버 후기 */}
            <section className="section-padding">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {t('pages.membership.testimonials.title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('pages.membership.testimonials.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="text-center">
                                <div className="text-4xl mb-4">{testimonial.avatar}</div>
                                <p className="text-gray-600 mb-6 italic">
                                    "{testimonial.content}"
                                </p>
                                <div>
                                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-padi-blue text-sm">{testimonial.role}</p>
                                </div>
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
                            {t('pages.membership.cta.title')}
                        </h2>
                        <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                            {t('pages.membership.cta.subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-padi-blue hover:bg-gray-100">
                                {t('common.buttons.join')}
                            </Button>
                            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-padi-blue">
                                {t('common.buttons.learnMore')}
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Membership;

