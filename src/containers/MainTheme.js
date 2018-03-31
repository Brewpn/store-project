import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {

} from '../actions'
import NavBar from '../components/NavbarComponents/NavBar'


class MainTheme extends Component {
    constructor(props) {
        super(props);


    }

    render () {
        const { dispatch, isAuthenticated, errorMessage, isFetching, locationBeforeTransitions } = this.props;

        return (
            <div>
                <NavBar
                    routing={locationBeforeTransitions}
                    isFetching={isFetching}
                    isAuthenticated={isAuthenticated}
                    errorMessage={errorMessage}
                    dispatch={dispatch}
                />
            </div>
        )
    }
}

MainTheme.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    locationBeforeTransitions: PropTypes.object,
    errorMessage: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
};

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