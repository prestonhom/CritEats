import React from 'react';
import './ReviewForm.css'

const ReviewForm = ()=>{
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
              textAlign:'center'
            }}
            >
                    <div>
                      <label for='one-star'>1</label>
                      <label for='two-star'>2</label>
                      <label for='three-star'>3</label>
                      <label for='four-star'>4</label>
                      <label for='five-star'>5</label>
                        <input type="radio" name='stars' id='one-star' value='1'/> 
                        <input type="radio" name='stars' id='two-star' value='2'/> 
                        <input type="radio" name='stars' id='three-star' value='3'/> 
                        <input type="radio" name='stars' id='four-star' value='4'/> 
                        <input type="radio" name='stars' id='five-star' value='5'/> 
                    </div>
                <div>
                <input 
                  type="textArea" 
                  placeholder='Write your review here: How was the food?' 
                  style={{
                    width:'40rem',
                    height:'3rem'
                  }}name='description' /> 
                </div>
            </form>
        </div>
    )
}

export default ReviewForm;