import React from 'react';

function MvSection() {
  return (
    <section id="mv" className="section py-5 bg-light">
      <div className="container text-center">
        <h2>MV</h2>
        <div className="d-flex justify-content-center">
          <a href="https://youtu.be/Vk5-c_v4gMU" target="_blank" className="mx-3">
            <img src="%PUBLIC_URL%/assets/img/magnetic.webp" alt="magnetic" width="450px" height="300px" />
          </a>
          <a href="https://youtu.be/UCmgGZbfjmk" target="_blank" className="mx-3">
            <img src="%PUBLIC_URL%/assets/img/luckygirlsyndrome.webp" alt="luckygirlsyndrome" width="450px" height="300px" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default MvSection;
    