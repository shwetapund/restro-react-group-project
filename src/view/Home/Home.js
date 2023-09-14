// import Navbar from "../../../component/Navbar/Navbar";
import Navbar from '../../component/Navbar/Navbar';
import './Home.css'
// import Category from "../../../component/Category/Category";
import Category from '../../component/Category/Category';
import ImgCat from './Image/pizza.jpg'
export default function Home()
{
    return(
        <>
        <Navbar/>
        <div className="homeImg">
           
        </div>
        <h1> Inspiration for your first order</h1>
        <div className='menuContainer'>
        <Category DashImg={ImgCat}/>
        <Category DashImg={ImgCat}/>
        <Category DashImg={ImgCat}/>
        <Category DashImg={ImgCat}/>
        <Category DashImg={ImgCat}/>
        <Category DashImg={ImgCat}/>
        </div>
       
        </>
    
    )
}