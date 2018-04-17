import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Login from '../components/Login';
import Logout from '../components/Logout'
import {
    logoutUser
} from '../actions'
import '../../../../App.css'

class MainTheme extends Component {
    static propTypes = {
        isFetching: PropTypes.bool.isRequired,
        isAuthenticated: PropTypes.bool.isRequired,
        locationBeforeTransitions: PropTypes.object,
        errorMessage: PropTypes.string,
        dispatch: PropTypes.func.isRequired,
    };

    render () {
        const { dispatch, isAuthenticated, errorMessage, isFetching } = this.props;

        return (
            <div>
                <Login
                    errorMessage={errorMessage}
                    dispatch={dispatch}
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
                                    to="/admin/Dashboard"
                                    className="nav-link navbar-font-color">Dashboard</Link>
                            </li>
                            <li className="nav-item active">
                                <Link
                                    to="/admin/Books"
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
                            <Logout onClick={() => dispatch(logoutUser())} />
                            }
                        </form>
                    </div>

                </nav>
            </div>
        )
    }
}


function mapStateToProps(state) {
    const { auth } = state;
    const { isAuthenticated, isFetching, errorMessage } = auth;
    const { locationBeforeTransitions } = state.routing;

    return {
        locationBeforeTransitions,
        isFetching,
        isAuthenticated,
        errorMessage,
    }
}

export default connect(mapStateToProps)(MainTheme)