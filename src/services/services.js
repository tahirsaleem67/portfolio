import React, { useEffect } from "react"
import './services.css'
import { GoDeviceDesktop } from "react-icons/go";
import { FaReact } from "react-icons/fa";
import { TbDeviceMobile } from "react-icons/tb";
import Aos from "aos";
import "aos/dist/aos.css"




export default () => {

    useEffect(()=>{
        Aos.init({
            duration: 3000,
    
          });
          
    },[])


    return <div id="services">
        <div class="services-container">

            {/* <div class="tk-blob">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
                    <path d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"></path>
                </svg>

            </div> */}

            <div className="text-div mobile-view">
                <h1 className=" mobile">My  Awesome</h1>
                <h2 className=" mobile">services</h2>
                <p className=" mobile">I am Frontend Developer can provide you  the
                    services of HTML , CSS , JS , React JS and Redux</p>
            </div>

            <div class="phone">
                <div class="phone-box"  data-aos="fade-right" data-aos-offset="50"  data-aos-duration="900" data-aos-delay="0" data-aos-easing="ease-out-back">
                    <div class="notch-container">
                        <div class="notch"></div>
                    </div>
                    <div className="img">

                        <div className="service-icon">
                            <span><GoDeviceDesktop></GoDeviceDesktop></span>
                        </div>
                        <h3>Web Design</h3>
                        <p>I used to design web pages using Html,Css and Sass  A web designer is responsible for creating the design and layout of a website or web pages.</p>
                    </div>

                </div>

                <div class="phone-box" data-aos="zoom-in" data-aos-offset="50"  data-aos-duration="900" data-aos-delay="0">
                    <div class="notch-container">
                        <div class="notch"></div>
                    </div>
                    <div className="img">


                        <div className="service-icon">
                            <span><FaReact></FaReact></span>

                        </div>
                        <h3>Web Development</h3>
                        <p>I Develop the website using HTML ,CSS , JS , React  and redux and ensuring that the application is compatible with a variety of browsers and devices.</p>

                    </div>

                </div>

                <div class="phone-box" data-aos="fade-left" data-aos-offset="50"  data-aos-duration="900" data-aos-delay="0" data-aos-easing="ease-out-back">
                    <div class="notch-container">
                        <div class="notch"></div>
                    </div>
                    <div className="img">

                        <div className="service-icon">
                            <span><TbDeviceMobile></TbDeviceMobile></span>
                        </div>
                        <h3>Frontend Developer</h3>
                        <p>As a Frontend Developer I Building and maintaining user interfaces for web applications using HTML, CSS, and JavaScript.</p>
                    </div>

                </div>


            </div>
        </div>


    </div>
}