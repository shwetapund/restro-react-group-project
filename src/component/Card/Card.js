import React from 'react';
import './Card.css';
import dipika from './dipika.jpg';

export default function Card({ imgc, text, price, distance, offer }) {
  return (
    <div>
      <div className='cardf'>
        <img src={imgc} className='imgfood' alt="cardimg" />
        <div className='infoc'>
      <h5 className='textg'> <span className='textc'>{text}</span>  <button className='btn'> 4.0 ☆</button></h5><br/>
        <span className='price'> ₹ {price}</span>
        <span className='distance'>🕑 {distance} km   </span>
        <hr/>
        <span className='offer'>{offer} OFF up to 100 </span>
        </div>
      </div>
    </div>
  );
}

export function CardReview(img,reviewtext,reviewname) {
  return (
    <div className='reviewcard'>
      <h1 className='doubleq'> <i class="fa-solid fa-quote-right"></i></h1>
      <p className='reviewtext'>{reviewtext}</p>
     <img src={img} className='reviewimg' />
    
      <h6 className='reviewname'>{reviewname}</h6>
      <h3 className='star'><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></h3>
    </div>
  );
}

