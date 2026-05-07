import { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("Please fill out all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    console.log("Contact Form Data:", form);
    setError("");
    alert("Message submitted successfully!");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section className="contact-section" aria-labelledby="contact-title">
      <h2 id="contact-title">Contact Us</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        {error && <p className="error" role="alert">{error}</p>}

        <label htmlFor="name">Name</label>
        <input id="name" name="name" value={form.name} onChange={handleChange} />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" value={form.email} onChange={handleChange} />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" value={form.message} onChange={handleChange} />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default ContactForm;