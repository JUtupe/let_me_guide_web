import React from 'react';
import "./AttractionDescriptionSection.css"
import AliceCarousel from 'react-alice-carousel';
import samplePhoto from "./../../img/ricardo.gif"

import "react-alice-carousel/lib/alice-carousel.css";


export const AttractionDescriptionSection = ({description}) => {
    return (
        <div>
            <h2 className={"text-center section-label"}>{description.name}</h2>

            <h6 className={"text-center section-label"}>O OBIEKCIE</h6>
            <section id={"about"} >
                {description.description}
            </section>

            <h6 className={"text-center section-label"}>GALERIA</h6>
            <section id={"about"} >
                <AliceCarousel
                    responsive={{1024: {items: 3}}}
                    buttonsDisabled={true}>
                    <img src={samplePhoto} alt={""} />
                    <img src={samplePhoto} alt={""} />
                    <img src={samplePhoto} alt={""} />
                    <img src={samplePhoto} alt={""} />
                    <img src={samplePhoto} alt={""} />
                    <img src={samplePhoto} alt={""} />
                </AliceCarousel>
            </section>

            <h6 className={"text-center section-label"}>HISTORIA</h6>
            <section id={"about"} >
                {description.history}
            </section>

            <h6 className={"text-center section-label"}>AUTOR OPISU</h6>
            <section id={"about"} >
                {description.author}
            </section>
        </div>
    )
};