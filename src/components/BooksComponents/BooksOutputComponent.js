import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {
    axiosEditCategory
} from '../../actions'
import CategoryEdit from './CategoryEdit'
import BookSearchElement from './BookSearchElement'

export default class BooksOutputComponent extends Component {

    render () {
        const { selectedCategory, dispatch, isFetching, books } = this.props;

        return (
            <div>
                <div className="row content-block">
                    <div className="col">

                    </div>
                    <div className="col">
                        <h3 className="text-center">All Books</h3>
                    </div>
                    <div className="col">
                        { !_.isEmpty(selectedCategory) &&
                            <div>
                                <button type="button" className="btn btn-outline-dark float-right" data-toggle="modal"
                                        data-target="#editCategoryModal">
                                    Edit Category
                                </button>
                                <CategoryEdit
                                    onCategoryAddClick={creds => dispatch(axiosEditCategory(creds))}
                                    selectedCategory={selectedCategory}
                                    dispatch={dispatch}
                                />
                            </div>
                        }
                    </div>

                </div>
                { isFetching ? '' : books.map(book => (
                    <BookSearchElement
                        key={book._id}
                        book={book}/>
                )) }
            </div>
        )
    }
}

BooksOutputComponent.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    books: PropTypes.array,
    selectedCategory: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
};