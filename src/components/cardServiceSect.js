import React from "react";
import { Link } from "react-router-dom";

const CardServSect = (props) => {
    return (
        <div className="relative group">
            <img src={props.ImgCardSect} alt={props.AltImg} className="w-full h-full"/>
            <div className="overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100">
                <Link 
                    to="/Services"
                    className="
                        text-white 
                        text-center
                        absolute
                        inset-0
                        flex
                        justify-center
                        items-center
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        text-3xl
                    "
                >
                    {props.TitleName}
                </Link>
            </div>
        </div>
    )
}

export default CardServSect;
