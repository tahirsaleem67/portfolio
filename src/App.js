
import React from "react"
import Slider from "./slider/slider"
import "./App.css"
import Navbar from "./navbar/navbar"
import "./blobs css/blobz.css"
import "./blobs css/blobz.min.css"
import Home from "./home/home"
import About from "./about/about"
import Services from "./services/services"
import Portfolio from "./portfolio/portfolio"
import Animated from "./animated num/animated"
import Testimonial from "./testimonial/testimonial"
import Contact from "./contact/contact"
import Footer from "./footer/footer"


// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


export default () => {


  return <div>

    <Navbar />
    <Home></Home>
    <About/>
    <Services></Services>
    <Animated></Animated>
    <Portfolio></Portfolio>
    <Testimonial></Testimonial>
    <Contact></Contact>
    <Footer></Footer>
    {/* <Slider></Slider> */}


  
   

  </div>
}