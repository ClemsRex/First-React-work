import React from 'react'

const MapCtn = () => {
  return (
    <>
      <div className="map">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1568644.7108765335!2d-76.81638298411553!3d39.834816241293645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25922ab1bdd11%3A0x9fdf35ea839a1226!2sNew%20York%20University%20NYU%20Main%20Campus!5e0!3m2!1sen!2sng!4v1722334394220!5m2!1sen!2sng"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="NYU Map"
      ></iframe>
    </div>
    </>
  )
}

export default MapCtn
