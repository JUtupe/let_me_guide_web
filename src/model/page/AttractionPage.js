import React, {Component} from 'react';
import "./AttractionPage.css";
import "../attraction/AttractionItem.css";
import PropTypes from 'prop-types';
import Attraction from "../../entity/Attraction";
import flagPoland from "../../img/flag-poland.svg";
import flagEngland from "../../img/flag-england.svg";
import flagGermany from "../../img/flag-germany.svg";
import {AttractionDescriptionSection} from "../attraction/AttractionDescriptionSection";

export class AttractionPage extends Component {
    constructor({match}) {
        super();

        this.state.match = match;
        this.state.attraction = {
            id: match.params.id,
            location: {
                place: "Wczytywanie"
            }
        }
    }

    state = {
        match: {},
        attraction: {},
        checkedDescriptionIndex: 0
    };

    componentDidMount() {
        this.props.funCallback();

        fetch("http://localhost:8080/v1/attraction/" + this.state.attraction.id)
            .then(res => res.json())
            .then(json => {this.setState({attraction: new Attraction(json)})});
    };

    render() {
        if (this.state.attraction.descriptions == null) {
            return null
        }

        return (
            <div>
                <div className={"header future text-center align-items-center d-flex justify-content-around"}>
                    <h1>{this.state.attraction.location.place}</h1>
                </div>

                <h6 className={"text-center section-label"}>DOSTĘPNE WERSJE JĘZYKOWE:</h6>
                <section id={"lang"} className={"d-flex justify-content-around"} >
                    {this.generateAvailableLanguages()}
                </section>

                <main>
                    {this.descriptionForIndex(this.state.checkedDescriptionIndex)}
                </main>
            </div>
        );
    }

    descriptionForIndex(descriptionIndex) {
        let desc = this.state.attraction.descriptions[descriptionIndex];

        return <AttractionDescriptionSection description={desc}/>
    }

    generateAvailableLanguages() {
        return this.state.attraction.descriptions.map((description, index) => {
            if (description.language === "POLISH") {
                return <img className={"toolbar-flag"} src={flagPoland} alt={"PL"} title={"PL"}
                            onClick={() => this.changeActualDescription(index)}/>
            } else if (description.language === "ENGLISH") {
                return <img className={"toolbar-flag"} src={flagEngland} alt={"EN"} title={"EN"}
                            onClick={() => this.changeActualDescription(index)}/>
            } else if (description.language === "GERMAN") {
                return <img className={"toolbar-flag"} src={flagGermany} alt={"DE"} title={"DE"}
                            onClick={() => this.changeActualDescription(index)}/>
            } else {
                return <div/>
            }
        })
    }

    changeActualDescription(newIndex) {
        this.setState({checkedDescriptionIndex: newIndex})
    }
}

AttractionPage.propTypes = {
    funCallback: PropTypes.func
};

export default AttractionPage;