'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './ContactForm.module.css';


// Dynamically load the MapComponent
const MapComponent = dynamic(() => import('./MapComponent'), { ssr: false });

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    situation: '',
    message: '',
    newsletter: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className={styles.backsideSection}>
      <div className={styles.formMapContainer}>
        <div className={styles.formSection}>
          <h2 className={styles.title}>Get Help Now!</h2>
          {submitted && <p className={styles.successMessage}>Form submitted successfully!</p>}
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <input
                name="firstName"
                placeholder="First Name"
                className={styles.input}
                onChange={handleChange}
              />
              <input
                name="lastName"
                placeholder="Last Name"
                className={styles.input}
                onChange={handleChange}
              />
            </div>
            <input
              name="email"
              placeholder="Email"
              className={styles.input}
              onChange={handleChange}
            />
            <input
              name="contactNumber"
              placeholder="Contact Number"
              className={styles.input}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Tell Us More"
              className={styles.textarea}
              onChange={handleChange}
            ></textarea>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="newsletter"
                className={styles.checkbox}
                onChange={handleChange}
              /> Add me to the Coye Law Newsletter
            </label>
            <button type="submit" className={styles.submitBtn}>Submit</button>
          </form>
        </div>

        <div className={styles.mapSection}>
          <MapComponent />
        </div>
      </div>
    </section>
  );
}
