import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router';
import {connect} from 'react-redux'
import {CircularProgress} from 'material-ui'

class MainContainer extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    render () {

        return (
            <div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

export default withRouter(connect(mapStateToProps)(MainContainer))