import React from 'react'
import TestimonialScroll from './TestimonialScroll';

const Testimonials = () => {

  const testimonialsData = [
    {
      text: 'This course was amazing, highly recommended!',
      author: 'John Doe',
    },
    {
      text: 'A great experience overall, I would definitely come back.',
      author: 'Jane Smith',
    },
    {
      text: 'Excellent customer service and content delivery.',
      author: 'Mark Wilson',
    },
    {
      text: 'Very happy with my purchase. Thank you!',
      author: 'Emily Johnson',
    },
   
  ];
  return (
    <div className='testimonialWrapper'>
      <h1>Our Testimonials</h1>
      <TestimonialScroll testimonials={testimonialsData} interval={3000} />
    </div>
  )
}

export default Testimonials