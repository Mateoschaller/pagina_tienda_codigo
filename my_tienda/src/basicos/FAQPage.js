import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../css/FAQPage.css';  // Importa el archivo CSS

const FAQPage = (cartItems) => {
    useEffect(() => {
        // Al montar el componente, desplázate hacia arriba
        window.scrollTo(0, 0);
    }, []); // El segundo argumento es un array de dependencias, en este caso, vacío.

    return (
        <div>
            <Navbar cartItems={cartItems.cartItems} />
            <div className="container"> 
                <h2>Preguntas Frecuentes</h2>
                    
                        <h3>¿Cómo realizar una compra?</h3>
                        <p>Para realizar una compra, sigue estos pasos...</p>
                    
                    
                        <h3>¿Cuál es la política de devolución?</h3>
                        <p>Nuestra política de devolución permite devoluciones dentro de los 30 días...</p>
                    
                    
                        <h3>¿Cómo puedo contactar con servicio al cliente?</h3>
                        <p>Puedes contactar con nuestro servicio al cliente enviándonos un correo electrónico...</p>
                    
                    
                        <h3>¿Cuáles son los métodos de pago aceptados?</h3>
                        <p>Aceptamos tarjetas de crédito y débito, así como pagos a través de servicios como PayPal.</p>
                    
                    
                        <h3>¿Cuánto tiempo tarda en llegar mi pedido?</h3>
                        <p>El tiempo de entrega varía según la ubicación. Normalmente, los pedidos se entregan en un plazo de 3 a 7 días hábiles.</p>
                    
                    
                        <h3>¿Puedo modificar o cancelar mi pedido después de realizar la compra?</h3>
                        <p>Lamentablemente.</p>
                    
                    
                        <h3>¿Cómo puedo realizar un seguimiento de mi pedido?</h3>
                        <p>Una vez que tu pedido ha sido enviado, recibirás un correo electrónico con un enlace de seguimiento para que puedas rastr(4)ear la entrega.</p>
                    
            </div>
            <Footer className="footer-container" />
        </div>
    );
};

export default FAQPage;