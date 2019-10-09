import React from 'react';

const MenuPage=(props)=>{
    return(
        <div>
            {props.name}
            {props.menuPhoto}
            {props.category}
        </div>
    )
}

export default MenuPage;