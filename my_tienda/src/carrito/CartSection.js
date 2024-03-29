import React from 'react';
import { Link } from 'react-router-dom';
import '../css/CartSection.css';

const CartSection = ({ cartItems, onClearCart, onRemoveFromCart }) => {
    const handleRemoveFromCart = (item) => {
        // Asegúrate de que onRemoveFromCart sea una función antes de llamarla
        if (typeof onRemoveFromCart === 'function') {
            onRemoveFromCart(item.id);
        } else {
            console.error('onRemoveFromCart no es una función.');
        }
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };
    return (
        <div>
            <h2 className='titt'>Carrito de Compras</h2>
            <div className="cart-items">
                {cartItems.length === 0 ? (
                    <p>El carrito está vacío.</p>
                ) : (
                    <ul className="cart-list">
                        {cartItems.map((item) => (
                            <li key={item.id} className="cart-item">
                                <div className="cart-item-details">
                                    <img src={item.image[0]} alt={item.name} />
                                    <div className='talle'>
                                        <p>{item.name}</p>
                                        <p>Talle: {item.selectedSize}</p>
                                        {item.selectedColor && (<p>Color: {item.selectedColor}</p>)}
                                    </div>
                                </div>
                                <div className="cart-item-price">
                                    <p>${item.price * item.quantity}</p>
                                    <p>X {item.quantity}</p>
                                    <button onClick={() => handleRemoveFromCart(item)}>Eliminar</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="cart-summary">
                <p className="cart-summary-total">Total: ${calculateTotal()}</p>
                <button className="clear-cart-button" onClick={() => onClearCart([])}>
                    Vaciar Carrito
                </button>
                <Link to="/pay">
                    <button className="buy-button">Continuar</button>
                </Link>
            </div>
        </div>
    );
};

export default CartSection;
