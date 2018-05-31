import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
    selectBook
} from '../actions'

export default class BookSearchElement extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inStockStyle: ''
        };

        this.handleClick = this.handleClick.bind(this)
    }

    componentWillMount () {
        switch(this.props.book.inStock){
            case this.props.book.inStock < 50:
                this.setState({ inStockStyle: 'badge-danger' });
                break;
            case this.props.book.inStock < 200:
                this.setState({ inStockStyle: 'badge-warning' });
                break;
            default:
                this.setState({ inStockStyle: 'badge-primary' });
        }
    }

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        book: PropTypes.object,
    };

    handleClick (event) {
        event.preventDefault();
        const { dispatch, book } = this.props;

        dispatch(selectBook(book))
    }

    render() {
        const { book } = this.props;
        const { inStockStyle } = this.state;

        return (
            <div className="client-book-card card-book col-sm-4">
                <div className="wrapper"  style={{background: `url(https://bookey-st.herokuapp.com/mobile/image?filename=${book.logo}) center / cover no-repeat`}}>
                    <div className="book-header">
                        <div className="date">
                            <h5><span className="badge badge-primary">${book.price}</span></h5>
                        </div>
                        <ul className="menu-content">
                            <li><a href="#" className="fa fa-comment-o"><span>{book.inStock}</span></a></li>
                        </ul>
                    </div>
                    <div className="data">
                        <div className="content-data">
                            <span className="book-author">{book.author}</span>
                            <h1 className="book-title"><a href="#">{book.title}</a></h1>
                            <p className="book-text">{book.description}</p>
                            <button
                                onClick={this.handleClick}
                                type="button"
                                className="button btn-info btn-sm float-right"
                                data-toggle="modal"
                                data-target="#editBookModal">
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}