import React from 'react';
import './Card.css';
// import dipika from './dipika.jpg';

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

// export function CardReview() {
//   return (
//     <div className='reviewcard'>
//       <img src={dipika} className='reviewimg' />
//       <button type='button' >review</button>
   
//       <p id='reviewtext'> jjjj  gghhhgh </p>
//       <h6 className='reviewname'>Dipika Padukone</h6>
//       <h2><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></h2>
//     </div>
//   );
// }

// function showText() {
//     document.addEventListener('DOMContentLoaded', function() {
//       const text = document.getElementById('reviewtext');
//       text.innerHTML= `<div>hiiiii</div>`;
//     });
//   }
