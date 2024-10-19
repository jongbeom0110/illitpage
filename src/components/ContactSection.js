import React from 'react';

function GoogleMap() {
    return (
        <section id="contact" className="contact section">
            <div className="container section-title" data-aos="fade-up">
                <h2>주소</h2>
            </div>
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-4">
                    <div className="col-lg-5">
                        <div className="info-wrap">
                            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                                <i className="bi bi-geo-alt flex-shrink-0"></i>
                                <div>
                                    <p>서울특별시 용산구 한강대로 42, 14층</p>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.2956226135266!2d126.96179927550224!3d37.52452807204953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5c56c098de9%3A0x26f5affb87dd3ada!2z67mM66as7ZSE656p!5e0!3m2!1sko!2skr!4v1729001475432!5m2!1sko!2skr"
                                        width="350"
                                        height="250"
                                        style={{border: 0}}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GoogleMap;