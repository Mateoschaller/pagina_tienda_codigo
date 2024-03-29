import polleraImagen1 from './imagescarrusel/23.jpg';
import polleraImagen2 from './imagescarrusel/26.jpg';
import polleraImagen3 from './imagescarrusel/31.jpg';
import polleraImagen4 from './imagescarrusel/32.jpg';
import polleraImagen5 from './imagescarrusel/24.jpg';
import polleraImagen6 from './imagescarrusel/25.jpg';
const images = [
    polleraImagen1,
    polleraImagen2,
    polleraImagen3,
    polleraImagen4,
    polleraImagen5,
    polleraImagen6
]

localStorage.setItem('storedImages', JSON.stringify(images));
const storedImages = JSON.parse(localStorage.getItem('storedImages')) || [];


// Utiliza las imágenes almacenadas o carga las imágenes por primera vez
export const data = storedImages.map((img, index) => ({
    id: index + 1,
    imgUrl: img,
}));
