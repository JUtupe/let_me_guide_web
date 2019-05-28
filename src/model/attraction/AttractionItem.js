import React from 'react';
import {NavLink} from "react-router-dom";
import typeCastle from "./../../img/type-castle.svg"
import flagPoland from "../../img/flag-poland.svg"
import flagEngland from "../../img/flag-england.svg"
import flagGermany from "../../img/flag-germany.svg"

import "./AttractionItem.css";
import "./../../fontello/font/meetrate-icons.ttf"

export const AttractionItem = ({attraction}) => {
    return (
        <NavLink to={"/attraction/" + attraction.id}>
            <article className={"attraction"}>

                <div className={"d-flex justify-content-between"}>
                    <div className={"headers"}>
                        <h1 className={"nowrap"}>{attraction.descriptions[0].name}</h1>
                        <h2 className={"nowrap"}>{attraction.location.place ? attraction.location.place : "Miejsce nie podane"}</h2>
                    </div>

                    <div className={"type d-flex align-items-center flex-column"}>
                        <img className={"type-icon"} src={typeCastle} alt={""}/>
                    </div>
                </div>

                {generateExtras()}

            </article>
        </NavLink>
    );

    function generateAvailableLanguages() {
        return attraction.descriptions.map((description) => {
                if (description.language === "POLISH") {
                    return <img className={"toolbar-flag"} src={flagPoland} alt={"PL"} title={"PL"}/>
                } else if (description.language === "ENGLISH") {
                    return <img className={"toolbar-flag"} src={flagEngland} alt={"EN"} title={"EN"}/>
                } else if (description.language === "GERMAN") {
                    return <img className={"toolbar-flag"} src={flagGermany} alt={"DE"} title={"DE"}/>
                } else {
                    return <div/>
                }
            }
        )
    }

    function generateExtras() {
        return (
            <div className={"row"}>
                <div className={"col"}>
                    <div className={"extras d-flex justify-content-between"}>
                        <b>Dostępne języki:</b>
                        <div>
                            {generateAvailableLanguages()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};