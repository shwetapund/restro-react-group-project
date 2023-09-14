export default function Service({img, text, heading})
{
    return(
        <div>
          {img}
          <h3>{heading}</h3>
          <p>{text}</p>
        </div>
    )
}