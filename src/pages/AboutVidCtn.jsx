import React from 'react'
import MyVid from '../assets/about/1.mp4'

const AboutVidCtn = () => {
  return (
    <>
    <section id="about-app" class="section-p1"> 
        <h1>Download Our <a href="#">App</a></h1>
        <div class="video">
            <video autoplay muted loop src={MyVid}></video>
        </div>
    </section>
    </>
  )
}

export default AboutVidCtn
