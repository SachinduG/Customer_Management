import React, {Component} from 'react';
import axios from 'axios';


export default class CreateUser extends Component{

    constructor(props) {
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmailAddress = this.onChangeEmailAddress.bind(this);
        this.onChangeMobileNumber = this.onChangeMobileNumber.bind(this);
        this.onChangeHomeAddress = this.onChangeHomeAddress.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            First_Name:'',
            Last_Name:'',
            Email_Address:'',
            Mobile_Number:'',
            Home_Address:'',
            Password:'',

            FirstNameError:'',
            LastNameError:'',
            EmailAddressError:'',
            MobileNumberError:'',
            HomeAddressError:'',
            PasswordError:''
        }
    }

    onChangeFirstName(e) {
        this.setState({
            First_Name: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            Last_Name: e.target.value
        });
    }

    onChangeEmailAddress(e) {
        this.setState({
            Email_Address: e.target.value
        });
    }

    onChangeMobileNumber(e){
        this.setState({
            Mobile_Number: e.target.value
        });
    }

    onChangeHomeAddress(e) {
        this.setState({
            Home_Address: e.target.value
        });
    }

    onChangePassword(e){
        this.setState({
            Password: e.target.value
        });
    }

    validate = () => {
        let isError = false;

        const errors = {
            FirstNameError:"",
            LastNameError:"",
            EmailAddressError:"",
            MobileNumberError:"",
            HomeAddressError:"",
            PasswordError:""
        };

        if(this.state.First_Name.length < 3){
            isError = true;
            errors.FirstNameError = "First Name must be at least 3 characters";
        }

        if(this.state.Last_Name.length < 3){
            isError = true;
            errors.LastNameError = "Last Name must be at least 3 characters";
        }

        if(this.state.Mobile_Number.length < 10){
            isError = true;
            errors.MobileNumberError = "Mobile Number must be at least 10 numbers";
        }

        if(this.state.Password.length < 6){
            isError = true;
            errors.PasswordError = "Password must be at least 6 characters";
        }

        if(this.state.Email_Address.indexOf("@") === -1){
            isError = true;
            errors.EmailAddressError = "Require Valid Email Address";
        }

        if ("Mobile_Number" !== "undefined") {
            var pattern = new RegExp(/^[0-9\b]+$/);
            if (!pattern.test(this.state.Mobile_Number)) {
              isError = true;
              errors.MobileNumberError = "Please enter only numbers.";
            }else if(this.state.Mobile_Number.length < 10){
              isError = true;
              errors.MobileNumberError = "Please enter valid phone number.";
            }
        }

        this.setState({
            ...this.state,
            ...errors
        });
      
        return isError;
    };

    onSubmit(e) {
        e.preventDefault();

        const err = this.validate();
        if(!err){

            console.log(`Form submitted:`);
            console.log(`First Name: ${this.state.First_Name}`);
            console.log(`Last Name: ${this.state.Last_Name}`);
            console.log(`Email Address: ${this.state.Email_Address}`);
            console.log(`Mobile Number: ${this.state.Mobile_Number}`);
            console.log(`Home Address: ${this.state.Home_Address}`);
            console.log(`Password: ${this.state.Password}`);

            const newUser = {
                First_Name: this.state.First_Name,
                Last_Name: this.state.Last_Name,
                Email_Address: this.state.Email_Address,
                Mobile_Number: this.state.Mobile_Number,
                Home_Address: this.state.Home_Address,
                Password: this.state.Password
            };

            axios.post('http://localhost:4000/users/add', newUser)
                .then(res => console.log(res.data));
                alert('Create customer Successfully')
            this.props.history.push('/');

            this.setState ({
                First_Name:'',
                Last_Name:'',
                Email_Address:'',
                Mobile_Number:'',
                Home_Address:'',
                Password:''
            })
        }
    }

    render(){
        return(
            <div style={{marginTop: 20}}>
                <h3><center>Add New Customer</center></h3>
                <div className="container">
                    <form onSubmit={this.onSubmit}>

                        <div className="form-group">
                            <label>First Name:</label>
                            <input type ="text"
                                className="form-control"
                                value={this.state.First_Name}
                                onChange={this.onChangeFirstName}
                                required
                                />
                        <span className="text-danger">{this.state.FirstNameError}</span>
                        </div>

                        <div className="form-group">
                            <label>Last Name:</label>
                            <input type ="text"
                                className="form-control"
                                value={this.state.Last_Name}
                                onChange={this.onChangeLastName}
                                required
                                />
                        <span className="text-danger">{this.state.LastNameError}</span>
                        </div>

                        <div className="form-group">
                            <label>Email Address:</label>
                            <input type ="email"
                                className="form-control"
                                value={this.state.Email_Address}
                                onChange={this.onChangeEmailAddress}
                                required
                                />
                        <span className="text-danger">{this.state.EmailAddressError}</span>        
                        </div>

                        <div className="form-group">
                            <label>Mobile Number:</label>
                            <input type ="number"
                                className="form-control"
                                value={this.state.Mobile_Number}
                                onChange={this.onChangeMobileNumber}
                                required
                                />
                        <span className="text-danger">{this.state.MobileNumberError}</span>        
                        </div>

                        <div className="form-group">
                            <label>Home Address:</label>
                            <input type ="text"
                                className="form-control"
                                value={this.state.Home_Address}
                                onChange={this.onChangeHomeAddress}
                                required
                                />
                        </div>

                        <div className="form-group">
                            <label>Password:</label>
                            <input type ="password"
                                className="form-control"
                                value={this.state.Password}
                                onChange={this.onChangePassword}
                                required
                                />
                        <span className="text-danger">{this.state.PasswordError}</span>
                        </div>

                        <div className="form-group" style={{marginLeft: 475, marginTop:30}}>
                            <input type="submit" value="Add Customer" className="btn btn-outline-success"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}