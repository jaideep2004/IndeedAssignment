import React, { useEffect, useState } from 'react';
import './testimonials.css';

const TestimonialScroll = ({ testimonials, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, interval);

    return () => clearInterval(scrollInterval);
  }, [testimonials.length, interval]);

  return (
    <div className="testimonials-container">
      <div className="testimonials-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className='testName'>
                    <img src="./images/images.png" alt="" />
                <h3 className="testimonial-author">- {testimonial.author}</h3>
                </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialScroll;
