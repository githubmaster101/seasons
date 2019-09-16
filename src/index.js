import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from './SeasonsDisplay';
import Loader from './Loader';

class App extends Component {
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            // Update State 
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error:{this.state.errorMessage} </div>
        };

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonsDisplay lat={this.state.lat} />
        }
        return (<Loader message="Please accept location request" />);
    }

    // React requires us to define the render method
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    };

}

ReactDOM.render(
    <App />, document.querySelector('#userInterface')
);