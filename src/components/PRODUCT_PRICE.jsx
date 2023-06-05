import React from 'react';

const PRODUCT_PRICE = ({ price, handleActiveBtn, monetaryUnitSymbol }) => {
    const inputStyle = {
        position: 'relative',
        display: 'inline-block',
        fontFamily: 'Roboto',
        color: '#707070',

    };

    const symbolStyle = {
        position: 'absolute',
        top: '50%',
        right: '4.625rem',
        transform: 'translateY(-50%)',
        fontWeight: 'lighter',
        pointerEvents: 'none',
        fontFamily: 'Roboto',
        color: '#707070',
        opacity: '.7'
    };

    return (
        <div style={inputStyle}>
            <input
                type="number"
                name="upDateNumber"
                id="priceUpdate"
                defaultValue={price}
                placeholder={price}
                min="0.00"
                max="1000000.00"
                step="0.01"
                onChange={handleActiveBtn}
            />
            <span style={symbolStyle}>{monetaryUnitSymbol}</span>
        </div>
    );
};

export default PRODUCT_PRICE;
