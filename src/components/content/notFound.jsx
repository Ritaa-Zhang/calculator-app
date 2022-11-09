import React, { Component } from 'react';
import Base from './base';

class NotFound extends Component {
    state = {}
    render() {
        return (
            <Base>
                <div className="card border-secondary mb-3">
                    <div className="card-header">404</div>
                    <div className="card-body text-secondary">
                        <p className="card-text">Page Not Found!</p>
                    </div>
                </div>
            </Base>
        );
    }
}

export default NotFound;