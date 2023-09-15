import './Footer.css';
import location from "./images/location.png";
import gmail from "./images/mail (1).png";
import insta from "./images/instagram.png";
import whatsapp from "./images/whatsapp.png";
import twitter from "./images/twitter.png";
import facebook from "./images/facebook.png";
import logo from "./images/logo-shivray-removebg-preview.png";
export default function Footer() {

    return (
        <>
            <div className="footer">
      
      
                <div className='main-container color-white'>
                    <div className='sub-container'>
                        <h1 className='color-white'> <img src={logo} alt="" className='img-logo' />
                            Taste Portal</h1>
                        <p >With a dash of Goda masala, raw onions, coriander, lemons, Sev and Farzan, Puneri food is simply delectable. When in Pune, be sure to not miss out on delicacies like Misal Pav, Pithla Bhakri, Bhakarwadi, Mastani, Dabeli, Pav Bhaji, Poha, Vada Pav and baked goodies from the old school bakeries.</p>

                        <p className='text-end mt-5'>
                            A restaurant is a place where you can eat a meal and pay for it.</p>
                    </div>

                    <div className='sub-container'>
                        <p className='text'><img src={location} className='location' />Solapur Heighway, Laxmi Height,India </p>

                        <p className='text'><img src={gmail} className='mail' /> tastePortal@gmail.com </p>

                        <div className='main-social'>
                            <div className='social-media'><img src={insta} className='social' /></div>
                            <div className='social-media'><img src={facebook} className='social' /></div>
                            <div className='social-media'><img src={twitter} className='social' /></div>
                            <div className='social-media'><img src={whatsapp} className='social' /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}