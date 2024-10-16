import React from 'react';

function GoogleMap() {
    return (
        <div style={{ width: '100%', height: '400px' }}>
            <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.2956226135266!2d126.96179927550224!3d37.52452807204953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca5c56c098de9%3A0x26f5affb87dd3ada!2z67mM66as7ZSE656p!5e0!3m2!1sko!2skr!4v1729001475432!5m2!1sko!2skr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}

export default GoogleMap;