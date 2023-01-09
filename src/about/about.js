import React from "react"
import './about.css'
import "../home/home.css"


export default () => {

    return <div id="about">


        <div className="main-box" >


            <div className="img-box" data-aos="fade-right" data-aos-offset="80"  data-aos-duration="900" data-aos-delay="0" data-aos-easing="ease-out-back">

                <img src="img11.jpg" alt="" />
            </div>
            <div className="bio-data">


                <h2 className="common-heading mobile-view">My Bio-Data</h2>
                <p className="mobile-view">

                  I'm a Frontend Developer using HTML , CSS , JS and React providing <br /> the Quality work 
                  and expert in redux
                </p>
                <br />
                <p className="mobile-view">
                  And I'm also Canva expert with a keen Eye for detail.   <br />
                  
                </p>
                <div className="bio-data-stats">
                    <div className="bio-stats">
                        <h3>Design</h3>
                        <div className="bio-progress-bar">
                            <span>80%</span>
                        </div>
                    </div>
                    <div className="bio-stats">
                        <h3>HTML</h3>
                        <div className="bio-progress-bar bio-progress-2">
                            <span>99%</span>
                        </div>
                    </div>
                    <div className="bio-stats">
                        <h3>CSS</h3>
                        <div className="bio-progress-bar bio-progress-3">
                            <span>90%</span>
                        </div>
                    </div>
                    <div className="bio-stats">
                        <h3>JavaScript</h3>
                        <div className="bio-progress-bar bio-progress-4">
                            <span>85%</span>
                        </div>
                    </div>
                    <div className="bio-stats">
                        <h3>MERN</h3>
                        <div className="bio-progress-bar bio-progress-5">
                            <span>70%</span>
                        </div>
                    </div>
                </div>

                <button>Downlaod CV</button>



            </div>
        </div>



        {/* <section className="section-biodata section">
            <div className="container grid grid-two-column">
                <div className="bio-image">
                    <img src="https://images.unsplash.com/photo-1553390774-b4822481c894?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=444&q=80" alt="my bio data image" />
                </div>
              
                <div className="bio-data">
                    <h2 className="common-heading">my bio-data</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus natus
                        eum quibusdam, blanditiis nobis dolor distinctio asperiores itaque
                        voluptas nesciunt cum dolorum. Quidem sed id repellat facere
                    </p>
                    <br />
                    <p>
                        itaque voluptas nesciunt cum dolorum. Quidem sed id repellat facere quod
                        placeat praesentium.
                    </p>
                    <div className="bio-data-stats">
                        <div className="bio-stats">
                            <h3>Design</h3>
                            <div className="bio-progress-bar">
                                <span>80%</span>
                            </div>
                        </div>
                        <div className="bio-stats">
                            <h3>HTML</h3>
                            <div className="bio-progress-bar bio-progress-2">
                                <span>99%</span>
                            </div>
                        </div>
                        <div className="bio-stats">
                            <h3>CSS</h3>
                            <div className="bio-progress-bar bio-progress-3">
                                <span>90%</span>
                            </div>
                        </div>
                        <div className="bio-stats">
                            <h3>JavaScript</h3>
                            <div className="bio-progress-bar bio-progress-4">
                                <span>85%</span>
                            </div>
                        </div>
                        <div className="bio-stats">
                            <h3>MERN</h3>
                            <div className="bio-progress-bar bio-progress-5">
                                <span>70%</span>
                            </div>
                        </div>
                    </div>
                    <div className="bio-data-btn">
                        <a href="#" className="btn">
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section> */}


    </div>
}