import React from "react";
import BurgerMenu from "../burgerMenu";
import BannerImg from "../bannerImgSect";
import ImgBan from '../../assets/bannerImages/contactUs.jpeg';
import { BsWhatsapp } from "react-icons/bs";
import Footer from "../footer";

const ContactUs = () => {
    return (
        <section>
            <BurgerMenu />
            <BannerImg Img={ImgBan} Title={'Contact Us'} />
            <div>
                <div>
                    <h1>EMERGENCY 24 HOUR SERVICE</h1>
                    <div className="flex flex-col items-center w-2/4">
                        <a href="https://api.whatsapp.com/send?phone=+1239-185-8543&text=Hello, I need more information!"
                            target="_blank" rel="noreferrer" className="flex justify-center text-lg">
                                <BsWhatsapp className="w-7 h-7 pr-2"/>
                                239-185-8543 
                        </a>
                        
                    </div>
                    
                </div>
                
                <iframe
                    src="https://www.google.com/maps/"
                    width="100%"
                    height="450"
                    style={{ border:"0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"                ></iframe>
            </div>
            <Footer />
        </section>
    )
}

export default ContactUs;
