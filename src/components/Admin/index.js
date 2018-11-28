import React from 'react';

import { withAuthorization } from '../Session';

class Admin extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          loading: false,
          users: [],
        };
      }
    
      componentDidMount() {
        this.setState({ loading: true });
    
        this.props.firebase.users().on('value', snapshot => {
          const usersObject = snapshot.val();
    
          const usersList = Object.keys(usersObject).map(key => ({
            ...usersObject[key],
            uid: key,
          }));
    
          this.setState({
            users: usersList,
            loading: false,
          });
        });
      }

    componentWillUnmount() {
        this.props.firebase.users().off();
    }

    render() {
        const { users, loading } = this.state;

        return (
            <div className="row">
                <div className="col-12">
                    <p className = "h1 text-center">User List</p>
                </div>
                <div className="col-12">
                    {loading && <div>Loading...</div>}

                    <UserList users={users} />
                </div>
            </div>
        )
    }
}

const UserList = ({ users }) => (
    <ul>
        {users.map(user => (
            <li key={user.uid} className = "mb-3">
                <span>
                    <strong>ID:</strong> {user.uid} <br />
                </span>
                <span>
                    <strong>E-mai:</strong> {user.email} <br />
                </span>
                <span>
                    <strong>Username</strong> {user.username} <br />
                </span>
            </li>
        ))}
    </ul>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Admin);