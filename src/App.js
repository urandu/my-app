import React, { Component } from 'react';
import Table from "./components/Table";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            droplets: []
        }
    }
    render() {
        return (
            <div className="App">
            <Table/>
            </div>
        );
    }
}

export default App;