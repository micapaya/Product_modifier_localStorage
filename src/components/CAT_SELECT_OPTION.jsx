import React from 'react';


const CAT_SELECT_OPTION = ({value,catProduct}) => {
    

    return (
            <option value={value}>
            {catProduct}
            </option>        
    );
};

export default CAT_SELECT_OPTION;