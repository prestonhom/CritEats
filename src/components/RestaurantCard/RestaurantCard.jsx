import React from 'react';
import {Card,Button,Row} from 'react-bootstrap'
import {ReactHover} from 'react-hover'
import './RestaurantCard.css'

const RestaurantCard=(props)=>{
    return(
        <div
        style={{
            // boxShadow:'5px 5px rgb(255,118,228)',
            margin:'30px',
            maxHeight:'20rem'
        }}>
        <Card 
            style={{ 
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
            <Card.Body 
                className='card-body' 
                style={{
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
            > 
            <span style={{
                textTransform:'uppercase',
                backgroundColor:'transparent',
                textDecoration:'underline',
                outlineColor:'red'
            }}>{props.name}
            </span>
            
            </Card.Title>
                <Card.Text 
                    className='card-text'>
                    <img src='../../images/addressIcon.svg'/> Address
                    <h6>{props.address} </h6>
                </Card.Text>
                <Card.Text 
                    className='card-text'>
                    <img src='../../images/phoneIcon.svg'/>
                    {props.phone}
                    </Card.Text>
            <Button 
            className='menu-button'
            variant="primary"
            >                    
            <a href={props.to} className='menu-word'>Menu</a>
            </Button>
            </Card.Body>
        </Card>
    </div>
    )
}

export default RestaurantCard;

