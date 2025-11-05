import React, { useMemo, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../components/layout/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Schedule = () => {
    const { t, ready } = useTranslation();
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [timeline, setTimeline] = useState([]);

    useEffect(() => {
        console.log('Schedule useEffect - ready:', ready);
        if (ready) {
            console.log('Setting schedule data...');
            setUpcomingEvents([
                {
                    key: 'padiPartnership',
                    title: t('pages.schedule.events.padiPartnership.title'),
                    date: t('pages.schedule.events.padiPartnership.date'),
                    time: t('pages.schedule.events.padiPartnership.time'),
                    location: t('pages.schedule.events.padiPartnership.location'),
                    description: t('pages.schedule.events.padiPartnership.description'),
                    type: 'conference',
                    status: 'completed'
                },
                {
                    key: 'platformLaunch',
                    title: t('pages.schedule.events.platformLaunch.title'),
                    date: t('pages.schedule.events.platformLaunch.date'),
                    time: t('pages.schedule.events.platformLaunch.time'),
                    location: t('pages.schedule.events.platformLaunch.location'),
                    description: t('pages.schedule.events.platformLaunch.description'),
                    type: 'campaign',
                    status: 'completed'
                },
                {
                    key: 'corporateOnboarding',
                    title: t('pages.schedule.events.corporateOnboarding.title'),
                    date: t('pages.schedule.events.corporateOnboarding.date'),
                    time: t('pages.schedule.events.corporateOnboarding.time'),
                    location: t('pages.schedule.events.corporateOnboarding.location'),
                    description: t('pages.schedule.events.corporateOnboarding.description'),
                    type: 'workshop',
                    status: 'in-progress'
                },
                {
                    key: 'globalCampaign',
                    title: t('pages.schedule.events.globalCampaign.title'),
                    date: t('pages.schedule.events.globalCampaign.date'),
                    time: t('pages.schedule.events.globalCampaign.time'),
                    location: t('pages.schedule.events.globalCampaign.location'),
                    description: t('pages.schedule.events.globalCampaign.description'),
                    type: 'campaign',
                    status: 'upcoming'
                },
                {
                    key: 'esgReporting',
                    title: t('pages.schedule.events.esgReporting.title'),
                    date: t('pages.schedule.events.esgReporting.date'),
                    time: t('pages.schedule.events.esgReporting.time'),
                    location: t('pages.schedule.events.esgReporting.location'),
                    description: t('pages.schedule.events.esgReporting.description'),
                    type: 'seminar',
                    status: 'upcoming'
                },
                {
                    key: 'workshop',
                    title: t('pages.schedule.events.workshop.title'),
                    date: t('pages.schedule.events.workshop.date'),
                    time: t('pages.schedule.events.workshop.time'),
                    location: t('pages.schedule.events.workshop.location'),
                    description: t('pages.schedule.events.workshop.description'),
                    type: 'workshop',
                    status: 'upcoming'
                },
                {
                    key: 'conference',
                    title: t('pages.schedule.events.conference.title'),
                    date: t('pages.schedule.events.conference.date'),
                    time: t('pages.schedule.events.conference.time'),
                    location: t('pages.schedule.events.conference.location'),
                    description: t('pages.schedule.events.conference.description'),
                    type: 'conference',
                    status: 'upcoming'
                },
                {
                    key: 'seminar',
                    title: t('pages.schedule.events.seminar.title'),
                    date: t('pages.schedule.events.seminar.date'),
                    time: t('pages.schedule.events.seminar.time'),
                    location: t('pages.schedule.events.seminar.location'),
                    description: t('pages.schedule.events.seminar.description'),
                    type: 'seminar',
                    status: 'upcoming'
                }
            ]);

            setTimeline([
                {
                    year: '2024 Q1',
                    key: 'launch',
                    title: t('pages.schedule.milestones.launch.title'),
                    description: t('pages.schedule.milestones.launch.description'),
                    status: 'completed',
                    achievements: t('pages.schedule.milestones.launch.activities', { returnObjects: true }) || []
                },
                {
                    year: '2024 Q2',
                    key: 'expansion',
                    title: t('pages.schedule.milestones.expansion.title'),
                    description: t('pages.schedule.milestones.expansion.description'),
                    status: 'in-progress',
                    achievements: t('pages.schedule.milestones.expansion.activities', { returnObjects: true }) || []
                },
                {
                    year: '2024 Q3',
                    key: 'community',
                    title: t('pages.schedule.milestones.community.title'),
                    description: t('pages.schedule.milestones.community.description'),
                    status: 'planned',
                    achievements: t('pages.schedule.milestones.community.activities', { returnObjects: true }) || []
                },
                {
                    year: '2024 Q4',
                    key: 'impact',
                    title: t('pages.schedule.milestones.impact.title'),
                    description: t('pages.schedule.milestones.impact.description'),
                    status: 'planned',
                    achievements: t('pages.schedule.milestones.impact.activities', { returnObjects: true }) || []
                }
            ]);
        }
    }, [ready, t]);

    if (!ready) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-padi-blue mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading translations...</p>
                </div>
            </div>
        );
    }

    const getEventIcon = (type) => {
        switch (type) {
            case 'campaign':
                return '🌊';
            case 'workshop':
                return '📚';
            case 'conference':
                return '🎤';
            case 'seminar':
                return '🔬';
            default:
                return '📅';
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'completed':
                return 'bg-green-100 text-green-800';
            case 'in-progress':
                return 'bg-blue-100 text-blue-800';
            case 'upcoming':
                return 'bg-yellow-100 text-yellow-800';
            case 'planned':
                return 'bg-gray-100 text-gray-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusText = (status) => {
        switch (status) {
            case 'completed':
                return t('pages.schedule.status.completed');
            case 'in-progress':
                return t('pages.schedule.status.inProgress');
            case 'upcoming':
                return t('pages.schedule.status.scheduled');
            case 'planned':
                return t('pages.schedule.status.planned');
            default:
                return t('pages.schedule.status.planned');
        }
    };

    return (
        <div className="min-h-screen">
            {/* 히어로 섹션 */}
            <section className="bg-gradient-to-r from-padi-blue to-padi-dark-blue text-white section-padding">
                <Container>
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {t('pages.schedule.title')}
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            {t('pages.schedule.description')}
                        </p>
                    </div>
                </Container>
            </section>

            {/* 다가오는 이벤트 */}
            <section className="section-padding">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {t('pages.schedule.upcoming.title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('pages.schedule.upcoming.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {upcomingEvents.length > 0 ? upcomingEvents.map((event, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl">{getEventIcon(event.type)}</div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <h3 className="text-xl font-semibold text-gray-900">
                                                {event.title}
                                            </h3>
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                                                {getStatusText(event.status)}
                                            </span>
                                        </div>
                                        <div className="space-y-1 text-sm text-gray-600 mb-3">
                                            <p>📅 {event.date}</p>
                                            <p>🕐 {event.time}</p>
                                            <p>📍 {event.location}</p>
                                        </div>
                                        <p className="text-gray-700">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        )) : (
                            <div className="col-span-2 text-center py-12">
                                <p className="text-gray-500">Loading events...</p>
                            </div>
                        )}
                    </div>
                </Container>
            </section>

            {/* 최근 활동 */}
            <section className="bg-white section-padding">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {t('pages.schedule.recentActivities.title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('pages.schedule.recentActivities.subtitle')}
                        </p>
                    </div>
                </Container>
            </section>

            {/* 프로젝트 타임라인 */}
            <section className="bg-gray-50 section-padding">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {t('pages.schedule.timeline.title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('pages.schedule.timeline.subtitle')}
                        </p>
                    </div>

                    <div className="relative">
                        {/* 타임라인 라인 */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-padi-blue hidden md:block"></div>

                        <div className="space-y-12">
                            {timeline.length > 0 ? timeline.map((item, index) => (
                                <div key={index} className="relative flex items-start gap-8">
                                    {/* 타임라인 포인트 */}
                                    <div className="hidden md:flex items-center justify-center w-16 h-16 bg-padi-blue text-white rounded-full text-lg font-bold z-10">
                                        {index + 1}
                                    </div>

                                    {/* 콘텐츠 */}
                                    <Card className="flex-1">
                                        <div className="flex items-center gap-4 mb-4">
                                            <h3 className="text-2xl font-bold text-gray-900">
                                                {item.title}
                                            </h3>
                                            <span className="text-lg font-semibold text-padi-blue">
                                                {item.year}
                                            </span>
                                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(item.status)}`}>
                                                {getStatusText(item.status)}
                                            </span>
                                        </div>

                                        <p className="text-gray-600 mb-6 text-lg">
                                            {item.description}
                                        </p>

                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 mb-3">{t('pages.schedule.achievements.title')}</h4>
                                            <ul className="space-y-2">
                                                {Array.isArray(item.achievements) && item.achievements.map((achievement, achievementIndex) => (
                                                    <li key={achievementIndex} className="flex items-start gap-2">
                                                        <span className="text-padi-blue mt-1">•</span>
                                                        <span className="text-gray-600">{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </Card>
                                </div>
                            )) : (
                                <div className="text-center py-12">
                                    <p className="text-gray-500">Loading timeline...</p>
                                </div>
                            )}
                        </div>
                    </div>
                </Container>
            </section>

            {/* 이벤트 참여 안내 */}
            <section className="section-padding">
                <Container>
                    <Card className="text-center bg-gradient-to-r from-padi-blue to-padi-dark-blue text-white">
                        <h2 className="text-3xl font-bold mb-4">
                            {t('pages.schedule.cta.title')}
                        </h2>
                        <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                            {t('pages.schedule.cta.description')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg">
                                {t('pages.schedule.cta.membershipButton')}
                            </Button>
                            <Button variant="outline" size="lg">
                                {t('pages.schedule.cta.notificationButton')}
                            </Button>
                        </div>
                    </Card>
                </Container>
            </section>
        </div>
    );
};

export default Schedule;

