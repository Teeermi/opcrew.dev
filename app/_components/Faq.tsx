"use client";

import {useRef} from "react";


export default function Faq() {
        const extendText = useRef(null);

function handleClick() {

    extendText.current.style.display === "none" ? extendText.current.style.display = "unset" : extendText.current.style.display = "none";
}
    return (
        <div className="faqContainer">
        <div className="faqLabel">
        <i className="fa-solid fa-code"></i>
            <h2>Faq</h2>

            </div>
            <h3 className="mainFaqLabel">Your questions answered here</h3>

    <div className="faqMain">
            <div className="faq1">
                <div className="faqUpWrapper">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit? </h2>
                    <i className="fa-solid fa-plus" onClick={handleClick} ></i>
                </div>
                <h3 ref={extendText} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem itaque necessitatibus nostrum sint veritatis. Aliquam, architecto commodi, !</h3>
            </div>
        </div>
        </div>
    )
}