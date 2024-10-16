import React, { useState, useEffect } from 'react';
import '/libs/remixicon/fonts/remixicon.css';
import '/libs/bootstrap/css/bootstrap.min.css';
import '/css/style.min.css';
import '/css/header.css';
import '/css/myinfo.css';

function ViewProfile() {
  const [view, setView] = useState({
    MId: '',
    MEmail: '',
    MName: '',
    MPhone: '',
    MBirth: '',
    MPoint: '',
    MGender: '',
    MProfileName: '',
  });
  const [attendanceCount, setAttendanceCount] = useState(0);
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [loginHistory, setLoginHistory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // 서버에서 프로필 정보 및 출석 일수를 가져오는 함수
  useEffect(() => {
    fetchProfile();
    fetchAttendanceDays();
  }, []);

  // 프로필 데이터 가져오기
  const fetchProfile = async () => {
    try {
      const response = await fetch('/getUserProfile');
      const data = await response.json();
      setView(data);
    } catch (error) {
      console.error('프로필 정보를 가져오는 중 오류 발생:', error);
    }
  };

  // 출석 일수 가져오기
  const fetchAttendanceDays = async () => {
    try {
      const response = await fetch('/getAttendanceDays');
      const days = await response.json();
      setAttendanceCount(days.length);
    } catch (error) {
      console.error('출석 일수를 가져오는 중 오류 발생:', error);
    }
  };

  // 구매 내역 가져오기
  const fetchPurchaseHistory = async (page) => {
    try {
      const response = await fetch(`/phistory?page=${page}`);
      const data = await response.json();
      setPurchaseHistory(data);
    } catch (error) {
      console.error('구매 내역을 가져오는 중 오류 발생:', error);
    }
  };

  // 로그인 기록 가져오기
  const fetchLoginHistory = async (page) => {
    try {
      const response = await fetch(`/logHistory?page=${page}`);
      const data = await response.json();
      setLoginHistory(data);
    } catch (error) {
      console.error('로그인 기록을 가져오는 중 오류 발생:', error);
    }
  };

  // 페이지 변경 함수
  const changePage = (page) => {
    setCurrentPage(page);
    fetchPurchaseHistory(page);
    fetchLoginHistory(page);
  };

  return (
      <div className="main-container">
        <div className="left-container">
          <section className="profile-section">
            <img src={`/profile/${view.MProfileName}`} alt="프로필 사진" className="profile-img" />
          </section>
          <section className="other-info">
            <div className="info-container">
              <section className="activity-section">
                <h3>최근 활동</h3>
                <ul>
                  <li>로그인: 2024-07-17</li>
                  <li>출석 일수: {attendanceCount}일</li>
                </ul>
              </section>
            </div>
          </section>
        </div>
        <div className="right-container">
          <div className="info-container">
            <h2 className="display-6 fw-semibold">회원정보</h2>
            <table className="info-table">
              <tbody>
              <tr>
                <th>아이디</th>
                <td>{view.MId}</td>
              </tr>
              <tr>
                <th>이메일</th>
                <td>{view.MEmail}</td>
              </tr>
              <tr>
                <th>이름</th>
                <td>{view.MName}</td>
              </tr>
              <tr>
                <th>전화번호</th>
                <td>{view.MPhone}</td>
              </tr>
              <tr>
                <th>생일</th>
                <td>{view.MBirth}</td>
              </tr>
              <tr>
                <th>포인트</th>
                <td>{view.MPoint}</td>
              </tr>
              <tr>
                <th>성별</th>
                <td>{view.MGender}</td>
              </tr>
              </tbody>
            </table>
            <div className="btn-container">
              <button
                  onClick={() => fetchLoginHistory(currentPage)}
                  className="btn btn-primary text-light"
                  data-bs-toggle="modal"
                  data-bs-target="#loginHistoryModal"
              >
                로그 보기
              </button>
              <button
                  onClick={() => fetchPurchaseHistory(currentPage)}
                  className="btn btn-primary text-light"
                  data-bs-toggle="modal"
                  data-bs-target="#purchaseHistoryModal"
              >
                구매 내역
              </button>
              <a href={`/modiForm/${view.MId}`} className="btn btn-danger text-light">
                정보 수정
              </a>
              <a href={`/deleteForm/${view.MId}`} className="btn btn-light" target="_blank">
                회원 탈퇴
              </a>
            </div>
          </div>
        </div>

        {/* 구매 내역 모달 */}
        <div className="modal fade" id="purchaseHistoryModal" tabIndex="-1" aria-labelledby="purchaseHistoryModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="purchaseHistoryModalLabel">구매 내역</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <table className="table table-hover">
                  <thead>
                  <tr>
                    <th>상품명</th>
                    <th>구매 항목</th>
                    <th>구매일자</th>
                    <th>다운로드</th>
                  </tr>
                  </thead>
                  <tbody>
                  {purchaseHistory.map((item, index) => (
                      <tr key={index}>
                        <td>{item.pexplain}</td>
                        <td>{item.pname}</td>
                        <td>{new Date(item.date).toLocaleDateString()}</td>
                        <td>
                          <a href="#">다운로드</a>
                        </td>
                      </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* 로그인 기록 모달 */}
        <div className="modal fade" id="loginHistoryModal" tabIndex="-1" aria-labelledby="loginHistoryModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="loginHistoryModalLabel">로그인 기록</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <table className="table table-hover">
                  <thead>
                  <tr>
                    <th>로그인 시간</th>
                    <th>IP 주소</th>
                    <th>위치</th>
                    <th>ISP</th>
                  </tr>
                  </thead>
                  <tbody>
                  {loginHistory.map((item, index) => (
                      <tr key={index}>
                        <td>{new Date(item.ldate).toLocaleDateString()}</td>
                        <td>{item.ipaddr}</td>
                        <td>{item.location}</td>
                        <td>{item.isp}</td>
                      </tr>
                  ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ViewProfile;