import React from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withAuthorization } from '../Session';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const INITIAL_STATE = {
    name: '',
}

class ManageItemForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
        }
    }

    onSubmit = event => {
        const { name } = this.state;
 
        // if(this.props.firebase.checkItems(name)){
        //     console.log(name);
        //     return;
        // }

        console.log(this.props.firebase.searchChild('items/waffle', 'name', name));
        // if(this.props.firebase.searchChild(this.props.firebase.items(), 'name', name) === "true"){
        //     console.log("exists");
        // }


        // :::::::::::::::::::: This is functional  ::::::::::::::::::::::::::::::::::::
        // What i'm trying to achieve is a validation for duplicates in database
        

        // this.props.firebase.items().orderByChild('name').equalTo(name).on("value", snapshot => {
        //     if(snapshot.exists()) { return };
        //   });

        // this.props.firebase
        //     .doCreateItems(name)
        //     .then(() => {
        //         this.setState({ ...INITIAL_STATE });
        //         console.log("success");
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })

        event.preventDefault();
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const { name } = this.state;

        const isInvalid = name === '';

        return (
            <form onSubmit={this.onSubmit}>
                <TextField
                    fullWidth
                    name="name"
                    onChange={this.onChange}
                    value={name}
                    label="Name"
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={isInvalid}
                >Submit
            </Button>
            </form>
        )
    }

}

const condition = authUser => !!authUser;

const ManageItem = compose(
    withRouter,
    withAuthorization(condition)
)(ManageItemForm);

export default ManageItem;