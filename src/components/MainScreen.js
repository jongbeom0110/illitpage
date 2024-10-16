import React, { useEffect } from "react";

function MainScreen() {
  useEffect(() => {
    const handle = document.querySelector(".handle");
    handle.addEventListener("click", () => {
      const door = document.querySelector(".door");
      door.classList.toggle("open");
      const doorOpenSound = new Audio("assets/sound/open.mp3");
      doorOpenSound.play();
    });
  }, []);

  return (
    <div id="main-screen" className="d-flex vh-100">
      <div className="content-container">
        <div className="content">
          <img id="img" src="%PUBLIC_URL%/assets/img/illitphoto.jpg" width="100" height="100" alt="Illit" />
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
    