import React from "react";
import '../styles/aboutSec.css';
import teamImg from '../assets/TeamHoriz.png';

const AboutSect = () => {
    return (
        <section className="AboutSect pb-6 px-20">
            <h1 className="py-6 font-bold text-3xl ">About Us</h1>
            <div className="ContetnAboutSect flex">
                <img src={teamImg}  alt="team"  />
                <p className=" flex content-center text-justify pl-6 items-center">
                AA Same Day Garage Door Service was established in September of 2006. Since we opened our doors our main goal has always been to provide our customer with the highest satisfaction possible by offering top quality products at resonable prices, and offering an excellent customer service. We have now opened two other locations in Miami since April 2009 and also Orlando since January 2010.
                All of our locations are run by the owners so you can rest assure your going to get an excellent service by a technician who has the knowledge and capability of fixing your door, opener, or gate opener the way it should be done! We have well over 10 years of experience in the trade.
                Free Estimates, 24 hr emergency service, Residential and Commercial Service, repair, and installs. Residential Springs we offer a 5 year warranty on the springs.
                </p>
            </div>
        </section>
    )
}

export default AboutSect;
