import React from 'react';

import { withAuthorization } from '../Session';

class ManageItemPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            items: [],
            loading: false,
        }
    }

    componentDidMount(){
        this.setState({loading: true});

        this.props.firebase.items().on('value', snapshot => {
            const listObject = snapshot.val();

            const userList = Object.keys(listObject).map(key => ({
                ...listObject[key],
                uid: key,
            }))

            this.setState({
                items: userList,
                loading: false,
            })
        });

    }

    componentWillUnMount(){
        this.props.firebase.users().off();
    }

    render(){
        const { items, loading } = this.state;

        return(
            <React.Fragment>
                {loading && <div>Loading</div>}
               <ItemList items = {items} />
            </React.Fragment>
        )
    }
}

const ItemList = ({ items }) => (
    <ul>
        {items.map(item => (
            <li key = {item.uid}>
                {item.name}
            </li>
        ))}
    </ul>
)


const condition = authUser => !!authUser;

export default withAuthorization(condition)(ManageItemPage);