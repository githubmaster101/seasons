import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { loadPartialConfig } from '@babel/core';
//import SeasonsDisplay from './SeasonsDisplay';

class App extends Component {
    constructor(props) {
        super(props);
        // Initialize State 
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition((position) => {
            // Update State 
            this.setState({ lat: position.coords.latitude });
        }, (err) => {
            this.setState({ errorMessage: err.message });
        });
    }
    // React requires us to define the render method
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error:{this.state.errorMessage} </div>
        };

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        }
        return (<h3>loading</h3>);
    };

}

ReactDOM.render(
    <App />, document.querySelector('#userInterface')
);