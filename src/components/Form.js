import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./FormStyles.css";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_ID", "template_ID", formData, "API_KEY")
      .then(() => {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        alert("Message sent successfully! ✅");
      })
      .catch((error) => {
        alert("Error sending message: " + error.text);
      });
  };

  return (
    <div className="form">
      {submitted ? (
        <p className="success-message">Message sent successfully! We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Subject</label>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />

          <label>Message</label>
          <textarea name="message" rows="6" placeholder="Type Your Message Here" value={formData.message} onChange={handleChange} required />

          <button type="submit" className="btn">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Form;
