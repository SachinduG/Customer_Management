const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.First_Name = !isEmpty(data.First_Name) ? data.First_Name : "";
  data.Last_Name = !isEmpty(data.Last_Name) ? data.Last_Name : "";
  data.Email_Address = !isEmpty(data.Email_Address) ? data.Email_Address : "";
  data.Mobile_Number = !isEmpty(data.Mobile_Number) ? data.Mobile_Number : "";
  data.Home_Address = !isEmpty(data.Home_Address) ? data.Home_Address : "";
  data.Password = !isEmpty(data.Password) ? data.Password : "";
  data.Password2 = !isEmpty(data.Password2) ? data.Password2 : "";

  // First Name checks
  if (Validator.isEmpty(data.First_Name)) {
    errors.First_Name = "First Name field is required";
  }

  // Last Name checks
  if (Validator.isEmpty(data.Last_Name)) {
    errors.Last_Name = "Last Name field is required";
  }

  // Email checks
  if (Validator.isEmpty(data.Email_Address)) {
    errors.Email_Address = "Email Address field is required";
  } else if (!Validator.isEmail(data.Email_Address)) {
    errors.Email_Address = "Email Address is invalid";
  }

  // Mobile Number checks
  if (Validator.isEmpty(data.Mobile_Number)) {
    errors.Mobile_Number = "Mobile Number field is required";
  }

  // Home Address checks
  if (Validator.isEmpty(data.Home_Address)) {
    errors.Home_Address = "Home Address field is required";
  }

  // Password checks
  if (Validator.isEmpty(data.Password)) {
    errors.Password = "Password field is required";
  }
  
  //confirm password checks
  if (Validator.isEmpty(data.Password2)) {
    errors.Password2 = "Confirm password field is required";
  }
  
  //mobile number length checks
  if(!Validator.isLength(data.Mobile_Number, { min: 10, max: 12 })){
    errors.Mobile_Number = ("Mobile Number must be at least 10 numbers");
  }

  //password length checks
  if (!Validator.isLength(data.Password, { min: 6, max: 30 })) {
    errors.Password = "Password must be at least 6 characters";
  }

  //check whether password equals to confirm password
  if (!Validator.equals(data.Password, data.Password2)) {
    errors.Password2 = "Passwords must match";
  }
  
  return {
    errors,
    isValid: isEmpty(errors)
  };
};