import React from "react";


const CallButton = (props) => {
    const phoneNumber = '239-288-8281 ';

    return (
        <a href={`tel:${phoneNumber}`} >{props.action}</a>
    )
}

export default CallButton;
