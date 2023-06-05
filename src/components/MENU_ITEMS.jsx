import React from 'react';

const MENU_ITEMS = ({tabIndexKey,itemsContent,clickHandle}) => {
    return (
        <li tabIndex={tabIndexKey} onClick={clickHandle}>
            {itemsContent}
        </li>
    );
};

export default MENU_ITEMS;