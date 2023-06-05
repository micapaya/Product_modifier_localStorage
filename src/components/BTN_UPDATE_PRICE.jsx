import React from 'react';

const BTN_UPDATE_PRICE = ({textContent,onClickHandle, oneClass}) => {
    return (
        <button className={oneClass} onClick={onClickHandle}>
            {textContent}
        </button>
    );
};

export default BTN_UPDATE_PRICE;