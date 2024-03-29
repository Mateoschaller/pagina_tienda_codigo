import p1 from 'C:/Users/Uusario/Documents/portal/primer sitio web/proyectos/proyectos_web/pagina_tienda/my_tienda/src/assets/imagescarrusel/1.jpg';
import p2 from 'C:/Users/Uusario/Documents/portal/primer sitio web/proyectos/proyectos_web/pagina_tienda/my_tienda/src/assets/imagescarrusel/2.jpg';
import p3 from 'C:/Users/Uusario/Documents/portal/primer sitio web/proyectos/proyectos_web/pagina_tienda/my_tienda/src/assets/imagescarrusel/3.jpg';
import p4 from 'C:/Users/Uusario/Documents/portal/primer sitio web/proyectos/proyectos_web/pagina_tienda/my_tienda/src/assets/imagescarrusel/4.jpg';
import p5 from 'C:/Users/Uusario/Documents/portal/primer sitio web/proyectos/proyectos_web/pagina_tienda/my_tienda/src/assets/imagescarrusel/5.jpg';
import p6 from 'C:/Users/Uusario/Documents/portal/primer sitio web/proyectos/proyectos_web/pagina_tienda/my_tienda/src/assets/imagescarrusel/6.jpg';
import p7 from 'C:/Users/Uusario/Documents/portal/primer sitio web/proyectos/proyectos_web/pagina_tienda/my_tienda/src/assets/imagescarrusel/7.jpg';
import p8 from 'C:/Users/Uusario/Documents/portal/primer sitio web/proyectos/proyectos_web/pagina_tienda/my_tienda/src/assets/imagescarrusel/8.jpg';
import p9 from 'C:/Users/Uusario/Documents/portal/primer sitio web/proyectos/proyectos_web/pagina_tienda/my_tienda/src/assets/imagescarrusel/9.jpg';
import p10 from 'C:/Users/Uusario/Documents/portal/primer sitio web/proyectos/proyectos_web/pagina_tienda/my_tienda/src/assets/imagescarrusel/10.jpg';
import p11 from 'C:/Users/Uusario/Documents/portal/primer sitio web/proyectos/proyectos_web/pagina_tienda/my_tienda/src/assets/imagescarrusel/11.jpg';
import p12 from 'C:/Users/Uusario/Documents/portal/primer sitio web/proyectos/proyectos_web/pagina_tienda/my_tienda/src/assets/imagescarrusel/12.jpg';
import p13 from 'C:/Users/Uusario/Documents/portal/primer sitio web/proyectos/proyectos_web/pagina_tienda/my_tienda/src/assets/imagescarrusel/13.jpg';
import p14 from 'C:/Users/Uusario/Documents/portal/primer sitio web/proyectos/proyectos_web/pagina_tienda/my_tienda/src/assets/imagescarrusel/14.jpg';
import p15 from 'C:/Users/Uusario/Documents/portal/primer sitio web/proyectos/proyectos_web/pagina_tienda/my_tienda/src/assets/imagescarrusel/15.jpg';
import p16 from 'C:/Users/Uusario/Documents/portal/primer sitio web/proyectos/proyectos_web/pagina_tienda/my_tienda/src/assets/imagescarrusel/16.jpg';
import p17 from 'C:/Users/Uusario/Documents/portal/primer sitio web/proyectos/proyectos_web/pagina_tienda/my_tienda/src/assets/imagescarrusel/17.jpg';
import p18 from 'C:/Users/Uusario/Documents/portal/primer sitio web/proyectos/proyectos_web/pagina_tienda/my_tienda/src/assets/imagescarrusel/18.jpg';
import p19 from 'C:/Users/Uusario/Documents/portal/primer sitio web/proyectos/proyectos_web/pagina_tienda/my_tienda/src/assets/imagescarrusel/19.jpg';
import p20 from 'C:/Users/Uusario/Documents/portal/primer sitio web/proyectos/proyectos_web/pagina_tienda/my_tienda/src/assets/imagescarrusel/20.jpg';
import p21 from 'C:/Users/Uusario/Documents/portal/primer sitio web/proyectos/proyectos_web/pagina_tienda/my_tienda/src/assets/imagescarrusel/21.jpg';
import p22 from 'C:/Users/Uusario/Documents/portal/primer sitio web/proyectos/proyectos_web/pagina_tienda/my_tienda/src/assets/imagescarrusel/22.jpg';

const images = [p1, p2, p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22];
localStorage.setItem('storedProductImages', JSON.stringify(images));
const storedProductImages = JSON.parse(localStorage.getItem('storedProductImages')) || [];

