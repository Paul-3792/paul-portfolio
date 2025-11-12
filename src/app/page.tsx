"use client";
import MotionWrapper from "./components/MotionWrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styles from "./styles/Home.module.css";

export default function Home() {
  return (
    <>
    <Navbar/>
    <MotionWrapper>
      <section className={styles.hero}>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <h1>
            Hi, I’m <span>Opara Paul</span>
          </h1>
          <p>
             A <strong>Frontend Developer & Designer</strong> passionate about building modern,
            high-performance web experiences with <strong>WordPress</strong> and <strong>Next.js</strong>.
            I also specialize in <strong>Graphics Design</strong> and <strong>Device Repairs(Phone & Laptop)</strong>.
          </p>
          <a href="/portfolio" className={styles.btn}>
            View My Work
          </a>
        </div>
      </section>
    </MotionWrapper>
    <Footer />
    </>
  );
}
