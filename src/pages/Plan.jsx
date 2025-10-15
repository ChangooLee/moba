import React, { useMemo, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../components/layout/Container';
import Card from '../components/ui/Card';

const Plan = () => {
    const { t, ready } = useTranslation();
    const [phases, setPhases] = useState([]);

    useEffect(() => {
        if (ready) {
            // 번역이 완전히 로드된 후에 phases 설정
            const newPhases = [
                {
                    phase: 1,
                    title: t('pages.plan.phases.phase1.title'),
                    description: t('pages.plan.phases.phase1.description'),
                    duration: '2024 Q1-Q2',
                    status: 'completed',
                    activities: t('pages.plan.phases.phase1.activities', { returnObjects: true }) || []
                },
                {
                    phase: 2,
                    title: t('pages.plan.phases.phase2.title'),
                    description: t('pages.plan.phases.phase2.description'),
                    duration: '2024 Q3-Q4',
                    status: 'in-progress',
                    activities: t('pages.plan.phases.phase2.activities', { returnObjects: true }) || []
                },
                {
                    phase: 3,
                    title: t('pages.plan.phases.phase3.title'),
                    description: t('pages.plan.phases.phase3.description'),
                    duration: '2025 Q1-Q2',
                    status: 'planned',
                    activities: t('pages.plan.phases.phase3.activities', { returnObjects: true }) || []
                },
                {
                    phase: 4,
                    title: t('pages.plan.phases.phase4.title'),
                    description: t('pages.plan.phases.phase4.description'),
                    duration: '2025 Q3-Q4',
                    status: 'planned',
                    activities: t('pages.plan.phases.phase4.activities', { returnObjects: true }) || []
                }
            ];
            setPhases(newPhases);
        }
    }, [ready, t]);

    if (!ready || phases.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-padi-blue mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading translations...</p>
                </div>
            </div>
        );
    }

    const getStatusColor = (status) => {
        switch (status) {
            case 'completed':
                return 'bg-green-100 text-green-800';
            case 'in-progress':
                return 'bg-blue-100 text-blue-800';
            case 'planned':
                return 'bg-gray-100 text-gray-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusText = (status) => {
        switch (status) {
            case 'completed':
                return t('pages.plan.status.completed');
            case 'in-progress':
                return t('pages.plan.status.inProgress');
            case 'planned':
                return t('pages.plan.status.planned');
            default:
                return t('pages.plan.status.planned');
        }
    };

    return (
        <div className="min-h-screen">
            {/* 히어로 섹션 */}
            <section className="bg-gradient-to-r from-padi-blue to-padi-dark-blue text-white section-padding">
                <Container>
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {t('pages.plan.title')}
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            {t('pages.plan.overview.description')}
                        </p>
                    </div>
                </Container>
            </section>

            {/* 프로젝트 개요 */}
            <section className="section-padding">
                <Container>
                    <Card className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            {t('pages.plan.overview.title')}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            {t('pages.plan.overview.detailedDescription')}
                        </p>
                    </Card>
                </Container>
            </section>

            {/* 단계별 계획 */}
            <section className="bg-gray-50 section-padding">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {t('pages.plan.phases.title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('pages.plan.phases.subtitle')}
                        </p>
                    </div>

                    <div className="space-y-8">
                        {phases.map((phase, index) => (
                            <Card key={index} className="relative">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                    {/* 단계 번호 및 상태 */}
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 bg-padi-blue text-white rounded-full flex items-center justify-center text-2xl font-bold">
                                                {phase.phase}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(phase.status)}`}>
                                                    {getStatusText(phase.status)}
                                                </span>
                                                <span className="text-sm text-gray-500 mt-1">{phase.duration}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 단계 내용 */}
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                            {phase.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6 text-lg">
                                            {phase.description}
                                        </p>

                                        {/* 주요 활동 */}
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('pages.plan.activities.title')}</h4>
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                {Array.isArray(phase.activities) && phase.activities.map((activity, activityIndex) => (
                                                    <li key={activityIndex} className="flex items-start gap-2">
                                                        <span className="text-padi-blue mt-1">•</span>
                                                        <span className="text-gray-600">{activity}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* 성과 지표 */}
            <section className="section-padding">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {t('pages.plan.expectedResults.title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('pages.plan.expectedResults.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="text-center">
                            <div className="text-4xl mb-4">👥</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('pages.plan.expectedResults.community.title')}</h3>
                            <p className="text-gray-600">
                                {t('pages.plan.expectedResults.community.description')}
                            </p>
                        </Card>
                        <Card className="text-center">
                            <div className="text-4xl mb-4">🌊</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('pages.plan.expectedResults.cleanup.title')}</h3>
                            <p className="text-gray-600">
                                {t('pages.plan.expectedResults.cleanup.description')}
                            </p>
                        </Card>
                        <Card className="text-center">
                            <div className="text-4xl mb-4">📚</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('pages.plan.expectedResults.education.title')}</h3>
                            <p className="text-gray-600">
                                {t('pages.plan.expectedResults.education.description')}
                            </p>
                        </Card>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Plan;

