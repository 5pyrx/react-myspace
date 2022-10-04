import React, { useState } from "react";

import style from './ContactForm.module.css';


const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    console.log(result.status);
  };

  
  return (
    <form onSubmit={handleSubmit} className={style.Form}>
      <div className={style.name}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div className={style.email}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div className={style.message}>
        <label htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>
      <button type="submit">{status}</button>
    </form>
  );
};

export default ContactForm;