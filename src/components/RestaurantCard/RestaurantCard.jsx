import React from 'react';
import {Card,Button,Row} from 'react-bootstrap'
import './RestaurantCard.css'

const RestaurantCard=(props)=>{
    return(

        <Card style={{ 
            width: '18rem',
            margin:'2% 3%',
            height:'20rem'
             }} >
            <Card.Img variant="top" src={props.photo}  
                    style={{
                        'width':'100%',
                        'height':'10rem'
                }}/>
            <Card.Body style={{
                backgroundColor:'red',
                padding:0
            }} >
            <Card.Title className='card-title'>{props.name}</Card.Title>
            <Card.Text className='card-text'>
                <a href={props.to}>See More of restaurant {props.name}</a>
            </Card.Text>
                {props.address}
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        
        
    )
}

export default RestaurantCard;

