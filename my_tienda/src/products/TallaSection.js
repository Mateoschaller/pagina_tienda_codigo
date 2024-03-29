import React, { useState } from 'react';
import '../css/TallaSection.css';

const TallaSection = ({ sizes, onTallaChange }) => {
    const [selectedTalla, setSelectedTalla] = useState('');

    const handleCategoryChangee = (event) => {
        const newTalla = event.target.value;
        setSelectedTalla(newTalla);
        onTallaChange(newTalla);
    };

    return (
        <div className="filter-section">
            <label htmlFor="sizes">Selecciona una talla:</label>
            <select id="sizes" value={selectedTalla} onChange={handleCategoryChangee}>
                <option value="">Todas las tallas</option>
                {sizes.map((size) => (
                    <option key={size} value={size}>
                        {size}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default TallaSection;