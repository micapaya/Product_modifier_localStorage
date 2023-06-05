import React from 'react';

const TABLE_PRODUCT_VAT_PRICE = ({price,taxRateInPercent}) => {
    const priceVAT = Number(price * (1 + "." + taxRateInPercent));
    const roundedPriceVAT = priceVAT.toFixed(2);
    return (
        <td className="table_product_price_VAT">
            {roundedPriceVAT+ "€"}
        </td>
    );
};

export default TABLE_PRODUCT_VAT_PRICE;