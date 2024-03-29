// CategorySection.js
import React, { useState } from 'react';
import '../css/TallaSection.css';

const CategorySection = ({ categories, onCategoryChange }) => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (event) => {
        const newCategory = event.target.value;
        setSelectedCategory(newCategory);
        onCategoryChange(newCategory);
    };

    return (
        <div className="filter-section">
            <label htmlFor="category">Selecciona una categoría:</label>
            <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">Todas las categorías</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CategorySection;