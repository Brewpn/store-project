import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    loginUser,
    logoutUser
} from '../../actions'

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }


    handleSubmit(event) {
        // event.preventDefault();
        // const username = this.refs.username;
        // const password = this.refs.password;
        // const creds = { username: username.value.trim(), password: password.value.trim() };
        // this.props.dispatch(loginUser(creds))

        //event.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(loginUser({username, password}));
        }
    }

    render() {
        const { errorMessage, isFetching } = this.props;
        const { username, password, submitted } = this.state;

        return (

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form className="modal-body" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label style={{marginLeft: "2px"}}>Email address</label>
                                <input
                                    type='text'
                                    ref='username'
                                    name="username"
                                    className="form-control"
                                    placeholder='Username'
                                    value={username}
                                    onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label style={{marginLeft: "2px"}}>Password</label>
                                <input
                                    type='password'
                                    ref='password'
                                    name="password"
                                    className="form-control"
                                    placeholder='Password'
                                    value={password}
                                    onChange={this.handleChange}/>
                            </div>
                            {errorMessage &&
                            <p>{errorMessage}</p>
                            }
                            <button
                                type="submit"
                                className="btn btn-outline-dark"
                                disabled={isFetching}>
                                Login
                            </button>


                        </form>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

Login.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string
};