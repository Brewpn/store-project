import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {

} from '../actions'
import NavBar from '../components/NavbarComponents/NavBar'

        //TODO Auth

class MainTheme extends Component {
    constructor(props) {
        super(props);


    }


    render () {
        const { dispatch, isAuthenticated, errorMessage } = this.props;

        return (
            <div>
                <NavBar
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
    errorMessage: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    const { auth } = state;
    const { isAuthenticated, isFetching, errorMessage } = auth;

    return {
        isFetching,
        isAuthenticated,
        errorMessage,
    }
}

export default connect(mapStateToProps)(MainTheme)