import React from 'react';

import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';


import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
}

class SignUpform extends React.Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { username, email, passwordOne } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState({ error });
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
            <div className="row mx-auto">
                <div className="col-6 mx-auto">
                    <form onSubmit={this.onSubmit}>
                        <div className="m-4">
                            <TextField
                                name="username"
                                label="Username"
                                onChange={this.onChange}
                                id="idUsername"
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
                                fullWidth
                                value={passwordTwo}
                                helperText="Confirm Password"
                            />
                        </div>
                        {error && <p>{error.message}</p>}
                        <Button
                            disabled={isInvalid}
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                        >Sign up</Button>

                    </form>
                </div>
            </div>
        );
    }
}


const SignUpLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.SIGN_UP}> Sign Up</Link>
    </p>
);


export default SignUpform;

export { SignUpLink };