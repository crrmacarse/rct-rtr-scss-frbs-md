import React from 'react';
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';

import { withRouter } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
}

class SignUpFormBase extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            ...INITIAL_STATE,
            popupopen : true
         };
    }

    onSubmit = event => {
        const { username, email, passwordOne } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                return this.props.firebase
                  .user(authUser.user.uid)
                  .set({
                    username,
                    email,
                  });
              })
            .then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
                setTimeout(function(){
                    this.setState({popupopen: false});
                }.bind(this), 3000)
            });

        event.preventDefault();
    };


    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };


    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;


        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <form onSubmit={this.onSubmit}>
                <div className="m-4">
                    <TextField
                        name="username"
                        label="Username"
                        onChange={this.onChange}
                        id="idUsername"
                        autoComplete="username"
                        fullWidth
                        value={username}
                    />
                </div>
                <div className="m-4">
                    <TextField
                        name="email"
                        label="Email"
                        onChange={this.onChange}
                        id="idEmail"
                        fullWidth
                        value={email}
                        helperText="Lorem Ipsum Dolor"
                    />
                </div>
                <div className="m-4">
                    <TextField
                        name="passwordOne"
                        label="Password"
                        type="password"
                        onChange={this.onChange}
                        id="idPassword1"
                        autoComplete="new-password"
                        fullWidth
                        value={passwordOne}
                    />
                </div>
                <div className="m-4">
                    <TextField
                        name="passwordTwo"
                        label="Confirm Password"
                        type="password"
                        onChange={this.onChange}
                        id="idPassword2"
                        autoComplete="new-password"
                        fullWidth
                        value={passwordTwo}
                        helperText="Confirm Password"
                    />
                </div>

                {error &&
                    <div 
                    className= {this.state.popupopen ? "alert alert-danger" : "d-none"} 
                    role="alert"
                    >{error.message}
                    </div>
                }

                <Button
                    disabled={isInvalid}
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                >Sign up</Button>

            </form>
        );
    }
}

const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);

export default SignUpForm;
