import React from 'react';
import Review from '../ReviewForm/ReviewForm'
import {Link} from 'react-router-dom'
import {Card,Button} from 'react-bootstrap'


const FoodCard=(props)=>{
    return(
        <Card style={{ 
            width: '18rem',
            margin:'2% 3%',
            height:'20rem',
            boxShadow:'1px 1px white'
             }} >
            <Card.Img 
                variant="top" 
                src={props.foodPhoto}  
                style={{
                    'width':'100%',
                    'height':'10rem'
                }}/>
                
            <Card.Body className='card-body' style={{
                backgroundColor:'black',
                padding:0,
                display:'flex',
                flexDirection:'column'
            }} >
            <Card.Title className='card-title'>{props.name}</Card.Title>
            <Card.Text className='card-text'>
                ${props.price}
            </Card.Text>
            <Card.Text className='card-text'>
            </Card.Text>
            <Button 
            className='menu-button'
            variant="link"
            href={props.to}
            style={{margin:'2rem'}}
            >       
            <Link   
            to={`/food/${props.id}/review`}
            >          
                <span className='menu-word' style={{
                    backgroundColor:'transparent'
                }}>
                   Create Review
                </span>
            </Link>
            </Button>
            <Button 
            className='menu-button'
            variant="link"
            href={props.to}
            style={{margin:'2rem'}}
            >       
            <Link   
            to={`/food/${props.id}/reviews`}
            >          
                <span className='menu-word' style={{
                    backgroundColor:'transparent'
                }}>
                   All Reviews
                </span>
            </Link>
            </Button>
            </Card.Body>
        </Card>
    
    )
}

export default FoodCard;