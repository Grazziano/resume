import React from 'react';

export default function Contact() {
  return (
    <section className="resume-section" id="contact">
      <div className="resume-section-content">
        <h2 className="mb-5">Contact Me</h2>

        <form>
          <div class="mb-3">
            <label for="name" class="form-label">
              Name
            </label>
            <input type="text" class="form-control" id="name" />
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">
              Message
            </label>
            <textarea class="form-control" id="message" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
