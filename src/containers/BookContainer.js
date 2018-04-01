import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    getCategories,
    selectCategory
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
    }

    render () {
        const { categories, selectedCategory, dispatch, page, errorMessage, books, isFetching } = this.props;

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
                                { isFetching ? '' : books.map(book => (
                                    <BookSearchElement
                                        key={book._id}
                                        book={book}/>
                                )) }
                            </div>
                        </div>
                    </div>
                    <BooksOutputComponent
                        isFetching={isFetching}
                        books={books}
                        selectedCategory={selectedCategory}
                        dispatch={dispatch}/>

                </div>
            </div>
        )
    }
}

Dashboard.propTypes = {
    books: PropTypes.array,
    isFetching: PropTypes.bool.isRequired,
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
        isFetching,
    } = state.books;

    return {
        isFetching,
        books,
        errorMessage,
        page,
        selectedCategory,
        categories
    }
}

export default connect(mapStateToProps)(Dashboard)