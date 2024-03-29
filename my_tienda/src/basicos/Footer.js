// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <section className="contact-section">
                <h3>Contacto</h3>
                <p className='contac'>Dirección: 123 Calle Principal, Ciudad</p>
                <p className='contac'>Email: contacto@tutienda.com</p>
                <p className='contac'>Teléfono: (123) 456-7890</p>
                <p className='contac'>Creado por <a href='https://portafoliodemateo.website/' className='portafolio'>SMArket</a></p>
            </section>

            <section className="faq-section">
                <h3>Preguntas Frecuentes</h3>
                <ul>
                    <li>
                        <Link to="/preguntas-frecuentes">Ver Preguntas Frecuentes</Link>
                    </li>
                </ul>
            </section>

            <section className="social-section">
                <h3>Redes Sociales</h3>
                <ul>
                    <li><a href="https://facebook.com/tutienda" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="https://twitter.com/tutienda" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="https://instagram.com/tutienda" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a></li>
                </ul>
            </section>
            
        </footer>
    );
};

export default Footer;