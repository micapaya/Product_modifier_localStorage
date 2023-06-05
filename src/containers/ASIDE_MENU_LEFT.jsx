import React from 'react';
import MENU_LOGO from '../components/MENU_LOGO'
import MENU_TITLES from '../components/MENU_TITLES'
import MENU_ITEMS from '../components/MENU_ITEMS'

const ASIDE_MENU_LEFT = () => {
    const switchAdminManagement = () => {
        console.log(this)
    }

    return (
        // <aside className='menu_left'>
        //     <MENU_LOGO src="./img/logo.svg"/>

        // </aside>
        
        <aside>
            <div className="branding_ID">
                <MENU_LOGO src="./img/Logo.svg" />
            </div>
            <div className="dashboard_menu">
                <div className="dashboard_menu_sections">
                    <MENU_TITLES className="dashboard_menu_title" content="Dashboard"/>
                    <ul>
                        <MENU_ITEMS tabIndexKey="1" itemsContent="Products Management" clickHandle={switchAdminManagement}/>
                        <MENU_ITEMS tabIndexKey="3" itemsContent="Employees Management" clickHandle={switchAdminManagement}/>
                        
                    </ul>
                </div>
                <div className="dashboard_menu_sections">
                    <MENU_TITLES className="dashboard_menu_title" content="Logout" />

                </div>
            </div>
        </aside>
    );
};

export default ASIDE_MENU_LEFT;