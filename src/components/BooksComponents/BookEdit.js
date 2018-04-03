import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Dropzone from 'react-dropzone'
import {
    axiosEditBook
} from '../../actions'


export default class BookEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bookTitle: props.selectedBook.title,
            bookDescription: props.selectedBook.description,
            files: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    static  propTypes = {
        dispatch: PropTypes.func.isRequired,
        selectedBook: PropTypes.object.isRequired,
    };

    onDrop (acceptedFiles) {
        this.setState({
            files: acceptedFiles,
        });
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        let formData = new FormData(this.formRef);
        this.state.files.forEach(file => {
            formData.append('myFiles', file);
        });
        const { dispatch, selectedBook } = this.props;

        dispatch(axiosEditBook(selectedBook, formData))
    }

    render () {
        const { selectedBook } = this.props;
        const { bookTitle, bookDescription } = this.state;

        return (
            <div className="modal fade bd-example-modal-lg" id="editBookModal" tabIndex="-1" role="dialog" aria-labelledby="editBookModal" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document" >
                    <div className="modal-content" >
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit {selectedBook.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <div className="media">
                                <Dropzone
                                    accept="image/png, image/jpeg, image/jpg"
                                    onDrop={this.onDrop}
                                    className="drop-zone"
                                    name="building_photo_1">
                                    <label>Click or Drop<br/> image</label>
                                </Dropzone>
                                <div className="media-body">
                                    <form className="px-4 py-3">
                                        <div className="form-group">
                                            <label >Title</label>
                                            <input
                                                type="text"
                                                name="bookTitle"
                                                className="form-control"
                                                placeholder="Type some title"
                                                value={bookTitle ? bookTitle : selectedBook.title}
                                                onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label >Description</label>
                                            <textarea
                                                className="form-control"
                                                name="bookDescription"
                                                rows="3"
                                                value={bookDescription}
                                                onChange={this.handleChange}/>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button
                                type="submit"
                                //data-dismiss="modal"
                                onClick={this.handleSubmit}
                                className="btn btn-primary">
                                Edit Book
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}