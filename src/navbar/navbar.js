import "./navbar.css"
import "../App.css"
import { Link } from "react-scroll"



export default () => {

    return <div id="navbar">

        <header >

            <nav className="navbar">

                <div className="n-left">
                    <ul>
                        <li className="nav-name">Mian Tahir</li>
                    </ul>
                </div>

                <div className="n-right">

                    <ul className="nav-lists">

                        < li  >
                           <Link to="home" spy={true} smooth={true} offset={-30} duration={600} className="nav-items">Home</Link>  
                        </li>
                        <li   >
                            <Link  to="about" spy={true} smooth={true} offset={-30} duration={600} className="nav-items">About</Link> 
                        </li>
                        <li  >
                           <Link to="services" spy={true} smooth={true} offset={-10} duration={700} className="nav-items"> Services</Link> 
                        </li>
                        <li  >
                           <Link to="portfolio" spy={true} smooth={true} offset={-0} duration={1500} className="nav-items">Portfolio</Link> 

                        </li>
                        <li >
                           <Link to="testimonial" spy={true} smooth={true} offset={-0} duration={1500}  className="nav-items">Testimonial</Link> 
                        </li>
                        <button  >
                          <Link to="contact" spy={true} smooth={true} offset={-30} duration={1500} > Contact</Link> 
                        </button>
                    </ul>
                </div>

            </nav>


        </header>






    </div>
}