import React from 'react';

const BTN_BACKTO = ({ src, alt, onClickHandle}) => {
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onClickHandle();
        }
    };

    return (
        <button
            type="button"
            className="btn-backto"
            onKeyDown={handleKeyDown}
            onClick={onClickHandle}
            tabIndex={0}
        >
            <img src={src} alt={alt}/>
        </button>
    );
};

export default BTN_BACKTO;
