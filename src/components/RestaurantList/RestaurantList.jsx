import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link, Route, Switch} from 'react-router-dom';
import './RestaurantList.css'
import RestaurantPage from '../../pages/RestaurantPage/RestaurantPage';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import {Container, Row} from 'react-bootstrap';

const RestaurantList=(props)=>{
   return(
      <Container>  
         <h1>&nbsp; &nbsp; &nbsp;from our friends at &nbsp;  &nbsp;
            <img 
               className='rightArrow' 
               src='../../images/rightarrow.svg' style={{
               width:'2rem',
               height:'2rem'
            }}/>
               &nbsp; &nbsp; 
               <a href='http://menunav.herokuapp.com/' style={{
               color:'pink'
            }}>
               TASTY🔥
               </a>
         </h1>
         <Row>
            
         {props.restaurants.map((s,idx)=>{
               return(
            
                  <RestaurantCard  
                     to={`/restaurants/${idx}`}
                     idx={`${idx}`}
                     key={idx}
                     name={s.name}
                     photo={s.restaurant_photo}
                     address={s.address}
                     description={s.description}
                     zipcode={s.zipcode}
                     phone={s.phone}
                  />
   
               )              
            })
         }
         </Row>
      </Container>
   )  
}
export default RestaurantList;