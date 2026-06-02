import React from 'react';
import Container from '../components/layout/Container';
import Card from '../components/ui/Card';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* 히어로 섹션 */}
            <section className="bg-gradient-to-r from-padi-blue to-padi-dark-blue text-white section-padding">
                <Container>
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            개인정보처리방침
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Freedive Chanssem 앱의 개인정보 보호 정책
                        </p>
                    </div>
                </Container>
            </section>

            {/* 개인정보처리방침 내용 */}
            <section className="section-padding">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <Card className="mb-8">
                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-600 mb-8">
                                    본 개인정보처리방침은 개발자 이찬구(Chanssem)가 제공하는 모바일 애플리케이션 
                                    <strong className="text-gray-900"> "freedive chanssem"</strong>(이하 "본 앱")에 적용됩니다.
                                </p>
                                <p className="text-gray-600 mb-8">
                                    본 앱은 프리다이빙 훈련용 CO₂ / O₂ / 원브레스 테이블 타이머 기능을 제공하며, 
                                    사용자의 개인정보를 수집·이용하지 않습니다.
                                </p>
                            </div>
                        </Card>

                        {/* 섹션 1 */}
                        <Card className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-padi-blue">1.</span>
                                수집하는 개인정보
                            </h2>
                            <div className="text-gray-700 space-y-4">
                                <p>본 앱은 다음과 같은 개인정보를 수집하지 않습니다.</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>이름, 이메일 주소, 전화번호 등 개인 식별 정보</li>
                                    <li>위치 정보(GPS 등)</li>
                                    <li>기기 고유 식별자(IMEI, 광고 ID 등)</li>
                                    <li>결제 정보, 계정 정보</li>
                                    <li>건강·운동 기록 등 민감 정보</li>
                                </ul>
                                <p className="mt-4">
                                    또한, 본 앱은 별도의 회원가입, 로그인, 서버 연동 기능을 제공하지 않습니다.
                                </p>
                            </div>
                        </Card>

                        {/* 섹션 2 */}
                        <Card className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-padi-blue">2.</span>
                                데이터 사용 및 저장
                            </h2>
                            <div className="text-gray-700 space-y-4">
                                <p>본 앱은 프리다이빙 훈련을 위한 타이머 및 테이블 설정 기능만 제공합니다.</p>
                                <p>
                                    일부 설정 정보(예: 마지막으로 사용한 숨참기 시간, 라운드 수 등)가 디바이스 내에 
                                    로컬 저장소로 저장될 수 있으나, 이 정보는
                                </p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>사용자를 식별할 수 없으며</li>
                                    <li>개발자 또는 제3자 서버로 전송되지 않습니다.</li>
                                </ul>
                                <p className="mt-4">
                                    본 앱은 인터넷 연결이 없는 환경에서도 동작하도록 설계되어 있으며,
                                    앱 사용 중 서버와의 통신을 통해 데이터를 전송하지 않습니다.
                                </p>
                            </div>
                        </Card>

                        {/* 섹션 3 */}
                        <Card className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-padi-blue">3.</span>
                                제3자 제공 및 수탁
                            </h2>
                            <div className="text-gray-700 space-y-4">
                                <p>본 앱은 사용자의 개인정보를 제3자에게 제공하거나, 외부 업체에 위탁하지 않습니다.</p>
                                <p>
                                    광고 SDK, 분석(analytics) 도구, 소셜 로그인, 푸시 알림(서버 기반) 등의 
                                    제3자 서비스도 사용하지 않습니다.
                                </p>
                            </div>
                        </Card>

                        {/* 섹션 4 */}
                        <Card className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-padi-blue">4.</span>
                                아동의 개인정보
                            </h2>
                            <div className="text-gray-700 space-y-4">
                                <p>
                                    본 앱은 주로 성인 프리다이버 및 프리다이빙 훈련자를 대상으로 설계되었으며,
                                    14세 미만 아동을 대상으로 별도의 개인정보를 수집하지 않습니다.
                                </p>
                            </div>
                        </Card>

                        {/* 섹션 5 */}
                        <Card className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-padi-blue">5.</span>
                                개인정보처리방침의 변경
                            </h2>
                            <div className="text-gray-700 space-y-4">
                                <p>
                                    본 앱의 기능 추가 또는 관련 법령 변경 등에 따라 개인정보처리방침이 수정될 수 있습니다.
                                </p>
                                <p>
                                    중요한 변경사항이 있을 경우, 앱 업데이트 내역 또는 본 페이지를 통해 공지합니다.
                                </p>
                                <p>
                                    변경된 개인정보처리방침은 업데이트된 날로부터 효력이 발생합니다.
                                </p>
                            </div>
                        </Card>

                        {/* 섹션 6 */}
                        <Card className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="text-padi-blue">6.</span>
                                문의처
                            </h2>
                            <div className="text-gray-700 space-y-4">
                                <p>
                                    본 앱의 개인정보 보호와 관련하여 문의사항이 있는 경우, 아래 연락처로 문의해 주시기 바랍니다.
                                </p>
                                <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                                    <div>
                                        <span className="font-semibold text-gray-900">담당자:</span>{' '}
                                        <span className="text-gray-700">이찬구 (Chanssem)</span>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-gray-900">이메일:</span>{' '}
                                        <a 
                                            href="mailto:lchangoo@gmail.com" 
                                            className="text-padi-blue hover:underline"
                                        >
                                            lchangoo@gmail.com
                                        </a>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-gray-900">Instagram:</span>{' '}
                                        <a 
                                            href="https://instagram.com/chanssem" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-padi-blue hover:underline"
                                        >
                                            https://instagram.com/chanssem
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* 날짜 정보 */}
                        <Card className="bg-padi-light-blue border-padi-blue">
                            <div className="text-sm text-gray-600 space-y-2">
                                <p>
                                    <span className="font-semibold text-gray-900">최초 제정일:</span> 2025-12-08
                                </p>
                                <p>
                                    <span className="font-semibold text-gray-900">최종 변경일:</span> 2025-12-08
                                </p>
                            </div>
                        </Card>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default PrivacyPolicy;

