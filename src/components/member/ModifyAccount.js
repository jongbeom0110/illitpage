import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS 가져오기
import '/libs/remixicon/fonts/remixicon.css'; // Remixicon 가져오기
import '/libs/swiper/swiper-bundle.css'; // Swiper CSS 가져오기
import '/css/style.min.css'; // Custom Style 가져오기
import '/css/member/idReset.css'; // Custom ID Reset Style 가져오기

function ResetPassword() {
    const [email, setEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [receivedCode, setReceivedCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [step, setStep] = useState(1); // Step 1: Enter email, Step 2: Reset password
    const [alertMessage, setAlertMessage] = useState('이메일 주소를 입력해주세요.');

    // Send verification code
    const handleSendCode = async () => {
        if (email !== '') {
            try {
                const response = await fetch('/passwordChange', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ MEmail: email }),
                });
                const data = await response.text();
                setReceivedCode(data);
                setAlertMessage('인증번호가 발송되었습니다. 이메일을 확인하세요.');
            } catch (error) {
                setAlertMessage('인증번호 발송에 실패했습니다.');
            }
        } else {
            alert('이메일을 입력해주세요.');
        }
    };

    // Handle first form submission (email and verification code)
    const handleFirstFormSubmit = (e) => {
        e.preventDefault();
        if (verificationCode === receivedCode) {
            setStep(2); // Move to the second step
        } else {
            alert('인증번호가 틀렸습니다.');
        }
    };

    // Handle second form submission (new password)
    const handleSecondFormSubmit = async (e) => {
        e.preventDefault();
        if (newPassword === confirmPassword) {
            try {
                await fetch('/resetPassword', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ MEmail: email, MPw: newPassword }),
                });
                alert('비밀번호 재설정이 완료되었습니다.');
                window.location.href = 'login';
            } catch (error) {
                alert('비밀번호 재설정 실패');
            }
        } else {
            alert('새 비밀번호와 비밀번호 확인이 다릅니다.');
        }
    };

    return (
        <div className="container">
            <div className="login-content py-5 px-2 rounded-4">
                <div className="row align-items-center justify-content-evenly position-relative">
                    <div className="col-lg-5">
                        <div className="card border-0 rounded-4">
                            <div className="card-body p-lg-4 p-3">
                                {step === 1 ? (
                                    <div>
                                        <div className="text-start mt-3 px-lg-4 px-2">
                                            <div className="navbar-brand logo mb-3">
                                                <a className="navbar-caption fs-4 text-dark ls-1 fw-bold" href="/">
                                                    <i className="ri-robot-2-fill text-danger fs-3 me-1"></i>Dev<b className="text-danger">Hub</b>
                                                </a>
                                            </div>
                                            <div className="login-title">
                                                <h5 className="text-primary fw-semibold">비밀번호 재설정</h5>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <div className="alert alert-warning text-center" role="alert">
                                                {alertMessage}
                                            </div>
                                            <form onSubmit={handleFirstFormSubmit}>
                                                <div className="form-group input-group">
                                                    <span className="input-group-text">
                                                        <i className="ri-mail-line"></i>
                                                    </span>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        placeholder="이메일 입력"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        required
                                                    />
                                                    <button
                                                        type="button"
                                                        className="btn btn-secondary ms-2"
                                                        onClick={handleSendCode}
                                                    >
                                                        보내기
                                                    </button>
                                                </div>
                                                <div className="form-group input-group mt-3">
                                                    <span className="input-group-text">
                                                        <i className="ri-lock-line"></i>
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="인증번호 입력"
                                                        value={verificationCode}
                                                        onChange={(e) => setVerificationCode(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                                <div className="d-grid mt-3">
                                                    <button type="submit" className="btn btn-primary">
                                                        비밀번호 재설정
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <div className="text-start mt-3 px-lg-4 px-2">
                                            <div className="navbar-brand logo mb-3">
                                                <a className="navbar-caption fs-4 text-dark ls-1 fw-bold" href="/">
                                                    <i className="ri-robot-2-fill text-danger fs-3 me-1"></i>Dev<b className="text-danger">Hub</b>
                                                </a>
                                            </div>
                                            <div className="login-title">
                                                <h5 className="text-primary fw-semibold">비밀번호 재설정</h5>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <form onSubmit={handleSecondFormSubmit}>
                                                <div className="form-group input-group">
                                                    <span className="input-group-text">
                                                        <i className="ri-lock-line"></i>
                                                    </span>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        placeholder="새 비밀번호 입력"
                                                        value={newPassword}
                                                        onChange={(e) => setNewPassword(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group input-group mt-3">
                                                    <span className="input-group-text">
                                                        <i className="ri-lock-line"></i>
                                                    </span>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        placeholder="비밀번호 확인"
                                                        value={confirmPassword}
                                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                                        required
                                                    />
                                                </div>
                                                <div className="d-grid mt-3">
                                                    <button type="submit" className="btn btn-primary">
                                                        비밀번호 재설정 완료
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                )}
                                <p className="mt-4 text-center">
                                    <small>
                                        로그인 페이지로 돌아가기{' '}
                                        <a href="/login" className="text-primary fs-6">
                                            로그인!
                                        </a>
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 text-start">
                        <img src="%PUBLIC_URL%/assets/img/illit.png" alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;