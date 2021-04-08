import React from 'react';
import UserService from '../services/UserService';
// displays list of users on the page
class UserComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(id){
        UserService.deleteUser(id).then( res => {
            this.setState({users: this.state.users.filter(user => user.Id !== id)});
        });
    }

    viewUser(id){
        this.props.history.push(`/view-user/${id}`);
    }

    editUser(id){
        this.props.history.push(`/add-user/${id}`);
    }

    // provides list of users
    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data})
        });
    }

    addUser(){
        this.props.history.push('/add-user/_add');
    }

    // returns jsx
    render(){
        return (
            <div>
                <h1 className = "text-center">User List</h1>
                <div className = "row">
                    <button className="ntm ntm-primary" onClick={this.addUser}>Add User</button>
                </div>
                <br></br>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>User First Name</th>
                            <th>User Last Name</th>
                            <th>User Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                <tr key = {user.Id}>
                                    <td>{user.Id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button onClick={ () => this.editUser(user.id)} className="btn btn-info">Update</button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(user.id)} className="btn btn-danger">Delete</button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewUser(user.id)} className="btn btn-info">View</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserComponent