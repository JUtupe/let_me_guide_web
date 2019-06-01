import React from 'react';
import "./AttractionDescriptionSection.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

export const AttractionDescriptionSection = ({description, attraction}) => {
    if (description === undefined) {
        return <div className={"text-center"}><b>BRAK</b></div>
    }

    function generateGallery() {
        if (attraction.images.length === 0) {
            return null
        }

        return <div>
            <h6 className={"text-center section-label"}>GALERIA</h6>
            <section id={"gallery"} >
                <AliceCarousel
                    responsive={{1024: {items: 2}}}
                    buttonsDisabled={true}
                    items={attraction.images.map((image) => (<img key={image.id}
                                                                  className={"carousel-img"}
                                                                  src={image.imagePath}
                                                                  alt={""}/>))}>
                </AliceCarousel>
            </section>
        </div>
    }
    
    function generatePageUrl() {
        if (attraction.pageUrl == null) {
            return null
        }

        return <div>
            <h6 className={"text-center section-label"}>STRONA ATRAKCJI</h6>
            <section id={"page-url"} >
                <a href={attraction.pageUrl} target={"_blank"}> {attraction.pageUrl}</a>
            </section>
        </div>
    }

    return (
        <div>
            <h2 className={"text-center section-label"}>{description.name}</h2>

            <h6 className={"text-center section-label"}>O OBIEKCIE</h6>
            <section id={"description"} >
                {description.description}
            </section>

            {generateGallery()}

            <h6 className={"text-center section-label"}>HISTORIA</h6>
            <section id={"history"} >
                {description.history}
            </section>

            {generatePageUrl()}

            <h6 className={"text-center section-label"}>AUTOR OPISU</h6>
            <section id={"author"} >
                {description.author}
            </section>
        </div>
    )
};