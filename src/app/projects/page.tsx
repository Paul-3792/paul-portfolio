"use client";
import MotionWrapper from "../components/MotionWrapper";
import { Github } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Projects.module.css";

export default function Projects() {
  const projects = [
    {
      title: "Church Website",
      tech: "React, Bootstrap, CSS",
      desc: "A functional and visually engaging website created for a church to showcase its departments, ministries, events, and media content. It features clean navigation, mobile responsiveness, and easy-to-manage content sections. Built using React.js to ensure fast loading, reusable components, and a smooth browsing experience.",
      link: "https://github.com/Paul-3792/Church-Website---React.js", // replace with real link if available
    },
    {
      title: "Portfolio Website",
      tech: "Next.js, CSS, MotionWrapper",
      desc: "A personal portfolio showcasing my skills, experience, and projects with dark mode support, smooth transitions, and a modern design aesthetic.",
      link: "https://github.com/Paul-3792/paul-portfolio",
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
      link: "https://github.com/Paul-3792/Tbest-Spices-React.js",
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
                <button className={styles.btn}><Github size={18} /> View Project</button>              
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
