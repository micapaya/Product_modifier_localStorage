import React from 'react';

const CAT_FLAGS = ({catProducts}) => {
    // colorFlag want one string to make a className  
    let colorFlag;
    if (catProducts === "jewelery") {
        colorFlag = "greenFlag";
    }
    if (catProducts === "men's clothing") {
        colorFlag = "orangeFlag";

    }
    if (catProducts === "women's clothing") {
        colorFlag = "purpleFlag";

    } else if (catProducts === "electronics") {
        colorFlag = "turquoiseFlag"
    };



    return (
        <div className={`cat_flags ` + colorFlag}>
            {catProducts}
        </div>
    );
};

export default CAT_FLAGS;