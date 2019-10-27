import React, {Component} from 'react';
import FoodCard from '../FoodCard/FoodCard'
import {Container,Row} from 'react-bootstrap'
import ReviewForm from '../ReviewForm/ReviewForm'
import Reviews from '../Reviews/Reviews'

class Food extends Component{
    state = {
        food: this.props.category_foods, 

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
                                    {/* <Reviews
                                        id={s.id}
                                    /> */}
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