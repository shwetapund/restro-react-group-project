import './Login.css';
import Button from "./../../component/Button/Button";
import Image from "./Image/user.png";

export default function Login() {
    return (
        <div className=' bg-img '>
            <div className="login-contener ">
                <div className="img-div">
                    <img src={Image} alt="React Logo" className="img" />
                </div>                    <br />
                <div lassName="input-bcox">
                    <div className="login-div">
                        <input type="text" placeholder="Email address or phone number" className="login-input" />
                        <br /> <br />
                    </div>

                    <div className="login-div">
                        <input type="password" placeholder="password" className="login-input" />
                        <br /> <br />
                    </div>
                    <div className="login-div">
                        <Button text="Log in" />
                        <br /> <br />
                    </div>
                    <div className="login-div">
                        <p>Forgotten password?</p>
                        <br /> <br />
                    </div>
                </div>
            </div>
        </div>
    )
}