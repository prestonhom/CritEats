import React from 'react';
import {Card,Button,Row} from 'react-bootstrap'


const FoodCard=(props)=>{
    return(
        <Card style={{ 
            width: '18rem',
            margin:'2% 3%',
            height:'20rem',
            boxShadow:'5px 5px white'
             }} >
            <Card.Img 
                variant="top" 
                src={props.foodPhoto}  
                style={{
                    'width':'100%',
                    'height':'10rem'
                }}/>
            <Card.Body className='card-body' style={{
                backgroundColor:'pink',
                padding:0,
                
            }} >
            <Card.Title className='card-title'>{props.name}</Card.Title>
            <Card.Text className='card-text'>
            </Card.Text>
            <Card.Text className='card-text'>
            </Card.Text>
            <Card.Text className='card-text'>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    
    )
}

export default FoodCard;