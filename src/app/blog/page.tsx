"use client";
import Footer from "../components/Footer";
import MotionWrapper from "../components/MotionWrapper";
import Link from "next/link";
import Navbar from "../components/Navbar";
import styles from "../styles/Blog.module.css";



export default function Blog() {
  const posts = [
    {
      title: "Mastering Frontend Development in 2025",
      date: "October 20, 2025",
      desc: "Explore the essential tools, frameworks, and practices that define the modern frontend developer in today’s tech landscape.",
      slug: "frontend-development-2025",
      tag: "Web Development",
    },
    {
      title: "Building a Tech Brand as a Freelancer",
      date: "September 10, 2025",
      desc: "How to position yourself as a professional tech brand online — from portfolio design to social media strategy.",
      slug: "tech-brand-freelancer",
      tag: "Personal Branding",
    },
    {
      title: "UI/UX Design Principles Every Developer Should Know",
      date: "August 30, 2025",
      desc: "A quick guide on creating intuitive, user-focused designs that make your web apps stand out visually and functionally.",
      slug: "ui-ux-principles",
      tag: "Design",
    },
     {
      title: "How Can I Know When My Phone Needs Checkup?",
      date: "November 8, 2025",
      desc: "Your smartphone might look fine, but subtle issues often reveal deeper problems. Learn the signs that tell you when your device needs maintenance before it fails.",
      slug: "phone-checkup-signs",
      tag: "Device Maintenance",
    },
  ];

  return (
    <>
    <Navbar/>
    <MotionWrapper>
      <section className={styles.blog}>
        <div className={styles.header}>
          <h1>Blog</h1>
          <p>
            Insights, tutorials, and experiences I’ve gained throughout my tech
            journey — from development tips to creative design inspiration.
          </p>
        </div>

        <div className={styles.grid}>
          {posts.map((post, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.tag}>{post.tag}</div>
              <h3>{post.title}</h3>
              <span className={styles.date}>{post.date}</span>
              <p className={styles.desc}>{post.desc}</p>
              <Link href={`/blog/${post.slug}`} className={styles.btn}>
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </MotionWrapper>
    <Footer/>
    </>
  );
}
