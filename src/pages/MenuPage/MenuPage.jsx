import React from 'react';
import Food from '../../components/Food/Food'
import {Container, Row} from 'react-bootstrap'
import MenuCard from '../../components/MenuCard/MenuCard'

const MenuPage=(props)=>{
    return(
        <Container>
        <div>
            <Row>
        {props.menus.map((m)=>{
        return(
            <div>
                <MenuCard
                    name={m.name}
                    menuPhoto={m.menu_photo}
                />
                {/* <Food
                categories={m.categories}
                /> */}
            </div>
            )
        })}
        </Row>
        </div>
        </Container>
        
    )
}

export default MenuPage;