import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";
import Button from '@material-ui/core/Button';
export class Profile extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;

    return (
      <div style={{ marginTop: "10rem" }} className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <div className="row center" >
              <div className="center">
              <h1>
              <b>{user.First_Name.split(" ")[0]}'s Profile</b>
              <p className="flow-text grey-text text-darken-1">
                You are logged into {" "}
                <span style={{ fontFamily: "monospace" }}>Fashow</span> app 👏
              </p>
            </h1>
              </div>
              <div className="landing-copy col s12" style={{ margin: 30}}>
              <center>
                <table>
                  <thead>
                    <td>
                      <tr><h3>{`• First Name: ${user.First_Name}`}</h3></tr>
                      <tr><h3>{`• Last Name: ${user.Last_Name}`}</h3></tr>
                      <tr><h3>{`• Email Address: ${user.Email_Address}`}</h3></tr>
                      <tr><h3>{`• Mobile Number: ${user.Mobile_Number}`}</h3></tr>
                      <tr><h3>{`• Home Address: ${user.Home_Address}`}</h3></tr>
                    </td>
                  </thead>
                </table>
              </center>
              <div className="center">
                <Button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "2rem"
                  }}
                  onClick={this.onLogoutClick}
                  variant="outlined"
                  color="secondary"
                  >
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

Profile.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {logoutUser}
)(Profile);