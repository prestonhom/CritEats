import React from 'react';
import {Card,Button,Row} from 'react-bootstrap'
import './RestaurantCard.css'

const RestaurantCard=(props)=>{
    return(
        <div
        style={{
            boxShadow:'10px 10px rgb(255,118,228)',
            margin:'20px',
            maxHeight:'20rem'

        }}>
        <Card style={{ 
            width: '18rem',
            margin:'2% 3%',
            height:'20rem',
             }} >
            <Card.Img 
                variant="top" 
                src={props.photo}  
                style={{
                    'width':'100%',
                    'height':'40%'
                }}/>
            <Card.Body className='card-body' style={{
                backgroundColor:'black',
                padding:0,
                height:'60%'
                
            }} >
            <Card.Title className='card-title' 
                style={{
                fontSize:'120%',
                textAlign:'center',
                backgroundColor:'rgb(255,118,228)'
                
            }}
            >{props.name}
            
            </Card.Title>
                <Card.Text className='card-text'>
                    <img src='../../images/addressIcon.svg'/>
                    {props.address} 
                    {props.zipcode}
                </Card.Text>
                <Card.Text className='card-text'>
                <img src='../../images/phoneIcon.svg'/>
                    {props.phone}
                </Card.Text>
            </Card.Body>
            <Button 
            variant="primary"
            style={{
                backgroundColor:'rgb(255,118,228)',
            }}
            >                    
            <a href={props.to} style={{
                color:'white'
            }}>Menu</a>
            </Button>
        </Card>
    </div>
    )
}

export default RestaurantCard;

