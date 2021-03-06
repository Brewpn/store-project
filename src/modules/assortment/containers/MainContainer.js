import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, withRouter } from 'react-router';
import {connect} from 'react-redux'
import AssortmentContainer from './AssortmentContainer'
import AdminMainTheme from '../../header/cms/containers/Navbar'

class MainContainer extends Component {

    static propTypes = {
        match: PropTypes.object,
        dispatch: PropTypes.func.isRequired
    };

    render () {
        const { match: {url}} = this.props;
        return (
            <div>
                <AdminMainTheme/>
                <Switch>
                    <Route exact path={`${url}/Assortment`} component={AssortmentContainer}/>
                </Switch>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

export default withRouter(connect(mapStateToProps)(MainContainer))