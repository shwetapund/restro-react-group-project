import './Contact.css';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';
// import Card ,{CardReview} from '../../component/Card/Card';
// import edli from './../../component/Card/edli.jpg';
// import Menu from './../../view/Menu/Menu';
export default function Contact() {
    return (
        <>
        <Navbar/>
            <h1 className='text-center fw-bold fs-1 mt-4 '><span className='contactt'>Contact </span><span >Us</span></h1>
            <div className="containe mt-4">
                <div className="row">
                    
                    <div className="col-md-5 m-5 map ">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2009969.634719482!2d74.72994000913208!3d17.48100097739901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bc2c2782d028d65%3A0xc4507ff78266abc9!2s10th%20Mile%2C%20Pune%20Solapur%20Highway%2C%20Hadapsar%20Annexe%2C%20Manjri%20Budruk%2C%20Hadapsar%2C%20Pune%2C%20Hadapsar%2C%20East%20Pune%2C%20Pune%2C%20Maharashtra!3m2!1d18.496541399999998!2d73.9726257!5e0!3m2!1sen!2sin!4v1694670452205!5m2!1sen!2sin" className='map' width="650" height="450"
                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div className="col-md-5 ">
                        <h1 className='text-center mt-5  mb-5'>GET IN <span className='touch'>TOUCH</span></h1>

                        <form>
                            <div class="mb-3">
                               
                           <input type="email" className="form-control border-success p-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=' 👤 name'  />
                               
                            </div>
                            <div class="mb-3">
                           
                                <input type="password" className="form-control border-success p-3" id="exampleInputPassword1" placeholder='  ✉ email'  />
                            </div>
                            <div class="mb-3">
                               
                                <input type="password" className="form-control border-success p-3" id="exampleInputPassword1"  placeholder= ' ☏ number'  />
                            </div>

                            <div class="d-grid gap-2">
                              <button className="btncontact" type="button">Contact Now</button>
                       
                          </div>
                           
                        </form>
                    </div>
                </div>
            </div>
          
             {/* <Card imgc={edli} text="hhhhhhhh" price="677" distance="20-30m " offer="50%"/> */}
          
             <br/>
            <Footer/>
           
        </>

        


    );
}