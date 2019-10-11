import React, {Component} from 'react';
import FoodCard from '../FoodCard/FoodCard'
import {Container,Row} from 'react-bootstrap'

class Food extends Component{
    state = {
        food: this.props.category_id
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