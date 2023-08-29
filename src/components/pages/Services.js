import React from "react";
import BurgerMenu from "../burgerMenu";
import  Footer from '../footer';
import ImgBan from '../../assets/bannerImages/imgBServ.png';
import BannerImg from "../bannerImgSect";
import ImgServ from '../../assets/servicesImg/bulls.jpeg';


const Services = () => {
    return (
        <div>
            <BurgerMenu />
            <BannerImg Img={ImgBan} Title={'Services'} />
            <div className="h-auto p-7">
                <h1>Section 1</h1>
                <h2>We offer a variety of repair services for both residential and commercial needs:</h2>
                <img src={ImgServ} alt='Img1'/>
                <p>
                    We offer installation, repair and maintenance services for residential garage doors, commercial, gate opener and operators.
                    Most homeowners pay little attention to their garage doors – until they break. When it is working properly, it is one part of your home you most likely forget about. When it fails, however, you are quick to realize how important it is that your door functions correctly. Just as your vehicle performs better when it is regularly tuned up, a garage door is likely to function better if it is given some attention from time to time.

                    Starting with great quality products is your first step towards achieving the look and feel you want for your home. Choosing who does the job is next. We partner with the best resources to provide the highest quality materials and craftsmanship on every project. If you are looking to update or repair your garage door, you can count on Fixing Your Door to do it right … not over!

                    We can replace parts, offer installs, repairs and replacements on all doors, such as Amarr, Clopay, Genie, LiftMaster, Wayne Dalton, Linear, and more!. With an extensive variety of styles, colors, materials, and accessories to choose from, Fixing Your Door will work with you to find the right garage door that will suit all of your residential or commercial needs at a price you can afford.
                </p>

            </div>
            <div className="h-auto py-7 bg-zinc-900 text-white">
                <h1>Section 2</h1>
                <p>Irure consectetur laboris dolor deserunt minim officia mollit incididunt consectetur irure ipsum do laboris enim. Sit consectetur mollit magna ipsum in eiusmod magna. Dolore tempor proident nostrud minim veniam qui magna deserunt. Anim tempor nostrud ad culpa. Proident mollit consequat esse ex duis laborum excepteur et. Culpa fugiat pariatur velit dolore occaecat ad exercitation sint cillum do. In nisi incididunt do anim aliqua cillum fugiat non.</p>
            </div>
            <div className="h-auto py-7">
                <h1>Section 3</h1>
                <p>Irure consectetur laboris dolor deserunt minim officia mollit incididunt consectetur irure ipsum do laboris enim. Sit consectetur mollit magna ipsum in eiusmod magna. Dolore tempor proident nostrud minim veniam qui magna deserunt. Anim tempor nostrud ad culpa. Proident mollit consequat esse ex duis laborum excepteur et. Culpa fugiat pariatur velit dolore occaecat ad exercitation sint cillum do. In nisi incididunt do anim aliqua cillum fugiat non.</p>
            </div>
            <div className="h-auto py-7 bg-zinc-900 text-white">
                <h1>Section 4</h1>
                <p>Irure consectetur laboris dolor deserunt minim officia mollit incididunt consectetur irure ipsum do laboris enim. Sit consectetur mollit magna ipsum in eiusmod magna. Dolore tempor proident nostrud minim veniam qui magna deserunt. Anim tempor nostrud ad culpa. Proident mollit consequat esse ex duis laborum excepteur et. Culpa fugiat pariatur velit dolore occaecat ad exercitation sint cillum do. In nisi incididunt do anim aliqua cillum fugiat non.</p>
            </div>
            <div className="h-auto py-7">
                <h1>Section 4</h1>
                <p>Irure consectetur laboris dolor deserunt minim officia mollit incididunt consectetur irure ipsum do laboris enim. Sit consectetur mollit magna ipsum in eiusmod magna. Dolore tempor proident nostrud minim veniam qui magna deserunt. Anim tempor nostrud ad culpa. Proident mollit consequat esse ex duis laborum excepteur et. Culpa fugiat pariatur velit dolore occaecat ad exercitation sint cillum do. In nisi incididunt do anim aliqua cillum fugiat non.</p>
            </div>
            <Footer />
        </div>        
    )
}

export default Services;
