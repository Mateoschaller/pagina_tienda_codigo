
import React, { useState } from 'react';
import '../css/ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
    const [isAdded] = useState(false);
    const [isEnlarged, setIsEnlarged] = useState(false);
    
    const handleImageClick = () => {
        setIsEnlarged(!isEnlarged);
    };

    return (
        <div className={`product-card ${isAdded ? 'added' : ''} ${isEnlarged ? 'enlarged' : ''}`}>
            <div className='img-product'>
                <Link className='linkk' to={`/products/${product.id}`}>
                <img
                src={product.image[0]}
                alt={product.name}
                onClick={handleImageClick}
                className={isEnlarged ? 'enlarged' : ''}
                loading="lazy"  
            />
</Link>
            </div>
            <h3>{product.name}</h3>
            <p className='description'>{product.description}</p>
            <p className='pricee'>$ {product.price}</p>
            
        </div>
    );
};

export default ProductCard;