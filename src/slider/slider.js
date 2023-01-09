
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination ,Autoplay} from "swiper";

export default () => {

    return <div className="swiper">
        {/* <img src="https://images.unsplash.com/photo-1606922342331-061cbb448a23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" /> */}
        <Swiper
            slidesPerView={1}
            spaceBetween={300}
            loop={true}
            pagination={{
                clickable: true,
            }}
            
            autoplay={{
                
                delay: 5000,
                disableOnInteraction: false,
              }}
            modules={[Autoplay,Pagination]}
            className="mySwiper"
        >
            <SwiperSlide><img src="https://images.unsplash.com/photo-1606922342331-061cbb448a23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://images.unsplash.com/photo-1606922342331-061cbb448a23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://images.unsplash.com/photo-1606922342331-061cbb448a23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" /></SwiperSlide>
            <SwiperSlide><img src="https://images.unsplash.com/photo-1606922342331-061cbb448a23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" /></SwiperSlide>
           
        </Swiper>
    </div>
}