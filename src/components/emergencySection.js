import React from "react";
import '../styles/emergencySect.css';
import { BsWhatsapp } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
//import CallButton from "./contactData/callButton";

const EmergencySect = () => {
    return (
        <section className="EmergencySect py-12 bg-zinc-900">
            <h1 className=" font-bold text-3xl">Emergency Service</h1>
            <p className="text-xl pt-10 text-white"> Same day service guaranteed if you call before 5 PM. Available 7 days a week!</p>

            <div className="NumberEmerg flex ">
                <div className="IconsCall flex flex-col items-center w-2/4">
                    <h2 className="py-4 text-lg">English Line</h2>
                    <a href="https://api.whatsapp.com/send?phone=+1239-185-74&text=Hello, I need more information!"
                        target="_blank" rel="noreferrer" className="flex justify-center text-lg text-white">
                            <BsWhatsapp className="w-7 h-7 pr-2"/>
                            239-185-74 
                    </a> 
                </div>
                <div className="Separator-bar"></div>
                <div className="IconsCall flex flex-col items-center w-2/4">
                    <h2 className="py-4 text-lg">Linea en Español</h2>
                    <a href='tel:239-335777' target="_blank" rel='noreferrer' className="flex justify-center text-lg text-white">
                    
                        <FaPhone className="w-7 h-7 pr-2"/>
                        239-3357777
                    </a>                   
                </div>
            </div>
        </section>
    )
}

export default EmergencySect;
