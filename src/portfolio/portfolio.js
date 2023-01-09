import React from "react"
import "./portfolio.css"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";



export default () => {


    return <div className="portfolio-div" id="portfolio">

        {/* <div className="portfolio-over-div1">

         </div> */}
        <div className="portfolio-text">
            <h1>Recent Projects</h1>
            <h2>Portfolio</h2>

        </div>



        <Swiper
            data-aos="zoom-in" data-aos-offset="90" data-aos-duration="900" data-aos-delay="0" data-aos-easing="ease-out-back"
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwipers"
        >
            <SwiperSlide><img src="img3.jpg" alt="" /></SwiperSlide>
            <SwiperSlide ><img src="img4.webp" alt="" /></SwiperSlide>
            <SwiperSlide><img src="img2.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="img1.png" alt="" /></SwiperSlide>
            <SwiperSlide><img src="img5.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="img6.jpg" alt="" /></SwiperSlide>

        </Swiper>

    </div>

}