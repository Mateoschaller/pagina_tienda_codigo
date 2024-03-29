import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Cookies.css'

const CookieBanner = () => {
    const [isBannerVisible, setIsBannerVisible] = useState(true);

    useEffect(() => {
        // Verifica si el usuario ya ha aceptado las cookies al cargar la página
        const hasAcceptedCookies = localStorage.getItem('hasAcceptedCookies');
        if (hasAcceptedCookies) {
            setIsBannerVisible(false);
        }
    }, []);

    const handleAcceptCookies = () => {
        // Marca que el usuario ha aceptado las cookies
        localStorage.setItem('hasAcceptedCookies', 'true');
        setIsBannerVisible(false);
    };

    if (!isBannerVisible) {
        return null; // No mostrar el banner si ya ha sido aceptado.
    }

    return (
        <div className="cookie-banner">
            <p className='txt'>
                Usamos cookies para ayudar a crear una experiencia en línea brillante al monitorear cómo las personas utilizan el sitio. Al seguir utilizando nuestro sitio web, aceptas que las cookies pueden almacenarse en tu dispositivo. 
            </p>
            <div className='btns'>
                <button className='btn' onClick={handleAcceptCookies}>Aceptar</button>
                <Link to="/Politicas_privacidad" >
                    <button className='btn-ver-cookies btn'>Ver Cookies</button>
                </Link>        
            </div>
            <div className='sep'></div>
        </div>
    );
};

export default CookieBanner;