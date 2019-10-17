import React, {Component} from 'react';
import './ReviewForm.css'

class ReviewForm extends Component{
    state={
      newReview:{
        food: this.props.id,
        stars: "3",
        description: '',
        userName: this.props.user
      },
    }

    handleFormChanges = async (evt) =>{
      this.setState({
      [evt.target.name]: evt.target.value
      })
    }  
    handleFormSubmit= async (evt) =>{
      evt.preventDefault()
      this.setState({newReview: {...this.handleFormChanges}})
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
                  <label>
                    Stars:
                    <select name='stars' onChange={this.handleChange}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3" defaultValue='3'>3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </label>
                      {/* <label for='one-star'>1</label>
                      <label for='two-star'>2</label>
                      <label for='three-star'>3</label>
                      <label for='four-star'>4</label>
                      <label for='five-star'>5</label>
                        <input type="radio" name='stars' id='one-star' value='1'/> 
                        <input type="radio" name='stars' id='two-star' value='2'/> 
                        <input type="radio" name='stars' id='three-star' value='3'/> 
                        <input type="radio" name='stars' id='four-star' value='4'/> 
                        <input type="radio" name='stars' id='five-star' value='5'/>  */}
                  </div>
                  <div>
                  <input 
                    type="textArea" 
                    placeholder='Write your review here: How was the food?' 
                    style={{
                      width:'40rem',
                      height:'3rem'
                    }}
                    
                    name='description' /> 
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