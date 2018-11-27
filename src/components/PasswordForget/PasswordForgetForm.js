import React from 'react';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const INITIAL_STATE = {
    email: '',
    error: null,
}

class PasswordForgetBase extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ...INITIAL_STATE
        };
    }

    onSubmit = event => {
        const { email } = this.state;

        this.props.firebase
            .doPasswordReset(email)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const { email, error } = this.state;

        const isInvalid = email === '';

        return (
            <form onSubmit={this.onSubmit}>
                <div className="m-3">
                    <TextField
                        name="email"
                        type="email"
                        label="Email"
                        onChange={this.onChange}
                        value={this.state.email}
                        autoComplete="email"
                        fullWidth
                    />
                </div>
                {error &&
                    <div className="alert alert-danger" role="alert">
                        {error.message}
                    </div>
                }
                <div className="m-3">
                    <Button
                        type="submit"
                        disabled={isInvalid}
                        fullWidth
                        color="primary"
                        variant="contained"
                    >Submit
                    </Button>
                </div>
            </form>
        )
    }
}

const PasswordForget = compose(
    withFirebase,
)(PasswordForgetBase);

export default PasswordForget;
