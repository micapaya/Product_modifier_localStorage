import React from 'react';

const TABLE_PRODUCT_PRICE = ({priceProduct}) => {
    return (
        <td className="table_product_price">
            {priceProduct+ "€"}
        </td>
    );
};

export default TABLE_PRODUCT_PRICE;