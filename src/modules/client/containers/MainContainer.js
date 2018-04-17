import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import Books from './Books'

class MainContainer extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    render () {

        return (
            <div className="container">
                <div className="content-block">
                    <Books/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

export default withRouter(connect(mapStateToProps)(MainContainer))