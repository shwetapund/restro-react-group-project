
import './Category.css'
export default function Category(props)
{
    return(
        <>

{/* <div className="categoryimg">
        <img src={img1}/>
        </div> */}
              <img
                  className="img-dashboard-user float-end"
                  src={props.DashImg}
                  alt=""
                />

        </>
      
    )
}