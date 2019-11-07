import React, { Component } from 'react';
import './RestaurantList.css'
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import { Container, Row } from 'react-bootstrap';

class RestaurantList extends Component {
   state = {
      search: ''
   }
   updateSearch = (event) => {
      this.setState({ search: event.target.value.substr(0, 20) })
   }
   render() {
      let filteredRestaurants = this.props.restaurants.filter((restaurant) => {
         return restaurant.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
      );
      return (
         <Container>
            <div style={{
               display: 'flex',
               flexDirection: 'column'
            }}>
               <h1
                  style={{
                     textAlign: 'center',
                     fontFamily: 'Monoton, cursive',
                     textShadow: '1px 1px',
                     color: 'pink'
                  }}>
                  RESTAURANTS
            </h1>
               <input style={{ width: '10rem', margin: '0 0 0 2rem' }} type='text' className='rightArrow' value={this.state.search} onChange={this.updateSearch} placeholder='SEARCH'></input>
            </div>
            <Row>
               {filteredRestaurants.map((s, idx) => {
                  return (
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
                     width: '2rem',
                     height: '2rem'
                  }} />
               &nbsp; &nbsp;
               <a href='http://menunav.herokuapp.com/'
                  style={{
                     color: 'pink'
                  }}>
                  TASTY🔥
               </a>
            </h1>
         </Container>
      )
   }
}
export default RestaurantList;