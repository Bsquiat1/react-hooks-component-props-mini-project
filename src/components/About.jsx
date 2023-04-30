import React from "react";


function About(props) {
    const imgSrc = props.image ? props.image : "https://via.placeholder.com/215";
    const imgAlt = props.alt ? props.alt : "blog logo";

    return (
        <aside>
            <img src={imgSrc} alt={imgAlt} />
            <p>{props.aboutText}</p>
        </aside>
    );
}

export default About