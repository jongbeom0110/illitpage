import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainScreen from "./components/MainScreen";
import Members from "./components/Members";
import MvSection from "./components/MvSection";
import HistorySection from "./components/HistorySection";
import ContactSection from "./components/ContactSection";
import "./index.css"
import "./assets/css/style.min.css"


function App() {
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