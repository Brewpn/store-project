import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {
    selectCategory,
    axiosEditCategory,
    outputBookByCategory
} from '../../actions'
import CategoryEdit from './CategoryEdit'
import BookElement from './BookElement'
import BookEdit from './BookEdit'

export default class BooksOutputComponent extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this)
    }

    static propTypes = {
        isFetching: PropTypes.bool.isRequired,
        books: PropTypes.array.isRequired,
        selectedBook: PropTypes.object.isRequired,
        selectedCategory: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired,
    };

    componentWillReceiveProps (nextProps) {
        if (nextProps.selectedCategory !== this.props.selectedCategory) {

            this.props.dispatch(outputBookByCategory({_id: nextProps.selectedCategory._id}))
        }
    }

    handleClick (event) {
        event.preventDefault();
        const { dispatch } = this.props;

        dispatch(selectCategory({}))
    }

    render () {
        const { selectedCategory, dispatch, isFetching, books, selectedBook } = this.props;

        return (
            <div>
                <div className="row content-block">
                    <div className="col">

                    </div>
                    <div className="col">
                        <h3 className="text-center">{_.isEmpty(selectedCategory) ? 'All Books' : selectedCategory.title}</h3>
                    </div>
                    <div className="col">
                        { !_.isEmpty(selectedCategory) &&
                            <div>
                                <button
                                    onClick={this.handleClick}
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close">
                                    <span aria-hidden="true">
                                        &times;
                                    </span>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-outline-dark float-right"
                                    data-toggle="modal"
                                    data-target="#editCategoryModal">
                                    Edit {selectedCategory.title}
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
                <div className="row d-flex align-items-stretch">
                    { isFetching ? '' : books.map(book => (
                        <BookElement
                            dispatch={dispatch}
                            key={book._id}
                            book={book}/>
                    )) }
                </div>
                <BookEdit
                    dispatch={dispatch}
                    selectedBook={selectedBook}/>
            </div>
        )
    }
}

