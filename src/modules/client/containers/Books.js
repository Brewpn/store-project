import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {
    requestBooksByFilter,
    selectBook,
    bookInCart
} from '../actions'
import {LoadingCircle} from '../components/LoadingCircle'
import Book from '../components/Book'
import BookDetails from './BookDetails'
import Cart from './Cart'

class Books extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        isFetching: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.dispatch(requestBooksByFilter())
    }

    state = {
        openBook: false,
    };

    onReadMoreOpen = (book) => {
        this.props.dispatch(selectBook(book));
        this.setState({openBook: true});
    };

    onReadMoreClose = (book) => {
        this.props.dispatch(bookInCart(book));
        this.setState({openBook: false});
    };

    render() {
        const {books, isFetching} = this.props;
        const {openBook} = this.state;

        return (
            <div className="container">
                <Cart/>
                <div className="content-block">
                    { isFetching && <LoadingCircle />}
                    <div className="row">
                        { isFetching
                            ? ''
                            : books.map(book => (
                                <Book
                                    onReadMoreOpen={this.onReadMoreOpen}
                                    key={book._id}
                                    book={book}/>))
                        }
                    </div>
                    <BookDetails
                        open={openBook}
                        onReadMoreClose={this.onReadMoreClose}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {
        data: books,
        isFetching: isFetching,
        errorMessage
    } = state.booksByFilter;

    return {
        books,
        isFetching,
        errorMessage
    };
}

export default connect(mapStateToProps)(Books)