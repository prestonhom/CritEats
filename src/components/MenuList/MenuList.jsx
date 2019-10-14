import React from 'react';
import MenuPage from '../../pages/MenuPage/MenuPage'

const MenuList=(props)=>{    
    console.log('props restaurant id')
    console.log(props.restaurant)
    return(
        <div>
            <MenuPage
                menus={props.menus}
            />  
        </div>
    )
}
export default MenuList;