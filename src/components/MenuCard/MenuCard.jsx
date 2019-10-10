import React from 'react';
import {Card,Button,Row} from 'react-bootstrap'
import './MenuCard.css'

const MenuCard=(props)=>{
    return(
        <Card style={{ 
            width: '18rem',
            margin:'20px'
             }} >
            <Card.Img variant="top" src={props.menuPhoto}  
                    style={{
                        'width':'100%',
                        'height':'30%'
                }}/>
                <Card.Body className='card-body' >
                <Card.Title className='card-title'>{props.name}</Card.Title>
                <Card.Text className='card-text'>
                <a href={props.to}>YO{props.adress}</a>
                </Card.Text>
                <Button variant="primary">See all Reviews for this menu item</Button>
            </Card.Body>
        </Card>
    )
}

export default MenuCard;