// Utiliza las imágenes almacenadas o carga las imágenes por primera vez
const productImagesToShow = storedProductImages.length > 0 ? storedProductImages : ['defaultImage.jpg'];
const productsData = [
    {
        id: 1,
        name: 'Conjunto de pijama',
        description: 'Pantalon y remera para dormir.',
        price: 11900,
        image: [p1,p6], //6
        sizes: ['Elegir', 'M'], // Tallas disponibles para este producto
        colors: ['Elegir','Amarillo apagado',"Blanco y rojo"], 
        category: 'Pijama',
    },
    {
        id: 2,
        name: 'Polleras bordada',
        description: 'polleras de jeans bordada.',
        price: 9990,
        image: [p2],
        sizes: ['Elegir', 'XS', 'M'], // Tallas disponibles para este producto
        colors: ['Elegir','Jeans claro'], // Colores disponibles para este producto
        category: 'Pollera',
    },
    {
        id: 3,
        name: 'Pollera estilo bajo',
        description: 'Pollera estilo bajo con flecos.',
        price: 9990,
        image: [p3,p15], 
        sizes: ['Elegir', 'S', 'M'], // Tallas disponibles para este producto
        colors: ['Elegir', 'Verde opaco', 'Jeans clasico'], // Colores 
        category: 'Pollera', 
    },
    {
        id: 4,
        name: 'Pollera de salir',
        description: 'Pollera de salir',
        price: 9990,
        image: [p4],
        sizes: ['Elegir',  'S', 'M'], // Tallas disponibles para este producto
        colors: ['Elegir', 'Lila oscuro', 'Lila claro'], // Colores disponibles para este producto
        category: 'Pollera',
    },
    {
        id: 5,
        name: 'Remera de dormir',
        description: 'Remera musculosa',
        price: 5500,
        image: [p5],
        sizes: ['Elegir', 'S', 'M', 'L'], // Tallas disponibles para este producto
        colors: ['Elegir', 'Rosa claro', 'Rosa oscuro',], // Colores 
        category: 'Remera', 
    },
    {
        id: 6,
        name: 'Conjunto de pijama',
        description: 'Pantalon y remera',
        price: 11900,
        image: [p7],
        sizes: ['Elegir', 'XS', 'S', 'M'], // Tallas disponibles para este producto
        colors: ['Elegir', 'Blanco'], // Colores disponibles para este producto
        category: 'Pijama',
    },
    {
        id: 7,
        name: 'Remera musculosa',
        description: 'Remeras musculosa fresca.',
        price: 5500,
        image: [p8],
        sizes: ['Elegir', 'XS', 'S', 'M'], // Tallas disponibles para este producto
        colors: ['Elegir', 'Blanco'], // Colores disponibles para este producto
        category: 'Remera',
    },
    {
        id: 8,
        name: 'Zapatillas basicas',
        description: 'Zapatillas basicas',
        price: 15000,
        image: [p9,p10],
        sizes: ['Elegir', '37', '38', '39', '40'], // Tallas disponibles para este producto
        colors: ['Elegir', 'Blanco','Gris'], // Colores disponibles para este producto
        category: 'Zapatillas',
    },
    {
        id: 9,
        name: 'Zapatillas urbanas',
        description: 'Zapatillas urbanas',
        price: 15000,
        image: [p11],
        sizes: ['Elegir','37', '38', '39', '40'], // Tallas disponibles para este producto
        colors: ['Elegir', 'Gris'], // Colores disponibles para este producto
        category: 'Zapatillas',
    },
    {
        id: 10,
        name: 'Bikini Brasilera',
        description: 'Bikini Brasilera.',
        price: 3500,
        image: [p12,p13,p14],
        sizes: ['Elegir', 'XS', 'S', 'M'], // Tallas disponibles para este producto
        colors: ['Elegir', 'Verde Agua', 'Marron', 'Negra'], // Colores disponibles para este producto
        category: 'Bikini',
    },
    {
        id: 11,
        name: 'Remera musculosa',
        description: 'Remera musculosa.',
        price: 5500,
        image: [p16,p17,p18],// 17 18
        sizes: ['Elegir', 'XS', 'S', 'M', 'L'], // Tallas disponibles para este producto
        colors: ['Elegir', 'Lila', 'Verde claro', 'Verde oscuro'], // Colores disponibles para este producto
        category: 'Remera',
    },
    {
        id: 12,
        name: 'Sueter',
        description: 'Sueter musculosa.',
        price: 100,
        image: [p21, p22, p20,p19],
        sizes: ['Elegir', 'XS', 'S', 'M', 'L'], // Tallas disponibles para este producto
        colors: ['Elegir', 'Marron', 'Verde agua', 'Verde oscuro', 'Negro'], // Colores disponibles para este producto
        category: 'Sueter',
    },
];


export default productsData;