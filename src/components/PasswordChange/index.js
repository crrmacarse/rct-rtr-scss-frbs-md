import React from 'react';

import { withFirebase } from '../Firebase';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class PasswordChangeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ...INITIAL_STATE,
            popupopen: true
        }
    }

    onSubmit = event => {
        this.setState({popupopen: true});
        const { passwordOne } = this.state;

        this.props.firebase
            .doPasswordUpdate(passwordOne)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
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
        this.setState({[event.target.name] : event.target.value});
    }

    render(){
        const { passwordOne, passwordTwo, error } = this.state;

        const isInvalid = passwordOne === '' ||  passwordOne !== passwordTwo;

        return(
            <form onSubmit = {this.onSubmit}>
                <input type="text" autoComplete="username" hidden/>
                <div className = "m-3">
                    <TextField 
                        type = "password"
                        name = "passwordOne"
                        label = "Password"
                        onChange = {this.onChange}
                        fullWidth
                        value = {this.state.passwordOne}
                        autoComplete = "new-password"
                    />
                </div>
                <div className = "m-3">
                    <TextField 
                        type = "password"
                        name = "passwordTwo"
                        label = "Confirm Password"
                        onChange = {this.onChange}
                        fullWidth
                        value = {this.state.passwordTwo}
                        autoComplete = "new-password"
                        helperText = "Confirm Password"
                    />
                </div>
                {error && 
                    <div 
                    className= {this.state.popupopen ? "alert alert-danger" : "d-none"}  
                    role = "alert"
                    >{error.message}
                    </div>
                }
                <div className = "m-3">
                    <Button 
                        type = "submit"
                        disabled = {isInvalid}
                        variant = "contained"
                        fullWidth
                        color = "primary"
                    >Change Password
                    </Button>
                </div>
            </form>
        )
    }
}

export default withFirebase(PasswordChangeForm);