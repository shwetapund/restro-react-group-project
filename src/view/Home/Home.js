// import Navbar from "../../../component/Navbar/Navbar";
import Navbar from '../../component/Navbar/Navbar';
import './Home.css'
// import Category from "../../../component/Category/Category";
import Category from '../../component/Category/Category';
import burger from './../../component/Category/Image/Smashburger-recipe.webp'
import rolls from './../../component/Category/Image/Vegetable-Rolls.jpg'
import cake from './../../component/Category/Image/cake.jpg'
import thali from './../../component/Category/Image/Punjabi-thali.jpg'
import chicken from './../../component/Category/Image/Pan-Fried-Chicken.webp'
import sandwitch from './../../component/Category/Image/sandwitch.png'
import ImgCat from './Image/pizza.jpg'
import Service from '../../component/Service/Service';
import fruit from './Image/Peach-pana.png'
import truck from './Image/Logistics-rafiki.png'
import pizzaman from './Image/Pizza maker-amico.png'

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="homeImg">

            </div>

            <div className='categoryContainer'>
                <h1> Inspiration for your first order</h1>
                <div className='menuContainer'>
                    <Category DashImg={sandwitch} food={'Sandwitch'} />
                    <Category DashImg={burger} food={'Burger'} />
                    <Category DashImg={rolls} food={'Rolls'} />
                    <Category DashImg={cake} food={'Cake'} />
                    <Category DashImg={thali} food={'Thali'} />
                    <Category DashImg={chicken} food={'Chicken'} />
                    {/* <Category DashImg={ImgCat} />
                    <Category DashImg={ImgCat} />
                    <Category DashImg={ImgCat} /> */}
                </div>
            </div>


            <div className='serviceCardContainer'>
                <h1>Our Service</h1>
                <div className='serviceContainer'>

                    <Service img={fruit} heading={'QUALITY FOODS'} text={'Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit.'} />

                    <Service img={truck} heading={'FASTEST DELIVERY'} text={'Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit.'} />

                    <Service img={pizzaman} heading={'ORIGINAL RECIPES'} text={'Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit.'} />
                </div>
            </div>
        </>

    )
}