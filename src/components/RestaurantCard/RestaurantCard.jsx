import React from 'react';
import {Card,Button} from 'react-bootstrap'
import './RestaurantCard.css'

const RestaurantCard=(props)=>{
    return(
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title className='card-title'>{props.name}</Card.Title>
            <Card.Text>
                <a href={props.to}>See More of restaurant {props.name}</a>
                <img src={props.photo}/>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        </>
    )
}

export default RestaurantCard;

