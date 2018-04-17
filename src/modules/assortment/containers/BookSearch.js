import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    searchBookByTitle
} from '../actions'


export default class BookSearch extends Component {
    constructor (props) {
        super(props)
    }


    render () {

        return (
            <div className="input-group " style={{width: "300px"}}>
                <input
                    type="input"
                    className="form-control"
                    placeholder="Search"
                    ref="titleString"/>
                <button
                    type="button"
                    className="btn input-group-prepend input-group-prepend input-group-text"
                    data-toggle="collapse"
                    data-target="#collapseSearch"
                    aria-expanded="false"
                    aria-controls="collapseSearch"
                    onClick={(event) => this.handleClick(event)}>
                    Search
                </button>

            </div>
        )
    }

    handleClick(event) {
        event.preventDefault();
        const title = this.refs.titleString.value.trim();

        this.props.dispatch(searchBookByTitle(title))
    }
}

BookSearch.propTypes = {
    dispatch: PropTypes.func.isRequired,
};