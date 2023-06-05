import React from 'react';

const PRODUCT_IMAGE = ({src,alt,classes}) => {
    const styledComponent = {
        pointerEvents: 'none'
    }
    return (
        <img src={src} alt={alt} className={classes} style={styledComponent
        } />
    );
};

export default PRODUCT_IMAGE;