import React from 'react';
import './AboutPage.css'

const AboutPage =()=>{
    return(
        <div className='about-page'>
            <h1 style={{
                textAlign:'center',
                fontFamily: 'Monoton, cursive',
                textShadow:'1px 1px',
                color:'pink'
            }}>
                A&nbsp; B &nbsp; O&nbsp; U &nbsp;T 
            </h1>
            <hr></hr>
            <p>
                &nbsp; &nbsp; &nbsp; &nbsp; Identify with your food, not with things out of a restaurant's control. We at CritEats take pride in your reviews...
                We don't allow you to give our restaurants 1 star just because you had to pay $10 for parking outside, or because 
                of the baby that was crying next to you and your unattentive Hinge date, or because the food was 3° hotter/colder than the last
                previous 4 times you've visited the same restaurant and ordered the same meal. Look we get it, there are a million of restaurant review
                sites out there just like us, but it's not about getting the most reviews, it's about being <span style={{color:'pink', fontSize:'150%'}}>accurate</span>.
            </p>
            <p>
                &nbsp; &nbsp; &nbsp; &nbsp; Not only do we partner up with Tasty and OrderEats, we don't take the whole share of the pie because we think everyone deserves a slice.
                All of our sites are built and run by the people that build the websites we've created, not the ones being abused by it.
                So if you like honest reviews for the food by the people then step up to the (food) plate and start CritEating today.
            </p>

            <h1>With Love, </h1>
        </div>
    )
}

export default AboutPage;