import React from 'react';

function HistorySection() {
  return (
      <section id="History" className="resume section">
        {/* 섹션 제목 */}
        <div className="container section-title" data-aos="fade-up">
          <h2>연혁</h2>
          <p>아일릿의 일대기를 만나보세요.</p>
        </div>
        {/* 섹션 제목 끝 */}
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
              {/* 이력 아이템 끝 */}
            </div>
            {/* 이력 아이템 끝 */}
          </div>
        </div>
      </section>
  );
}

export default HistorySection;