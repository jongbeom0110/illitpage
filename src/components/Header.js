import React, { useState } from 'react';

const Header = ({ formData }) => {
    const [headerShow, setHeaderShow] = useState(false);

    const toggleHeader = () => {
        setHeaderShow(!headerShow);
    };

    return (
        <header id="header" className={`header dark-background d-flex flex-column ${headerShow ? 'header-show' : ''}`}>
            <i className={`header-toggle d-xl-none bi ${headerShow ? 'bi-x' : 'bi-list'}`} onClick={toggleHeader}></i>

            <div className="profile-img">
                <img src={`/uploads/${formData?.MProfile}`} alt="프로필 이미지"/>
            </div>

            <a className="logo d-flex align-items-center justify-content-center" href="/">
                <h1 className="sitename">ILLIT</h1>
            </a>

            <div className="social-links text-center">
                <a href="https://x.com/illit_official" className="twitter"><i className="bi bi-twitter-x"></i></a>
                <a href="https://www.facebook.com/ILLIT.beliftlab/" className="facebook"><i className="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/illit_official" className="instagram"><i className="bi bi-instagram"></i></a>
                <a href="https://www.youtube.com/@ILLIT_official" className="youtube"><i className="bi bi-youtube"></i></a>
                <a href="https://weverse.io/illit/feed" className="weverse">
                    <img src="/assets/img/weverse.jpg" alt="weverse" width="14px" height="14px" />
                </a>
            </div>

            <nav id="navmenu" className="navmenu">
                <ul>
                    <li><a href="#Member"><i className="bi bi-person navicon"></i>Member</a></li>
                    <li><a href="#mv"><i className="bi bi-file-earmark-text navicon"></i>Mv</a></li>
                    <li><a href="#History"><i className="bi bi-file-earmark-text navicon"></i>History</a></li>
                    <li><a href="/schedule"><i className="bi bi-images navicon"></i>schedule</a></li>
                    <li><a href="/music"><i className="bi bi-hdd-stack navicon"></i>music</a></li>
                    <li><a href="#contact"><i className="bi bi-envelope navicon"></i>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;