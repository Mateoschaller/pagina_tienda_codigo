import React, {useEffect} from 'react';
import CartSection from './CartSection';
import Navbar from '../basicos/Navbar';
import Footer from '../basicos/Footer';
import '../css/CarritoPage.css';

const CarritoPage = ({ cartItems, onClearCart, onRemoveFromCart }) => {
    useEffect(() => {
        // Desplazar hacia arriba cuando el componente se monta
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="carrito-page">
            <Navbar cartItems={cartItems} />
            <div className="main-content">
                <CartSection
                    cartItems={cartItems}
                    onClearCart={onClearCart}
                    onRemoveFromCart={onRemoveFromCart}
                />
            </div>
            <Footer />
        </div>
    );
};

export default CarritoPage;