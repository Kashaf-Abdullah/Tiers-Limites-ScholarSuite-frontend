import React from 'react'
import ReviewForm from '../components/ReviewComp/ReviewForm'
import AllReview from '../components/ReviewComp/AllReview'
import FAQs from '../components/FAQs'

const ReviewPage = () => {
  return (
    <div  style={{paddingTop:"5rem"}}>
      <ReviewForm/>

     
      <AllReview/>
      <FAQs/>
    </div>
  )
}

export default ReviewPage
