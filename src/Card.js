import React from 'react';
import '../src/Card.css'

const Card = ({ data }) => {
  return (
    <div className="blocks">
        <img src={data.img} alt='' className='LAMargin'></img>
        <div className='center'>
            <h3 className='Block_h'>{data.title}</h3>
            <p className='Block_p'>{data.description}</p>
            <button className='LA_BUTTON'>Read More</button>
        </div>
    </div>
  );
};

export default Card;
