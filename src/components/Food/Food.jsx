import React, {Component} from 'react';
import FoodCard from '../FoodCard/FoodCard'
import Review from '../Review/Review'
import {Container,Row} from 'react-bootstrap'


class Food extends Component{
    state = {
        food: this.props.category_foods
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