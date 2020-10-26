import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      First_Name: "",
      Last_Name: "",
      Email_Address: "",
      Mobile_Number: "",
      Home_Address: "",
      Password: "",
      Password2: "",
      errors: {}
    };
  }

componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/login");
    }
  }

componentWillReceiveProps(nextProps) {
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

const newUser = {
  First_Name: this.state.First_Name,
  Last_Name: this.state.Last_Name,
  Email_Address: this.state.Email_Address,
  Mobile_Number: this.state.Mobile_Number,
  Home_Address: this.state.Home_Address,
  Password: this.state.Password,
  Password2: this.state.Password2
  };
  this.props.registerUser(newUser, this.props.history);
};

render() {
    const { errors } = this.state;
return (
  <div style={{ marginTop: "10rem", marginBottom: "4rem" }} className="container">
    <div className="row">
      <div className="col s8 offset-s2">
          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <h1>
              <b>Sign Up for Fashow</b>
            </h1>
            <p className="grey-text text-darken-1">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
          
          <form noValidate onSubmit={this.onSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  error
                  style={{marginTop:'2rem', width: '40%', marginLeft: '25rem'}}
                  label="First Name"
                  variant="filled"
                  onChange={this.onChange}
                  value={this.state.First_Name}
                  error={errors.First_Name}
                  id="First_Name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.First_Name
                  })}
                  helperText={errors.First_Name}
                />
              </Grid>
              <Grid item xs={6}>
              <TextField
                  error
                  style={{marginTop:'2rem', width: '40%', marginRight: '25rem'}}
                  label="Last Name"
                  variant="filled"
                  onChange={this.onChange}
                  value={this.state.Last_Name}
                  error={errors.Last_Name}
                  id="Last_Name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.Last_Name
                  })}
                  helperText={errors.Last_Name}
                />
              </Grid>
              <Grid item xs={6}>
              <TextField
                  error
                  style={{marginTop:'2rem', width: '40%', marginLeft: '25rem'}}
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
              </Grid>
              <Grid item xs={6}>
              <TextField
                  error
                  style={{marginTop:'2rem', width: '40%', marginRight: '25rem'}}
                  label="Mobile Number"
                  variant="filled"
                  onChange={this.onChange}
                  value={this.state.Mobile_Number}
                  error={errors.Mobile_Number}
                  id="Mobile_Number"
                  type="number"
                  className={classnames("", {
                    invalid: errors.Mobile_Number
                  })}
                  helperText={errors.Mobile_Number}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                  error
                  style={{marginTop:'2rem', width: '45%'}}
                  label="Home Address"
                  variant="filled"
                  onChange={this.onChange}
                  value={this.state.Home_Address}
                  error={errors.Home_Address}
                  id="Home_Address"
                  type="text"
                  className={classnames("", {
                    invalid: errors.Home_Address
                  })}
                  helperText={errors.Home_Address}
                />
              </Grid>
              <Grid item xs={6}>
              <TextField
                  style={{marginTop:'2rem', width: '40%', marginLeft: '25rem'}}
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
              </Grid>
              <Grid item xs={6}>
              <TextField
                  style={{marginTop:'2rem', width: '40%', marginRight: '25rem'}}
                  label="Confirm Password"
                  variant="filled"
                  onChange={this.onChange}
                  value={this.state.Password2}
                  error={errors.Password2}
                  id="Password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.Password2
                  })}
                  helperText={errors.Password2}
                />
            </Grid>
            <Grid item xs={12}>
              <Button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                type="submit"
                variant="outlined"
                color="primary"
              >
                Sign up
              </Button>
            </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </div>
  );
}
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));