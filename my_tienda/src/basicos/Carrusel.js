import React, { useEffect, useRef, useState } from 'react';
import { data } from '../assets/data_img';
import '../css/Carrusel.css';

export const Carrusel = () => {
    const listRef = useRef();
    const containerRef = useRef(); // Nuevo ref para el contenedor de imágenes
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

        const containerNode = containerRef.current;

        if (imgNode && containerNode) {
            const imgRect = imgNode.getBoundingClientRect();
            const containerRect = containerNode.getBoundingClientRect();

            // Calcular la posición de la imagen dentro del contenedor
            const imgPosition = imgRect.left - containerRect.left;

            // Ajustar el desplazamiento del contenedor para centrar la imagen
            containerNode.scrollTo({
                left: containerNode.scrollLeft + imgPosition - containerRect.width / 2 + imgRect.width / 2,
                behavior: "smooth"
            });
        }

    }, [currentIndex]);

    const scrollToImage = (direction) => {
        if (direction === 'prev') {
            setCurrentIndex(curr => {
                const isFirstSlide = currentIndex === 0;
                return isFirstSlide ? 0 : curr - 1;
            })
        } else {
            const isLastSlide = currentIndex === data.length - 1;
            if (!isLastSlide) {
                setCurrentIndex(curr => curr + 1);
            }
        }
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <div className="main-container">
            <div className="slider-container">
                <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
                <div className='rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
                <div className="container-images" ref={containerRef}>
                    <ul ref={listRef}>
                        {data.map((item) => (
                            <li key={item.id}>
                                <img className='imggg' src={item.imgUrl} width={500} height={280} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="dots-container">
                    {
                        data.map((_, idx) => (
                            <div key={idx}
                                className={`dot-container-item ${idx === currentIndex ? "active" : ""}`}
                                onClick={() => goToSlide(idx)}>
                                &#9865;
                            </div>))
                    }
                </div>
            </div>
        </div >
    )
}

export default Carrusel;