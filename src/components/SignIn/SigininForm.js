import React from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends React.Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (

            <form onSubmit={this.onSubmit}>
                <div className="m-3">
                    <TextField
                        name="email"
                        label="Email"
                        type="email"
                        value={email}
                        onChange={this.onChange}
                        autoComplete="email"
                        required
                        fullWidth
                        id="idEmail"
                    />
                </div>
                <div className="m-3">
                    <TextField
                        name="password"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={this.onChange}
                        autoComplete="current-password"
                        required
                        fullWidth
                        id="idPassword"
                    />
                </div>
                {error &&
                    <div className="alert alert-danger" role="alert">
                        {error.message}
                    </div>
                }
                <Button
                    type="submit"
                    disabled={isInvalid}
                    fullWidth
                    variant="contained"
                    color="primary"
                >Sigin in
                </Button>

            </form>
        )
    }
}

const SiginForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);


export default SiginForm;