import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
    selectBook
} from '../../actions'

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
            <div className="col-md-3 d-flex flex-wrap card-interval">
                <div className="card">

                    <img
                        className="card-img-top"
                        src={`https://bookey-st.herokuapp.com/mobile/image?filename=${book.logo}`}
                        alt="Alt img" />
                    <div className="card-body">
                        <h5 className="card-title">{book.title}</h5>
                        <p style={{fontSize: "13px"}}>{book.description}</p>
                        <footer className="blockquote-footer float-right">{book.author}</footer>
                    </div>
                    <div className="card-footer">
                        {'$'+book.price+"   "}
                        <span className={"badge " + inStockStyle}>
                            {book.inStock}
                        </span>
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
            </div>
        )
    }
}