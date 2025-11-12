"use client";
import Footer from "../components/Footer";
import MotionWrapper from "../components/MotionWrapper";
import Navbar from "../components/Navbar";
import styles from "../styles/Portfolio.module.css";

const works = [
  { title: "E-Commerce App", img: "/assets/project1.png" },
  { title: "Tech Blog", img: "/assets/project2.png" },
  { title: "Portfolio Site", img: "/assets/project3.png" },
];

export default function Portfolio() {
  const experiences = [
    {
      role: "Computer Technician",
      company: "Cybertron Technologies — Abuja, Nigeria",
      date: "March 2024 - Present",
      details: [
        "Repaired charging ports, phone screens, and serviced Android & iOS devices.",
        "Diagnosed and troubleshooted network and setup issues.",
        "Implemented efficient backup and restore processes for physical and cloud storage.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Formcy LLC — Abuja, Nigeria",
      date: "August - September 2023",
      details: [
        "Developed and designed client websites using React.js.",
        "Improved page load time by 30% through optimized code and debugging.",
        "Ensured responsive, accessible design across devices.",
      ],
    },
  ];

  const education = [
        {
      role: "Frontend Developer",
      company: "Personal School Project",
      date: "July 2023",
      details: [
        "Analyzed the goal of this data project and documented clear requirements and key expectations, to ensure that I always stayed on the task.",
        "Extracted key observations and insights from large internal and external data sources and presented a system design specifying hardware and software architecture.",
        "Created and developed small units of the web application such as styling, and payment methods which were integrated into the next phase. Each unit is developed and tested for its functionality which is referred to as Unit Testing.",
        "All the units developed in the implementation phase were integrated into a system after testing each unit.",
      ],
    },

  ];

  
  return (
    <>
    <Navbar/>
 <MotionWrapper>
      <section className={styles.portfolio}>
        {/* Header */}
        <div className={styles.header}>
          <h1>My Portfolio</h1>
          <p>
            A showcase of my professional background, education, and selected
            projects that reflect my journey as a Frontend Developer, Designer,
            and Tech Enthusiast.
          </p>
        </div>
           {/* Education Section (Added Back) */}
        <div className={styles.section}>
          <h2>Education</h2>
          <div className={styles.card}>
            <h3>Bachelor of Science, Computer Science</h3>
            <span className={styles.date}>Baze University, November 2023</span>
            <p>
              Gained deep knowledge in software development, data structures,
              algorithms, and modern web technologies, leading to the successful
              development of multiple real-world projects.
            </p>
          </div>

          <div className={styles.card}>
            <h3>WAEC</h3>
            <span className={styles.date}>
              Living Spring Int’l College, 2019
            </span>
            <p>
              Built foundational academic and problem-solving skills that prepared
              me for my career in computer science and technology.
            </p>
          </div>
        </div>
        
           {/* Work Experience */}
        <div className={styles.section}>
          <h2>Work Experience</h2>

          <div className={styles.card}>
            <h3>System Analyst II</h3>
            <span className={styles.date}>
              National Open University of Nigeria (NOUN) — 2024 – Present
            </span>
            <p>
              Currently serving as a <strong>System Analyst II</strong> at the
              National Open University of Nigeria (NOUN), where I assist in the
              design, implementation, and maintenance of IT systems and
              infrastructure to improve digital service delivery across the
              institution.
            </p>
            <ul>
              <li>
                Analyze user requirements and recommend suitable technology
                solutions.
              </li>
              <li>
                Support internal IT systems and web-based platforms for
                operational efficiency.
              </li>
              <li>
                Collaborate with technical teams to enhance system
                performance and data management.
              </li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>IT Support Intern (NYSC)</h3>
            <span className={styles.date}>
              Federal Ministry of Health Headquarters — 2023 – 2024
            </span>
            <p>
              Served as an IT support personnel during my NYSC service year,
              providing technical assistance, maintaining hardware systems, and
              ensuring smooth IT operations within the ministry’s digital
              infrastructure.
            </p>
            <ul>
              <li>
                Diagnosed and resolved computer hardware/software issues across
                departments.
              </li>
              <li>
                Assisted in network setup, maintenance, and troubleshooting.
              </li>
              <li>
                Supported data management and document digitization efforts.
              </li>
            </ul>
          </div>
        </div>

         <div className={styles.section}>
          <h2>Professional Experience</h2>
          {experiences.map((exp, i) => (
            <div key={i} className={styles.card}>
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <span>{exp.date}</span>
              <ul>
                {exp.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Professional Experience */}
        <div className={styles.section}>
          <h2>Professional Experience</h2>
          {experiences.map((exp, i) => (
            <div key={i} className={styles.card}>
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <span>{exp.date}</span>
              <ul>
                {exp.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className={styles.section}>
          <h2>Educational Experience</h2>
          {education.map((edu, i) => (
            <div key={i} className={styles.card}>
              <h3>{edu.role}</h3>
              <h4>{edu.company}</h4>
              <span>{edu.date}</span>
              <ul>
                {edu.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
           
         
        
      </section>
    </MotionWrapper>
    <Footer/>
    </>
  );
}
