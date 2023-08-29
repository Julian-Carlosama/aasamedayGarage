import React from "react";
import BurgerMenu from "../burgerMenu";
import MainSlider from '../mainSlider';
import ServiceSection from "../serviceSection";
import EmergencySect from '../emergencySection';
import AboutSect from "../aboutSection";
import ProviderSection from "../providerSect";
import Footer from "../footer";

const Home = () => {
    return (
        <div>
            <BurgerMenu />
            <MainSlider />
            <ServiceSection />
            <EmergencySect />
            <AboutSect />
            <ProviderSection />
            <Footer /> 
        </div>
        
    );
}

export default Home;
