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
                <div className="content-block">


                    <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                        <div className="dropdown mr-2">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Select stats
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">By category</a>
                                <a className="dropdown-item" href="#">By author</a>
                                <a className="dropdown-item" href="#">Select time period</a>
                            </div>
                        </div>
                        <h2> By Category</h2>
                        <div className="dropdown mr-2">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Chart type
                            </button>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Pie chart</a>
                                <a className="dropdown-item" href="#">Line chart</a>
                                <a className="dropdown-item" href="#">Table</a>
                            </div>
                        </div>
                    </div>

                    <h1>Content</h1> <br/>
                    <div className="btn-group btn-group-toggle mr-2" data-toggle="buttons">
                        <label className="btn btn-secondary active">
                            <input type="radio" name="options" id="option1" autoComplete="off" checked/> Month
                        </label>
                        <label className="btn btn-secondary">
                            <input type="radio" name="options" id="option2" autoComplete="off"/> Year
                        </label>
                    </div>


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