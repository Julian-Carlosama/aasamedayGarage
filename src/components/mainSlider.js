import React from "react";
import '../styles/slider.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../styles/slideMain.css';
import img1 from '../assets/slidersImages/image1.jpeg';
import img2 from '../assets/slidersImages/image2.jpeg';
import img3 from '../assets/slidersImages/image3.jpeg';
import img4 from '../assets/slidersImages/image4.jpeg';
import img5 from '../assets/slidersImages/image5.jpeg';

const MainSlider = () => {
    return (
        <Carousel
            className="MainSlide"
            infiniteLoop
            showArrows={true} autoPlay
            showThumbs={false}
            showStatus={false}
            transitionTime={800}
            interval={3000}
            transitionEffect="fade"
        >
            <div>
                <img src={img1} alt="image1" className="Slider-image" />
            </div>
            <div>
                <img src={img2} alt="image2" className="Slider-image" />
            </div>
            <div>
                <img src={img3} alt="image3" className="Slider-image" />
            </div>
            <div>
                <img src={img4} alt="image4" className="Slider-image" />
            </div>
            <div>
                <img src={img5} alt="image5" className="Slider-image" />
            </div>
        </Carousel>
    )
};

export default MainSlider;
