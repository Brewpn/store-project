import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CategoryAdd extends Component {
    constructor() {
        super();


    }

    handleClick(event) {
        event.preventDefault();
        const title = this.refs.title;
        const description = this.refs.description;
        const creds = { title: title.value.trim(), description: description.value.trim() };
        this.props.onCategoryAddClick(creds)
    }

    render () {
        const { errorMessage } = this.props;

        return (
            <div className="btn-group mr-2 " role="group" aria-label="First group" >
                <button type="button" className="butt-font-color" data-toggle="modal" data-target="#addCategoryModal" style={{zIndex: 1}}>
                    +
                </button>
                <div className="modal fade" id="addCategoryModal" tabIndex="-1" role="dialog" aria-labelledby="addCategoryModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document" >
                        <div className="modal-content" >
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add Category</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form className="px-4 py-3">
                                    <div className="form-group">
                                        <label >Title</label>
                                        <input type="text" ref="title" className="form-control" id="exampleDropdownFormEmail1" />
                                    </div>
                                    <div className="form-group">
                                        <label >Description</label>
                                        <textarea className="form-control" ref="description" id="exampleFormControlTextarea1" rows="3" />
                                    </div>

                                </form>
                            </div>
                            <label>{errorMessage}</label>
                            <div className="modal-footer">
                                <button
                                    onClick={event => this.handleClick(event)}
                                    type="button"
                                    className="btn btn-primary">
                                    Add Category
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

CategoryAdd.propTypes = {
    errorMessage: PropTypes.string,
    onCategoryAddClick: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
};