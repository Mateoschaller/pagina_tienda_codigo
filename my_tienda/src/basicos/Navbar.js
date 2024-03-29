import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';

const Navbar = ({ cartItems = [], onClearCart }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);

    const handleCartToggle = () => {
        setIsCartOpen(!isCartOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsNavbarFixed(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={`navbar ${isNavbarFixed ? 'fixed' : ''}`}>
            <div className="navbar">
                <div className="navbar-brand">
                    <h1>Tu Tienda</h1>
                </div>
            </div>
            <div className='linkscar'>
                <div className="navbar-links">
                    <Link to="/">Inicio</Link>
                </div>
                <Link to="/carrito" className="cart-link">
                    <span role="img" aria-label="cart">
                        🛒
                    </span>
                    <span className="cart-count">{cartItems.length}</span>
                </Link>
                {isCartOpen && (
                    <div className="cart-dropdown">
                        <ul>
                            {cartItems.map((item) => (
                                <li key={item.id}>{item.name}</li>
                            ))}
                        </ul>
                        <button onClick={onClearCart}>Limpiar Carrito</button>
                    </div>
                    
                )}
            </div>
        </nav>
    );
};

export default Navbar;