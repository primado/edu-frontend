// validator
const validator = {
  isEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },
  isPassword: (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return passwordRegex.test(password);
  },
};

const fieldValidators = {
  firstName: (firstName = "") => {
    let hasErrors = false;
    let errors = [];
  
    if (!firstName) {
      hasErrors = true;
      errors.push("First name is required");
    } else {
      if (firstName.trim().length == 0) {
        hasErrors = true;
        errors.push("First name should not be empty");
      }
    }
  
    return { hasErrors, errors };
  },
  lastName: (lastName = "") => {
    let hasErrors = false;
    let errors = [];
  
    if (!lastName) {
      hasErrors = true;
      errors.push("Last name is required");
    } else {
      if (lastName.trim().length == 0) {
        hasErrors = true;
        errors.push("Last name should not be empty");
      }
    }
  
    return { hasErrors, errors };
  },
  email: (email = "") => {
    let hasErrors = false;
    let errors = [];
  
    if (!email) {
      hasErrors = true;
      errors.push("Email is required");
    } else {
      if (!validator.isEmail(email)) {
        hasErrors = true;
        errors.push("Email is invalid");
      }
    }
  
    return { hasErrors, errors };
  },
  phone: (phone = "") => {
    let hasErrors = false;
    let errors = [];
  
    if (!phone) {
      hasErrors = true;
      errors.push("Phone is required");
    } else {
      if (phone.trim().length == 0) {
        hasErrors = true;
        errors.push("Phone should not be empty");
      }
    }
  
    return { hasErrors, errors };
  },
  password: (password = "") => {
    let hasErrors = false;
    let errors = [];
  
    if (!password) {
      hasErrors = true;
      errors.push("Password is required");
    } else {
      if (!validator.isPassword(password)) {
        hasErrors = true;
        errors.push(
          "Password should be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number and one special character"
        );
      }
    }
  
    return { hasErrors, errors };
  },
  confirmPassword: (password = "", confirmPassword = "") => {
    let hasErrors = false;
    let errors = [];
  
    if (!confirmPassword) {
      hasErrors = true;
      errors.push("Confirm password is required");
    } else {
      if (password !== confirmPassword) {
        hasErrors = true;
        errors.push("Passwords do not match");
      }
    }
  
    return { hasErrors, errors };
  },
}

// function to validate login form data
const validateLoginForm = ({ email = "", password = "" }) => {
  const validationResult = {
    email: { hasErrors: false, errors: [] },
    password: { hasErrors: false, errors: [] },
  };

  // email validation
  const emailValidationResult = fieldValidators.email(email);
  validationResult.email = emailValidationResult;

  // password validation
  const passwordValidationResult = fieldValidators.password(password);
  validationResult.password = passwordValidationResult;

  return validationResult;
};

// function to validate signup form data
const validateSignupForm = ({
  firstName = "",
  lastName = "",
  email = "",
  phone = "",
  password = "",
  confirmPassword = "",
}) => {
  const validationResult = {
    firstName: { hasErrors: false, errors: [] },
    lastName: { hasErrors: false, errors: [] },
    email: { hasErrors: false, errors: [] },
    phone: { hasErrors: false, errors: [] },
    password: { hasErrors: false, errors: [] },
    confirmPassword: { hasErrors: false, errors: [] },
  };

  // first name validation
  const firstNameValidationResult = fieldValidators.firstName(firstName);
  validationResult.firstName = firstNameValidationResult;

  // last name validation
  const lastNameValidationResult = fieldValidators.lastName(lastName);
  validationResult.lastName = lastNameValidationResult;

  // email validation
  const emailValidationResult = fieldValidators.email(email);
  validationResult.email = emailValidationResult;

  // phone validation
  const phoneValidationResult = fieldValidators.phone(phone);
  validationResult.phone = phoneValidationResult;

  // password validation
  const passwordValidationResult = fieldValidators.password(password);
  validationResult.password = passwordValidationResult;

  // confirm password validation
  const confirmPasswordValidationResult = fieldValidators.confirmPassword(
    password,
    confirmPassword
  );
  validationResult.confirmPassword = confirmPasswordValidationResult;

  return validationResult;
};

// function to validate forgot password form data
const validateForgotPasswordForm = ({ email = "" }) => {
  const validationResult = {
    email: { hasErrors: false, errors: [] },
  };

  // email validation
  const emailValidationResult = fieldValidators.email(email);
  validationResult.email = emailValidationResult;

  return validationResult;
};

export {
  fieldValidators,
  validateLoginForm,
  validateSignupForm,
  validateForgotPasswordForm,
};
