import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, withRouter } from 'react-router';
import {connect} from 'react-redux'
import Books from './Books'


class MainContainer extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    render () {
        const { match: {url}} = this.props;
        return (
            <div>
                <Switch>
                    <Route exact path={`${url}/`} component={Books}/>
                </Switch>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

export default withRouter(connect(mapStateToProps)(MainContainer))