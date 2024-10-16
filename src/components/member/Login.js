import React, { useState } from 'react';

function Login() {
    // State variables to store form data and error message
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Prepare form data
        const formData = {
            mId: username,
            mPw: password,
        };

        try {
            // Send login request to the backend
            const response = await fetch('/mLogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Check if login was successful
            if (response.ok) {
                // After login, check session
                const sessionResponse = await fetch('/api/checkSession');
                const sessionData = await sessionResponse.json();

                if (sessionData === 'success') {
                    window.location.href = '/main'; // Redirect to main page if successful
                } else {
                    setErrorMessage('아이디 또는 비밀번호가 일치하지 않습니다.');
                }
            } else {
                setErrorMessage('아이디 또는 비밀번호가 일치하지 않습니다.');
            }
        } catch (error) {
            setErrorMessage('로그인 요청 중 오류가 발생했습니다.');
        }
    };

    return (
        <>
            <html lang="ko">
            <head>
                <link rel="stylesheet" href="/libs/remixicon/fonts/remixicon.css" />
                <link rel="stylesheet" href="/libs/swiper/swiper-bundle.css" />
                <link rel="stylesheet" href="/libs/bootstrap/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/css/style.min.css" />
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>ILLITPage 로그인 페이지</title>
                <link rel="shortcut icon" type="images/x-icon" href="/img/profile.jpg" />
            </head>

            <body>
            <section className="section login-section" style={{ background: 'linear-gradient(to right, yellow, green)' }}>
                <div className="container">
                    <div className="login-content py-5 px-2 rounded-4">
                        <div className="row align-items-center justify-content-evenly position-relative">
                            <div className="col-lg-5">
                                <div className="card border-0 rounded-4">
                                    <div className="card-body p-lg-4 p-3">
                                        <div className="text-start mt-3 px-lg-4 px-2">
                                            <div className="navbar-brand logo mb-3">
                                                <a className="fs-4 text-primary ls-1 fw-bold" href="/">
                                                    <h1
                                                        style={{
                                                            background: 'linear-gradient(to right, green, yellow)',
                                                            WebkitBackgroundClip: 'text',
                                                            color: 'transparent',
                                                        }}
                                                    >
                                                        ILLIT
                                                    </h1>
                                                </a>
                                            </div>
                                            <div className="login-title">
                                                <h5 className="text-primary fw-semibold">계정에 로그인</h5>
                                            </div>
                                            <p className="text-muted mb-0">다시 오신 것을 환영합니다!</p>
                                            <div className="login-btn main-btn mt-4"></div>
                                            <div className="px-lg-4 px-2">
                                                <form onSubmit={handleSubmit}>
                                                    <div className="form-group input-group">
                                                                <span className="input-group-text" id="basic-addon1">
                                                                    <i className="ri-mail-line"></i>
                                                                </span>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="아이디 입력"
                                                            value={username}
                                                            onChange={(e) => setUsername(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="form-group input-group mb-0">
                                                                <span className="input-group-text" id="basic-addon2">
                                                                    <i className="ri-lock-line"></i>
                                                                </span>
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            placeholder="비밀번호 입력"
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="form-check mt-4 d-flex">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value=""
                                                            checked={rememberMe}
                                                            onChange={() => setRememberMe(!rememberMe)}
                                                        />
                                                        <label className="form-check-label ms-2" htmlFor="flexCheckDefault">
                                                            로그인 상태 유지
                                                        </label>
                                                        <a href="/reset" className="ms-auto text-dark">
                                                            비밀번호를 잊으셨나요?
                                                        </a>
                                                    </div>
                                                    {errorMessage && (
                                                        <div className="alert alert-danger mt-3" role="alert">
                                                            {errorMessage}
                                                        </div>
                                                    )}
                                                    <div className="d-grid mt-3">
                                                        <button type="submit" className="btn btn-primary">
                                                            로그인
                                                        </button>
                                                    </div>
                                                    <p className="text-center mt-3 mb-0">
                                                        <small>
                                                            계정이 없으신가요?{' '}
                                                            <a href="/signup" className="fs-6 text-primary">
                                                                회원가입!
                                                            </a>
                                                        </small>
                                                    </p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </body>
            </html>
        </>
    );
}

export default Login;