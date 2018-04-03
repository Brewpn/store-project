import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
    searchBookByTitle
} from '../../actions'


export default class CategoryEdit extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: props.selectedCategory.title,
            description: props.selectedCategory.description
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.selectedCategory !== this.props.selectedCategory) {
            const { title, description } = nextProps.selectedCategory;
            this.setState({ title, description });
        }
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleClick(event) {
        event.preventDefault();
        const title = this.state.title;
        const description = this.state.description;
        const _id = this.props.selectedCategory._id;
        this.props.onCategoryAddClick({ title, description, _id })
    }

    render() {
        const { selectedCategory } = this.props;
        const { title, description } = this.state;

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
                                    <input
                                        type="text"
                                        ref="title"
                                        name="title"
                                        className="form-control"
                                        id="exampleDropdownFormEmail1"
                                        placeholder="Type some title"
                                        value={title}
                                        onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <label >Description</label>
                                    <textarea
                                        className="form-control"
                                        ref="description"
                                        name="description"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        value={description}
                                        onChange={this.handleChange}/>
                                </div>

                            </form>

                        </div>

                        <div className="modal-footer">
                            <button
                                type="submit"
                                data-dismiss="modal"
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

