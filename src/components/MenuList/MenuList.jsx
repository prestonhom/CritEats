import React from 'react';
import MenuPage from '../../pages/MenuPage/MenuPage'

const MenuList=(props)=>{    
    return(
        <div>
            <MenuPage
                menus={props.menus}
            />  
        </div>
    )
}
export default MenuList;