import React from 'react';
import './RestaurantList.css'
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import {Container, Row} from 'react-bootstrap';

const RestaurantList=(props)=>{
   return(
      <Container>  
         <div style={{
            display:'flex',
            flexDirection:'column'
            }}>
            <h1 style={{
                  textAlign:'center',
                  fontFamily: 'Monoton, cursive',
                  textShadow:'1px 1px',
                  color:'pink'

               }}>
                  RESTAURANTS 
            </h1>
            
            <form className='form' style={{
               margin:'0 0 0 2rem'
            }}>
      
               <input type='text'className='rightArrow' placeholder='SEARCH'></input>
            </form>

         </div>
         
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
         <h1>&nbsp; from our friends at &nbsp;  &nbsp;
            <img 
               className='rightArrow' 
               src='../../images/rightarrow.svg' 
               alt='something'
               style={{
               width:'2rem',
               height:'2rem'
            }}/>
               &nbsp; &nbsp; 
               <a href='http://menunav.herokuapp.com/' 
               style={{
               color:'pink'
            }}>
               TASTY🔥
               </a>
         </h1>
      </Container>
   )  
}
export default RestaurantList;