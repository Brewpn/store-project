import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {

} from '../actions'


class Dashboard extends Component {
    constructor(props) {
        super(props);


    }

    render () {

        return (
            <div className="container">
                <div className="border rounded">

                </div>
            </div>
        )
    }
}

Dashboard.propTypes = {

};

function mapStateToProps (state) {
    const {  } = state;

    return {

    }
}

export default connect(mapStateToProps)(Dashboard)