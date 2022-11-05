import React, { useState } from "react";
import { Form } from "react-router-dom";
import Footer from "./footer";
import "./contact.css";

function Contact() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [error, setErroe] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstname, lastname);
  };
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
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                id="first_name"
                className="form-control ps-2"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="col-12 col-lg-6 mt-4">
              <label htmlFor="lastName" className="form-label">
                Last name{" "}
              </label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                id="last_name"
                className="form-control ps-2"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>
          <div className="col-12 mt-4">
            <label htmlFor="email" className="form-labe">
              Email{" "}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control ps-2"
              placeholder="yourname@email.com"
              required
            />
          </div>
          <div className="col-12 mt-4">
            <label htmlFor="textarea" className="form-label">
              Message{" "}
            </label>
            <textarea
              name="message"
              id="message"
              className="form-control"
              cols="30"
              rows="10"
              placeholder="Send me a message and i'll reply you as soon as possible..."
              required
            ></textarea>
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
              onClick={alert("submitted")}
              type="submit button"
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
