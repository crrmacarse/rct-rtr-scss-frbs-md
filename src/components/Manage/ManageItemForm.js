import React from 'react';

import { withRouter } from 'react-router-dom';
import { withAuthorization } from '../Session';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
    name : '',
}


class ManageItemForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
        }
    }

    onSubmit = event => {
        const { name } = this.state;

        console.log(name);
    
        this.props.firebase
          .doCreateItems(name)
          .then(() => {
                this.setState({...INITIAL_STATE});
                console.log("success");
          })
          .catch(error => {
              console.log(error);
          })
        
        event.preventDefault();
    }

    onChange = event => {
        this.setState({[event.target.name] : event.target.value});
    }

    render(){
        const { name } = this.state;

        return(
            <form onSubmit = {this.onSubmit}>
            <TextField 
                fullWidth
                name = "name"
                onChange = {this.onChange}
                value = {name}
                label="Name"
            />
            <Button 
                type = "submit"
                variant = "contained"
                color = "primary"
                fullWidth
            >Submit 
            </Button>            
            </form>
        )
    }

}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(ManageItemForm);