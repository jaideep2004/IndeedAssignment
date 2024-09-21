import React, { useEffect, useRef, useState } from 'react';
import './timeline.css'; // Import CSS for styling

const AutoScrollComponent = ({ children, speed = 3, interval = 25 }) => {
  const scrollRef = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const scrollWidth = scrollRef.current.scrollWidth;
    const clientWidth = scrollRef.current.clientWidth;

    const scroll = () => {
      setScrollPos((prev) => {
        const newPos = prev + speed;
        if (newPos >= scrollWidth) {
          return 0; // Reset to the start
        }
        return newPos;
      });
    };

    const intervalId = setInterval(scroll, interval);
    return () => clearInterval(intervalId);
  }, [speed, interval]);

  return (
    <div className="scroll-container">
      <img src="./images/line.png" alt="" />
      
      <div className="scroll-content" style={{ left: -scrollPos }} ref={scrollRef}>
      
        {children}
      </div>
    </div>
  );
};

export default AutoScrollComponent;
