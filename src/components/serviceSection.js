import React from "react";
import '../styles/projctSect.css';
import imag1 from '../assets/servicesImg/repairDoor.jpeg';
import imag2 from '../assets/servicesImg/doorBroken.jpeg';
import imag3 from '../assets/servicesImg/bulls.jpeg';
import imag4 from '../assets/servicesImg/brokenimage.jpeg';
import imag5 from '../assets/servicesImg/tecniDoor.jpeg';
import CardServSect from "./cardServiceSect";
//import imag6 from '../assets/servicesImg/cablesdoors.jpeg';
//import imag1 from '../assets/slidersImages/empanada.jpeg';

const ServiceSection = () => {
    return (
        <div className="ProjectSect pt-6" >
            <h1 className="py-6 font-bold text-3xl">Services</h1>
            <p className="pb-5 text-xl">This is are own main services.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <CardServSect ImgCardSect={imag1} AltImg={'img1'} TitleName={'Stuck Doors'} />
                <CardServSect ImgCardSect={imag2} AltImg={'img2'} TitleName={'Garage Door opener Repair'} />
                <CardServSect ImgCardSect={imag3} AltImg={'img3'} TitleName={'Off Track Garage Doors'} />
                <CardServSect ImgCardSect={imag4} AltImg={'img4'} TitleName={'Broken Pulleys'} />
                <CardServSect ImgCardSect={imag5} AltImg={'img5'} TitleName={'Springs or Cables'} />
                <CardServSect ImgCardSect={imag2} AltImg={'img6'} TitleName={'Replace Cable Drums Garage Door Off Track'} />
                <CardServSect ImgCardSect={imag4} AltImg={'img7'} TitleName={'Extensión Springs'} />
                <CardServSect ImgCardSect={imag2} AltImg={'img8'} TitleName={'Garage Remote Control'} />
                <CardServSect ImgCardSect={imag1} AltImg={'img9'} TitleName={'Repair Broken Door'} />
            </div>
        </div>
    )
}

export default ServiceSection;
