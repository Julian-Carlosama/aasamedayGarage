import React from "react";
import '../styles/footer.css';
import { MdLocationOn, MdEmail } from "react-icons/md";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaPhone } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="flex flex-col bg-black w-full">
            <div className="ContactsFooter flex h-56">
                <div className="SubSectionFooter w-1/3">
                    <h1>Locations</h1>
                    <nav className="ItemsFooter">
                        <ul>
                            <li>
                                <a href="https://goo.gl/maps/"
                                    target="_blank" rel="noreferrer" className="flex justify-center text-lg text-white">
                                    <MdLocationOn className="IconF w-7 h-7 pr-2"/>
                                    Davis Blvd, Naples
                                </a>  
                            </li>
                            <li>
                                <a href="https://goo.gl/maps/"
                                    target="_blank" rel="noreferrer" className="flex justify-center text-lg text-white">
                                    <MdLocationOn className="IconF w-7 h-7 pr-2"/>
                                    Ne Pine Island Road, Cape Coral
                                </a>
                            </li>
                            <li>
                                <a href="https://goo.gl/maps/"
                                    target="_blank" rel="noreferrer" className="flex justify-center text-lg text-white">
                                    <MdLocationOn className="IconF w-7 h-7 pr-2"/>
                                    Sienna Cir Sarasota
                                </a> 
                            </li>
                        </ul>
                    </nav>   
                </div>
                <div className="Separator-bar"></div>
                <div className="SubSectionFooter w-1/3">
                    <h1 className="pb-7">Contact Us</h1>
                    <nav className="ItemsFooter">
                        <ul>
                            <li>
                            <a href="https://api.whatsapp.com/send?phone=+1239-185-74&text=Hello, I need more information!"
                                target="_blank" rel="noreferrer" className="flex justify-center text-lg text-white">
                                <BsWhatsapp className="IconF w-7 h-7 pr-2"/>
                                239-18574
                            </a> 
                            </li>
                            <li>
                                <a href="tel:239-288"
                                    target="_blank" rel="noreferrer" className="flex justify-center text-lg text-white">
                                    <FaPhone className="IconF w-7 h-7 pr-2"/>
                                    239-288
                                </a>
                            </li>
                            <li>
                                <a href="mailto:sales@aasdgarage.com"
                                    target="_blank" rel="noreferrer" className="flex justify-center text-lg text-white">
                                    <MdEmail className="IconF w-7 h-7 pr-2"/>
                                    sales@aasdgarage.com 
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="Separator-bar"></div>
                <div className="SubSectionFooter w-1/3">
                    <h1>Social Network</h1>
                    <nav className="ItemsFooter">
                        <ul>
                            <li>
                                <a href="https://www.facebook.com"
                                    target="_blank" rel="noreferrer" className="flex justify-center text-lg text-white">
                                    <BsFacebook className="IconF w-7 h-7 pr-2"/>
                                    Garage Door
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com/"
                                    target="_blank" rel="noreferrer" className="flex justify-center text-lg text-white">
                                    <BsInstagram className="IconF w-7 h-7 pr-2"/>
                                    Garage Door
                                </a>
                            </li>
                        </ul>
                    </nav>   
                </div>
            </div>
            
            <div className="ReservedRight w-full py-4 text-xs bg-black">
                <h6 className=" text-white">AA Same day Sarasota® 2023. All rights reserved</h6>
            </div>
        </footer>
    );
}

export default Footer;
