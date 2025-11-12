"use client";
import MotionWrapper from "../components/MotionWrapper";
import styles from "../styles/About.module.css";
import Image from "next/image";
// import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
    <Navbar/>
     <section className={styles.about}>
      <motion.div
        className={styles.left}
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.imageWrapper}>
          <Image
            src="/assets/bg1.jpg" // your image path here (e.g., /images/paul.png)
            alt="Paul Opara"
            width={300}
            height={300}
            className={styles.image}
          />
        </div>
      </motion.div>

      <motion.div
        className={styles.right}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.text}>
          I’m <span>Paul Opara</span>, a passionate <b>Frontend Developer</b> and{" "}
          <b>Creative Designer</b> from Nigeria. My work revolves around turning
          ideas into interactive, visually engaging digital experiences.
        </p>
        <p className={styles.text}>
          With a background in <b>Computer Science</b>, I love building fast,
          responsive, and accessible web applications using technologies like{" "}
          <b>React</b>, <b>Next.js</b>, <b>HTML</b>, <b>CSS</b>, and{" "}
          <b>JavaScript</b>.
        </p>
        <p className={styles.text}>
          Beyond development, I’m also skilled in <b>Graphic Design</b> — crafting
          clean, modern visuals for brands, events, and online platforms. And i also find pleasure in repairing devices such as phones, tablets, and laptops.
        </p>

        <p className={styles.quote}>
          “Creativity meets logic in every line of code.”
        </p>

        <Link href="/assets/Updated Resume- Opara Paul _105630 (1).pdf" download className={styles.btn}>
          Download Resume
        </Link>
      </motion.div>
    </section>
    <Footer/>
    </>
  );
}
