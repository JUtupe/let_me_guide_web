import React, { Component } from 'react';
import Attraction from "./../../../src/entity/Attraction";
import "./HomePage.css";
import {AttractionList} from "../attraction/AttractionList";

export class HomePage extends Component {
    state = {
        attractions: [],
    };

    componentDidMount() {
        fetch("http://localhost:8080/v1/attraction")
            .then(res => res.json())
            .then(json => this.setState({attractions: json.map(function (data) {return new Attraction(data)})}))
            .catch(() => {});
    }

    render() {
        const attractions = this.state.attractions;

        if (attractions.length === 0) {
            return (
                <main className="row d-flex justify-content-center">
                    <h1>Brak Atrakcji</h1>
                </main>
            );
        }

        return (
            <div>
                <div className={"header future text-center align-items-center d-flex justify-content-around"}>
                    <h1>Wyszukiwarka tutaj</h1>
                </div>
                <main className="row d-flex justify-content-center">

                <AttractionList attractions={attractions}/>
            </main>
            </div>
        );
    }
}

export default HomePage;