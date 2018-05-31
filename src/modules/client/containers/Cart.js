import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { DragSource } from 'react-dnd'
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {
    removeBookFromCart
} from '../actions'

class Cart extends Component {

    static propTypes = {
        books: PropTypes.array
    };

    constructor(props) {
        super(props);

        this.state = {
            books: [],
            open: false,
        };

        this.handleRemoveBook = this.handleRemoveBook.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
    }

    handleClose () {
        const {books} = this.props;
        window.localStorage.setItem('Cart', books);
        debugger;
    }

    componentDidMount () {
        const books = window.localStorage.getItem('Cart');
        this.setState({
            books: books
                ? books
                : this.props.books
        });
    }

    handleDrop (e) {
        e.preventDefault();
        let data = e.dataTransfer.getData("text");
        console.log(data);
    }

    handleDragOver (e) {
        e.preventDefault();
    }

    handleClick (event) {
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRemoveBook(event) {
        event.preventDefault();

        this.props.dispatch(removeBookFromCart());
        this.setState({
            open: false
        })
    };

    handleRequestClose () {
        this.setState({
            open: false,
        });
    };

    render () {
        const {books, open, anchorEl} = this.state;
        const menu = books.map(book =>
            <MenuItem key={book._id}
                      primaryText={book.title}/>
        );

        return (
            <div className="cart" onClose={this.handleClose}>
                <RaisedButton
                    onClick={this.handleClick}
                    label="Shopping cart"
                    onDrop={this.handleDrop}
                    onDragOver={this.handleDragOver}
                />
                { open &&
                    <Popover
                        open={true}
                        anchorEl={anchorEl}
                        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                        targetOrigin={{horizontal: 'left', vertical: 'top'}}
                        onRequestClose={this.handleRequestClose}
                    >
                        <Menu>
                            {menu}
                            <MenuItem primaryText="Remove"
                                      onClick={this.handleRemoveBook}/>
                            <MenuItem primaryText="Buy"/>
                        </Menu>
                    </Popover>
                }
            </div>
        )
    }
}

function mapStateToProps (state) {
    const {cart: {data}, } = state;

    return {
        books: data
    }
}
export default connect(mapStateToProps)(Cart)