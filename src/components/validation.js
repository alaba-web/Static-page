const Validation = (values) => {
  let errors = {};
  if (!values.firstname && typeof values.firstname === "number") {
    errors.firstname = "Input the right text";
  } else if (values.firstname.length < 5) {
    errors.firstname = "Name must be more than 5 letters";
  }

  if (!values.lastname && typeof values.lastname === "number") {
    errors.lastname = "Input the right text";
  } else if (values.lastname.length < 5) {
    errors.lastname = "Name must be more than 5 letters";
  }

  if (!values.email) {
    errors.email = "Input the right text";
  } else if (values.email.length < 7) {
    errors.email = "Email must be more than 7 char";
  }

  if (!values.message) {
    errors.message = "Input some text";
  } else if (values.message.length < 20) {
    errors.message = "Email must be more than 20 char";
  }

  return errors;
};

export default Validation;
