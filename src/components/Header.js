import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header id="header" className="header dark-background d-flex flex-column">
            <div className="profile-img">
                <img
                    className="img-fluid rounded-circle"
                    src="/assets/img/profile.jpg"
                    width="40px"
                    height="40px"
                    alt="프로필"
                />
                <Link to="/" className="logo">
                    <h1 className="sitename">ILLIT</h1>
                </Link>
            </div>
            <nav id="navmenu" className="navmenu">
                <ul className="navbar-nav nav-btn align-items-center">
                    <li className="nav-item me-3">
                        <Link className="signup-link" to="/member/signup" aria-label="회원 가입">가입하기</Link>
                    </li>
                    <li className="nav-item me-3">
                        <Link className="login-link" to="/member/login" aria-label="로그인">로그인</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;