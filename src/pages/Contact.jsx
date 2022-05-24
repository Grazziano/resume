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
          <div class="mb-3">
            <label for="name" class="form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              onChange={({ target }) => setName(target.value)}
            />
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">
              Message
            </label>
            <textarea
              class="form-control"
              id="message"
              name="message"
              rows="3"
              onChange={({ target }) => setMessage(target.value)}
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
