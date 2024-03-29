import React from 'react';

const CartPage = ({ cartItems, onClearCart }) => {
    return (
        <div>
            <h2>Contenido de tu carrito:</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.name} - Cantidad: {item.quantity}
                    </li>
                ))}
            </ul>
            <button onClick={onClearCart}>Limpiar Carrito</button>
        </div>
    );
};

export default CartPage;