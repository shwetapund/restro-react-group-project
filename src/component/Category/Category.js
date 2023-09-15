
import './Category.css'
export default function Category({DashImg ,food})
{
    return(
        <>

        
        <div className="categoryimg">
        {/* <img src={img1}/> */}
              <img className="img-dashboard-user float-end" src={DashImg} alt=""/>
              <p>{food}</p>
        </div>

        </>
      
    )
}