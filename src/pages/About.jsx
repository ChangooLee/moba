import React, { useMemo, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../components/layout/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const About = () => {
    const { t, ready } = useTranslation();
    const [values, setValues] = useState([]);
    const [team, setTeam] = useState([]);

    useEffect(() => {
        if (ready) {
            setValues([
                {
                    key: 'sustainability',
                    title: t('pages.about.values.sustainability.title'),
                    description: t('pages.about.values.sustainability.description'),
                    icon: '🌱'
                },
                {
                    key: 'collaboration',
                    title: t('pages.about.values.collaboration.title'),
                    description: t('pages.about.values.collaboration.description'),
                    icon: '🤝'
                },
                {
                    key: 'innovation',
                    title: t('pages.about.values.innovation.title'),
                    description: t('pages.about.values.innovation.description'),
                    icon: '💡'
                },
                {
                    key: 'transparency',
                    title: t('pages.about.values.transparency.title'),
                    description: t('pages.about.values.transparency.description'),
                    icon: '🔍'
                }
            ]);

            setTeam([
                {
                    key: 'kimBada',
                    name: t('pages.about.team.members.kimBada.name'),
                    position: t('pages.about.team.members.kimBada.position'),
                    description: t('pages.about.team.members.kimBada.description'),
                    image: '👨‍🔬'
                },
                {
                    key: 'parkGreen',
                    name: t('pages.about.team.members.parkGreen.name'),
                    position: t('pages.about.team.members.parkGreen.position'),
                    description: t('pages.about.team.members.parkGreen.description'),
                    image: '👩‍💼'
                },
                {
                    key: 'leeBlue',
                    name: t('pages.about.team.members.leeBlue.name'),
                    position: t('pages.about.team.members.leeBlue.position'),
                    description: t('pages.about.team.members.leeBlue.description'),
                    image: '👨‍💻'
                },
                {
                    key: 'choiOcean',
                    name: t('pages.about.team.members.choiOcean.name'),
                    position: t('pages.about.team.members.choiOcean.position'),
                    description: t('pages.about.team.members.choiOcean.description'),
                    image: '👩‍🎨'
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
                            {t('pages.about.title')}
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            {t('pages.about.description')}
                        </p>
                    </div>
                </Container>
            </section>

            {/* 미션 & 비전 섹션 */}
            <section className="section-padding">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <Card>
                            <div className="text-center">
                                <div className="text-5xl mb-4">🎯</div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    {t('pages.about.mission.title')}
                                </h2>
                                <p className="text-gray-600 text-lg">
                                    {t('pages.about.mission.description')}
                                </p>
                            </div>
                        </Card>
                        <Card>
                            <div className="text-center">
                                <div className="text-5xl mb-4">👁️</div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                    {t('pages.about.vision.title')}
                                </h2>
                                <p className="text-gray-600 text-lg">
                                    {t('pages.about.vision.description')}
                                </p>
                            </div>
                        </Card>
                    </div>
                </Container>
            </section>

            {/* 핵심 가치 섹션 */}
            <section className="bg-gray-50 section-padding">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {t('pages.about.values.title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('pages.about.values.subtitle')}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <Card key={index} className="text-center">
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600">
                                    {value.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            {/* 팀 섹션 */}
            <section className="section-padding">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {t('pages.about.team.title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('pages.about.team.subtitle')}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <Card key={index} className="text-center">
                                <div className="text-6xl mb-4">{member.image}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-padi-blue font-medium mb-3">
                                    {member.position}
                                </p>
                                <p className="text-gray-600 text-sm">
                                    {member.description}
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
                            {t('pages.about.cta.title')}
                        </h2>
                        <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                            {t('pages.about.cta.description')}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-padi-blue hover:bg-gray-100">
                                {t('common.buttons.join')}
                            </Button>
                            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-padi-blue">
                                {t('common.buttons.contact')}
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default About;

