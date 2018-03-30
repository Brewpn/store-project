import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
    loginUser,
    logoutUser
} from '../../actions'
import '../../App.css'
import Login from './Login';
import Logout from './Logout'

export default class NavBar extends Component {
    constructor (props) {
        super(props);

    }

    render() {
        const { dispatch, isAuthenticated, errorMessage } = this.props;

        return (
            <div>

                <Login
                    errorMessage={errorMessage}
                    onLoginClick={creds => dispatch(loginUser(creds))}/>
                <nav className="navbar navbar-expand-lg navbar-expand-sm sticky-top"
                     style={{
                         backgroundColor: "#0E2431",
                         paddingLeft: "10%",
                         paddingRight: "10%"
                     }}>

                    <a className="navbar-brand navbar-font-color" href="#">Brand</a>
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
                                <a className="nav-link  navbar-font-color" href="#">Home(filling)<span className="sr-only">(current)</span></a>
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
    errorMessage: PropTypes.string
};