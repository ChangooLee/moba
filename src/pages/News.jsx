import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Reveal, Eyebrow, Icon, PageHero, CtaBand } from '../components/ui/primitives';

const EVENT_ICONS = { globalCampaign: 'waves', workshop: 'book', conference: 'mic', seminar: 'flask' };
const EVENT_IMAGES = {
    workshop: '/images/padi/featured/edu-pool.jpg',
    globalCampaign: '/images/padi/featured/cleanup-bottle.jpg',
    conference: '/images/padi/featured/divers-reef.jpg',
    seminar: '/images/padi/featured/data-reef.jpg',
};

const News = () => {
    const { t, ready } = useTranslation();
    if (!ready) {
        return <div className="min-h-screen flex items-center justify-center bg-ink"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-aqua" /></div>;
    }
    const obj = (k, fb) => { const v = t(k, { returnObjects: true }); return v && typeof v === 'object' ? v : fb; };
    const arr = (k) => { const v = t(k, { returnObjects: true }); return Array.isArray(v) ? v : []; };

    const eventKeys = ['workshop', 'globalCampaign', 'conference', 'seminar'];
    const milestoneKeys = ['launch', 'expansion', 'community', 'impact'];
    const past = obj('pages.schedule.pastEvents.pohang20250920', {});
    const images = Array.isArray(past.images) ? past.images : [];
    const participants = Array.isArray(past.participants) ? past.participants : [];

    return (
        <div className="overflow-x-hidden">
            <PageHero eyebrow="NEWS & EVENTS" title={t('common.nav.news')} subtitle={t('pages.schedule.description')} image="/images/padi/featured/beach-team.jpg" />

            {/* 다가오는 이벤트 */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <Reveal className="max-w-3xl">
                        <Eyebrow>UPCOMING</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl text-navy leading-tight">{t('pages.schedule.upcoming.title')}</h2>
                        <p className="mt-5 text-gray-600 text-lg">{t('pages.schedule.upcoming.subtitle')}</p>
                    </Reveal>
                    <div className="mt-12 grid md:grid-cols-2 gap-6">
                        {eventKeys.map((key, i) => {
                            const base = `pages.schedule.events.${key}`;
                            return (
                                <Reveal key={key} delay={i * 80}>
                                    <div className="group h-full overflow-hidden rounded-2xl border border-mist-deep bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-card flex flex-col sm:flex-row">
                                        <div className="relative sm:w-40 md:w-48 shrink-0 h-40 sm:h-auto overflow-hidden">
                                            <img src={EVENT_IMAGES[key]} alt="" aria-hidden="true" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-navy-900/10" />
                                            <div className="absolute top-3 left-3 flex h-10 w-10 items-center justify-center rounded-lg bg-aqua text-ink">
                                                <Icon name={EVENT_ICONS[key]} className="w-5 h-5" />
                                            </div>
                                        </div>
                                        <div className="p-6 flex-1">
                                            <h3 className="font-heading font-bold text-lg text-navy">{t(`${base}.title`)}</h3>
                                            <div className="mt-3 space-y-1.5 text-sm text-gray-500">
                                                <p className="flex items-center gap-2"><Icon name="calendar" className="w-4 h-4 text-aqua-dark" /> {t(`${base}.date`)}</p>
                                                <p className="flex items-center gap-2"><Icon name="clock" className="w-4 h-4 text-aqua-dark" /> {t(`${base}.time`)}</p>
                                                <p className="flex items-center gap-2"><Icon name="pin" className="w-4 h-4 text-aqua-dark" /> {t(`${base}.location`)}</p>
                                            </div>
                                            <p className="mt-3 text-sm text-gray-600 leading-relaxed">{t(`${base}.description`)}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 지난 활동 스토리 */}
            <section className="section-padding bg-ocean-deep text-white">
                <div className="container-custom">
                    <Reveal className="max-w-3xl">
                        <Eyebrow light>RECENT ACTIVITY</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl leading-tight">{t('pages.schedule.pastEvents.title')}</h2>
                        <p className="mt-5 text-sky-100/75 text-lg">{t('pages.schedule.pastEvents.subtitle')}</p>
                    </Reveal>
                    <Reveal className="mt-12 rounded-3xl border border-white/10 bg-white/[0.04] p-7 md:p-10 backdrop-blur-sm">
                        <h3 className="font-heading font-extrabold text-2xl md:text-3xl">{past.title}</h3>
                        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-sky-100/70">
                            {past.host && <span>주관 · {past.host}</span>}
                            {past.date && <span>{past.date} {past.time}</span>}
                            {past.location && <span className="flex items-center gap-1"><Icon name="pin" className="w-4 h-4" /> {past.location}</span>}
                            {past.attendees && <span>참여 {past.attendees}명</span>}
                        </div>
                        {participants.length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-2">
                                {participants.map((p, i) => (
                                    <span key={i} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-heading font-semibold text-sky-100/80">{p}</span>
                                ))}
                            </div>
                        )}
                        {past.description && <p className="mt-5 text-sky-100/80 leading-relaxed">{past.description}</p>}
                        {images.length > 0 && (
                            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                                {images.map((src, i) => (
                                    <div key={i} className="aspect-square overflow-hidden rounded-xl">
                                        <img src={src} alt={`포항 정화활동 ${i + 1}`} loading="lazy" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" onError={(e) => { e.currentTarget.parentElement.style.display = 'none'; }} />
                                    </div>
                                ))}
                            </div>
                        )}
                        <div className="mt-7 flex flex-wrap gap-4">
                            {past.press && (
                                <a href={past.press} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-aqua px-6 py-3 text-sm font-heading font-bold text-ink transition-colors hover:bg-aqua-light">
                                    관련 보도자료 보기 <Icon name="arrowUpRight" className="w-4 h-4" />
                                </a>
                            )}
                            <Link to="/impact" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-heading font-semibold text-white transition-colors hover:bg-white/15">
                                {t('common.buttons.viewImpact')} <Icon name="arrowRight" className="w-4 h-4" />
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 프로젝트 타임라인 */}
            <section className="section-padding bg-mist">
                <div className="container-custom">
                    <Reveal className="max-w-3xl">
                        <Eyebrow>TIMELINE</Eyebrow>
                        <h2 className="mt-4 font-heading font-extrabold text-3xl md:text-5xl text-navy leading-tight">{t('pages.schedule.timeline.title')}</h2>
                        <p className="mt-5 text-gray-600 text-lg">{t('pages.schedule.timeline.subtitle')}</p>
                    </Reveal>
                    <div className="mt-12 relative">
                        <div className="absolute left-6 top-3 bottom-3 w-px bg-navy/15 hidden md:block" aria-hidden="true" />
                        <div className="space-y-6">
                            {milestoneKeys.map((key, i) => {
                                const base = `pages.schedule.milestones.${key}`;
                                const activities = arr(`${base}.activities`);
                                return (
                                    <Reveal key={key} delay={i * 70}>
                                        <div className="relative flex flex-col md:flex-row gap-5 md:gap-8">
                                            <div className="flex-shrink-0 relative z-10">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-aqua-light font-heading font-extrabold ring-4 ring-mist">{i + 1}</div>
                                            </div>
                                            <div className="flex-1 rounded-2xl bg-white border border-mist-deep p-6 md:p-7 shadow-card">
                                                <h3 className="font-heading font-bold text-xl text-navy">{t(`${base}.title`)}</h3>
                                                <p className="mt-3 text-gray-600 leading-relaxed">{t(`${base}.description`)}</p>
                                                {activities.length > 0 && (
                                                    <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                                                        {activities.map((a, ai) => (
                                                            <li key={ai} className="flex items-start gap-2 text-sm text-gray-600">
                                                                <Icon name="check" className="w-4 h-4 mt-0.5 shrink-0 text-aqua-dark" />
                                                                <span>{a}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    </Reveal>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <CtaBand
                title={t('pages.schedule.cta.title')}
                subtitle={t('pages.schedule.cta.description')}
                primary={{ to: '/join', label: t('pages.schedule.cta.membershipButton') }}
                secondary={{ to: '/contact', label: t('pages.schedule.cta.notificationButton') }}
            />
        </div>
    );
};

export default News;
