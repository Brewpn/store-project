import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Book extends Component {
    static propTypes = {
        onReadMoreOpen: PropTypes.func.isRequired,
        book: PropTypes.object.isRequired
    };

    render () {
        const {book, onReadMoreOpen} = this.props;

        return (

        <div className="client-book-card card-book col-sm-4">
            <div className="wrapper"
                 draggable={true}
                 onClick={() => onReadMoreOpen(book)}
                 style={{background: `url(https://bookey-st.herokuapp.com/mobile/image?filename=${book.logo}) center / cover no-repeat`}}>
                <div className="book-header">
                    <div className="date">
                        <span className="day">{book.price}</span>
                    </div>
                    <ul className="menu-content">
                        <li><a className="fa fa-comment-o"><span>{book.inStock}</span></a></li>
                    </ul>
                </div>
                <div className="data">
                    <div className="content-data">
                        <span className="book-author">{book.author}</span>
                        <h1 className="book-title"><a>{book.title}</a></h1>
                        <p className="book-text">{book.description}</p>
                        <a className="button">Read more</a>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}