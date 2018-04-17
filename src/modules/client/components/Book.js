import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Book extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired
    };

    render () {
        const {book} = this.props;

        return (
            <div className="media card card-1">
                <img
                    className="align-self-center mr-3 card-img"
                    src={`https://bookey-st.herokuapp.com/mobile/image?filename=${book.logo}`}
                    alt="Alt img" />
                <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p style={{fontSize: "13px"}}>{book.description}</p>
                    <footer className="blockquote-footer float-right">{book.author}</footer>
                </div>
            </div>
        )
    }
}