import React, {Component} from 'react';
import MenuPage from '../../pages/MenuPage/MenuPage'

const MenuList=(props)=>{    
            return(
                
            <div>
                <MenuPage
                menu={props.menu}  
                />  
            </div>
            )
           
}
export default MenuList;