import React from 'react';

import { withAuthorization } from '../Session';

class ManageItemPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            items: [],
        }
    }

    componentDidMount(){

        this.props.firebase.items().on('value', snapshot => {
            const listObject = snapshot.val();

            const userList = Object.keys(listObject).map(key => ({
                ...listObject[key],
                uid: key,
            }))

            this.setState({
                items: userList,
            })
        });

    }

    componentWillUnMount(){
        this.props.firebase.users().off();
    }

    render(){
        const { items } = this.state;

        return(
            <React.Fragment>
                {items.map(item => (
                    <li key = {item.uid}>
                        {item.name} {item.uid}
                    </li>
                ))}
            </React.Fragment>
        )
    }
}


const condition = authUser => !!authUser;

export default withAuthorization(condition)(ManageItemPage);