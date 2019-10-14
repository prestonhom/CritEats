import React from 'react';
import {Card} from 'react-bootstrap'
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
            <Card.Body className='card-body' style={{
                backgroundColor:'pink'
            }}>
            <Card.Title className='card-title'>{props.name} Items</Card.Title>
               
            </Card.Body>
        </Card>
    )
}

export default MenuCard;

