import Navbar from "../../../component/Navbar/Navbar";
import './Home.css'
import Category from "../../../component/Category/Category";
import ImgCat from './Image/pizza.jpg'
export default function Home()
{
    return(
        <>
        <Navbar/>
        <div className="homeImg">
           
        </div>
        <Category DashImg={ImgCat}/>
        </>
    
    )
}