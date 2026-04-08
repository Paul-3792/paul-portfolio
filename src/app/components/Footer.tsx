"use client";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© {currentYear} Paul Opara. All Rights Reserved.</p>
        <div className={styles.socials}>
          <a href="https://github.com/Paul-3792" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/paul-opara-280b81195/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:opara1487@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
