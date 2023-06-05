import React from 'react';

const PRODUCT_PRICE_VAT = ({htPrice,taxRateInPercent}) => {
    const priceVAT = htPrice*(1+"."+taxRateInPercent);
    const roundedPriceVAT = priceVAT.toFixed(2);
    return (
        <div className="TTC_price">
            <span>Price </span>
            `(including VAT):` {roundedPriceVAT + "€"}
        </div>
    );
};

export default PRODUCT_PRICE_VAT;