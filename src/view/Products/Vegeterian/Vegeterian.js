import "./Vegeterian.css";
import Info from "../../../component/Info/Info";
import Footer from "./../../../component/Footer/Footer";
import Dosa from "./Image/dosa.jpg";
import Dosa1 from "./Image/dosa1.webp";
import Dosa2 from "./Image/dosa2.jpg";
import Dosa3 from "./Image/dosa4.jpg";
import Dosa4 from "./Image/dosa6.webp";

import Idli from "./Image/ildli.png";
import Idli1 from "./Image/i1.png";
import Idli2 from "./Image/i2.png";
import Idli3 from "./Image/i3.png";
import Idli4 from "./Image/i4.png";

import Idli6 from "./Image/ildli.png";
import Paratha from "./Image/paratha.png";
import Paratha1 from "./Image/paratha1.png";
import Paratha2 from "./Image/paratha2.png";
import Paratha3 from "./Image/paratha3.png";
import Paratha4 from "./Image/paratha4.png";
import Paratha5 from "./Image/paratha5.png";
import Paratha6 from "./Image/paratha6.png";

import ShabudanaKhichadi1 from "./Image/s2.png";
import ShabudanaKhichadi2 from "./Image/s3.webp";
import ShabudanaKhichadi3 from "./Image/s4.png";
import ShabudanaKhichadi4 from "./Image/s5.png";
import ShabudanaKhichadi5 from "./Image/s6.png";
import ShabudanaKhichadi6 from "./Image/s7.png";
import Poha from "./Image/poha.jpg";
import Poha1 from "./Image/poha1.png";
import Poha2 from "./Image/poha2.jpg";
import Poha3 from "./Image/poha4.png";
import Poha4 from "./Image/poha6.png";
import Poha5 from "./Image/poha7.png";

import Rice from "./Image/rice1.png";
import Rice1 from "./Image/rice2.png";
import Rice2 from "./Image/rice3.png";
import Rice3 from "./Image/rice4.png";
import Rice4 from "./Image/rice5.png";
import Rice5 from "./Image/rice6.png";
import Misal from "./Image/misal1.png";
import Misal1 from "./Image/misal2.png";
import Misal2 from "./Image/misal3.png";
import Misal3 from "./Image/misal4.png";
import Misal4 from "./Image/misal5.png";
import Misal5 from "./Image/misal6.png";
import Misal6 from "./Image/misal1.png";



import Navbar from "./../../../component/Navbar/Navbar";
import Button from "./../../../component/Button/Button";

