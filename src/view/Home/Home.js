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
import biryani from './../../component/Category/Image/biryani.webp'
import paratha from './../../component/Category/Image/paneer-paratha-recipe.jpg'
import chole from './../../component/Category/Image/chole-bhatura.jpg'
import paneer from './../../component/Category/Image/Matar-Paneer.jpg'
import north from './../../component/Category/Image/north-indian.jpg'
import dosa from './../../component/Category/Image/paneer-chilli-dosa.webp'
import fried from './../../component/Category/Image/veg-fried-rice.webp'
import ImgCat from './Image/pizza.jpg'
import Service from '../../component/Service/Service';
import fruit from './Image/Peach-pana.png'
import truck from './Image/Logistics-rafiki.png'
import pizzaman from './Image/Pizza maker-amico.png'
import dominos from './../../view/Home/Image/dominos0.jpg'
import iceCream from './../../view/Home/Image/ice-cream.jpg'
import kfc from './../../view/Home/Image/kfc-1.jpg'
import { Link } from 'react-router-dom';
import Card from './../../component/Card/Card'
import Footer from './../../component/Footer/Footer'

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="homeImg">
                <p>Traditional and Hygine</p>
                <h1>For The Love Of Delicious Food</h1>
                <p>Come with Family and Feel the joy of mouthwatering food</p>
                <a href="#category">Our Menu</a>
            </div>

            <div className='categoryContainer' id='category'>
                <h1> Inspiration for your first order</h1>
                <div className='menuContainer'>
                    <Category DashImg={sandwitch} food={'Sandwitch'} />
                    <Category DashImg={burger} food={'Burger'} />
                    <Category DashImg={rolls} food={'Rolls'} />
                    <Category DashImg={cake} food={'Cake'} />
                    <Category DashImg={thali} food={'Thali'} />
                    <Category DashImg={chicken} food={'Chicken'} />
                    <Category DashImg={biryani} food={'Biryani'} />
                    <Category DashImg={paratha} food={'Paratha'} />
                    <Category DashImg={chole} food={'Chole Bhature'} />
                    <Category DashImg={paneer} food={'Matar Paneer'} />
                    <Category DashImg={north} food={'North Indian'} />
                    <Category DashImg={dosa} food={'Dosa'} />
                    <Category DashImg={fried} food={'Fried Rice'} />

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
            <div className='variety'>
                <Card imgc={dominos} text={"Domino's Pizza"} price={' 150 for one'} distance={'25 min'} offer={'offer'} />
                <Card imgc={iceCream} text={'Natural Ice Cream'} price={'150 for one'} distance={'20 min'} offer={'offer'} />
                <Card imgc={kfc} text={'KFC'} price={'200 for one'} distance={'18 min'} offer={'offer'} />
                <div />

            </div>
            <Footer />

        </>
    )
}


// Pizza, Italian, Pasta, Fast Food, Desserts


// Burger, Fast Food, Biryani, Desserts, Beverages


// Ice Cream, Shake





