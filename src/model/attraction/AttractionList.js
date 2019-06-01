import React, { Component } from 'react';
import {AttractionItem} from "./AttractionItem";
import "./AttractionList.css"

export class AttractionList extends Component {
    attractionItem = attraction => {
        return <AttractionItem key={attraction.id} attraction={attraction}/>
    };

    render() {
        if (this.props.attractions.length === 0) {
            return <main className="row d-flex justify-content-center">
                <h1>Brak Atrakcji</h1>
            </main>
        }

        return (
            <section className={"col-12 col-sm-10 col-xl-8 event-section"}>
                <div className={"text-center"}>
                    <b>Atrakcje w pobliżu:</b>
                </div>
                {this.props.attractions.map(this.attractionItem)}
            </section>
        );
    }
}