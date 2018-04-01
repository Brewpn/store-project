import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    getCategories
} from '../actions'
import Categories from '../components/BooksComponents/Categories'
import BookSearch from '../components/BooksComponents/BookSearch'


class Dashboard extends Component {
    constructor(props) {
        super(props);


    }

    componentWillMount () {
        this.props.dispatch(getCategories());
    }

    render () {
        const { categories, selectedCategory, dispatch, page, errorMessage } = this.props;

        return (
            <div className="container">
                <div className="content-block">

                    <div className="col">
                        <div>
                            <Categories
                                errorMessage={errorMessage}
                                page={page}
                                dispatch={dispatch}
                                selectedCategory={selectedCategory}
                                categories={categories}/>
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <BookSearch
                                dispatch={dispatch}/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

Dashboard.propTypes = {
    page: PropTypes.number.isRequired,
    categories: PropTypes.array.isRequired,
    selectedCategory: PropTypes.object,
    errorMessage: PropTypes.string,
    dispatch: PropTypes.func.isRequired,
};

function mapStateToProps (state) {
    const {
        data: categories,
        page,
        selectedCategory,
        errorMessage
    } = state.categories;

    return {
        errorMessage,
        page,
        selectedCategory,
        categories
    }
}

export default connect(mapStateToProps)(Dashboard)