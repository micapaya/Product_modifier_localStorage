import React from 'react';
import TABLE from '../containers/TABLE';
import ASIDE_MENU_LEFT from '../containers/ASIDE_MENU_LEFT';

const LAYOUT_APP = () => {
    return (
        <React.Fragment>
            <ASIDE_MENU_LEFT/>
            
            <TABLE/>
        </React.Fragment>
        
    );
};

export default LAYOUT_APP;