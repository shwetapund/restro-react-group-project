
import './Card.css';

export default function Card(imgc,text,price,distance,offer){
    return(
        <div>
<div className='cardf'>
   <img src={imgc} className='imgfood' alt="cardimg"/>
   <span className='text'>{text}</span> <span><button class='btn'>4.0 ☆</button></span><br/>
   <span className='price'>{price}</span>
   <span className='distance  '>🕑 {distance}  </span>
  
   <hr/>
  <span className='offer'>{offer}</span>
</div>
</div>

    )
}