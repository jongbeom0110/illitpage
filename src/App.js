import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainScreen from "./components/MainScreen";
import MainPage from "./components/MainPage";
import AOS from 'aos';
import Swiper from "swiper";
import "./index.css";
import "aos/dist/aos.css"
import Signup from "./components/member/Signup";
import Login from "./components/member/Login";
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
                <Route path="/index" element={<MainContent/>} />
                <Route path="/member/signup" element={<Signup/>}/>
                <Route path="/member/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

// 메인 화면과 나머지 컴포넌트를 포함하는 함수형 컴포넌트
function MainContent() {
    return (
        <div>
            <Header />
            <MainPage/>
            <Footer/>
        </div>
    );
}

export default App;