import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
    selectBook
} from '../actions'

export default class BookSearchElement extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this)
    }

    static propTypes = {
        selectedBook: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired,
        book: PropTypes.object,
    };

    handleClick (event) {
        event.preventDefault();
        const { dispatch, book } = this.props;

        dispatch(selectBook(book))
    }

    render() {
        const {book} = this.props;

        return (
            <div className="card card-body">
                <div className="media">
                    <img
                        src={`https://bookey-st.herokuapp.com/mobile/image?filename=${book.logo}`}
                        alt="https://bookey-st.herokuapp.com/mobile/image?filename=sdsdsds.jpg"
                        style={{width: "75px", height: "75px"}}
                        className="rounded"/>
                    <div className="media-body" style={{marginLeft: "20px"}}>
                        <h5 className="card-title">{book.title}</h5>
                        {book.description}
                        <footer className="blockquote-footer float-right">{book.author}</footer>
                    </div>
                    <button
                        onClick={this.handleClick}
                        type="button"
                        className="btn btn-dark btn-sm float-right"
                        data-toggle="modal"
                        data-target="#editBookModal">
                        Edit
                    </button>
                </div>
            </div>
        )
    }
}
