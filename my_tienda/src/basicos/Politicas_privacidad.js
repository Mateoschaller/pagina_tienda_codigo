import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../css/Politicas_privacidad.css';

const Politicas_privacidad = () => {
    useEffect(() => {
        // Al montar el componente, desplázate hacia arriba
        window.scrollTo(0, 0);
    }, []); // El segundo argumento es un array de dependencias, en este caso, vacío.

    return (
        <div className="main-content">
            <Navbar />
            <div className="content">
                <p className='titles'>Nuestra Política de Cookies</p>
                <p className='texto'>
                    Al igual que la mayoría de los sitios web, nuestro sitio utiliza cookies. Las cookies son pequeños archivos de texto que los sitios web guardan en tu dispositivo a través de tu navegador web (por ejemplo, Internet Explorer o Chrome). Las cookies nos permiten recordar tus preferencias y nos ayudan a comprender cómo los visitantes utilizan nuestro sitio web para que podamos seguir mejorándolo.
                </p>
                <p className='texto'>
                    Esta política de cookies describe cómo nosotros, utilizamos cookies en nuestro sitio web. Al continuar utilizando nuestro sitio web, aceptas que se pueden establecer cookies en tu dispositivo, como se describe en esta política de cookies.
                </p>
                <p className='titles'>Por que tu privacidad es importante para nosotros</p>
                <p className='texto'>
                    La información proporcionada por ti durante el uso de los servicios, o de cualquier otra manera al usar el sitio web, se almacenará en nuestros servidores y computadoras y se utilizará para revisar, desarrollar y mejorar el sitio web y los servicios en línea. También nos permitirá proporcionarte información relevante según lo solicitado por ti y también información sobre nuestros programas de marketing.
                </p>
                <p className='texto'>
                    No venderemos tu información personal. Sin embargo, podemos divulgar información o datos proporcionados por ti en el formulario de respuesta de consulta o de otra manera al usar el sitio web a otras empresas u organizaciones cuidadosamente seleccionadas por nosotros, que pueden enviarte información de vez en cuando. Si no deseas que tu información o datos se utilicen o divulguen de esta manera, puedes indicarlo en el formulario de respuesta de consulta o de otra manera al usar el sitio web, expresando tu deseo de no recibir dicha información adicional.
                </p>
                <p className='texto'>
                    No retendremos dicha información o datos durante más tiempo del necesario para los fines establecidos en esta declaración de política.
                </p>
                <p className='texto'>
                    El sitio web puede incluir enlaces a otros sitios web. Tu uso de dichos enlaces está sujeto a esta declaración de política. Si utilizas los enlaces, abandonarás el sitio web. Tu acceso y uso de otros sitios web no estarán regidos por esta declaración de política, y es tu responsabilidad verificar los otros sitios web y las políticas de privacidad que puedan regir esos sitios para determinar cómo se tratará tu información y datos si los accedes y utilizas.
                </p>
                <p className='texto'>
                    Tienes el derecho de solicitar acceso y/o la corrección o eliminación de cualquier información personal sobre ti que tengamos.
                    Si tienes alguna pregunta sobre esta Política de Protección de Datos y Privacidad mateoschaller@gmail.com.
                    </p>
                <p className='texto'>
                    Al aceptar esta declaración de política, consientes el uso (incluido el procesamiento y almacenamiento), la transferencia y la divulgación de tu información y datos a los que se hace referencia en esta declaración de política para los fines establecidos en esta declaración de política.
                </p>
                <p className='titles'>
                    Cookies
                </p>
                <p className='texto'>
                    No utilizaremos cookies para recopilar información de identificación personal sobre ti. Puedes usar la configuración de tu navegador para restringir o bloquear las cookies establecidas por nuestro sitio web. Si decides hacerlo, esto puede afectar la funcionalidad de nuestro sitio web.
                </p>
                <p className='texto'>
                    Última actualización: 27.11.23
                </p>
            </div>
            <Footer className="footer-container" />
        </div>
    );
};

export default Politicas_privacidad;