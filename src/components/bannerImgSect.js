import React from "react";

const BannerImg = (props) => {
    return (
        <header className="w-full realtive">
            <img src={props.Img} alt="ImageBanner" className="w-full h-80 object-cover object-center"/>
            <div className="flex items-center absolute top-0 left-0 w-full h-80 bg-black bg-opacity-40 px-28">
                <h1 className="text-white text-4xl font-bold"> {props.Title}</h1>
            </div>
        </header>
    )
}

export default BannerImg;
