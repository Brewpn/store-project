import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Login extends Component {

    render() {
        const { errorMessage, isFetching } = this.props;

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
                        <div className="modal-body">
                            <div className="form-group">
                                <label style={{marginLeft: "2px"}}>Email address</label>
                                <input type='text' ref='username' className="form-control" placeholder='Username'/>
                            </div>
                            <div className="form-group">
                                <label style={{marginLeft: "2px"}}>Password</label>
                                <input type='password' ref='password' className="form-control" placeholder='Password'/>
                            </div>
                            {errorMessage &&
                            <p>{errorMessage}</p>
                            }
                            <button
                                onClick={(event) => this.handleClick(event)}
                                type="button"
                                className={isFetching? "btn btn-outline-dark disabled" : "btn btn-outline-dark"}>
                                Login
                            </button>


                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    handleClick(event) {
        event.preventDefault();
        const username = this.refs.username;
        const password = this.refs.password;
        const creds = { username: username.value.trim(), password: password.value.trim() };
        this.props.onLoginClick(creds)
    }
}

Login.propTypes = {
    onLoginClick: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string
};