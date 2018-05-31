import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Dropzone from 'react-dropzone'
import {
    axiosEditBook
} from '../actions'
import Category from './Category'
import {Loading} from './Loading'


export default class BookEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            changedCategory: {},
            author: '',
            pageNum: 0,
            price: 0,
            inStock: 0,
            bookTitle: '',
            bookDescription: '',
            showModal: false,
            files: []
        };

        this.handleChangeCategory = this.handleChangeCategory.bind(this);
        this.handlerOnImgClick = this.handlerOnImgClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    static  propTypes = {
        isFetching: PropTypes.bool.isRequired,
        categories: PropTypes.array.isRequired,
        onEditBook: PropTypes.func.isRequired,
        dispatch: PropTypes.func.isRequired,
        selectedBook: PropTypes.object.isRequired,
    };

    componentWillReceiveProps (nextProps) {
        if (nextProps.selectedBook !== this.props.selectedBook) {
            const { title, description, price, inStock, pageNum, author, category } = nextProps.selectedBook;
            this.setState({
                changedCategory: category,
                bookTitle: title,
                bookDescription: description ,
                price,
                inStock,
                pageNum,
                author
            });
        }
    }

    onDrop (acceptedFiles, ev) {
        this.setState({
            files: acceptedFiles,
        });
    }

    handleChangeCategory (creds) {
        this.setState({
            changedCategory: creds
        })
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handlerOnImgClick () {
        this.setState({
            files: []
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let bookImg = new FormData(this.formRef);
            bookImg.append('profileImage', this.state.files[0]);
        const { selectedBook } = this.props;
        const { author, pageNum, price, inStock, bookTitle, bookDescription, changedCategory } = this.state;
        const { _id } = selectedBook;
        const category = changedCategory._id;

        this.props.onEditBook({ _id, author, pageNum, price, inStock, title: bookTitle, description: bookDescription, category }, bookImg)
    }

    render () {
        const { selectedBook, categories, isFetching } = this.props;
        const { bookTitle, bookDescription, inStock, price, files, pageNum, author, changedCategory } = this.state;

        return (
            <div
                className="modal fade bd-example-modal-lg"
                id="editBookModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="editBookModal"
                aria-hidden="true"
                data-show={true}>
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
                                <div>
                                    { _.isEmpty(files) &&
                                        <Dropzone
                                            style={{marginTop: "17px"}}
                                            accept="image/png, image/jpeg, image/jpg"
                                            onDrop={this.onDrop}
                                            className="drop-zone"
                                            name="building_photo_1">
                                            <label style={{color: "#7b7b7b"}}>Click or Drop<br/> image</label>

                                        </Dropzone>
                                    }
                                </div>
                                <div>
                                    { !_.isEmpty(files) &&
                                        <img onClick={this.handlerOnImgClick} style={{width: "163px", height: "163px", borderRadius: "5px"}} src={files[0].preview}/>
                                    }
                                </div>
                                <div className="media-body">
                                    <form className="px-4 py-3">
                                        <div className="form-group" >
                                            <div className="input-group" style={{marginBottom: "9px"}}>
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="">Title</span>
                                                </div>
                                            <input

                                                type="text"
                                                name="bookTitle"
                                                className="form-control"
                                                placeholder="Type some title"
                                                value={bookTitle}
                                                onChange={this.handleChange}/>
                                            </div>
                                            <div className="input-group" style={{marginBottom: "9px"}}>
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="">In stock</span>
                                                </div>
                                                <input
                                                    type="text"
                                                    name="inStock"
                                                    className="form-control"
                                                    placeholder="Type some title"
                                                    value={inStock}
                                                    onChange={this.handleChange}/>
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="">Price</span>
                                                </div>
                                                <input
                                                    type="text"
                                                    name="price"
                                                    className="form-control"
                                                    placeholder="Type some title"
                                                    value={price}
                                                    onChange={this.handleChange}/>
                                            </div>
                                            <div className="input-group" style={{marginBottom: "9px"}}>
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="">Author</span>
                                                </div>
                                                <input
                                                    type="text"
                                                    name="author"
                                                    className="form-control"
                                                    placeholder="Type some title"
                                                    value={author}
                                                    onChange={this.handleChange}/>
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="">Pages</span>
                                                </div>
                                                <input
                                                    type="text"
                                                    name="pageNum"
                                                    className="form-control"
                                                    placeholder="Type some title"
                                                    value={pageNum}
                                                    onChange={this.handleChange}/>
                                            </div>
                                            <div className="btn-group">

                                                <button
                                                    type="button"
                                                    className="btn btn-secondary dropdown-toggle"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false">
                                                    {_.isEmpty(changedCategory) ? 'Select category' : changedCategory.title}
                                                </button>

                                                <div className="dropdown-menu">
                                                    {
                                                        categories.map((category, key) => (
                                                            <Category
                                                                name="changedCategory"
                                                                onCategoryClick={creds => this.handleChangeCategory(creds)}
                                                                key={key}
                                                                category={category}/>
                                                        ))
                                                    }


                                                </div>

                                            </div>
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
                            {isFetching && <Loading/>}
                            <button
                                type="submit"
                                disabled={isFetching}
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