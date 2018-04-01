import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
    searchBookByTitle
} from '../../actions'


export default class CategoryEdit extends Component {

    handleClick(event) {
        event.preventDefault();
        const title = this.refs.title.value.trim();
        const description = this.refs.description.value.trim();
        let creds = {};
        creds = {
            ...this.props.selectedCategory
        };
        if (title !== "") creds.title = title;
        if (description !== "") creds.description = description;
        console.log(creds);
        this.props.onCategoryAddClick(creds)
    }

    render() {
        const { selectedCategory } = this.props;

        return (
            <div className="modal fade" id="editCategoryModal" tabIndex="-1" role="dialog" aria-labelledby="editCategoryModal" aria-hidden="true">
                <div className="modal-dialog" role="document" >
                    <div className="modal-content" >
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Category {selectedCategory.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <form className="px-4 py-3">
                                <div className="form-group">
                                    <label >Title</label>
                                    <input type="text" ref="title" className="form-control" id="exampleDropdownFormEmail1" placeholder="Type some title" />
                                </div>
                                <div className="form-group">
                                    <label >Description</label>
                                    <textarea className="form-control" ref="description" id="exampleFormControlTextarea1" rows="3" />
                                </div>
                                <h3>{selectedCategory.title}</h3>
                                <a>{selectedCategory.description}</a>

                            </form>

                        </div>

                        <div className="modal-footer">
                            <button
                                type="submit"
                                onClick={event => this.handleClick(event)}
                                className="btn btn-primary">
                                Edit Category
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

CategoryEdit.propTypes = {
    onCategoryAddClick: PropTypes.func.isRequired,
    selectedCategory: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
};

