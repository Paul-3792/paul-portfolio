"use client";
import MotionWrapper from "../components/MotionWrapper";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Projects.module.css";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Web Application",
      tech: "React, Firebase, CSS",
      desc: "A full-stack web application developed as part of my university project. It allows users to browse, add products to cart, and make purchases with a secure authentication system using Firebase.",
      link: "https://github.com/paul-3792/ecommerce-app", // replace with real link if available
    },
    {
      title: "Portfolio Website",
      tech: "Next.js, CSS, MotionWrapper",
      desc: "A personal portfolio showcasing my skills, experience, and projects with dark mode support, smooth transitions, and a modern design aesthetic.",
      link: "https://github.com/paul-3792/portfolio-website.git",
    },
    {
      title: "Formyce Copy",
      tech: "React.js, CSS, Firebase",
      desc: "A web platform for students and businesses to submit tasks and receive results efficiently. Built with Firebase for database and user management.",
      link: "https://github.com/paul-3792/Writing-Website.git",
    },
    {
      title: "Veevhub Cosmetics",
      tech: "React.js, CSS, Firebase",
      desc: "An appointment booking and management system for a beauty and cosmetics business. It supports service selection and dynamic scheduling.",
      link: "https://github.com/paul-3792/makeup_website",
    },
    {
      title: "Tbest Spices Web App",
      tech: "React.js, CSS",
      desc: "An online spice store that allows customers to order products with a responsive and user-friendly design.",
      link: "https://github.com/paul-3792/tbest_web-app",
    },
  ];

  return (
    <>
    <Navbar/>
     <MotionWrapper>
      <section className={styles.projects}>
        <div className={styles.header}>
          <h1>Projects</h1>
          <p>
            A collection of my featured works and experiments that demonstrate
            my journey as a developer and designer. Each project reflects my
            focus on clean design, performance, and functionality.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((proj, i) => (
            <a
              key={i}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.cardContent}>
                <h3>{proj.title}</h3>
                <p className={styles.desc}>{proj.desc}</p>
                <p className={styles.tech}>{proj.tech}</p>
                <button className={styles.btn}>View Project</button>
              </div>
            </a>
          ))}
        </div>
      </section>
    </MotionWrapper>
    <Footer/>
    </>
  );
}
