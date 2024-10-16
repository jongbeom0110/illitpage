import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate를 import

function MainScreen() {
  const navigate = useNavigate(); // useNavigate 훅을 사용

  useEffect(() => {
    const handle = document.querySelector(".handle");

    const handleClick = () => {
      const door = document.querySelector(".door");
      door.classList.toggle("open");

      const doorOpenSound = new Audio("/assets/sound/open.mp3");
      doorOpenSound.play();

      // 문이 열리는 애니메이션이 끝난 후에 페이지 이동
      setTimeout(() => {
        navigate("/index");
      }, 4000); // 1초(1000ms) 후에 이동, 문이 열리는 시간에 맞게 조정 가능
    };

    handle.addEventListener("click", handleClick);

    // 이벤트 리스너 제거
    return () => {
      handle.removeEventListener("click", handleClick);
    };
  }, [navigate]);

  return (
      <div id="main-screen" className="d-flex vh-100">
        <div className="content-container">
          <div className="content">
            <img id="img" src="/assets/img/illitphoto.jpg" width="100" height="100" alt="Illit" />
          </div>
        </div>

        <div className="door-container">
          <div className="door">
            <div className="handle"></div>
          </div>
        </div>
      </div>
  );
}

export default MainScreen;