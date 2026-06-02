import React, { useMemo, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../components/layout/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Schedule = () => {
    const { t, ready } = useTranslation();
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [timeline, setTimeline] = useState([]);
    const [pastEvents, setPastEvents] = useState([]);

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

            // 과거 이벤트 데이터 설정
            setPastEvents([
                {
                    key: 'pohang20250920',
                    title: t('pages.schedule.pastEvents.pohang20250920.title'),
                    host: t('pages.schedule.pastEvents.pohang20250920.host'),
                    participants: t('pages.schedule.pastEvents.pohang20250920.participants', { returnObjects: true }) || [],
                    date: t('pages.schedule.pastEvents.pohang20250920.date'),
                    time: t('pages.schedule.pastEvents.pohang20250920.time'),
                    location: t('pages.schedule.pastEvents.pohang20250920.location'),
                    attendees: t('pages.schedule.pastEvents.pohang20250920.attendees'),
                    description: t('pages.schedule.pastEvents.pohang20250920.description'),
                    results: t('pages.schedule.pastEvents.pohang20250920.results', { returnObjects: true }) || {},
                    notes: t('pages.schedule.pastEvents.pohang20250920.notes'),
                    press: t('pages.schedule.pastEvents.pohang20250920.press'),
                    images: t('pages.schedule.pastEvents.pohang20250920.images', { returnObjects: true }) || []
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

            {/* 과거 활동 */}
            <section className="bg-gray-50 section-padding">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {t('pages.schedule.pastEvents.title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('pages.schedule.pastEvents.subtitle')}
                        </p>
                    </div>

                    <div className="space-y-8">
                        {pastEvents.length > 0 ? pastEvents.map((event, index) => (
                            <Card key={index} className="overflow-hidden">
                                <div className="p-8">
                                    {/* 이벤트 헤더 */}
                                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                                {event.title}
                                            </h3>
                                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                                <span className="flex items-center gap-1">
                                                    <span className="font-semibold">주관:</span> {event.host}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <span className="font-semibold">참여:</span> {Array.isArray(event.participants) ? event.participants.join(', ') : event.participants}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <span className="font-semibold">참가자:</span> {event.attendees}명
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mt-4 lg:mt-0">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                                완료
                                            </span>
                                        </div>
                                    </div>

                                    {/* 이벤트 정보 */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2">
                                                <span className="text-padi-blue">📅</span>
                                                <span className="font-semibold">일시:</span>
                                                <span>{event.date} {event.time}</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <span className="text-padi-blue">📍</span>
                                                <div>
                                                    <span className="font-semibold">장소:</span>
                                                    <p className="text-gray-600">{event.location}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-2">
                                                <span className="text-padi-blue">📝</span>
                                                <div>
                                                    <span className="font-semibold">활동 내용:</span>
                                                    <p className="text-gray-600">{event.description}</p>
                                                </div>
                                            </div>
                                            {event.notes && (
                                                <div className="flex items-start gap-2">
                                                    <span className="text-padi-blue">⚠️</span>
                                                    <div>
                                                        <span className="font-semibold">특이사항:</span>
                                                        <p className="text-gray-600">{event.notes}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* 활동 결과 */}
                                    {event.results && (
                                        <div className="bg-blue-50 rounded-lg p-6 mb-6">
                                            <h4 className="text-lg font-semibold text-gray-900 mb-4">활동 결과</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <span className="font-semibold text-padi-blue">총 수거량:</span>
                                                    <p className="text-xl font-bold text-gray-900">{event.results.totalVolume}</p>
                                                </div>
                                                <div>
                                                    <span className="font-semibold text-padi-blue">수거 항목:</span>
                                                    <div className="space-y-1">
                                                        {Array.isArray(event.results.categories) && event.results.categories.map((category, catIndex) => (
                                                            <div key={catIndex} className="flex items-center gap-2">
                                                                <span className="text-sm font-medium">{category.name}:</span>
                                                                <span className="text-sm font-bold text-padi-blue">{category.percentage}</span>
                                                                <span className="text-xs text-gray-600">({category.details})</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* 상세 수거 내역 */}
                                    {event.detailedResults && (
                                        <div className="bg-green-50 rounded-lg p-6 mb-6 border-2 border-green-200">
                                            <h4 className="text-lg font-semibold text-gray-900 mb-4">
                                                📊 {event.detailedResults.title}
                                            </h4>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                                <div className="bg-white p-3 rounded">
                                                    <span className="text-sm font-medium text-gray-600">날씨</span>
                                                    <p className="text-base font-semibold text-gray-900">{event.detailedResults.weather}</p>
                                                </div>
                                                <div className="bg-white p-3 rounded">
                                                    <span className="text-sm font-medium text-gray-600">총 수거량</span>
                                                    <p className="text-base font-semibold text-padi-blue">{event.detailedResults.totalCollected}</p>
                                                </div>
                                                <div className="bg-white p-3 rounded">
                                                    <span className="text-sm font-medium text-gray-600">참여자</span>
                                                    <p className="text-base font-semibold text-padi-blue">{event.attendees}명</p>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                                {Array.isArray(event.detailedResults.items) && event.detailedResults.items.map((item, itemIndex) => (
                                                    <div key={itemIndex} className="bg-white p-3 rounded border border-gray-200">
                                                        <p className="text-sm font-semibold text-gray-900 mb-1">{item.name}</p>
                                                        <p className="text-base font-bold text-padi-blue">{item.count}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            {event.detailedResults.summary && (
                                                <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                                                    <p className="text-sm font-semibold text-gray-900 mb-1">📝 요약</p>
                                                    <p className="text-sm text-gray-700">{event.detailedResults.summary}</p>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* 이미지 갤러리 */}
                                    {event.images && event.images.length > 0 && (
                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold text-gray-900 mb-4">활동 사진</h4>
                                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                                                {event.images.map((image, imgIndex) => (
                                                    <div key={imgIndex} className="aspect-square overflow-hidden rounded-lg">
                                                        <img 
                                                            src={image} 
                                                            alt={`활동 사진 ${imgIndex + 1}`}
                                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-200 cursor-pointer"
                                                            onError={(e) => {
                                                                e.target.style.display = 'none';
                                                            }}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* 보도자료 링크 */}
                                    {event.press && (
                                        <div className="flex items-center justify-center pt-4">
                                            <a 
                                                href={event.press} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-6 py-3 bg-padi-blue text-white font-semibold rounded-lg hover:bg-padi-dark-blue transition-colors duration-200 shadow-md hover:shadow-lg"
                                            >
                                                <span className="text-xl">📰</span>
                                                <span>관련 보도자료 보기</span>
                                                <span className="text-sm">→</span>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </Card>
                        )) : (
                            <div className="text-center py-12">
                                <p className="text-gray-500">Loading past events...</p>
                            </div>
                        )}
                    </div>
                </Container>
            </section>

            {/* 프로젝트 타임라인 */}
            <section className="section-padding">
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
            <section className="bg-gray-50 section-padding">
                <Container>
                    <Card className="text-center bg-gradient-to-r from-padi-blue to-padi-dark-blue text-white">
                        <h2 className="text-3xl font-bold mb-4">
                            {t('pages.schedule.cta.title')}
                        </h2>
                        <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                            {t('pages.schedule.cta.description')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button to="/membership" size="lg">
                                {t('pages.schedule.cta.membershipButton')}
                            </Button>
                            <Button to="/contact" variant="outline" size="lg">
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

