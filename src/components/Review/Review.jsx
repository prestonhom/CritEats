import React from 'react';


const Review = ()=>{
    return(
        <div>
            <form>
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
                <input type="text" name='description' /> 
            </form>
        </div>
    )

}

export default Review;