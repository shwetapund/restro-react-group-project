import './Service.css'
export default function Service({img, text, heading})
{
    return(
        <div className="service">
           <img src={img} alt=""/>
          <h3>{heading}</h3>
          <p>{text}</p>
        </div>
    )
}