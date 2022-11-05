import React, { useState } from "react";
import { Form } from "react-router-dom";
import Validation from "./validation";
import Footer from "./footer";
import "./contact.css";
import { useEffect } from "react";

function Contact() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [errors, setError] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(Validation(values));
  };

  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      values.firstname !== "" &&
      values.lastname !== "" &&
      values.email !== "" &&
      values.message !== ""
    ) {
      alert(
        `     ${values.firstname} 
     ${values.lastname}
     ${values.email}
     ${values.message}`
      );
    }
  }, [errors]);
  return (
    <div className="container">
      <div className="container form">
        <h2 className="mb-4 mt-4 fs-2 fw-semibold">Contact Me</h2>
        <p className="mt-4">
          Hi there, contact me to ask about anything you have on your mind
        </p>
        <Form method="post" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12 col-lg-6 mt-4 ">
              <label htmlFor="firstName" className="form-label">
                First name{" "}
              </label>

              <input
                onChange={handleChange}
                type="text"
                id="first_name"
                name="firstname"
                className="form-control ps-2"
                placeholder="Enter your first name"
                value={values.firstname}
                required
              />
              {errors.firstname && (
                <p style={{ color: "red", fontSize: "13px" }}>
                  {errors.firstname}
                </p>
              )}
            </div>
            <div className="col-12 col-lg-6 mt-4">
              <label htmlFor="lastName" className="form-label">
                Last name{" "}
              </label>

              <input
                onChange={handleChange}
                type="text"
                id="last_name"
                name="lastname"
                className="form-control ps-2"
                placeholder="Enter your last name"
                value={values.lastname}
                required
              />
              {errors.lastname && (
                <p style={{ color: "red", fontSize: "13px" }}>
                  {errors.lastname}
                </p>
              )}
            </div>
          </div>
          <div className="col-12 mt-4">
            <label htmlFor="email" className="form-labe">
              Email{" "}
            </label>

            <input
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              className="form-control ps-2"
              placeholder="yourname@email.com"
              value={values.email}
              required
            />
            {errors.email && (
              <p style={{ color: "red", fontSize: "13px" }}>{errors.email}</p>
            )}
          </div>
          <div className="col-12 mt-4">
            <label htmlFor="textarea" className="form-label">
              Message{" "}
            </label>
            <textarea
              onChange={handleChange}
              name="message"
              id="message"
              className="form-control"
              cols="30"
              rows="10"
              placeholder="Send me a message and i'll reply you as soon as possible..."
              value={values.message}
              required
            ></textarea>
            {errors.message && (
              <p style={{ color: "red", fontSize: "13px" }}>{errors.message}</p>
            )}
          </div>
          <div className="col-12 mt-4">
            <label className="form-check-label">
              <input
                className="form-check-input me-2"
                type="checkbox"
                name="check"
                id="check"
                required
              />{" "}
              You agree to providing your data {"{name}"} to who may contact
              you.
            </label>
          </div>
          <div className="d-grid gap-2 mt-4">
            <button
              type="submit"
              id="btn__submit"
              className="btn bg-primary text-white p-2"
            >
              Send message
            </button>
          </div>
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
