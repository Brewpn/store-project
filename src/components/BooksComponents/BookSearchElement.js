import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
    searchBookByTitle
} from '../../actions'

export default class BookSearchElement extends Component {

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
                    <button className="btn btn-outline-dark btn-sm">Edit</button>
                </div>
            </div>
        )
    }
}

BookSearchElement.propTypes = {
    book: PropTypes.object,
};