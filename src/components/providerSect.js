import React from "react";
import '../styles/providerSect.css';
import ImgP1 from '../assets/providersImg/amarr.png';
import ImgP2 from '../assets/providersImg/chi.png';
//import ImgP3 from '../assets/providersImg/chamberlain.png';
import ImgP3 from '../assets/providersImg/chamberlain.png';
import ImgP4 from '../assets/providersImg/clopay.png';
import ImgP5 from '../assets/providersImg/hurrican.png';
import ImgP6 from '../assets/providersImg/lifMaster.png';

const ProviderSection = () => {
    return (
        <section className="ProviderSect bg-zinc-900">
            <h1 className="font-bold text-3xl">Our Providers</h1>
            <div className="ProvItems flex center py-3 ">
                <div className="flex items-center px-3 w-80">
                   <img src={ImgP1} alt='ImgProv1' className="rounded-lg"/> 
                </div>
                <div className="flex items-center px-3 w-80">
                   <img src={ImgP2} alt='ImgProv2' className="rounded-lg"/> 
                </div>
                <div className="flex items-center px-3 w-80">
                   <img src={ImgP3} alt='ImgProv3' className="rounded-lg"/> 
                </div>
                <div className="flex items-center px-3 w-80">
                   <img src={ImgP4} alt='ImgProv4' className="rounded-lg"/> 
                </div>
                <div className="flex items-center px-3 w-80">
                   <img src={ImgP5} alt='ImgProv5'  className="rounded-lg"/> 
                </div>
                <div className="flex items-center px-3 w-80">
                   <img src={ImgP6} alt='ImgProv6'  className="rounded-lg"/> 
                </div>
            </div>
        </section>    
    )
}

export default ProviderSection;
