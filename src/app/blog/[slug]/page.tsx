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
    "ui-ux-principles": {
      title: "UI/UX Design Principles Every Developer Should Know",
      date: "August 30, 2025",
      content: `
        Understanding UI/UX design principles helps developers create applications that not only 
        function well but also delight users. Pay attention to spacing, typography, 
        and intuitive navigation.

        Remember: good design is invisible — it simply works without explanation.`,
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
