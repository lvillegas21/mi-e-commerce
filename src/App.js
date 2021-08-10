import './App.css';

import React from "react";

import "./components/navBar/navBar";
import NavBar from "./components/navBar/navBar";

class App extends React.Component {
    render() {
        return ( <div>
            <NavBar />
            </div>
        );
    }
}

export default App;
