import React, { useMemo, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Home = () => {
    const { t, ready } = useTranslation();
    const [stats, setStats] = useState([]);
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        if (ready) {
            setStats([
                { number: '10,000+', label: t('pages.home.stats.members') },
                { number: '50+', label: t('pages.home.stats.projects') },
                { number: '25+', label: t('pages.home.stats.countries') },
                { number: '95%', label: t('pages.home.stats.impact') },
            ]);

            setFeatures([
                {
                    icon: '🌊',
                    title: t('pages.home.features.conservation.title'),
                    description: t('pages.home.features.conservation.description'),
                },
                {
                    icon: '📚',
                    title: t('pages.home.features.education.title'),
                    description: t('pages.home.features.education.description'),
                },
                {
                    icon: '🤝',
                    title: t('pages.home.features.community.title'),
                    description: t('pages.home.features.community.description'),
                },
                {
                    icon: '⚡',
                    title: t('pages.home.features.action.title'),
                    description: t('pages.home.features.action.description'),
                },
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
            <section className="bg-gradient-to-br from-padi-blue to-padi-dark-blue text-white section-padding">
                <Container>
                    <div className="text-center">
                        {/* 로고 */}
                        <div className="mb-8 animate-fade-in">
                            <img
                                src="/images/logo-512-transparent.png"
                                alt="MOBA Logo"
                                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] mx-auto object-contain drop-shadow-lg"
                            />
                        </div>
                        <h1 className="text-2xl md:text-4xl font-bold mb-6 animate-fade-in font-heading">
                            {t('pages.home.hero.title')}
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-slide-up">
                            {t('pages.home.hero.subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg">
                                {t('pages.home.hero.cta')}
                            </Button>
                            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-padi-blue">
                                {t('common.buttons.learnMore')}
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/* 통계 섹션 */}
            <section className="py-16 bg-gray-50">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
                            {t('pages.home.stats.title')}
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-padi-blue mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* 주요 활동 섹션 */}
            <section className="section-padding">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
                            {t('pages.home.features.title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('pages.home.features.subtitle')}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <Card key={index} hover className="text-center">
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
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
                            {t('pages.home.hero.title')}
                        </h2>
                        <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                            {t('pages.home.hero.subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/membership">
                                <Button size="lg" className="bg-white text-padi-blue hover:bg-gray-100">
                                    {t('common.buttons.join')}
                                </Button>
                            </Link>
                            <Link to="/about">
                                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-padi-blue">
                                    {t('common.buttons.learnMore')}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Home;

