import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Categories extends Component {

    static propTypes = {
        onCategoryClick: PropTypes.func.isRequired,
        category: PropTypes.object.isRequired
    };

    render () {
        const { category } = this.props;

        return (
            <button
                type="button"
                className="btn btn-secondary dropdown-item"
                onClick={(event) => this.handleClick(event, category)}>
                {category.title}
            </button>

        )
    }

    handleClick(event, category) {
        event.preventDefault();
        this.props.onCategoryClick(category)
    }
}