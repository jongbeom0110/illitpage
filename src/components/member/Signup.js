import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'libs/remixicon/fonts/remixicon.css';
import 'libs/swiper/swiper-bundle.css';


function Signup() {
    const [name, setName] = useState('');
    const [termsAgreed, setTermsAgreed] = useState(false);
    const [formStep, setFormStep] = useState(1); // 폼 단계 관리
    const [formData, setFormData] = useState({
        MId: '',
        MPw: '',
        MProfile: null,
        MNickName: ''
    });

    const handleFirstFormSubmit = (event) => {
        event.preventDefault();

        if (!termsAgreed) {
            alert('이용약관에 동의해야 합니다.');
            return;
        }

        setFormData({ ...formData, MNickName: name });
        setFormStep(2); // 두 번째 폼으로 전환
    };

    const handleSecondFormSubmit = async (event) => {
        event.preventDefault();

        // 비밀번호 확인 로직 추가
        const checkPw = document.getElementById('CheckPw').value;
        if (formData.MPw !== checkPw) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        // FormData 객체 생성
        const formDataToSend = new FormData();
        formDataToSend.append('MId', formData.MId);
        formDataToSend.append('MPw', formData.MPw);
        formDataToSend.append('MProfile', formData.MProfile);
        formDataToSend.append('MNickName', formData.MNickName);

        try {
            const response = await fetch('/mJoin', {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                alert('가입이 완료되었습니다!');
                setFormStep(3); // 세 번째 폼으로 전환
                setTimeout(() => {
                    window.location.href = '/login'; // 3초 후 로그인 페이지로 이동
                }, 3000);
            } else {
                alert('가입 처리 중 오류가 발생했습니다.');
            }
        } catch (error) {
            console.error('폼 제출 오류:', error);
            alert('서버와 통신하는 중 문제가 발생했습니다.');
        }
    };

    const handleFileChange = (event) => {
        setFormData({ ...formData, MProfile: event.target.files[0] });
    };

    return (
        <section className="section login-section" style={{ background: 'linear-gradient(to right, yellow, green)' }}>
            <div className="container">
                <div className="login-content py-5 px-2 rounded-4">
                    <div className="row align-items-center justify-content-evenly position-relative">
                        <div className="col-lg-5">
                            <div className="card border-0 rounded-4">
                                <div className="card-body p-lg-4 p-3">
                                    {formStep === 1 && (
                                        <div id="first-form-container">
                                            <div className="text-start mt-3 px-lg-4 px-2">
                                                <h1 style={{ background: 'linear-gradient(to right, green, yellow)', WebkitBackgroundClip: 'text', color: 'transparent' }}>ILLIT</h1>
                                                <h5 className="text-primary fw-semibold">계정 생성하기</h5>
                                                <p className="text-muted mb-0">다시 오신 것을 환영합니다! 계정을 등록해 주세요.</p>
                                            </div>
                                            <div className="px-lg-4 px-2">
                                                <form onSubmit={handleFirstFormSubmit}>
                                                    <div className="form-group input-group">
                                                        <span className="input-group-text"><i className="ri-user-line"></i></span>
                                                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름 입력" required />
                                                    </div>
                                                    <div className="form-check mt-4 d-flex">
                                                        <input className="form-check-input" type="checkbox" id="exampleCheck1" checked={termsAgreed} onChange={(e) => setTermsAgreed(e.target.checked)} />
                                                        <label className="form-check-label ms-2">저는 <a href="#" className="text-danger">이용 약관</a>에 동의합니다.</label>
                                                    </div>
                                                    <div className="d-grid mt-3">
                                                        <button type="submit" className="btn btn-primary">가입</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    )}

                                    {formStep === 2 && (
                                        <div id="second-form-container">
                                            <div className="text-start mt-3 px-lg-4 px-2">
                                                <h1 style={{ background: 'linear-gradient(to right, green, yellow)', WebkitBackgroundClip: 'text', color: 'transparent' }}>ILLIT</h1>
                                                <h5 className="text-primary fw-semibold">추가 정보 입력</h5>
                                                <p className="text-muted mb-0">계정 생성을 위해 추가 정보를 입력해 주세요.</p>
                                            </div>
                                            <div className="px-lg-4 px-2">
                                                <form onSubmit={handleSecondFormSubmit} encType="multipart/form-data">
                                                    <div className="form-group input-group mb-3">
                                                        <span className="input-group-text"><i className="ri-user-line"></i></span>
                                                        <input type="text" className="form-control" value={formData.MId} onChange={(e) => setFormData({ ...formData, MId: e.target.value })} placeholder="아이디" required />
                                                    </div>
                                                    <div className="form-group input-group mb-3">
                                                        <span className="input-group-text"><i className="ri-lock-line"></i></span>
                                                        <input type="password" className="form-control" value={formData.MPw} onChange={(e) => setFormData({ ...formData, MPw: e.target.value })} placeholder="비밀번호" required />
                                                    </div>
                                                    <div className="form-group input-group mb-3">
                                                        <span className="input-group-text"><i className="ri-lock-line"></i></span>
                                                        <input type="password" className="form-control" id="CheckPw" placeholder="비밀번호 확인" required />
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="MProfile" className="form-label">프로필 사진</label>
                                                        <input className="form-control" type="file" onChange={handleFileChange} />
                                                    </div>
                                                    <div className="d-grid mt-3">
                                                        <button type="submit" className="btn btn-primary">가입</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    )}

                                    {formStep === 3 && (
                                        <div id="third-form-container">
                                            <div className="text-center mt-3 px-lg-4 px-2">
                                                <img src="/assets/img/profile.jpg" alt="프로필" />
                                                <h5 className="text-primary fw-semibold">가입이 완료되었습니다!</h5>
                                                <p className="text-muted mb-0">잠시 후 메인 페이지로 이동합니다.</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 text-start">
                            <img src="/assets/img/illit.png" alt="ILLIT 로고" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Signup;