import React, {Component, Fragment} from 'react';

export default class Counter extends Component {
    state = {value: 1};

    render() {
        return (
            <Fragment>
                <h1>{this.props.name}</h1>
                <div>{this.state.value}</div>
                <button onClick={() => { this.setState({value:this.state.value + 1}) }}>Increment</button>

            </Fragment>

            
        );
    }

}