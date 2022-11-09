import React, { Component } from 'react';
import Base from './base';

class Home extends Component {
    state = {}
    render() {
        return (
            <Base>
                <div className="card border-secondary mb-3">
                    <div className="card-header">Welcome to the home page!</div>
                    <div className="card-body text-secondary">
                        <p className="card-text">I've implemented a calculator in React Redux modelled after the Windows calculator. Please give it a try!</p>
                    </div>
                </div>
            </Base>
        );
    }
}

export default Home;