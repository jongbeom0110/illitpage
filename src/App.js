import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainScreen from "./components/MainScreen";
import Members from "./components/Members";
import MvSection from "./components/MvSection";
import HistorySection from "./components/HistorySection";
import ContactSection from "./components/ContactSection";
import AOS from 'aos';
import Swiper from "swiper";
import "./index.css";
import "aos/dist/aos.css"

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
            </Routes>
        </Router>
    );
}

// 메인 화면과 나머지 컴포넌트를 포함하는 함수형 컴포넌트
function MainContent() {
    return (
        <>
            <Header />
            <Members />
            <MvSection />
            <HistorySection />
            <ContactSection />
        </>
    );
}

export default App;