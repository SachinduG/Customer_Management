import React, {Component} from 'react';
import axios from 'axios';
import jsPDF from 'jspdf'; import 'jspdf-autotable';

export default class ReportList extends Component{

    constructor(props){
        super(props);
        this.state = {users: []};
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

    //Report generation part starting from here

   exportPDF = () => {

    const unit = "pt";
    const size = "A3"; // Use A1, A2, A3 or A4
    const orientation = "landscape"; // portrait or landscape
    const marginLeft = 40;
    const doc = new jsPDF( orientation, unit, size );

    const title = "Fashow Customer Report ";
    const headers = [["First Name","Last Name","Email Address","Mobile Number","Home Address", "Password"]];

    const users = this.state.users.map(

      users=>[
        users.First_Name,
        users.Last_Name,
        users.Email_Address,
        users.Mobile_Number,
        users.Home_Address,
        users.Password
        ]
    );

    let content = {
        startY: 50,
        head: headers,
        body: users
    };

    doc.setFontSize( 25 );
    doc.text( title, marginLeft, 40 );
    doc.autoTable( content );
    doc.save( "CustomerList.pdf" )

}
    
    render(){
        return(
            <div className="container" style={{marginTop: 20}}>
                <h5 style={{marginLeft: 10}}>Generate pdf file from here</h5>
                <button style = {{marginLeft: "10px"}} className = "btn btn-outline-dark" onClick={() => this.exportPDF()} >Download Customer Details</button>  
                <table className = "table table-striped" style={{marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email Address</th>
                            <th>Mobile Number</th>
                            <th>Home Address</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            this.state.users.map(
                            users=>
                                <tr key ={users.id}>
                                    <td>{users.First_Name}</td>
                                    <td>{users.Last_Name}</td>
                                    <td>{users.Email_Address}</td>
                                    <td>{users.Mobile_Number}</td>
                                    <td>{users.Home_Address}</td>
                                    <td>{users.Password}</td>
                                </tr>
                            ) 
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}