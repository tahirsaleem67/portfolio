import './footer.css'
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";


export default () => {


    return <div>

        <div className='footer' style={{ fill: "red" }}>
            <svg
                preserveAspectRatio="none"
                viewBox="0 0 1200 120"
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: '#ffffff', width: '205%', height: 277, }}
            >
                <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
            </svg>


            <div className="footer-main">
                <div className="footer-txt">
                  <h4>miantahir6767@gmail.com</h4>
                </div>
                <div className="footer-icon">
                <div className="icon">
                    <span  > <BsFacebook className="icon-1" id='hover-icon' /></span>
                    <span> <BsGithub className="icon-1" /></span>
                    <span> <ImLinkedin className="icon-1" /></span>

                </div>
                </div>
            </div>
        </div>
    </div>
}