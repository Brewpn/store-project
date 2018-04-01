import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {

} from '../../actions'

export default class BookSearch extends Component {

    render () {
        const { category } = this.props;

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
                    onClick={(event) => this.handleClick(event)}>
                    Search
                </button>
            </div>
        )
    }

    handleClick(event) {
        event.preventDefault();
        const title = this.refs.titleString.value.trim();
        this.props.dispatch()
    }
}

BookSearch.propTypes = {
    dispatch: PropTypes.func.isRequired,
};