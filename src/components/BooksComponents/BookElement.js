import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class BookSearchElement extends Component {

    render() {
        const {book} = this.props;

        return (
            <div className="card card-body">
                <div className="media">
                    <img src={book.logo} className="img-thumbnail"/>
                    <div className="media-body">
                        <h5 className="card-title">{book.title}</h5>
                        {book.description}
                        <footer className="blockquote-footer float-right">{book.author}</footer>
                    </div>
                    <button className="btn btn-outline-dark btn-sm">Edit</button>
                </div>
            </div>
        )
    }
}

BookSearchElement.propTypes = {
    book: PropTypes.object,
};