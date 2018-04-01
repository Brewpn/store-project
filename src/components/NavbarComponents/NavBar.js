import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
    loginUser,
    logoutUser
} from '../../actions'
import '../../App.css'

import browserHistory from '../../browserHistory'
import Login from './Login';
import Logout from './Logout'

export default class NavBar extends Component {
    constructor (props) {
        super(props);

    }

    componentWillReceiveProps(nextProps) {

            document.location.href = nextProps.routing.pathname;
    }

    render() {
        const { dispatch, isAuthenticated, errorMessage, isFetching } = this.props;

        return (
            <div>

                <Login
                    errorMessage={errorMessage}
                    onLoginClick={creds => dispatch(loginUser(creds))}
                    isFetching={isFetching}/>

                <nav className="navbar navbar-expand-lg navbar-expand-sm"
                     style={{
                         backgroundColor: "#0E2431",
                         paddingLeft: "10%",
                         paddingRight: "10%"
                     }}>

                    <Link to="/" className="navbar-brand navbar-font-color">Brand</Link>
                    <button className="navbar-toggler btn btn-outline-light my-2 my-sm-0"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Navigation">
                        =
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto ">
                            <li className="nav-item active">
                                <Link
                                    to="/Dashboard"
                                    className="nav-link navbar-font-color">Dashboard</Link>
                            </li>
                            <li className="nav-item active">
                                <Link
                                    to="/Books"
                                    className="nav-link navbar-font-color">Books</Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            {!isAuthenticated &&
                            <button
                                type="button"
                                data-toggle="modal"
                                data-target="#exampleModal"
                                className="btn btn-outline-light my-2 my-sm-0">
                                Login
                            </button>
                            }
                            {isAuthenticated &&
                            <Logout onLogoutClick={() => dispatch(logoutUser())} />
                            }
                        </form>
                    </div>

                </nav>
            </div>
        )
    }
}

NavBar.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool.isRequired,
    routing: PropTypes.object,
    errorMessage: PropTypes.string
};