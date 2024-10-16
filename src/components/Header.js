import React from 'react';

function Header() {
  return (
    <header id="header" className="header dark-background d-flex flex-column">
      <div className="profile-img">
        <img
          className="img-fluid rounded-circle"
          src="%PUBLIC_URL%/assets/img/profile.jpg"
          width="40px"
          height="40px"
          alt="프로필"
        />
        <a href="/index.html" className="logo">
          <h1 className="sitename">ILLIT</h1>
        </a>
      </div>
      <nav id="navmenu" className="navmenu">
        <ul className="navbar-nav nav-btn align-items-center">
          <li className="nav-item me-3">
            <a className="signup-link" href="/member/signup.js">가입하기</a>
          </li>
          <li className="nav-item me-3">
            <a className="login-link" href="/member/login.js">로그인</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
    