import React, { useRef } from 'react'
import "./Testimonials.css"
import next_icon from "../../assets/next-icon.png"
import back_icon from "../../assets/back-icon.png"
import user_1 from "../../assets/profile.jpg"
import user_2 from "../../assets/user-2.png"
import user_3 from "../../assets/profile.jpg"
import user_4 from "../../assets/user-4.png"


const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx == -50) tx = 0;
        else if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if (tx == 0) tx = -50;
        else if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    return (
        <div className='testimonials'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Dhananjay Bhavar</h3>
                                    <span>Maharashtra, India</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state of the art facilities and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Aditya Patil</h3>
                                    <span>Maharashtra, India</span>
                                </div>
                            </div>
                            <p>Deciding to pursue my degree at IIITK has been a game-changing choice. The incredible support system, modern facilities, and unwavering focus on academic excellence have truly exceeded my wildest expectations. It's been a journey filled with growth, learning, and endless possibilities.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Aditya Shinde</h3>
                                    <span>Maharashtra, India</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at IIITK was a pivotal moment in my academic journey. The vibrant community, cutting-edge facilities, and unwavering dedication to academic rigor surpassed all my expectations. It's been a transformative experience that has enriched my knowledge and skills beyond measure.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Dhananjay Bhavar</h3>
                                    <span>Maharashtra, India</span>
                                </div>
                            </div>
                            <p>Enrolling at IIITK for my degree was undoubtedly a game-changer. The nurturing environment, top-notch amenities, and relentless pursuit of academic brilliance have far surpassed what I initially anticipated. This decision has opened doors to endless opportunities and has been instrumental in shaping my future success.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials