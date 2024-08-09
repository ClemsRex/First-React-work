import React from 'react';
import { Link } from 'react-router-dom';
import P1 from '../assets/people/1.png'
import P2 from '../assets/people/2.png'
import P3 from '../assets/people/3.png'

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
            <img src= {P1} alt="" />
            <p>
              <span>John Doe</span>
              Senior Marketing Manager <br />
              Phone: +000 123 456 789 <br />
              <Link to="mailto:contact@example.com">Email: contact@example.com</Link>
            </p>
          </div>
          <div>
            <img src={P2} alt="" />
            <p>
              <span>William Smith</span>
              Senior Marketing Manager <br />
              Phone: +000 123 456 789 <br />
              <Link to="mailto:contact@example.com">Email: contact@example.com</Link>
            </p>
          </div>
          <div>
            <img src={P3} alt="" />
            <p>
              <span>Emma Stone</span>
              Senior Marketing Manager <br />
              Phone: +000 123 456 789 <br />
              <Link to="mailto:contact@example.com">Email: contact@example.com</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactFormCtn;
