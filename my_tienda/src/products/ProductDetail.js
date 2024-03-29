import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../basicos/Navbar';
import Footer from '../basicos/Footer';
import '../css/Productdetail.css';

const ProductDetail = ({ products, cartItems, handleAddToCart }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  // Llamadas a los hooks de estado al inicio del componente
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [showNotification, setShowNotification] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');
  const [addedToCart, setAddedToCart] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Desplazar hacia arriba cuando el componente se monta
    window.scrollTo(0, 0);
  }, []);  // La dependencia está vacía para que se ejecute solo una vez al montar el componente

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  const changeImage = (delta) => {
    if (product.image && product.image.length > 0) {
      const newIndex = (currentImageIndex + delta + product.image.length) % product.image.length;
      setCurrentImageIndex(newIndex);
    }
  };

  const addToCart = () => {
    if (selectedSize) {
      handleAddToCart({
        ...product,
        selectedSize,
        selectedColor,
        quantity: parseInt(quantity, 10),
      });
      setAddedToCart(true);
    } else {
      setShowNotification(true);
    }
  };

  const closeNotification = () => {
    setShowNotification(false);
  };

  return (
      <div>
        <Navbar cartItems={cartItems} />
        <div className="containerr">
          <div className="product-details">
          <div className="carousel-container">
            <div className="carousel">
              {product.image && product.image.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name}-image-${index}`}
                  className={index === currentImageIndex ? 'active' : 'hidden'}
                />
              ))}
            </div>
            <div className='btnsss'>
            <button className='btn-anterior' onClick={() => changeImage(-1)}>Anterior</button>
            <button className='btn-siguiente' onClick={() => changeImage(1)}>Siguiente</button>
            </div>
          </div>
            <div className="product-info">
              <h2 className='name'>{product.name}</h2>
              <p className='desciption'>{product.description}</p>
              <p className='price'>$ {product.price}</p>
              <div className='tycc'>
                <div className='tallaa'>
                <label className='labell' htmlFor={`size-${product.id}`}>Talle: </label>
                  <select
                  className='selectt'
                    id={`size-${product.id}`}
                    name={`size-${product.id}`}
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                  >
                    {product.sizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
              {product.colors && product.colors.length > 1 && (
                <div className='tallaa'>
                  <label className='labell' htmlFor={`color-${product.id}`}>Color: </label>
                  <select
                    className='selectt'
                    id={`color-${product.id}`}
                    name={`color-${product.id}`}
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                  >
                    {product.colors.map((color) => (
                      <option key={color} value={color}>
                        {color}
                      </option>
                    ))}
                  </select>
                </div>
              )}
                <div className='cantidadd'>
                <label className='labell' htmlFor={`quantity-${product.id}`}>Cantidad: </label>
                  <input
                  className='inputt'
                    type="number"
                    id={`quantity-${product.id}`}
                    name={`quantity-${product.id}`}
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
              </div>
            <button
              onClick={addToCart}
              className={`buttonn ${addedToCart ? 'added' : ''}`}
              disabled={addedToCart}
            >
              {addedToCart ? 'Agregado al carrito' : 'Agregar al carrito'}
            </button>
            {showNotification && (
              <div className="notification">
                {(!selectedSize && !selectedColor) && (
                  <p>Selecciona un talle y un color antes de agregar al carrito.</p>
                )}
                {(!selectedSize && selectedColor) && (
                  <p>Selecciona un talle antes de agregar al carrito.</p>
                )}
                {(selectedSize && !selectedColor) && (
                  <p>Selecciona un color antes de agregar al carrito.</p>
                )}
                <button onClick={closeNotification}>Cerrar</button>
              </div>
            )}
            </div>
          </div>
        </div>
      <Footer className="footer-container" />
    </div>
  );
};

export default ProductDetail;