import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Category from './Category'
import CategoryAdd from './CategoryAdd'
import {
    selectCategory,
    createCategory,
    getCategories
} from '../../actions'

export default class Categories extends Component {

    handleClickPlus(event) {
        let { page, dispatch } = this.props;
        if (this.props.categories.length > 3) {
            dispatch(getCategories(page+1));
        }
    }

    handleClickMinus(event) {
        let { page, dispatch } = this.props;
        if (page > 1) {
            dispatch(getCategories(page-1));
        }
    }

    render () {
        const { categories, selectedCategory, dispatch, errorMessage } = this.props;

        return (
            <div style={{float: "right", position: "relative"}}>
                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <CategoryAdd
                            errorMessage={errorMessage}
                            onCategoryAddClick={creds => dispatch(createCategory(creds))}
                            dispatch={dispatch}/>
                        <div className="btn-group mr-2" role="group" aria-label="Second group" style={{zIndex: 1}}>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={(event) => this.handleClickMinus(event)}>
                            &laquo;
                        </button>
                    {
                        categories.map(category => (
                            <Category
                                onCategoryClick={creds => dispatch(selectCategory(creds))}
                                key={category._id}
                                category={category}/>
                        ))
                    }
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={(event) => this.handleClickPlus(event)}>
                            &raquo;
                        </button>
                        </div>
                </div>
                {selectedCategory &&
                    <div className="collapse multi-collapse" id="collapseExample">
                        <div className="card card-body">
                            <h4>{selectedCategory.title}</h4>
                            {selectedCategory.description}
                        </div>
                    </div>
                }
            </div>
        )
    }
}

Categories.propTypes = {
    errorMessage: PropTypes.string,
    page: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    selectedCategory: PropTypes.object,
    categories: PropTypes.array.isRequired
};