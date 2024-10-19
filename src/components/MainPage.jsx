import React, { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';  // 타이핑 애니메이션 라이브러리

// 멤버 데이터 배열
const members = [
    {
        name: "윤아",
        birth: "2004.01.15",
        nationality: "대한민국",
        gender: "여",
        company: "빌리프랩",
        group: "ILLIT",
        debutDate: "2024.03.25",
        mbti: "ENFP",
        imageUrl: "/assets/img/yoona.webp",
    },
    {
        name: "민주",
        birth: "2004.05.11",
        nationality: "대한민국",
        gender: "여",
        company: "빌리프랩",
        group: "ILLIT",
        debutDate: "2024.03.25",
        mbti: "ISTP",
        imageUrl: "/assets/img/minju.webp",
    },
    {
        name: "모카",
        birth: "2004.10.08",
        nationality: "일본",
        gender: "여",
        company: "빌리프랩",
        group: "ILLIT",
        debutDate: "2024.03.25",
        mbti: "ISFP",
        imageUrl: "/assets/img/moka.webp",
    },
    {
        name: "원희",
        birth: "2007.06.26",
        nationality: "대한민국",
        gender: "여",
        company: "빌리프랩",
        group: "ILLIT",
        debutDate: "2024.03.25",
        mbti: "INFP",
        imageUrl: "/assets/img/wonhee.webp",
    },
    {
        name: "이로하",
        birth: "2008.02.04",
        nationality: "일본",
        gender: "여",
        company: "빌리프랩",
        group: "ILLIT",
        debutDate: "2024.03.25",
        mbti: "INFJ",
        imageUrl: "/assets/img/iroha.webp",
    },
];

function MainPage() {
    const [selectedMember, setSelectedMember] = useState(null);
    const typedRef = useRef(null); // DOM에 접근할 수 있도록 useRef 사용

    useEffect(() => {
        const options = {
            strings: ['Singer'],
            typeSpeed: 80,
            backSpeed: 50,
            loop: true,
        };

        // Typed.js 인스턴스를 생성하여 ref로 연결된 DOM 요소에 적용
        const typed = new Typed(typedRef.current, options);

        return () => {
            // 컴포넌트가 언마운트될 때 타이핑 애니메이션을 파기
            typed.destroy();
        };
    }, []);

    const openModal = (member) => {
        setSelectedMember(member);
    };

    const closeModal = () => {
        setSelectedMember(null);
    };

    return (
        <main className="main">
            {/* Hero 섹션 */}
            <section id="hero" className="hero section dark-background">
                <img src="/assets/img/illitphoto.jpg" alt="Hero 이미지" className="" />
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <h2>ILLIT</h2>
                    <p>
                        I'm{' '}
                        <span ref={typedRef}></span>
                        <span className="typed-cursor typed-cursor--blink" aria-hidden="true">|</span>
                    </p>
                </div>
            </section>

            {/* 멤버 섹션 */}
            <section id="Member" className="about section">
                <div className="container section-title">
                    <h2>Member</h2>
                </div>
                <div className="container">
                    <div className="row gy-4 justify-content-center">
                        {members.map((member, index) => (
                            <div className="col-lg-4" key={index}>
                                <div className="card" onClick={() => openModal(member)}>
                                    <img
                                        className="card-img-top"
                                        src={member.imageUrl}
                                        alt={`${member.name} 이미지`}
                                        style={member.name === "모카" ? { height: "559.13px", objectFit: "cover" } : {}}
                                    />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{member.name}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 모달 구조 */}
                {selectedMember && (
                    <div className="modal fade show" style={{ display: "block" }} role="dialog">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">{selectedMember.name} 프로필</h5>
                                    <button type="button" className="close" onClick={closeModal} aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <img src={selectedMember.imageUrl} className="img-fluid mb-3" alt={selectedMember.name} />
                                    <p><strong>생년월일:</strong> {selectedMember.birth}</p>
                                    <p><strong>국적:</strong> {selectedMember.nationality}</p>
                                    <p><strong>성별:</strong> {selectedMember.gender}</p>
                                    <p><strong>소속사:</strong> {selectedMember.company}</p>
                                    <p><strong>그룹명:</strong> {selectedMember.group}</p>
                                    <p><strong>데뷔일:</strong> {selectedMember.debutDate}</p>
                                    <p><strong>MBTI:</strong> {selectedMember.mbti}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* MV 섹션 */}
            <section id="mv" className="skills section light-background">
                <div className="container section-title">
                    <h2>MV</h2>
                    <a href="https://youtu.be/Vk5-c_v4gMU" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/magnetic.webp" alt="magnetic" width="450px" height="300px" />
                    </a>
                    <a href="https://youtu.be/UCmgGZbfjmk" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/img/luckygirlsyndrome.webp" alt="luckygirlsyndrome" width="450px" height="300px" />
                    </a>
                </div>
            </section>

            {/* History 섹션 */}
            <section id="History" className="resume section">
                <div className="container section-title">
                    <h2>연혁</h2>
                    <p>아일릿의 일대기를 만나보세요.</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="resume-item pb-0">
                                <h4>2023-09</h4>
                                <ul>
                                    <li>01 - ILLIT 결성</li>
                                </ul>
                            </div>
                            <div className="resume-item pb-0">
                                <h4>2024</h4>
                                <ul>
                                    <li>03.25 - ILLIT SUPER REAL ME 데뷔</li>
                                    <li>걸그룹 데뷔 음반 초동 판매량 1위 기록</li>
                                    <li>데뷔곡 최초로 발매 3주 만에 미국 빌보드 핫 100 차트 91위 진입</li>
                                    <li>미국 빌보드 글로벌 200 6위에 진입</li>
                                    <li>25주 이상 빌보드 차트에 머물며 장기흥행</li>
                                    <li>걸그룹 최초 지상파와 케이블의 모든 음악 방송에서 1위를 수상</li>
                                    <li>Spotify 월간 리스너 수 1,000만 명 달성</li>
                                    <li>데뷔곡 'Magnetic' 뮤직비디오 조회수 1억 뷰 돌파</li>
                                    <li>09-01 'GLLIT' 팬덤명 발표</li>
                                    <li>10.21 - ILLIT I’LL LIKE YOU 컴백</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 연락처 섹션 */}
            <section id="contact" className="contact section">
                <div className="container section-title">
                    <h2>주소</h2>
                </div>
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-5">
                            <div className="info-wrap">
                                <div className="info-item d-flex">
                                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                                    <div>
                                        <p>서울특별시 용산구 한강대로 42, 14층</p>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50628.72994284811!2d126.96437419999998!3d37.5245281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5c56c098de9%3A0x26f5affb87dd3ada!2z67mM66as7ZSE656p!5e0!3m2!1sko!2sus!4v1728103719048!5m2!1sko!2sus"
                                            width="350"
                                            height="250"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="서울 위치 지도"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default MainPage;