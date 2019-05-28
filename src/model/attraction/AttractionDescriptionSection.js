import React from 'react';
import "./AttractionDescriptionSection.css"

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
                TODO DODODODODO
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