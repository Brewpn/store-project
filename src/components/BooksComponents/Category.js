import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Categories extends Component {

    render () {
        const { category } = this.props;

        return (
            <button
                type="button"
                className="btn btn-secondary dropdown-toggle-split"
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

Categories.propTypes = {
    onCategoryClick: PropTypes.func.isRequired,
    category: PropTypes.object.isRequired
};