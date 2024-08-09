import React from 'react';
import { Link } from 'react-router-dom';

const ContactFormCtn = () => {
  return (
    <>
      <section id="form-details">
        <form action="">
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
          <button className="normal">Submit</button>
        </form>

        <div className="people">
          <div>
            <img src="img/people/1.png" alt="" />
            <p>
              <span>John Doe</span>
              Senior Marketing Manager <br />
              Phone: +000 123 456 789 <br />
              <a href="mailto:contact@example.com">Email: contact@example.com</a>
            </p>
          </div>
          <div>
            <img src="img/people/2.png" alt="" />
            <p>
              <span>William Smith</span>
              Senior Marketing Manager <br />
              Phone: +000 123 456 789 <br />
              <a href="mailto:contact@example.com">Email: contact@example.com</a>
            </p>
          </div>
          <div>
            <img src="img/people/3.png" alt="" />
            <p>
              <span>Emma Stone</span>
              Senior Marketing Manager <br />
              Phone: +000 123 456 789 <br />
              <a href="mailto:contact@example.com">Email: contact@example.com</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactFormCtn;
