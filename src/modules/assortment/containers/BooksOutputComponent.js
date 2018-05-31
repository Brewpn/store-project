import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {
    selectCategory,
    axiosEditCategory,
    axiosEditBook,
    outputBookByCategory
} from '../actions'
import CategoryEdit from '../components/CategoryEdit'
import BookElement from '../components/BookElement'
import BookEdit from '../components/BookEdit'
import {LoadingCircle} from '../components/Loading'

export default class BooksOutputComponent extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this)
    }

    static propTypes = {
        isFetching: PropTypes.bool.isRequired,
        books: PropTypes.array.isRequired,
        categories: PropTypes.array.isRequired,
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
        const { selectedCategory, dispatch, isFetching, books, selectedBook, categories } = this.props;

        return (
            <div>
                <div className="row content-block">
                    <div className="col-5">

                    </div>
                    <div className="col-2">
                        <h2
                            data-toggle="modal"
                            data-target="#editCategoryModal"
                            className="text-center">
                            {_.isEmpty(selectedCategory) ? 'All Books' : selectedCategory.title}
                            </h2>
                    </div>
                    <div className="col-5">
                        { !_.isEmpty(selectedCategory) &&
                            <div>
                                <button
                                    onClick={this.handleClick}
                                    style={{marginTop: "7px"}}
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close">
                                    <span aria-hidden="true">
                                        &times;
                                    </span>
                                </button>
                                <a
                                    style={{marginTop: "7px"}}
                                    type="button"
                                    data-toggle="modal"
                                    data-target="#editCategoryModal">
                                    <img style={{width: "20px"}} src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_mode_edit_48px-256.png"/>
                                </a>
                                <CategoryEdit
                                    onCategoryAddClick={creds => dispatch(axiosEditCategory(creds))}
                                    selectedCategory={selectedCategory}
                                    dispatch={dispatch}
                                />
                            </div>
                        }
                    </div>

                </div>
                {isFetching && <LoadingCircle/>}
                <div className="row d-flex align-items-stretch">
                    { isFetching
                        ? ''
                        : books.map(book => (
                        <BookElement
                            dispatch={dispatch}
                            key={book._id}
                            book={book}/>
                    )) }
                </div>

                    <BookEdit
                        isFetching={isFetching}
                        categories={categories}
                        onEditBook={(editedBook, bookImg) => dispatch(axiosEditBook(editedBook, bookImg))}
                        dispatch={dispatch}
                        selectedBook={selectedBook}/>

            </div>
        )
    }
}

