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
    const [recentActivity, setRecentActivity] = useState(null);

    useEffect(() => {
        if (ready) {
            setStats([
                { number: '', label: t('pages.home.stats.members') },
                { number: '', label: t('pages.home.stats.projects') },
                { number: '', label: t('pages.home.stats.countries') },
                { number: '', label: t('pages.home.stats.impact') },
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

            // 최근 활동 데이터 설정
            const event = t('pages.schedule.pastEvents.pohang20250920', { returnObjects: true });
            if (event && typeof event === 'object') {
                setRecentActivity(event);
            }
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
            <section className="bg-white text-gray-900 section-padding">
                <Container>
                    <div className="text-center">
                        {/* 로고 */}
                        <div className="mb-4 animate-fade-in">
                            <div className="mx-auto w-fit">
                                <img
                                    src="/images/logo-512-transparent.png?v=20241022"
                                    alt="MOBA Logo"
                                    className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] object-contain"
                                />
                            </div>
                        </div>
                        <h1 className="text-2xl md:text-4xl font-bold mb-6 animate-fade-in font-heading">
                            {t('pages.home.hero.title')}
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-gray-600 animate-slide-up whitespace-pre-line leading-relaxed [&_br]:mb-1">
                            {t('pages.home.hero.subtitle')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-12 justify-center">
                            <Button size="lg" className="bg-padi-blue text-white hover:bg-padi-dark-blue">
                                {t('pages.home.hero.cta')}
                            </Button>
                            <Button variant="outline" size="lg" className="border-padi-blue text-padi-blue hover:bg-padi-blue hover:text-white">
                                {t('pages.home.hero.ctaSecondary')}
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
                                {stat.number ? (
                                    <div className="text-3xl md:text-4xl font-bold text-padi-blue mb-2">{stat.number}</div>
                                ) : null}
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

            {/* 파트너 및 인증기관 섹션 */}
            <section className="section-padding bg-gray-50">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
                            파트너 및 인증기관
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            MOBA와 협력하는 국제 인증 기관 및 파트너
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center max-w-4xl mx-auto">
                        <div className="flex justify-center">
                            <img src="/images/padi-aware.svg" alt="PADI AWARE" className="h-20 w-auto" />
                        </div>
                        <div className="flex justify-center">
                            <img src="/images/iso-14001.svg" alt="ISO 14001" className="h-20 w-auto" />
                        </div>
                        <div className="flex justify-center">
                            <img src="/images/gri.svg" alt="GRI" className="h-20 w-auto" />
                        </div>
                    </div>
                </Container>
            </section>

            {/* 최근 활동 섹션 */}
            {recentActivity && (
                <section className="section-padding bg-gradient-to-br from-blue-50 to-green-50">
                    <Container>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
                                🌊 최근 활동
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                MOBA와 함께한 해양정화 활동 성과
                            </p>
                        </div>
                        <Card className="max-w-4xl mx-auto bg-white shadow-xl">
                            <div className="p-6 md:p-8">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                            {recentActivity.title}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                                            <span className="flex items-center gap-1">
                                                <span className="font-semibold">주관:</span> {recentActivity.host}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <span className="font-semibold">참여:</span> {Array.isArray(recentActivity.participants) ? recentActivity.participants.join(' x ') : recentActivity.participants}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <span className="font-semibold">일시:</span> {recentActivity.date} {recentActivity.time}
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                            ✅ 완료
                                        </span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                                        <p className="text-sm font-medium text-gray-600 mb-1">📍 장소</p>
                                        <p className="text-base font-semibold text-gray-900">{recentActivity.location}</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                                        <p className="text-sm font-medium text-gray-600 mb-1">👥 참여자</p>
                                        <p className="text-2xl font-bold text-padi-blue">{recentActivity.attendees}명</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-lg">
                                        <p className="text-sm font-medium text-gray-600 mb-1">🗑️ 수거량</p>
                                        <p className="text-2xl font-bold text-padi-blue">{recentActivity.results?.totalVolume}</p>
                                    </div>
                                </div>

                                {recentActivity.results && (
                                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                                        <p className="text-sm font-semibold text-gray-700 mb-2">📊 주요 수거 항목:</p>
                                        <div className="flex flex-wrap gap-3">
                                            {Array.isArray(recentActivity.results.categories) && recentActivity.results.categories.map((category, catIndex) => (
                                                <div key={catIndex} className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full">
                                                    <span className="text-sm font-medium">{category.name}:</span>
                                                    <span className="text-sm font-bold text-padi-blue">{category.percentage}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {recentActivity.press && (
                                    <div className="flex items-center justify-center">
                                        <a 
                                            href={recentActivity.press} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-padi-blue text-white font-semibold rounded-lg hover:bg-padi-dark-blue transition-colors duration-200 shadow-md hover:shadow-lg"
                                        >
                                            <span className="text-xl">📰</span>
                                            <span>보도자료 보기</span>
                                            <span className="text-sm">→</span>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </Card>
                    </Container>
                </section>
            )}

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
                            <Button 
                                to="/membership" 
                                size="lg" 
                                className="!bg-white !text-padi-blue hover:!bg-gray-100"
                            >
                                {t('common.buttons.join')}
                            </Button>
                            <Button 
                                to="/about" 
                                variant="outline" 
                                size="lg" 
                                className="!border-white !text-white hover:!bg-padi-blue hover:!border-padi-blue focus:!ring-white"
                            >
                                {t('common.buttons.learnMore')}
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Home;

