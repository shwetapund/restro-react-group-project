
import './Category.css'
export default function Category(props)
{
    return(
        <>

        
        <div className="categoryimg">
        {/* <img src={img1}/> */}
              <img className="img-dashboard-user float-end" src={props.DashImg} alt=""/>
              <p>pizza</p>
        </div>

        </>
      
    )
}