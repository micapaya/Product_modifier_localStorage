import React from 'react';

const CAT_SELECT = ({ content, setSelectedCategory }) => {
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        
            <select name="category" id="category" onChange={handleCategoryChange}>
                {content}
            </select>
        
        
    );
};

export default CAT_SELECT;