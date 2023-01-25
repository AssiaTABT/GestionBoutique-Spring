
import React, { Component } from 'react';
import UserService from '../Services/UserService';

class ListUsersComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {

            Users: []
        }
      
        this.Adduser = this.Adduser.bind(this);
        this.EditeUser = this.EditeUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.ViewUser = this.ViewUser.bind(this);
    }

    componentDidMount() {
        UserService.getUser().then((res) => {

            this.setState({ Users: res.data });
        });
    }

    EditeUser(id){
        this.props.history.push(`/UpdateUser/${id}`);
    }
    Adduser(){
        this.props.history.push("/Add-User");   
    }

    ViewUser(id){
        this.props.history.push(`/ViewUser/${id}`);
    }
    deleteUser(id){
        UserService.DeleteUser(id).then((res) => {
            this.setState({
                users: this.users.filter(user => user.id !== id)
            });
        });
    }

    render() {
        return (
                <div >
                    <div className="table-wrapper body1">
                        <div className="table-title">
                            <div className="row">
                                <div className='col-xs-5'>
                                    <h2>Users <b>Management</b></h2>
                                </div>

                                <div className='col-6'>
                                   <button onClick={this.Adduser} className="btn btn-primary"><i className="material-icons">search</i> <span>Search user here...</span>
                                   </button>
                                </div>

                                <div className='col-6'>
                                   <button onClick={this.Adduser} className="btn btn-primary"><i className="material-icons">&#xE147;</i> <span>Add New User</span>
                                   </button>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead >
                                <tr>
                                    <th>Identifiant</th>
                                    <th>Nom</th>
                                    <th>Prénom</th>
                                    <th>Date de naissance</th>
                                    <th>Adresse</th>
                                    <th>E-mail</th>
                                    <th>Numéro de téléphone</th>
                                    <th> Actions </th>
                                </tr>
                            </thead>
                            <tbody >
                                {
                                    this.state.Users.map(
                                        user =>
                                            <tr key={user.id}>
                                                <td> {user.id} </td>
                                                <td> {user.LastName} </td>
                                                <td> {user.FirstName} </td>
                                                <td>{new Date(user.birthDate).toLocaleDateString()} </td>
                                                <td> {user.adress} </td>
                                                <td> {user.mail} </td>
                                                <td> {user.Tel} </td>
                                                <td>
                                                    <a   onClick={() => this.EditeUser(user.id)} className="settings" title="Settings" data-toggle="tooltip"><i className="material-icons">&#xE8B8;</i></a>
                                                    <a onClick={() => this.deleteUser(user.id)}className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">delete</i></a>
                                                   {/* <a onClick={() => this.ViewUser(user.id)}className="View" title="View" data-toggle="tooltip"><i className="material-icons">info_outline</i></a>*/}
                                                </td>
                                            </tr>

                                    )
                                }
                            </tbody>
                        </table>

                    </div>
                </div>

        );
    }
}



export default ListUsersComponent;