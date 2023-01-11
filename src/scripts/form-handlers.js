import {
  fieldValidators,
  validateLoginForm,
  validateSignupForm,
  validateForgotPasswordForm,
} from "./form-validators.js";

function checkField (fieldName, form) {
  const field = form.querySelector(`#${fieldName}`);
  const fieldError = form.querySelector(`#${fieldName}-error`);
  const fieldValue = field.value;

  const fieldValidationResult = fieldValidators[fieldName](fieldValue);

  if (fieldValidationResult.hasErrors) {
    field.classList.add("is-invalid");
    fieldError.textContent = fieldValidationResult.errors[0];
  } else {
    field.classList.remove("is-invalid");
    fieldError.textContent = "";
  }
}

function handleLogin(event) {
  event.preventDefault();

  const loginFormElement = event.target;

  const formData = new FormData(loginFormElement);
  const data = Object.fromEntries(formData.entries());

  const validationResult = validateLoginForm(data);

  if (validationResult.email.hasErrors) {
    const emailInput = loginFormElement.querySelector("#email");
    emailInput.classList.add("is-invalid");
    const emailError = loginFormElement.querySelector("#email-error");
    emailError.textContent = validationResult.email.errors[0];
  }

  if (validationResult.password.hasErrors) {
    const passwordInput = loginFormElement.querySelector("#password");
    passwordInput.classList.add("is-invalid");
    const passwordError = loginFormElement.querySelector("#password-error");
    passwordError.textContent = validationResult.password.errors[0];
  }

  if (validationResult.email.hasErrors || validationResult.password.hasErrors) {
    return;
  }
}

function handleSignup(event) {
  event.preventDefault();

  const signupFormElement = event.target;

  const formData = new FormData(signupFormElement);
  const data = Object.fromEntries(formData.entries());

  const validationResult = validateSignupForm(data);

  if (validationResult.firstName.hasErrors) {
    const firstNameInput = signupFormElement.querySelector("#firstName");
    firstNameInput.classList.add("is-invalid");
    const firstNameError = signupFormElement.querySelector("#firstName-error");
    firstNameError.textContent = validationResult.firstName.errors[0];
  }

  if (validationResult.lastName.hasErrors) {
    const lastNameInput = signupFormElement.querySelector("#lastName");
    lastNameInput.classList.add("is-invalid");
    const lastNameError = signupFormElement.querySelector("#lastName-error");
    lastNameError.textContent = validationResult.lastName.errors[0];
  }

  if (validationResult.email.hasErrors) {
    const emailInput = signupFormElement.querySelector("#email");
    emailInput.classList.add("is-invalid");
    const emailError = signupFormElement.querySelector("#email-error");
    emailError.textContent = validationResult.email.errors[0];
  }

  if (validationResult.phone.hasErrors) {
    const phoneInput = signupFormElement.querySelector("#phone");
    phoneInput.classList.add("is-invalid");
    const phoneError = signupFormElement.querySelector("#phone-error");
    phoneError.textContent = validationResult.phone.errors[0];
  }

  if (validationResult.password.hasErrors) {
    const passwordInput = signupFormElement.querySelector("#password");
    passwordInput.classList.add("is-invalid");
    const passwordError = signupFormElement.querySelector("#password-error");
    passwordError.textContent = validationResult.password.errors[0];
  }

  if (validationResult.confirmPassword.hasErrors) {
    const confirmPasswordInput = signupFormElement.querySelector(
      "#confirmPassword"
    );
    confirmPasswordInput.classList.add("is-invalid");
    const confirmPasswordError = signupFormElement.querySelector(
      "#confirmPassword-error"
    );
    confirmPasswordError.textContent = validationResult.confirmPassword.errors[0];
  }

  if (
    validationResult.firstName.hasErrors ||
    validationResult.lastName.hasErrors ||
    validationResult.email.hasErrors ||
    validationResult.phone.hasErrors ||
    validationResult.password.hasErrors ||
    validationResult.confirmPassword.hasErrors
  )
    return;
}

function handleForgotPassword(event) {
  event.preventDefault();

  const forgotPasswordFormElement = event.target;

  const formData = new FormData(forgotPasswordFormElement);

  const data = Object.fromEntries(formData.entries());

  const validationResult = validateForgotPasswordForm(data);

  if (validationResult.email.hasErrors) {
    const emailInput = forgotPasswordFormElement.querySelector("#email");
    emailInput.classList.add("is-invalid");
    const emailError = forgotPasswordFormElement.querySelector("#email-error");
    emailError.textContent = validationResult.email.errors[0];
  }

  if (validationResult.email.hasErrors) return;
}

export { checkField, handleLogin, handleSignup, handleForgotPassword };
