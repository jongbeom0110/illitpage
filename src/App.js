import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainScreen from "./components/MainScreen";
import MainPage from "./components/MainPage";
import AOS from 'aos';
import Swiper from "swiper";
import "./index.css";
import "aos/dist/aos.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Footer from "./components/Footer";

function App() {
    useEffect(() => {
        // AOS 초기화
        AOS.init();

        // Swiper 초기화 (사용되는 곳에서 필요할 경우)
        new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainScreen />} />
                <Route path="/index" element={<MainContent />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

// 메인 화면과 나머지 컴포넌트를 포함하는 함수형 컴포넌트
function MainContent() {
    // MProfileName 대신에 formData 객체를 정의합니다.
    const [formData] = useState({
        MProfile: 'defaultProfile.png', // 기본 프로필 이미지 파일 이름
    });

    return (
        <div>
            {/* formData 객체를 Header에 전달 */}
            <Header formData={formData} />
            <MainPage />
            <Footer />
        </div>
    );
}

export default App;