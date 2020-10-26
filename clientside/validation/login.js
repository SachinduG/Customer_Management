const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateLoginInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.Email_Address = !isEmpty(data.Email_Address) ? data.Email_Address : "";
  data.Password = !isEmpty(data.Password) ? data.Password : "";

  // Email checks
  if (Validator.isEmpty(data.Email_Address)) {
    errors.Email_Address = "Email Address field is required";
  } else if (!Validator.isEmail(data.Email_Address)) {
    errors.Email_Address = "Email Address is invalid";
  }

// Password checks
  if (Validator.isEmpty(data.Password)) {
    errors.Password = "Password field is required";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};