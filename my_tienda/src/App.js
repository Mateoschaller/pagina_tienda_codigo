import React, { useState , useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './basicos/Navbar';
import ProductsList from './products/ProductsList';
import CarritoPage from './carrito/CarritoPage';
import TallaSection from './products/TallaSection';
import Footer from './basicos/Footer';
import FAQPage from './basicos/FAQPage';
import Carrusel from './basicos/Carrusel';
import PaySection from './pay/PaySection';
import productsData from './data/data';
import CategorySection from './products/CategorySection';
import './css/App.css';
import Cookies from 'universal-cookie'
import CookieBanner from './basicos/CookiesBanner'
import Politicas_privacidad from './basicos/Politicas_privacidad'
import ProductDetail from './products/ProductDetail';
const App = () => {
  const [cart, setCart] = useState([]);
  const cookies = new Cookies();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTalla, setSelectedTalla] = useState('');

 


  useEffect(() => {
    // Recupera el carrito almacenado en la cookie al cargar la aplicación
    const storedCart = cookies.get('cart');
    if (storedCart) {
      setCart(storedCart);
      console.log('Stored Cart:', storedCart);
    }
  }, []);
  const updateCartCookie = (updatedCart) => {
    // Almacena el carrito en la cookie con fecha de expiración en 10 días
    cookies.set('cart', updatedCart, { path: '/', expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000) });
    console.log('Cart Updated:', updatedCart);
  };

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    updateCartCookie(updatedCart);
  };


  const handleClearCart = () => {
    setCart([]);
    cookies.remove('cart');
  };

  const handleBuy = () => {
    console.log('Compra realizada:', cart);
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    updateCartCookie(updatedCart);
  };
  const handleUpdateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  const handleCategoryChangee = (newTalla) => {
    setSelectedTalla(newTalla);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar cartItems={cart} onBuy={handleBuy} onClearCart={handleClearCart} />
              <div className="cokie">
                <CookieBanner />
              </div>
              <div className="contenedor-mini-recuadro">
                <div className="mini-recuadro">
                  <p>Envío Gratis y Descuento con Retiros en Local</p>
                </div>
              </div>

              <Carrusel />
              <div className='selecciones'>
                <CategorySection categories={['Pijama', 'Remera', 'Pollera', 'Zapatillas', 'Sueter']} onCategoryChange={handleCategoryChange} />
                <TallaSection sizes={['XS', 'S', 'M', 'L']} onTallaChange={handleCategoryChangee} />
              </div>
              <ProductsList
                products={productsData}
                onAddToCart={handleAddToCart}
                selectedCategory={selectedCategory}
                selectedTalla={selectedTalla}
              />
              <Footer />
            </div>
          }
        />
        <Route path="/products/:productId" element={<ProductDetail products={productsData} cartItems={cart} handleAddToCart={handleAddToCart} />} />
        <Route path="/carrito" element={<CarritoPage cartItems={cart} onClearCart={handleClearCart} onRemoveFromCart={handleRemoveFromCart} />} />
        <Route path="/preguntas-frecuentes" element={<FAQPage cartItems={cart} />} />
        <Route path="/pay" element={<PaySection cartItems={cart} onClearCart={handleClearCart}/>} />
        <Route path="/Politicas_privacidad" element={<Politicas_privacidad />} />
      </Routes>
    </Router>
  );
};

export default App;