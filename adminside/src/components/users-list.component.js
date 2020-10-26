import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const User = props => (
    <tr>
        <td className={props.user.completed ? 'completed' : ''}>{props.user.First_Name}</td>
        <td className={props.user.completed ? 'completed' : ''}>{props.user.Last_Name}</td>
        <td className={props.user.completed ? 'completed' : ''}>{props.user.Email_Address}</td>
        <td className={props.user.completed ? 'completed' : ''}>{props.user.Mobile_Number}</td>
        <td className={props.user.completed ? 'completed' : ''}>{props.user.Home_Address}</td>
        <td className={props.user.completed ? 'completed' : ''}>{props.user.Password}</td>
        <td>
            <button class="btn btn-outline-warning" ><Link to={"/edit/"+props.user._id}>Edit</Link></button>  <button class="btn btn-outline-danger" href="/" onClick={() => { props.deleteCustomer(props.user._id) }}>Delete</button>
        </td>
    </tr>
)

export default class UsersList extends Component{

    constructor(props){
        super(props);
        this.state = {users: []};

        this.deleteCustomer = this.deleteCustomer.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:4000/users/')
            .then(response => {
                this.setState({users: response.data});
            })
            .catch(function(error){
                console.log(error);
            })
    }

    componentDidUpdate(){
        axios.get('http://localhost:4000/users/')
            .then(response => {
                this.setState({users: response.data});
            })
            .catch(function(error){
                console.log(error);
            })
    }

    deleteCustomer(id){
        axios.delete('http://localhost:4000/users/'+id)
            .then(res => { console.log(res.data)});

        this.setState({
            users: this.state.users.filter(el => el._id !== id)
        })
        alert('Delete customer Successfully')
    }

    userList(){
        return this.state.users.map(currentUser => {
            return <User user={currentUser} deleteCustomer={this.deleteCustomer} key={currentUser.id}/>;
        })
    }

    
    render(){
        return(
            <div style={{marginTop: 20, marginLeft: 20, width: '98%'}}>
                <h3><center>List Of Customers</center></h3>
                <button class="btn btn-outline-dark text-decoration-none" style={{marginLeft: 30 }} ><Link to={"/create"}>Add a new customer</Link></button>  <button class="btn btn-outline-dark" style={{marginLeft: 30}} ><Link to={"/report"}>Generate Report</Link></button>
                <table className = "table table-striped" style={{marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email Address</th>
                            <th>Mobile Number</th>
                            <th>Home Address</th>
                            <th>Password</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.userList() }
                    </tbody>
                </table>
            </div>
        )
    }
}