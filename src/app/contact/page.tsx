"use client";
import Footer from "../components/Footer";
import MotionWrapper from "../components/MotionWrapper";
import Navbar from "../components/Navbar";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <>
    <Navbar/>
    <MotionWrapper>
      <section className={styles.contact}>
        <h1>Contact Me</h1>
        <p>Have a project in mind or want to collaborate? Reach out!</p>
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className={styles.form}
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows={5} placeholder="Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </MotionWrapper>
    <Footer/>
    </>
  );
}
