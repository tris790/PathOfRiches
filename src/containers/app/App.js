import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Loadable from "react-loadable";
import Loading from "../../components/Loading";

import Home from "../../components/Home";

const StashComponent = Loadable({
    loader: () => import("../../components/stash/Stash"),
    loading: Loading
});
export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Home />
                        <Route exact path="/" component={StashComponent} />
                    </div>
                </Router>
            </div>
        );
    }
}
