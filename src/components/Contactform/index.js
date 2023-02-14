//formState is not setting correctly, email doesn't use formState.name .message to fill the email ??

import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import { Button, Container, Form } from "react-bootstrap";

const ContactForm = (props) => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage("your email is invalid");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState({
      name: { name },
      email: { email },
      message: { message },
    });
    console.log(formState);
    window.location = `mailto:gribbler25@gmail.com?subject=message from ${formState.name}&body=${formState.message}`;
  };

  return (
    <Container id="contact" className="contact">
      <h1>Contact Me</h1>
      <Form
        id="contact-form"
        className="bg-light mb-4 rounded-3"
        onSubmit={handleSubmit}
      >
        <div>
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>

        <div>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="enter email"
            onBlur={handleChange}
            defaultValue={email}
          />
        </div>

        <div>
          <Form.Label>Message:</Form.Label>
          <Form.Control
            type="text"
            name="message"
            placeholder="Your message here!"
            onBlur={handleChange}
            defaultValue={message}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <Button varient="primary" type="submit">
          Submit!
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
