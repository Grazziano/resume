import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleFormSubmit(event) {
    event.preventDefault();
    const values = {
      name,
      email,
      message,
    };
    console.log(values);
  }

  return (
    <section className="resume-section" id="contact">
      <div className="resume-section-content">
        <h2 className="mb-5">Contact Me</h2>

        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              onChange={({ target }) => setName(target.value)}
              value={name}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              onChange={({ target }) => setEmail(target.value)}
              value={email}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="3"
              onChange={({ target }) => setMessage(target.value)}
              value={message}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
