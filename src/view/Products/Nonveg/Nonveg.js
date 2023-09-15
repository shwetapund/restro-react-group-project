import "./Nonveg.css";
import Info from "../../../component/Info/Info";
import Navbar from "./../../../component/Navbar/Navbar";
import Button from "./../../../component/Button/Button";
import Footer from "./../../../component/Footer/Footer";
import Nonveg0 from "./Image/chiken5.jpg";
import Nonveg1 from "./Image/chiken2.jpg";
import Nonveg2 from "./Image/chiken3.webp";
import Nonveg3 from "./Image/chiken7.png";
import Nonveg4 from "./Image/chiken5.jpg";
import Nonveg5 from "./Image/chiken6.jpg";
import Biryani from "./Image/biryani5.jpg";
import Biryani1 from "./Image/biryani2.jpg";
import Biryani2 from "./Image/biryani6.jpg";
import Biryani3 from "./Image/biryani5.jpg";
import Biryani4 from "./Image/biryani2.jpg";
import Biryani5 from "./Image/briyani0.jpg";
import Egg from "./Image/egg1.jpg";
import Egg1 from "./Image/egg2.jpg";
import Egg2 from "./Image/egg3.jpg";
import Egg3 from "./Image/egg4.jpg";
import Egg4 from "./Image/egg5.jpg";
import Egg5 from "./Image/egg6.jpg";
import Egg6 from "./Image/egg1.jpg";
import Mutton from "./Image/m1.png";
import Mutton1 from "./Image/m2.png";
import Mutton2 from "./Image/m3.png";
import Mutton3 from "./Image/m4.png";
import Mutton4 from "./Image/m5.png";
import Mutton5 from "./Image/m6.png";
import Mutton6 from "./Image/m7.png";



export default function Nonveg(){
    return (
        <>
            <Navbar />
            <h1 className="center green"><span className="brown">A</span>valiable-<span className="brown">T</span>o-<span className="brown">N</span>onveg</h1><hr />
            <div className="main-container">
                <div>
                    <img className="img"  src={Nonveg0}/>
                </div>
                <div>
                    <h1 className="center green"><span className="brown">C</span>hiken</h1>
                    <p className="text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The chicken is a domesticated species that arose from the red junglefowl, originally from India. They have also partially hybridized with other wild species of junglefowl. Rooster and cock are terms for adult male birds, and a younger male may be called a cockerel. A male that has been castrated is a capon.<br /><br />

                        <h4>Scientific name: Gallus gallus domesticus</h4>
                        <h4>Lifespan: 5 – 10 years</h4>
                        <h4>Domain: Eukaryota</h4> 
                        <h4>Order: Galliformes</h4></p>
                    <h4 className="front-text">Price:₹150</h4><br />
                    <Button text="Add To Cart" /><br />
                </div>

            </div>
            <div className="main-container">
                <Info img={Nonveg1} />
                <Info img={Nonveg2} />
                <Info img={Nonveg3} />
                <Info img={Nonveg4} />
                <Info img={Nonveg5} />
                <Info img={Nonveg2} />
            </div>
            <hr /><hr /><hr />


            <div className="main-container">
                <div>
                    <img className="img" src={Biryani} />
                </div>
                <div>
                    <h1 className="center green"><span className="brown">B</span>iryani</h1>
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
                <Info img={Biryani5} />
                <Info img={Biryani1} />
                <Info img={Biryani2} />
                <Info img={Biryani3} />
                <Info img={Biryani4} />
                <Info img={Biryani5} />
            </div>
            <hr /><hr /><hr />



            <div className="main-container">
                <div>
                    <img className="img" src={Egg}/>
                </div>
                <div>
                    <h1 className="center green"><span className="brown">E</span>gg</h1>
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
                <Info img={Egg1} />
                <Info img={Egg2} />
                <Info img={Egg3} />
                <Info img={Egg4} />
                <Info img={Egg5} />
                <Info img={Egg6} />
            </div>
            <hr /><hr /><hr />

            <div className="main-container">
                <div>
                    <img className="img" src={Mutton} />
                </div>
                <div>
                    <h1 className="center green"><span className="brown">M</span>utton <span className="brown">C</span>urry</h1>
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
                <Info img={Mutton1} />
                <Info img={Mutton2} />
                <Info img={Mutton3} />
                <Info img={Mutton4} />
                <Info img={Mutton5} />
                <Info img={Mutton6} />
            </div>
            <hr /><hr /><hr />
            <Footer/>

        </>
    )
}