import React from 'react';
import Food from '../../components/Food/Food'

const MenuPage=(props)=>{
    return(
        <div>
        {props.menus.map((m)=>{
        return(
            <div>
                {m.name}
                <img src={m.menu_photo}></img>
            <Food
                categories={m.categories}
            />
            </div>
            )
        })}
        </div>
    )
}

export default MenuPage;