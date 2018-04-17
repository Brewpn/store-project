import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {
    outputBookByFilter
} from '../actions'
import Book from '../components/Book'

class Books extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        isFetching: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    componentWillMount() {
        this.props.dispatch(outputBookByFilter())
    }

    render() {
        const {books, isFetching} = this.props;
        console.log(books);
        return (
            <div>
                { isFetching ? '' : books.map(book => (
                        <Book
                            key={book._id}
                            book={book}/>
                    )
                )}
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