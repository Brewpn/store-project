import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    getCategories,
    selectCategory,
    outputBookByCategory
} from '../actions'
import Categories from '../components/BooksComponents/Categories'
import BookSearch from '../components/BooksComponents/BookSearch'
import BookSearchElement from '../components/BooksComponents/BookSearchElement'
import BooksOutputComponent from '../components/BooksComponents/BooksOutputComponent'

class Dashboard extends Component {
    constructor(props) {
        super(props);


    }

    componentWillMount () {
        this.props.dispatch(getCategories());
        this.props.dispatch(outputBookByCategory());
    }

    render () {
        const { categories, selectedCategory, dispatch, page, errorMessage, books, isFetchingSearch,isFetchingOutput, allBooks } = this.props;

        return (
            <div className="container">
                <div className="content-block">

                    <div className="col">
                        <div>
                            <Categories
                                errorMessage={errorMessage}
                                page={page}
                                dispatch={dispatch}
                                selectedCategory={selectedCategory}
                                categories={categories}/>
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <BookSearch
                                dispatch={dispatch}/>
                            <div className="collapse" id="collapseSearch">
                                { isFetchingSearch ? '' : books.map(book => (
                                    <BookSearchElement
                                        key={book._id}
                                        book={book}/>
                                )) }
                            </div>
                        </div>
                    </div>
                    <BooksOutputComponent
                        isFetching={isFetchingOutput}
                        books={allBooks}
                        selectedCategory={selectedCategory}
                        dispatch={dispatch}/>

                </div>
            </div>
        )
    }
}

Dashboard.propTypes = {
    books: PropTypes.array,
    allBooks: PropTypes.array,
    isFetchingSearch: PropTypes.bool.isRequired,
    isFetchingOutput: PropTypes.bool.isRequired,
    page: PropTypes.number.isRequired,
    categories: PropTypes.array.isRequired,
    selectedCategory: PropTypes.object,
    errorMessage: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
};

function mapStateToProps (state) {
    const { selectedCategory, } = state;
    const {
        data: categories,
        page,
        errorMessage
    } = state.categories;
    const {
        data: books,
        isFetching: isFetchingSearch,
    } = state.books;
    const {
        data: allBooks,
        isFetching: isFetchingOutput,
    } = state.allBooks;

    return {
        allBooks,
        isFetchingSearch,
        isFetchingOutput,
        books,
        errorMessage,
        page,
        selectedCategory,
        categories
    }
}

export default connect(mapStateToProps)(Dashboard)