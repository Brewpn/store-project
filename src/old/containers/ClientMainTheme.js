import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {

} from '../actions'
import NavBar from '../components/NavbarComponents/NavBar'


class ClientMainTheme extends Component {
    constructor(props) {
        super(props);


    }

    render () {
        const { dispatch, errorMessage, isFetching, locationBeforeTransitions } = this.props;

        return (
            <div>
                <nav className="navbar sticky-top" >
                    <a className="navbar-brand" href="#">Sticky top</a>
                </nav>

            </div>
        )
    }
}

ClientMainTheme.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    locationBeforeTransitions: PropTypes.object,
    errorMessage: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    const { auth } = state;
    const { isFetching, errorMessage } = auth;
    const { locationBeforeTransitions } = state.routing;

    return {
        locationBeforeTransitions,
        isFetching,
        errorMessage,
    }
}

export default connect(mapStateToProps)(ClientMainTheme)