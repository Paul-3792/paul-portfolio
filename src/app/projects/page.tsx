"use client";
import MotionWrapper from "../components/MotionWrapper";
import { Globe, Wrench } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Projects.module.css";

export default function Projects() {
  const projects = [
    {
      title: "Church Website",
      tech: "Wordpress, Elementor, CSS",
      desc: "A functional and visually engaging website created for a church to showcase its events, and media content. It features clean navigation, mobile responsiveness, and easy-to-manage content sections. Built using Wordpress to ensure fast loading, Beautiful User Experience, and a smooth browsing experience.",
      link: "https://rccgfaithchapelfct7.com/",
      icon: Globe, // 🌐 live site // replace with real link if available
    },
    {
      title: "Portfolio Website",
      tech: "Next.js, CSS, MotionWrapper",
      desc: "A personal portfolio showcasing my skills, experience, and projects with dark mode support, smooth transitions, and a modern design aesthetic.",
      link: "https://oparapaul.vercel.app/",
      icon: Globe, // 🌐 live site
    },
    {
      title: "Phone Repair",
      // tech: "React.js, CSS, Firebase",
      desc: "Successfully repaired a broken phone screen, improving visibility and restoring full user interaction.",
      link: "#",
      icon: Wrench,
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
                <button className={styles.btn}> <proj.icon /> View Project</button>              
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
