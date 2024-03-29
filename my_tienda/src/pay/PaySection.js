import React from 'react';
import Navbar from '../basicos/Navbar';
import Footer from '../basicos/Footer';
import Formulario from './Formulario'
import '../css/PaySection.css'

const PaySection = (cartItems, onClearCart) => {


    return (
        <div className="main-content">
            <Navbar cartItems={cartItems.cartItems} />
            <Formulario cartItems={cartItems.cartItems} onClearCart={onClearCart}/>
            
            <Footer className="footer-container" />
        </div>
    );
};

export default PaySection;