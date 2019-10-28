import React, {Component} from 'react';
import './ReviewForm.css'
import {createReview} from '../../utils/reviewService.js'

class ReviewForm extends Component{
    state={
        food: this.props.id,
        stars: '',
        description: '',
        userName: this.props.userName
    }

    handleFormChanges = async (evt) =>{
      this.setState({
      [evt.target.name]: evt.target.value
      })
    }  
    handleFormSubmit = async (evt) =>{
      console.log(evt)
      const review = await createReview({...this.state });
      console.log(review)
      evt.preventDefault()
      this.props.history.push('/restaurants')
    }

    render(){
    return(
        <div>
          <h1 style={{
                  textAlign:'center',
                  fontFamily: 'Monoton, cursive',
                  textShadow:'1px 1px',
                  color:'pink'
          }}>
                  REVIEWS
            </h1>
            <form
            style={{
              display:'flex',
              flexDirection:'column',
              textAlign:'center',
            }}
            onSubmit={this.handleFormSubmit}
            >
                  <div>
                    User: <input type="text" name={this.state.userName}  value={this.state.userName} readonly></input>
                  <label>
                    Stars:
                    <select name='stars' onChange={this.handleFormChanges}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3" defaultValue='3'>3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>  
                    </select>
                  </label>
                  </div>
                  <div>
                  <input
                    type='text'
                    placeholder='Write your review here: How was the food?' 
                    style={{
                      width:'40rem',
                      height:'3rem'
                    }}
                    name='description' 
                    onChange={this.handleFormChanges}
                    /> 
                </div>
                <div>
                <input type="submit" 
                    className='submit-button'
                    placeholder='SUBMIT REVIEW'
                />
                </div>
            </form>
        </div>
    )
  }
}

export default ReviewForm;