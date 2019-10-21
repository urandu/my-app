import React, {Component, Fragment} from 'react';

export default class Counter extends Component {
    state = {value: 1};

    render() {
        return (
            <Fragment>
                <div>{this.state.value}</div>
                <button onClick={() => { console.log('clicked'); }}>Increment</button>

            </Fragment>

            
        );
    }

}