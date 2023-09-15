import React from 'react';
import './Card.css';
import dipika from './dipika.jpg';

export default function Card({ imgc, text, price, distance, offer }) {
  return (
    <div>
      <div className='cardf'>
        <img src={imgc} className='imgfood' alt="cardimg" />
        <span className='text'>{text}</span> <span><button className='btn'> 4.0 ☆</button></span><br/>
        <span className='price'> ₹ {price}</span>
        <span className='distance'>🕑 {distance} km   </span>
        <hr/>
        <span className='offer'>{offer} OFF up to 100 </span>
      </div>
    </div>
  );
}

export function CardReview() {
  return (
    <div className='reviewcard'>
      <h1 className='doubleq'> <i class="fa-solid fa-quote-right"></i></h1>
      <p className='reviewtext'>hdfghj jdghfdgsh kdfhbdsf jfbdkj bfdsnbfdn hbfdsnbf hdbfdnbf jfdjh hdfghj 
        jdghfdgsh kdfhbdsf jfbdkj bfdsnbfdn hbfdsnbf hdbfdnbf jfdjh</p>
     <img src={dipika} className='reviewimg' />
    
      <h6 className='reviewname'>Dipika Padukone</h6>
      <h3 className='star'><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></h3>
    </div>
  );
}

