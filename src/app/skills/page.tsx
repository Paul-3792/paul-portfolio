"use client";
import React from "react";
import Footer from "../components/Footer";
import MotionWrapper from "../components/MotionWrapper";
import Navbar from "../components/Navbar";
import styles from "../styles/Skills.module.css";

const skills = [
  { name: "HTML", icon: "/assets/icon-html.svg" },
  { name: "CSS", icon: "/assets/icons8-css.svg" },
  { name: "JavaScript", icon: "/assets/javascript-svgrepo-com.svg" },
  { name: "Canva", icon: "/assets/canva-svgrepo-com.svg" },
  { name: "Illustrator", icon: "/assets/illustrator-svgrepo-com.svg" },
  { name: "Firebase", icon: "/assets/icons8-firebase.svg" },
  { name: "React", icon: "/assets/reactjs-fill-svgrepo-com.svg" },
  { name: "Git", icon: "/assets/git-branch-svgrepo-com.svg" },
  { name: "GitHub", icon: "/assets/github-142-svgrepo-com.svg" },
  { name: "Next.js", icon: "/assets/nextjs-icon-svgrepo-com.svg" },
  { name: "Photoshop", icon: "/assets/photoshop-cc-logo-svgrepo-com.svg" },
  { name: "Phone/Laptop Repair", icon: "/assets/repair-costs-svgrepo-com.svg" },
  { name: "MongoDB", icon: "/assets/mongodb-svgrepo-com.svg" },
];

export default function SkillsPage() {
  return (
    <>
    <Navbar/>
    <MotionWrapper>
       <section className={styles.skills}>
      <h2>My Skills</h2>
      <div className={styles.grid}>
        {skills.map((skill) => (
          <div key={skill.name} className={styles.card}>
            <div className={styles.iconWrapper}>
              <img src={skill.icon} alt={skill.name} />
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
    </MotionWrapper>
    <Footer/>
    </>
  );
}
