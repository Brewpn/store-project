import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class BookSearchElement extends Component {

    render() {
        const { book } = this.props;

        return (
            <div className="col-md-3 d-flex flex-wrap">
            <div className="card">
                <img
                    className="card-img-top"
                    src={`https://bookey-st.herokuapp.com/mobile/image?filename=${book.logo}`}
                    alt="https://bookey-st.herokuapp.com/mobile/image?filename=sdsdsds.jpg" />
                <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p style={{fontSize: "13px"}}>{book.description}</p>
                    <footer className="blockquote-footer float-right">{book.author}</footer>
                </div>
                <div className="card-footer">
                    <small className="text-muted">
                        Created: {`${new Date(book.createdBy.date).getDate()}.${new Date(book.createdBy.date).getMonth()+1}.${new Date(book.createdBy.date).getFullYear()}`}
                    </small>
                </div>
            </div>
            </div>
        )
    }
}

BookSearchElement.propTypes = {
    book: PropTypes.object,
};