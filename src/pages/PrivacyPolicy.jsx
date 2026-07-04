import React from 'react';
import { Reveal, PageHero } from '../components/ui/primitives';

const Section = ({ no, title, children }) => (
    <Reveal className="rounded-2xl border border-mist-deep bg-white p-7 md:p-8">
        <h2 className="flex items-center gap-3 font-heading font-bold text-xl md:text-2xl text-navy">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-aqua-light stat-number text-lg">
                {no}
            </span>
            {title}
        </h2>
        <div className="mt-4 space-y-4 text-gray-600 leading-relaxed">{children}</div>
    </Reveal>
);

const PrivacyPolicy = () => {
    return (
        <div className="overflow-x-hidden">
            <PageHero
                eyebrow="PRIVACY POLICY"
                title="개인정보처리방침"
                subtitle="Freedive Chanssem 앱의 개인정보 보호 정책"
            />

            <section className="section-padding bg-mist">
                <div className="container-custom max-w-4xl space-y-6">
                    <Reveal className="rounded-2xl border border-mist-deep bg-white p-7 md:p-8">
                        <p className="text-gray-600 leading-relaxed">
                            본 개인정보처리방침은 개발자 이찬구(Chanssem)가 제공하는 모바일 애플리케이션{' '}
                            <strong className="text-navy">"freedive chanssem"</strong>(이하 "본 앱")에 적용됩니다.
                        </p>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            본 앱은 프리다이빙 훈련용 CO₂ / O₂ / 원브레스 테이블 타이머 기능을 제공하며, 사용자의 개인정보를 수집·이용하지 않습니다.
                        </p>
                    </Reveal>

                    <Section no="1" title="수집하는 개인정보">
                        <p>본 앱은 다음과 같은 개인정보를 수집하지 않습니다.</p>
                        <ul className="list-disc space-y-2 pl-6">
                            <li>이름, 이메일 주소, 전화번호 등 개인 식별 정보</li>
                            <li>위치 정보(GPS 등)</li>
                            <li>기기 고유 식별자(IMEI, 광고 ID 등)</li>
                            <li>결제 정보, 계정 정보</li>
                            <li>건강·운동 기록 등 민감 정보</li>
                        </ul>
                        <p>또한, 본 앱은 별도의 회원가입, 로그인, 서버 연동 기능을 제공하지 않습니다.</p>
                    </Section>

                    <Section no="2" title="데이터 사용 및 저장">
                        <p>본 앱은 프리다이빙 훈련을 위한 타이머 및 테이블 설정 기능만 제공합니다.</p>
                        <p>일부 설정 정보(예: 마지막으로 사용한 숨참기 시간, 라운드 수 등)가 디바이스 내에 로컬 저장소로 저장될 수 있으나, 이 정보는</p>
                        <ul className="list-disc space-y-2 pl-6">
                            <li>사용자를 식별할 수 없으며</li>
                            <li>개발자 또는 제3자 서버로 전송되지 않습니다.</li>
                        </ul>
                        <p>본 앱은 인터넷 연결이 없는 환경에서도 동작하도록 설계되어 있으며, 앱 사용 중 서버와의 통신을 통해 데이터를 전송하지 않습니다.</p>
                    </Section>

                    <Section no="3" title="제3자 제공 및 수탁">
                        <p>본 앱은 사용자의 개인정보를 제3자에게 제공하거나, 외부 업체에 위탁하지 않습니다.</p>
                        <p>광고 SDK, 분석(analytics) 도구, 소셜 로그인, 푸시 알림(서버 기반) 등의 제3자 서비스도 사용하지 않습니다.</p>
                    </Section>

                    <Section no="4" title="아동의 개인정보">
                        <p>본 앱은 주로 성인 프리다이버 및 프리다이빙 훈련자를 대상으로 설계되었으며, 14세 미만 아동을 대상으로 별도의 개인정보를 수집하지 않습니다.</p>
                    </Section>

                    <Section no="5" title="개인정보처리방침의 변경">
                        <p>본 앱의 기능 추가 또는 관련 법령 변경 등에 따라 개인정보처리방침이 수정될 수 있습니다.</p>
                        <p>중요한 변경사항이 있을 경우, 앱 업데이트 내역 또는 본 페이지를 통해 공지합니다.</p>
                        <p>변경된 개인정보처리방침은 업데이트된 날로부터 효력이 발생합니다.</p>
                    </Section>

                    <Section no="6" title="문의처">
                        <p>본 앱의 개인정보 보호와 관련하여 문의사항이 있는 경우, 아래 연락처로 문의해 주시기 바랍니다.</p>
                        <div className="rounded-xl bg-mist p-6 space-y-3 text-sm">
                            <div><span className="font-semibold text-navy">담당자:</span>{' '}<span>이찬구 (Chanssem)</span></div>
                            <div>
                                <span className="font-semibold text-navy">이메일:</span>{' '}
                                <a href="mailto:lchangoo@gmail.com" className="text-aqua-dark hover:underline">lchangoo@gmail.com</a>
                            </div>
                            <div>
                                <span className="font-semibold text-navy">Instagram:</span>{' '}
                                <a href="https://instagram.com/chanssem" target="_blank" rel="noopener noreferrer" className="text-aqua-dark hover:underline">https://instagram.com/chanssem</a>
                            </div>
                        </div>
                    </Section>

                    <Reveal className="rounded-2xl border-l-4 border-aqua bg-white p-6 text-sm text-gray-600">
                        <p><span className="font-semibold text-navy">최초 제정일:</span> 2025-12-08</p>
                        <p className="mt-2"><span className="font-semibold text-navy">최종 변경일:</span> 2025-12-08</p>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
