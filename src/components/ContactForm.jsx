import React, { useState } from 'react';

const ContactForm = () => {
  // 1. Setup State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // 2. Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value // Updates only the field being typed in
    });
  };

  // 3. Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you for your message, ' + formData.name + '!');
    
    // Clear form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="form-container" style={{ padding: '20px', maxWidth: '500px' }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name">Name:</label><br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email">Email:</label><br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="message">Message:</label><br />
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          ></textarea>
        </div>

        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;