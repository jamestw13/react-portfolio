import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('email address is invalid');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="w-75 mx-auto py-5">
      <h2>Contact</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Your name here"
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
          <div className="form-group col">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="your@email.here"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            className="form-control"
            rows="5"
            placeholder="Your message here"
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="alert alert-danger p-1 text-center mt-3">{errorMessage}</p>
          </div>
        )}
        <button type="submit" className="btn btn-warning form-control" data-testid="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
