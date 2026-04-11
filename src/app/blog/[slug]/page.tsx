"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import MotionWrapper from "../../components/MotionWrapper";
import styles from "../../styles/SingleBlog.module.css";

interface Post {
  title: string;
  date: string;
  content: string;
}

interface PostsRecord {
  [key: string]: Post;
}

export default function SingleBlogPage() {
  const { slug } = useParams();

  // Temporary post data — later you can fetch this from a database or JSON file
  const posts: PostsRecord = {
    "frontend-development-2025": {
      title: "Mastering Frontend Development in 2025",
      date: "October 20, 2025",
      content: `
        In 2025, the landscape of frontend development continues to evolve rapidly. 
        With frameworks like React, Next.js, and Vue dominating, developers are now focusing on 
        performance optimization, accessibility, and AI-driven UI experiences.

        As a frontend developer, staying updated is crucial. 
        Learn to integrate APIs effectively, write modular code, and prioritize user experience. 
        The key is to blend design thinking with coding precision.`,
    },
    "tech-brand-freelancer": {
      title: "Building a Tech Brand as a Freelancer",
      date: "September 10, 2025",
      content: `
        Building a tech brand as a freelancer involves much more than just offering services. 
        You need to create a strong online presence through personal branding, 
        consistent social media activity, and a professional portfolio website.

        Showcase your strengths, highlight testimonials, and make your brand synonymous 
        with quality and creativity.`,
    },
    "python-vs-javascript-which-should-you-learn": {
      title: "Python vs JavaScript: which should you learn?",
      date: "April 11, 2026",
      content: `
        Choosing your first programming language can be confusing. Python and JavaScript are both popular, beginner-friendly options—but they serve different purposes.

🚀 Python

Python is simple and easy to read, making it great for beginners. It’s commonly used in data science, automation, and backend development.

Best for: Beginners, AI, data-related fields.

🌐 JavaScript

JavaScript powers the web. It’s used to create interactive websites and can also run on the backend.

Best for: Web development and building apps.

⚖️ Key Difference
Python → Easier to learn, used for data and backend
JavaScript → Essential for websites and runs in browsers
🎯 Which Should You Choose?
Start with Python if you want an easier introduction to programming
Choose JavaScript if you want to build websites
💡 Final Thought

Both languages are powerful. The best choice depends on your goal—just start and stay consistent.

📢 Need Help Learning?

I offer programming tutoring with practical guidance to help you learn faster.

👉 Contact me to get started.`,
    },
  };

  const post = posts[slug as keyof typeof posts];

  if (!post) {
    return (
      <MotionWrapper>
        <div className={styles.notFound}>
          <h1>404 — Post Not Found</h1>
          <Link href="/blog" className={styles.backBtn}>
            ← Back to Blog
          </Link>
        </div>
      </MotionWrapper>
    );
  }

  return (
    <MotionWrapper>
      <article className={styles.post}>
        <h1>{post.title}</h1>
        <span className={styles.date}>{post.date}</span>
        <div className={styles.content}>
          {post.content.split("\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <Link href="/blog" className={styles.backBtn}>
          ← Back to Blog
        </Link>
      </article>
    </MotionWrapper>
  );
}
