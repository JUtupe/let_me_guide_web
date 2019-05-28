import React, { Component } from 'react';
import "./Toolbar.css";
import logo from "../../img/logo-sygnet.svg";
import flagPoland from "../../img/flag-poland.svg"
import flagEngland from "../../img/flag-england.svg"
import flagGermany from "../../img/flag-germany.svg"

import {Link} from "react-router-dom";

export class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.onMenuClicked = this.onMenuClicked.bind(this);
    }

    state = {
        isOnEventPage: false
    };

    onMenuClicked() {
        this.props.onMenuClick();
    }

    setIsOnEventPage(boolean) {
        this.setState({isOnEventPage: boolean})
    }

    render() {
        return (
            <div className={"row text-center align-items-center d-flex justify-content-around"}>
                <div className={"toolbar-category"}>
                {this.state.isOnEventPage ?
                    <Link to={""} onClick={() => this.setState({isOnEventPage: false})}>
                        <i id={"button-back"} className={"icon-icon-back-arrow menu-button"} title={"Powrót"}/>
                    </Link> :
                    <i id={"button-menu"} className={"icon-icon-menu menu-button"} onClick={this.onMenuClicked} title={"Menu"}/>}

                </div>

                <img className={"app-logo"} src={logo} alt={"logo"}/>

                <div className={"toolbar-category d-flex justify-content-around"}>
                    <img className={"toolbar-flag"} src={flagPoland} alt={"PL"} title={"PL"}/>
                    <img className={"toolbar-flag"} src={flagEngland} alt={"EN"} title={"EN"}/>
                    <img className={"toolbar-flag"} src={flagGermany} alt={"DE"} title={"DE"}/>
                </div>

                <div className={"circle"}/>
                <div className={"bar"}/>
            </div>
        )
    }
}