"use client";

import React from 'react'
import './contact.css'
import Swal from 'sweetalert2';
import ContactActions from '@/components/ContactActions';


function Contact() {

  return (
    <section className = "contact"  id="contact">
      <form onSubmit={onSubmit}>
      <div className = "flex">
        <h2>Leave your{" "}
          <span className="text-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
            Message!
          </span>
        </h2>
      </div>

        <div class = "input-box">
          <label>Name</label>
          <input type= "text" className = "field" placeholder = "Enter your name" name="name" required/>
        </div>
        <div class = "input-box">
          <label>Email</label>
          <input type= "text" className = "field" placeholder = "Enter your email"  name="email" required/>
        </div>
        <div class = "input-box">
          <label>Message</label>
          <textarea  className = "field" id="message" placeholder = "Enter your message" name="message" required/>
        </div>
        <ContactActions/>
 
      </form>

    </section>

  )
}

export default Contact