export default function Vegeterian() {
    return (
        <>
            <Navbar />
            <h1 className="center green"><span className="brown">A</span>valiable-<span className="brown">T</span>o-<span className="brown">V</span>eg</h1><hr />
            <div className="main-container">
                <div>
                    <img className="img" src={Dosa} alt="dosa"/>
                </div>
                <div>
                    <h1 className="center green"><span className="brown">D</span>osa</h1>
                    <p className="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A dosa is a thin savory pancake in South Indian cuisine made from a fermented batter of ground black lentils and rice. Dosas are served hot, often with chutney and sambar. Dosa is a signature dish in South India and Sri Lanka, and is popularly served in their respective restaurants around the world.<br /><br />
                        <h4>Place of origin: India</h4>
                        <h4>Main ingredients: Urad dal, Rice</h4>
                        <h4>Serving temperature:Hot</h4> </p>
                    <h4 className="front-text">Price:₹150</h4><br />
                    <Button text="Add To Cart" /><br />
                </div>

            </div>
            <div className="main-container">
                <Info img={Dosa} />
                <Info img={Dosa4} />
                <Info img={Dosa1} />
                <Info img={Dosa2} />
                <Info img={Dosa3} />
                <Info img={Dosa4} />
            </div>
            <hr /><hr /><hr />


            <div className="main-container">
                <div>
                    <img className="img" src={Idli} />
                </div>
                <div>
                    <h1 className="center green"><span className="brown">I</span>dli</h1>
                    <p className="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Idli or idly is a type of savoury rice cake, originating from South India, popular as a breakfast food in Southern India and in Sri Lanka. The cakes are made by steaming a batter consisting of fermented black lentils and rice.<br /><br />
                        <h4>Place of origin: India</h4>
                        <h4>Main ingredients: Rice, Urad dal</h4>
                        <h4>Course: Breakfast, dinner</h4>
                        <h4>Serving temperature: Hot with a condiment such as</h4> </p>
                    <h4 className="front-text">Price:₹60</h4><br />
                    <Button text="Add To Cart" /><br />
                </div>

            </div>
            <div className="main-container">
                <Info img={Idli1} />
                <Info img={Idli2} />
                <Info img={Idli3} />
                <Info img={Idli4} />
                <Info img={Idli6} />
                <Info img={Idli1} />
            </div>
            <hr /><hr /><hr />



            <div className="main-container">
                <div>
                    <img className="img" src={Paratha} />
                </div>
                <div>
                    <h1 className="center green"><span className="brown">P</span>aratha</h1>
                    <p className="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Idli or idly is a type of savoury rice cake, originating from South India, popular as a breakfast food in Southern India and in Sri Lanka. The cakes are made by steaming a batter consisting of fermented black lentils and rice.<br /><br />
                        <h4>Place of origin: India</h4>
                        <h4>Main ingredients: Rice, Urad dal</h4>
                        <h4>Course: Breakfast, dinner</h4>
                        <h4>Serving temperature: Hot with a condiment such as</h4> </p>
                    <h4 className="front-text">Price:₹100</h4><br />
                    <Button text="Add To Cart" /><br />
                </div>

            </div>
            <div className="main-container">
                <Info img={Paratha1} />
                <Info img={Paratha2} />
                <Info img={Paratha3} />
                <Info img={Paratha4} />
                <Info img={Paratha5} />
                <Info img={Paratha6} />
            </div>
            <hr /><hr /><hr />

            <div className="main-container">
                <div>
                    <img className="img" src={ShabudanaKhichadi2} />
                </div>
                <div>
                    <h1 className="center green"><span className="brown">S</span>habudana <span className="brown">K</span>hichadi</h1>
                    <p className="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Idli or idly is a type of savoury rice cake, originating from South India, popular as a breakfast food in Southern India and in Sri Lanka. The cakes are made by steaming a batter consisting of fermented black lentils and rice.<br /><br />
                        <h4>Place of origin: India</h4>
                        <h4>Main ingredients: Rice, Urad dal</h4>
                        <h4>Course: Breakfast, dinner</h4>
                        <h4>Serving temperature: Hot with a condiment such as</h4> </p>
                    <h4 className="front-text">Price:₹80</h4><br />
                    <Button text="Add To Cart" /><br />
                </div>

            </div>
            <div className="main-container">
                <Info img={ShabudanaKhichadi1} />
                <Info img={ShabudanaKhichadi2} />
                <Info img={ShabudanaKhichadi3} />
                <Info img={ShabudanaKhichadi4} />
                <Info img={ShabudanaKhichadi5} />
                <Info img={ShabudanaKhichadi6} />
            </div>
            <hr /><hr /><hr />


            <div className="main-container">
                <div>
                    <img className="img" src={Rice} />
                </div>
                <div>
                    <h1 className="center green"><span className="brown">R</span>ice</h1>
                    <p className="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rice is the seed of the grass species Oryza sativa or, less commonly, O. glaberrima. The name wild rice is usually used for species of the genera Zizania and Porteresia, both wild and domesticated, although the term may also be used for primitive or uncultivated varieties of Oryza.<br /><br />
                        <h4>Sources include: USDA</h4>
                        <h4>Rice, white, long-grain, cooked</h4>
                        <h4>130 Calories- 100 grams</h4>
                        </p>

                        <h4 className="front-text">Price:₹90</h4><br />
                        <Button text="Add To Cart" /><br />
                </div>

            </div>
            <div className="main-container">
                <Info img={Rice1} />
                <Info img={Rice2} />
                <Info img={Rice3} />
                <Info img={Rice4} />
                <Info img={Rice5} />
                <Info img={Rice3} />
            </div>
            <hr /><hr /><hr />


            <div className="main-container">
                <div>
                    <img className="img" src={Poha} />
                </div>
                <div>
                    <h1 className="center green"><span className="brown">P</span>oha</h1>
                    <p className="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Poha, also known as pauwa, sira, chira, chivda, aval or avalakki, among many other names, is flattened rice originating from the Indian subcontinent. Rice is parboiled before flattening so that it can be consumed with very little to no cooking.<br /><br />
                        <h4>Origin: India</h4>
                        <h4>Main ingredients: Dehusked rice</h4></p>
                    <h4 className="front-text">Price:₹70</h4><br />
                    <Button text="Add To Cart" /><br />
                </div>

            </div>
            <div className="main-container">
                <Info img={Poha1} />
                <Info img={Poha2} />
                <Info img={Poha3} />
                <Info img={Poha4} />
                <Info img={Poha5} />
                <Info img={Poha3} />
            </div>
            <hr /><hr /><hr />


            <div className="main-container">
                <div>
                    <img className="img" src={Misal} />
                </div>
                <div>
                    <h1 className="center green"><span className="brown">M</span>isal-Pav</h1>
                    <p className="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Misal pav is a dish from the Indian state of Maharashtra. It consists of misal and pav. The final dish is topped with farsan or sev, onions, lemon and coriander. It is usually served hot with bread or rolls toasted with butter and buttermilk or dahi and papad.<br /><br />
                        <h4>Food energy (per serving): 289 cal kcal</h4>
                        <h4>Associated cuisine: Indian</h4>
                        <h4>Course: Breakfast, dinner</h4>
                        <h4>Main ingredients: Sprouts, mutter, chick peas and chile powder gravy</h4> </p>
                    <h4 className="front-text">Price:₹160</h4><br />
                    <Button text="Add To Cart" /><br />
                </div>

            </div>
            <div className="main-container">
                <Info img={Misal1} />
                <Info img={Misal2} />
                <Info img={Misal3} />
                <Info img={Misal4} />
                <Info img={Misal5} />
                <Info img={Misal6} />
            </div>
            <Footer/>

        </>
    )
}