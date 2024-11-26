"use client";

import React from 'react'
import './contact.css'
import Swal from 'sweetalert2';
import ContactActions from '@/components/ContactActions';


function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "831c1671-d557-40e2-9a57-54ca6d408f9d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Your message sent successfully!",
        icon: "success"
      });
      event.target.reset();
    } else {
      Swal.fire({
        title: "Fail!",
        text: "Your message can't send! ",
        icon: "error"
      });
      setResult(data.message);
    }
  };

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
