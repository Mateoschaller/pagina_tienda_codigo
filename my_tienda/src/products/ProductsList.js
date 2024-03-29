import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import '../css/ProductsList.css';

const ProductsList = ({ products, onAddToCart, selectedCategory, selectedTalla, cartItems }) => {
    const [visibleProducts, setVisibleProducts] = useState(8);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        // Filtra los productos según la categoría seleccionada
        const filtered = products.filter((product) => {
            if (
                (!selectedCategory || product.category === selectedCategory) &&
                (!selectedTalla || product.sizes.includes(selectedTalla))
            ) {
                return true;
            }
            return false;
        });
        setFilteredProducts(filtered);
        // Restablece el número de productos visibles
        setVisibleProducts(8);
    }, [selectedCategory, selectedTalla, products]);

    const itemsToShow = filteredProducts.slice(0, visibleProducts);

    const handleLoadMore = () => {
        setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 8);
    };

    return (
        <div className="products-list-container">
            <ul className="products-list">
                {itemsToShow.map((product, index) => {
                    if (
                        (!selectedCategory || product.category === selectedCategory) &&
                        (!selectedTalla || product.sizes.includes(selectedTalla))
                    ) {
                        return (
                            <li key={product.id} className="product-card-container">
                                <Link to={`/products/${product.id}`}>
                                <ProductCard product={product} onAddToCart={onAddToCart} />
                                </Link>
                            </li>
                        );
                    } else {
                        return null;
                    }
                })}
            </ul>
            <div className="btn-cargar">
                {visibleProducts < filteredProducts.length && (
                    <button className="load-more-button" onClick={handleLoadMore}>
                        Ver más productos
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProductsList;