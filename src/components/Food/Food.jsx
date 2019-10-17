import React, {Component} from 'react';
import FoodCard from '../FoodCard/FoodCard'
import {Container,Row} from 'react-bootstrap'
import ReviewForm from '../ReviewForm/ReviewForm'


class Food extends Component{
    state = {
        food: this.props.category_foods,
        allReviews:[],
    }
    
    render(){ 
        return(
            <Container>
                <Row>
                    <div>
                        {this.state.food.map((s)=>{
                            return(
                                <div> 
                                    <FoodCard
                                        id={s.id}
                                        price={s.price}
                                        name={s.name}
                                        foodPhoto={s.food_photo}
                                    />
                                    <ReviewForm 
                                        id={s.id}
                                    />
                                </div> 
                            )
                        })}
                    </div>
                </Row>
            </Container>
        )
    }
}
export default Food;