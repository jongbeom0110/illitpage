import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '/libs/remixicon/fonts/remixicon.css';
import '/libs/swiper/swiper-bundle.css';
import '/css/style.min.css';
import '/css/header.css';
import '/css/member/delete.css';

function DeleteAccount() {
    const [isAgreed, setIsAgreed] = useState(false); // 이용약관 동의 체크 상태
    const [MId, setMId] = useState('sampleID'); // 회원 아이디 (예시 데이터)
    const [isSubmitting, setIsSubmitting] = useState(false); // 폼 제출 중 상태
    const [errorMessage, setErrorMessage] = useState(''); // 오류 메시지 상태

    // 체크박스 변경 시 동작하는 함수
    const handleCheckboxChange = () => {
        setIsAgreed(!isAgreed); // 체크박스 상태를 반전시킴
    };

    // 폼 제출 처리 함수
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isAgreed) {
            setErrorMessage('이용약관에 동의해야 합니다.');
            return;
        }

        setIsSubmitting(true); // 폼 제출 중 상태 설정
        setErrorMessage(''); // 오류 메시지 초기화

        // 실제 탈퇴 요청 로직
        try {
            const response = await fetch('/mDelete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ MId }),
            });

            if (!response.ok) {
                throw new Error('서버 요청 실패');
            }

            const result = await response.json();
            if (result.success) {
                alert('회원 탈퇴가 성공적으로 처리되었습니다.');
                // 탈퇴 성공 후 리다이렉트 또는 추가 처리
                window.location.href = '/goodbye'; // 탈퇴 후 페이지 이동
            } else {
                throw new Error(result.message || '탈퇴 처리 중 오류가 발생했습니다.');
            }
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setIsSubmitting(false); // 폼 제출 중 상태 해제
        }
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="hero-section bg-img-2 bg-home-1" style={{ animation: 'fadeInLeft 4s ease' }}>
                <div className="bg-overlay-2"></div>
                <div className="container">
                    <div className="row align-items-center justify-content-center text-center position-relative">
                        <div className="col-lg-10">
                            <h4 className="display-6 fw-semibold text-light lh-base">회원 탈퇴</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Section */}
            <section className="section contact-us bg-primary" style={{ animation: 'fadeInLeft 4s ease' }}>
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6">
                            <h5 className="mb-4 text-light">회원 탈퇴를<br />정말로 진행하시겠습니까?</h5>
                            <br />
                            <form onSubmit={handleSubmit}>
                                {/* 이용약관 동의 체크박스 */}
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="exampleCheck1"
                                        checked={isAgreed}
                                        onChange={handleCheckboxChange}
                                    />
                                    <label className="form-check-label text-muted mb-4 text-light" htmlFor="exampleCheck1">
                                        안내 사항을 모두 확인 했으며 이에 <a href="#" className="text-danger">동의</a> 합니다.
                                    </label>
                                </div>

                                {/* 오류 메시지 표시 */}
                                {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}

                                {/* 회원 탈퇴 버튼 */}
                                <button type="submit" className="btn btn-danger text-light w-100 fs-6" disabled={isSubmitting}>
                                    {isSubmitting ? '탈퇴 진행 중...' : '회원 탈퇴'}
                                </button>
                            </form>
                        </div>

                        <div className="col-lg-5">
                            <p className="m-0">
                                해당 아이디 <strong>{MId}</strong> 탈퇴를 진행할 경우<p className="m-0">재사용 및 복구가 불가능 합니다</p>
                            </p>
                            <br />
                            <p className="m-0 rainbow-text">
                                ※ 탈퇴한 아이디는 본인, 타인 모두 복구, 재사용이 불가능하오니 신중한 선택하시길 바랍니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default DeleteAccount;