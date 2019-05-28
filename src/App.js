import React, { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import AttractionPage from "./model/page/AttractionPage"
import 'bootstrap/dist/css/bootstrap.css';
import "./fontello/css/meetrate-icons.css"
import './App.css';
import Drawer from 'react-motion-drawer';
import {Toolbar} from "./model/toolbar/Toolbar";
import HomePage from "./model/page/HomePage";

class App extends Component {
    state = {
        drawerOpened: false
    };

    render() {
        const openLeft = this.state.drawerOpened;

        return (
            <BrowserRouter>
                <div className="container">
                    <Toolbar ref={toolbar => {this.toolbar = toolbar}} onMenuClick={() => this.setState({drawerOpened: true})}/>

                    <Drawer open={openLeft} onChange={open => this.setState({drawerOpened: open})}
                            drawerStyle={{background: "linear-gradient(260deg, #34c868, #11856e)"}}>

                        Autorzy strony:
                        <ul>
                            <li>Wiktor Petryszyn</li>
                            <li>Kamil Wąsowski</li>
                            <li>Konrad Skóra</li>
                        </ul>

                    </Drawer>

                    <div className={"content"}>
                        <Route exact path={"/"} component={HomePage}/>
                        <Route path={"/attraction/:id"} render={(props) =>
                            <AttractionPage {...props} funCallback={() => this.toolbar.setIsOnEventPage(true)}/>}
                        />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
