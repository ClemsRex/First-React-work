import React from 'react'
import MapCtn from './MapCtn'

const ContactMapCtn = () => {
  return (
    <>
    <section id="contact-details" className="section-p1">
        <div class="details">
            <span>GET IN TOUCH</span>

            <h2>Visit one of our agency locations or contact us today</h2>

            <h3>Head Office </h3>
            <div>
                <li>
                    {/* <i class="fas fa-map"></i> */}
                    <p>56 Glssford Street Glasgow 61 1UL New York</p>
                </li>

                <li>
                    {/* <i class="fas fa-envelope"></i> */}
                    <p>Contact@example.com</p>
                </li>

                <li>
                    {/* <i class="fas fa-phone-alt"></i> */}
                    <p>+(123)000456789</p>
                </li>

                <li>
                    {/* <i class="fas fa-clock"></i> */}
                    <p>Monday to Saturday 9am to 4pm</p>
                </li>
            </div>
        </div>

        <MapCtn/>

    </section>
    

    </>
  )
}

export default ContactMapCtn
