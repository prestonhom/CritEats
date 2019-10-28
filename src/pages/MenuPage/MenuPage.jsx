import React from 'react';
import Category from '../../components/Category/Category'
import {Container, Row} from 'react-bootstrap'
import MenuCard from '../../components/MenuCard/MenuCard'

const MenuPage=(props)=>{
    console.log(props.restaurantMenu)
    return(
        <Container>
        <div>
            <Row>
        {props.menus.map((m)=>{
        return(
            <div style={{textAlign:'center'}}>
                <MenuCard
                    name={m.name}
                    menuPhoto={m.menu_photo}
                />
                <Category
                categories={m.categories}
                reviews={props.reviews}
                />
            </div>
            )
        })}
        </Row>
        </div>
        </Container>
        
    )
}

export default MenuPage;