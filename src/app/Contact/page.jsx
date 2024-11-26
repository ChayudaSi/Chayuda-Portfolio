import React from 'react'
import './contact.css'
import Swal from 'sweetalert2';

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

          <button type="submit" className = "flex items-center justify-center space-x-2 text-xl hover:scale-105 duration-300">Submit
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 0 16 16" fill="currentColor" class="size-6">
            <path d="M2.87 2.298a.75.75 0 0 0-.812 1.021L3.39 6.624a1 1 0 0 0 .928.626H8.25a.75.75 0 0 1 0 1.5H4.318a1 1 0 0 0-.927.626l-1.333 3.305a.75.75 0 0 0 .811 1.022 24.89 24.89 0 0 0 11.668-5.115.75.75 0 0 0 0-1.175A24.89 24.89 0 0 0 2.869 2.298Z" />
          </svg>
          </button>      
      </form>

    </section>

  )
}

export default Contact