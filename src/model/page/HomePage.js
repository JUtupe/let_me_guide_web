import React, { Component } from 'react';
import Attraction from "./../../../src/entity/Attraction";
import "./HomePage.css";
import {AttractionList} from "../attraction/AttractionList";

export class HomePage extends Component {
    state = {
        attractions: [],
        query: ''
    };

    componentDidMount() {
        fetch("http://51.75.31.22:8080/v1/attraction")
            .then(res => res.json())
            .then(json => this.setState({attractions: json.map(function (data) {return new Attraction(data)})}))
            .catch(() => {});
    }

    onQueryChange = () => {
        this.setState({
            query: this.search.value
        })
    };

    getFilteredAttractions() {
        let query = this.state.query;
        return this.state.attractions.filter(
            function (attraction) {
                return attraction.location.place.toLowerCase()
                    .includes(query.toLowerCase()) | HomePage.getFilteredAttractionByDescriptionName(attraction, query)
            }
        )
    }

    static getFilteredAttractionByDescriptionName(attraction, query) {
        if (attraction.descriptions.length === 0) {
            return false
        }

        return attraction.descriptions[0].name.toLowerCase().includes(query.toLowerCase());
    }

    render() {
        return (
            <div>
                <div className={"header future text-center align-items-center d-flex justify-content-around"}>
                    <h1>
                        <input type="text"
                               placeholder="Szukaj..."
                               ref={input => this.search = input}
                               onChange={this.onQueryChange}/>
                    </h1>
                </div>

                <main className="row d-flex justify-content-center">
                    <AttractionList attractions={this.getFilteredAttractions()}/>
                </main>
            </div>
        );
    }
}

export default HomePage;