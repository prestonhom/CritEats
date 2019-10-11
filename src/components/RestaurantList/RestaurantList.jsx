import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link, Route, Switch} from 'react-router-dom';
import RestaurantPage from '../../pages/RestaurantPage/RestaurantPage';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import {Container, Row} from 'react-bootstrap';

const RestaurantList=(props)=>{
   return(
      <Container>  
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