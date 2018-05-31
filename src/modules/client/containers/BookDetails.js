import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';

class BookDetails extends Component {

    static propTypes = {
        onReadMoreClose: PropTypes.func.isRequired,
        open: PropTypes.bool.isRequired,
        book: PropTypes.object,
    };

    render() {
        const {onReadMoreClose, open, book} = this.props;
        const actions = [
            <FlatButton
                label={'$' + book.price}
                primary={true}
                onClick={() => onReadMoreClose(book)}
            />,
            <FlatButton
                label="X"
                secondary={true}
                onClick={onReadMoreClose}
            />
        ];

        return (
            <div>
                <Dialog
                    title={`Book in stock: ${book.inStock}`}
                    actions={actions}
                    modal={false}
                    open={open}
                    onRequestClose={onReadMoreClose}>
                    <div className="media">
                        <img className="mr-3"
                             src={`https://bookey-st.herokuapp.com/mobile/image?filename=${book.logo}`}
                             alt="Generic placeholder image"
                             style={{
                                 width: "230px",
                                 height: "350px"
                             }}/>
                            <div className="media-body">
                                <h3>{book.title}</h3>
                                {book.description}
                            </div>
                    </div>
                </Dialog>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {selectedBook: book} = state.booksByFilter;

    return {
        book
    };
}

export default connect(mapStateToProps)(BookDetails)