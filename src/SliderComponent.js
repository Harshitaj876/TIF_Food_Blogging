import React, { useState } from 'react';
import Card from './Card';
import './Card.css';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';

const SliderComponent = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = data.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 3 : prevIndex - 3
    );
  };

  return (
    <div className='cont'>
      <div className="slider-container">
        {data.slice(currentIndex, currentIndex + 3).map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
      <div className="slider-controls">
        <button onClick={prevSlide} disabled={currentIndex === 0} className='prevBtn'>
          <FaAngleLeft className='icon'/>
        </button>
        <span className="slide-count">
          {currentIndex / 3 + 1} / {Math.ceil(totalSlides / 3)}
        </span>
        <button onClick={nextSlide} disabled={currentIndex === totalSlides - 3} className='NextBtn'>
          <FaAngleRight className='icon'/>
        </button>
      </div>
    </div>
  );
};

export default SliderComponent;
