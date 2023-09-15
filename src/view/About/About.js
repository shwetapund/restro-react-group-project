import './About.css';
import Navbar from "./../../component/Navbar/Navbar";
import Footer from "./../../component/Footer/Footer";
import Button from './../../component/Button/Button';
import Restaurant from "./images/restaurant.png";

export default function About() {

    return (
        <>
        <Navbar/>
    
        <div className='about'>
            <div>
                <img src={Restaurant} className='about-img'/>
            </div>
            <div>
                <h4 className='heading'>About Our Restaurant</h4>
                <h3 className='quote'>We Provide Good Quality <br/>
                    Food to Your Family!</h3>
                <p className='text'>With a dash of Goda masala, raw onions, coriander, lemons, Sev and Farzan, Puneri food is simply delectable.</p>
                <Button text={"Learn More"}/>
            </div>

        </div>
        

        <Footer/>
        </>


    )

}