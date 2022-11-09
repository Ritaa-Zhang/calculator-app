import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import $ from 'jquery';

class NavBar extends Component {
    state = {};

    handleClick = e => {
        $.ajax({
            url: "",  // logout
            type: "get",
            success: resp => {
                console.log(resp);
                if (resp.result === "success")
                    window.location.href = "/calculator";
            },
        });
    }

    render_calculator = () => {
        if (this.props.is_login)
            return (
                <li className="nav-item">
                    <Link className="nav-link" to="/calculator/calculator">Calculator</Link>
                </li>
            )
        else
            return "";
    }

    render_user = () => {
        if (this.props.is_login) {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" style={{ cursor: "pointer" }}>{this.props.username}</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={this.handleClick} className="nav-link" style={{ cursor: "pointer" }}>Logout</a>
                    </li>
                </ul>
            )
        } else {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/calculator/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/calculator/register">Register</Link>
                    </li>
                </ul>
            )
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/calculator">Web</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/calculator/home">Home</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/calculator/calculator">Calculator</Link>
                            </li> */}
                            {this.render_calculator()}
                        </ul>
                        {/* <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/calculator/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/calculator/register">Register</Link>
                            </li>
                        </ul> */}
                        {this.render_user()}
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;