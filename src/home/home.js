import React from "react"
import "./home.css"
import '../App.css'
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Link } from "react-scroll";



export default () => {
    



    return <div id="home">

        <div className="main-div ">

           <div className="up-scroll-btn">
            <div className="up-scroll-btn-btn">
               <Link  to="navbar" spy={true} smooth={true} offset={-30} duration={1000} className="scroll-icon"> <AiOutlineArrowUp></AiOutlineArrowUp></Link>  
            </div>
           </div>

            <div className="left-div">

                <h1 className="mobile-view">Hy! I Am</h1>
                <h2 className="mobile-view">Tahir Saleem</h2>
                <p className="mobile-view">Frontend Developer using HTML , CSS , JS and React with a keen Eye for detail</p>
                <button>
                  <Link  className="home-btn" to="contact" spy={true} smooth={true} offset={-30} duration={1500}>Hire Me</Link>   
                     </button>

                <div className="icon">
                    <span  > <BsFacebook className="icon-1" /></span>
                    <span> <BsGithub className="icon-1" /></span>
                    <span> <ImLinkedin className="icon-1" /></span>

                </div>
            </div>

            <div className="right-div">

                <div class="tk-blob" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 425.9 377">
                        <path d="M389.3 42c39.8 40.8 47.5 116.3 21.3 165.4-26.1 49.1-86 71.8-145.9 104.3-59.8 32.5-119.6 74.8-168.9 63.4C46.5 363.7 7.6 298.5 1 235.7-5.5 173 20.3 112.5 59.8 71.9 99.3 31.2 152.4 10.2 215 2.8 277.5-4.7 349.5 1.2 389.3 42z"></path>
                    </svg>
                </div>
                <div class="tk-blob" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320.6 343.9">
                        <path d="M275.9 63.1c30.7 37.3 50.9 84.2 43 126.9-7.9 42.7-44.1 81.2-93 112.1C177 332.9 115.2 356 70.9 337 26.5 317.9-.4 256.7 0 204.6c.4-52 28-95 59.7-132.5C91.4 34.5 127.1 2.3 165.5.1c38.5-2.2 79.7 25.7 110.4 63z"></path>
                    </svg>
                </div>
                <div class="tk-blob">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
                        <path d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"></path>
                    </svg>

                </div>

                <div className="profile">

                </div>


                {/* <div className="tahir"></div> */}


                {/* <div className="box1">

                </div>
                <div className="box2">

                </div>
                <div className="box3">

                </div>
                <div className="box4">

                </div> */}

            </div>


        </div>

        {/* <div className="shadow"></div> */}

    </div>
}