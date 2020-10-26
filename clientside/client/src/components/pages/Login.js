import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      Email_Address: "",
      Password: "",
      errors: {}
    };
  }

componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      alert('Successfully Logged In')
      this.props.history.push("/profile"); 
    }else {
      alert('Email or Password is wrong')
    }
if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

onSubmit = e => {
    e.preventDefault();
const userData = {
      Email_Address: this.state.Email_Address,
      Password: this.state.Password
    };
this.props.loginUser(userData); 
  };

render() {
    const { errors } = this.state;
    
return (
      <div style={{ marginTop: "10rem", marginBottom: "4rem" }} className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <div className="col s12" style={{ marginTop:'8rem', paddingLeft: "11.250px" }}>
              <h1>
                <b>Sign In for Fashow</b>
              </h1>
              <p className="grey-text text-darken-1" style={{marginTop:'2rem'}}>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <TextField
                  error
                  style={{marginTop:'2rem', width: '25%'}}
                  label="Email Address"
                  variant="filled"
                  onChange={this.onChange}
                  value={this.state.Email_Address}
                  error={errors.Email_Address}
                  id="Email_Address"
                  type="email"
                  className={classnames("", {
                    invalid: errors.Email_Address 
                  })}
                  helperText={errors.Email_Address}
                />
                
              </div>
              <div className="input-field col s12">
                <TextField
                  style={{marginTop:'2rem', width: '25%'}}
                  label="Password"
                  variant="filled"
                  onChange={this.onChange}
                  value={this.state.Password}
                  error={errors.Password}
                  id="Password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.Password 
                  })}
                  helperText={errors.Password}
                />
                
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <Button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1.5em"
                  }}
                  variant="outlined"
                  color="primary"
                  type="submit"
                  
                >
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);