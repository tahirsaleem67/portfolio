import "./testimonial.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";



export default () => {


  return <div id="testimonial">


    <div className="main-testimonial">


      <div className="text-div">

        <h1>Happy  <span className="client">Client</span>  <span className="works">Works</span> </h1>
      </div>

      <div className="swiper">


        <div className="side-pic">
          <div className="side-pic-1">
            <img src="imgs2.png" alt="" />

          </div>
          <div className="side-pic-1">
            <img src="imgs8.png" alt="" />

          </div>
          <div className="side-pic-1">
            <img src="imgs4.png" alt="" />

          </div>
        </div>

        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{

            delay: 7000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwipers"
        >
          <SwiperSlide> <div className="main-swiper-div">
            <div className="main-swiper-box">

              <div className="dp-div">

                <div className="pic-div">
                  <img src="imgs1.png" alt="" />
                </div>

              </div>

              <div className="text-div">
                <p>Tahir worked closely with us to provide a site that met all of the criteria that we were looking for.
                 Thanks for all of your hard work and support!
                </p>
              </div>

              {/* <div className="name-div">
                <h3>Ahmad</h3>
              </div> */}

            </div>


          </div></SwiperSlide>
          <SwiperSlide> <div className="main-swiper-div">
            <div className="main-swiper-box">

              <div className="dp-div">
                <div className="pic-div">
                  <img src="imgs2.png" alt="" />
                </div>
              </div>

              <div className="text-div">
                <p>        
                  Tahir is efficient on his work and matches the requirement
                  and his work is very awesome</p>
              </div>
              {/* <div className="name-div">
                <h3>Sharjeel</h3>
              </div> */}
            </div>

          </div></SwiperSlide>
          <SwiperSlide> <div className="main-swiper-div">
            <div className="main-swiper-box">

              <div className="dp-div">
                <div className="pic-div">
                  <img src="imgs3.png" alt="" />
                </div>
              </div>

              <div className="text-div">
                <p> With Tahir’s help, I were able to increase the functionality of our website  while cutting our costs.Thanks Tahir!

                </p>
              </div>
              {/* <div className="name-div">
                <h3>Haroon</h3>
              </div> */}
            </div>

          </div></SwiperSlide>
          <SwiperSlide> <div className="main-swiper-div">
            <div className="main-swiper-box">
              <div className="dp-div">
                <div className="pic-div">
                  <img src="imgs4.png" alt="" />
                </div>
              </div>

              <div className="text-div">
                <p>This person can do the project on time
                 
                </p></div>
              {/* <div className="name-div">
                <h3>Azhar</h3>
              </div> */}
            </div>

          </div></SwiperSlide>
          <SwiperSlide> <div className="main-swiper-div">
            <div className="main-swiper-box">
              <div className="dp-div">
                <div className="pic-div">
                  <img src="imgs5.png" alt="" />
                </div>
              </div>

              <div className="text-div">
                <p>I would highly recommend Tahir . They are great to work with. The functionallity to our website has increased thanks to their hard work .
                </p>
              </div>
              {/* <div className="name-div">
                <h3>Maaz</h3>
              </div> */}
            </div>

          </div></SwiperSlide>
          <SwiperSlide> <div className="main-swiper-div">
            <div className="main-swiper-box">
              <div className="dp-div">
                <div className="pic-div">
                  <img src="imgs8.png" alt="" />
                </div>

              </div>

              <div className="text-div">
                <p>He meets the given promises , also provide best quality work.
                </p>
              </div>
              {/* <div className="name-div">
                <h3>Mian Tahir</h3>
              </div> */}

            </div>

          </div></SwiperSlide>

        </Swiper>


        <div className="side-pic1">
          <div className="side-pic-2">
            <img src="imgs5.png" alt="" />

          </div>
          <div className="side-pic-2">
            <img src="imgs3.png" alt="" />

          </div>
          <div className="side-pic-2">
            <img src="imgs1.png" alt="" />

          </div>
        </div>

      </div>



    </div>


  </div>
}