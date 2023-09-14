// import Navbar from "../../../component/Navbar/Navbar";
import Navbar from '../../component/Navbar/Navbar';
import './Home.css'
// import Category from "../../../component/Category/Category";
import Category from '../../component/Category/Category';
import ImgCat from './Image/pizza.jpg'
import Service from '../../component/Service/Service';

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="homeImg">

            </div>
            <h1> Inspiration for your first order</h1>
            <div className='menuContainer'>
                <Category DashImg={ImgCat} />
                <Category DashImg={ImgCat} />
                <Category DashImg={ImgCat} />
                <Category DashImg={ImgCat} />
                <Category DashImg={ImgCat} />
                <Category DashImg={ImgCat} />
            </div>

            <div className='service'>
                <div className='container'>
                    <h1>Our Service</h1>
                    {/* <div className='row'>
                        <div className='col-md-4'>
                            <img src={ImgCat}/>
                            <h3>QUALITY FOODS</h3>
                            <p>Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit.</p>
                        </div>
                        <div className='col-md-4'>
                        <h3>FASTEST DELIVERY</h3>
                            <p>Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit.</p>
                        </div>
                        <div className='col-md-4'>
                        <h3>ORIGINAL RECIPES</h3>
                            <p>Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit.</p>
                        </div>
                    </div> */}
                </div>
            </div>

            <Service img='<i class="fa-solid fa-truck"></i>' />
        </>

    )
}