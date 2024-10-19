import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    const typedElement = useRef(null);

    useEffect(() => {
        // AOS 애니메이션 초기화
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
        });

        // 요소가 있는지 확인 후 Typed.js 초기화
        if (typedElement.current) {
            const typedOptions = {
                strings: ['Singer', 'Performer', 'Artist'], // 여기에 원하는 문자열들을 추가
                typeSpeed: 100,
                backSpeed: 50,
                backDelay: 2000,
                loop: true,
            };

            const typed = new Typed(typedElement.current, typedOptions);

            return () => {
                typed.destroy();
            };
        }
    }, []); // 빈 배열을 사용하여 컴포넌트가 처음 마운트될 때만 실행

    return (
        <section id="hero" className="hero section dark-background">
            <img src="/assets/img/illitphoto.jpg" alt="" data-aos="fade-in" className="aos-init aos-animate"/>

            <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                <h2>ILLIT</h2>
                <p>
                    I'm <span ref={typedElement}></span>
                </p>
            </div>
        </section>
    );
};

export default Hero;