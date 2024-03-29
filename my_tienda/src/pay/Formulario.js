import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Formik } from 'formik'
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import '../css/Formulario.css'

const Formulario = (cartItems) => {
    const calculateTotal = (cartItems) => {
        let precio = 0;
        for (let i = 0; i < cartItems.cartItems.length; i++) {
            const precc = cartItems.cartItems[i].price * cartItems.cartItems[i].quantity;
            precio = precio + precc;
        }
        return precio;
    };  
    const calculateProducts = (cartItems) => {
        let productos = [];
        for (let i = 0; i < cartItems.cartItems.length; i++) {
            productos.push({
                id: cartItems.cartItems[i].id,
                quantity: cartItems.cartItems[i].quantity,
                selectedSize: cartItems.cartItems[i].selectedSize,
                selectedColor: cartItems.cartItems[i].selectedColor
            });
        }
        return JSON.stringify(productos);
    };
    
    const [preferenceId, setPreferenceId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const form = useRef();
    initMercadoPago("APP_USR-5aa647d4-0d17-47c0-81d5-ebd0dce55d87");
    const compra = {
        description: "Tu Tienda",
        price: 0,
        quantity: 1,
    }
    const sendEmail = () => {
        emailjs.sendForm('service_qgx70nn', 'template_mmn0y1b', form.current, 'HHVEGkVU-sMYw1b0X')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    const productos = calculateProducts(cartItems);
    const numero = calculateTotal(cartItems);
    const createPreference = async () => {
        try {
            const response = await axios.post("https://pagina-tienda-prueba-server.onrender.com/create_preference", {
                description: compra.description,
                price: numero,
                quantity: compra.quantity,
            });

            const { id } = response.data;
            return id;
        } catch (error) {
            console.log(error);
        }
    };
    const handleBuy = async () => {
        try {
            setIsLoading(true); // Establecer el estado de carga a true
            const id = await createPreference();
            if (id) {
                setPreferenceId(id);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false); // Establecer el estado de carga a false al finalizar
        }
    };
    return (
        <div>
            <Formik
                initialValues={{
                    user_option: '', 
                    user_name: '',
                    user_telefono: '',
                    user_email: '',
                    user_dni: '',
                    user_calle: '',
                    user_numero: '',
                    user_departamento: '',
                    user_ciudad: '',
                    user_provincia: '',
                    user_cp: '',
                }}
                validate={(values) => {
                    const errors = {};

                    // Validaciones para 'option'
                    if (!values.user_option) {
                        errors.user_option = 'Selecciona una opción de envío';
                    }

                    // Validaciones comunes para todas las opciones
                    if (!values.user_name) {
                        errors.user_name = 'Campo requerido';
                    } else if (/\d/.test(values.user_name)) {
                        errors.user_name = 'El nombre no puede contener números';
                    }

                    if (!values.user_telefono) {
                        errors.user_telefono = 'Campo requerido';
                    } else if (!/^\d+$/.test(values.user_telefono)) {
                        errors.user_telefono = 'El teléfono solo puede contener números';
                    }

                    if (!values.user_email) {
                        errors.user_email = 'Campo requerido';
                    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.user_email)) {
                        errors.user_email = 'Ingresa un correo electrónico válido';
                    }

                    if (!values.user_dni) {
                        errors.user_dni = 'Campo requerido';
                    } else if (!/^\d{8}$/.test(values.user_dni)) {
                        errors.user_dni = 'El DNI debe contener 8 números';
                    }

                    // Validaciones específicas para 'retiroLocal'
                    if (values.user_option === 'retiroLocal') {
                        // Aquí puedes agregar validaciones específicas para la opción 'retiroLocal'
                    }

                    // Validaciones específicas para 'envioPais'
                    if (values.user_option === 'envioPais') {
                        if (!values.user_calle || !/\S/.test(values.user_calle)) {
                            errors.user_calle = 'Campo requerido';
                        }

                        if (!values.user_numero) {
                            errors.user_numero = 'Campo requerido';
                        } else if (!/^\d+$/.test(values.user_numero)) {
                            errors.user_numero = 'El número solo puede contener números';
                        } 

                        if (!values.user_ciudad || !/\S/.test(values.user_ciudad)) {
                            errors.user_ciudad = 'Campo requerido';
                        }

                        if (!values.user_cp || !/\S/.test(values.user_cp)) {
                            errors.user_cp = 'Campo requerido';
                        }

                        if (!values.user_provincia || !/\S/.test(values.user_provincia)) {
                            errors.user_provincia = 'Campo requerido';
                        }
                    }

                    return errors;
                }}
                onSubmit={(values) => {
                    sendEmail();
                    handleBuy(values); // Llama a la función de pago
                }}
            >
                {({ errors, values,touched, handleSubmit,handleBlur,handleChange }) => (
                    <form className='container-father' ref={form} onSubmit={handleSubmit}>
                        <h1 className='title-title'>Opciones de Envío</h1>
                        <div>
                            <div className="option-container">
                                <label>
                                    <input type="radio" name="user_option" value="retiroLocal"
                                        values={values.user_option}
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                    Retiro en Local con 10% de descuento
                                </label>
                                {touched.user_option && errors.user_option && <div className='error'>{errors.user_option}</div>}
                            </div>
                            <div className="option-container">
                                <label>
                                    <input type="radio" name="user_option" value="envioPais"
                                        values={values.user_option}
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                    Envío gratis a Todo el País
                                </label>
                                {touched.user_option && errors.user_option && <div className='error'>{errors.user_option}</div>}
                            </div>
                            <div>
                                <input name='user_precio' value={numero} hidden ></input>
                                <input name='user_productos' value={productos} hidden ></input>
                            </div>
                        </div>

                        {values.user_option === 'retiroLocal' && (
                            <div>
                                <h2 className='titlee'>Datos para Retiro en Local</h2>
                                <div>
                                    <h3 className='titless'>Datos del destinatario</h3>
                                    <div className='separacion_de_dos'>
                                        <div>
                                            <label htmlFor="user_name" className='labb'>Nombre y apellido</label>
                                            <input 
                                                type="text" 
                                                id="user_name" 
                                                name="user_name" 
                                                className='fieldd' 
                                                value={values.user_name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {touched.user_name && errors.user_name && <div className='error'>{errors.user_name}</div>}
                                        </div>
                                        <div>
                                            <label htmlFor="user_email" className='labb'>Gmail</label>
                                            <input type="text" id="user_email" name="user_email" className='fieldd'
                                                value={values.user_email}
                                                onChange={handleChange}
                                                onBlur={handleBlur} />
                                            {touched.user_email && errors.user_email && <div className='error'>{errors.user_email}</div>}
                                        </div>
                                    </div>
                                    <div className='separacion_de_dos'>
                                        <div>
                                            <label htmlFor="user_telefono" className='labb'>Telefono</label>
                                            <input type="text" id="user_telefono" name="user_telefono" className='fieldd'
                                                value={values.user_telefono}
                                                onChange={handleChange}
                                                onBlur={handleBlur} />
                                            {touched.user_telefono && errors.user_telefono && <div className='error'>{errors.user_telefono}</div>}
                                        </div>
                                        <div>
                                            <label htmlFor="user_dni" className='labb'>DNI</label>
                                            <input type="text" id="user_dni" name="user_dni" className='fieldd'
                                                value={values.user_dni}
                                                onChange={handleChange}
                                                onBlur={handleBlur} />
                                            {touched.user_dni && errors.user_dni && <div className='error'>{errors.user_dni}</div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {values.user_option === 'envioPais' && (
                            <div>
                                <h2 className='titlee'>Datos para Envío a Todo el País</h2>
                                <div>
                                    <h3 className='titless'>Datos del destinatario</h3>
                                    <div className='separacion_de_dos'>
                                        <div>
                                            <label htmlFor="user_name" className='labb'>Nombre y apellido</label>
                                            <input type="text" id="user_name" name="user_name" className='fieldd'
                                                value={values.user_name}
                                                onChange={handleChange}
                                                onBlur={handleBlur} />
                                            {touched.user_name && errors.user_name && <div className='error'>{errors.user_name}</div>}
                                        </div>
                                        <div>
                                            <label htmlFor="user_dni" className='labb'>DNI</label>
                                            <input type="text" id="user_dni" name="user_dni" className='fieldd'
                                                value={values.user_dni}
                                                onChange={handleChange}
                                                onBlur={handleBlur} />
                                            {touched.user_dni && errors.user_dni && <div className='error'>{errors.user_dni}</div>}
                                        </div>
                                    </div>
                                    <div className='separacion_de_dos'>
                                        <div>
                                            <label htmlFor="user_telefono" className='labb'>Telefono</label>
                                            <input type="text" id="user_telefono" name="user_telefono" className='fieldd'
                                                value={values.user_telefono}
                                                onChange={handleChange}
                                                onBlur={handleBlur} />
                                            {touched.user_telefono && errors.user_telefono && <div className='error'>{errors.user_telefono}</div>}
                                        </div>
                                        <div>
                                            <label htmlFor="user_email" className='labb'>Gmail</label>
                                            <input type="text" id="user_email" name="user_email" className='fieldd'
                                                value={values.user_email}
                                                onChange={handleChange}
                                                onBlur={handleBlur} />
                                            {touched.user_email && errors.user_email && <div className='error'>{errors.user_email}</div>}
                                        </div>
                                    </div>
                                    <h3 className='titless'>Domicilio del destinatario</h3>
                                    <div className='separacion_de_dos'>
                                        <div>
                                            <label htmlFor="user_calle" className='labb'>Calle</label>
                                            <input type="text" id="user_calle" name="user_calle" className='fieldd'
                                                value={values.user_calle}
                                                onChange={handleChange}
                                                onBlur={handleBlur} />
                                            {touched.user_calle && errors.user_calle && <div className='error'>{errors.user_calle}</div>}
                                        </div>
                                        <div>
                                            <label htmlFor="user_numero" className='labb'>Numero</label>
                                            <input type="text" id="user_numero" name="user_numero" className='fieldd'
                                                value={values.user_numero}
                                                onChange={handleChange}
                                                onBlur={handleBlur} />
                                            {touched.user_numero && errors.user_numero && <div className='error'>{errors.user_numero}</div>}
                                        </div>
                                    </div>
                                    <div className='separacion_de_dos'>
                                        <div>
                                            <label htmlFor="user_departamento" className='labb'>Departamento (opcional)</label>
                                            <input type="text" id="user_departamento" name="user_departamento" className='fieldd'
                                                value={values.user_departamento}
                                                onChange={handleChange}
                                                onBlur={handleBlur} />
                                            {touched.user_departamento && errors.user_departamento && <div className='error'>{errors.user_departamento}</div>}
                                        </div>
                                        <div>
                                            <label htmlFor="user_ciudad" className='labb'>Ciudad</label>
                                            <input type="text" id="user_ciudad" name="user_ciudad" className='fieldd'
                                                value={values.user_ciudad}
                                                onChange={handleChange}
                                                onBlur={handleBlur} />
                                            {touched.user_ciudad && errors.user_ciudad && <div className='error'>{errors.user_ciudad}</div>}
                                        </div>
                                    </div>
                                    <div className='separacion_de_dos'>
                                        <div>
                                            <label htmlFor="user_provincia" className='labb'>Provincia</label>
                                            <input type="text" id="user_provincia" name="user_provincia" className='fieldd'
                                                value={values.user_provincia}
                                                onChange={handleChange}
                                                onBlur={handleBlur} />
                                            {touched.user_provincia && errors.user_provincia && <div className='error'>{errors.user_provincia}</div>}
                                        </div>
                                        <div>
                                            <label htmlFor="user_cp" className='labb'>Codigo postal</label>
                                            <input type="text" id="user_cp" name="user_cp" className='fieldd'
                                                value={values.user_cp}
                                                onChange={handleChange}
                                                onBlur={handleBlur} />
                                            {touched.user_cp && errors.user_cp && <div className='error'>{errors.user_cp}</div>}
                                        </div>
                                    </div>
                                </div>

                            </div>

                        )}
                        <div className='btnnn'>
                            <button className="button-pay" type="submit" disabled={isLoading}>
                                {isLoading ? 'Cargando...' : 'Pagar'}
                            </button>
                        </div>
                        
                    </form>
                    
                )}
            </Formik>
            <div className='buton-mp'>
                {preferenceId && <Wallet initialization={{ preferenceId }} />}
            </div>
        </div>
    );
}

export default Formulario;