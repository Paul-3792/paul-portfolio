"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Navbar.module.css";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logoLink}>
        <h1 className={styles.logo}>
          Paul<span>Opara</span>
        </h1>
      </Link>

      {/* Hamburger Icon */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={`${styles.bar} ${menuOpen ? styles.bar1 : ""}`}></div>
        <div className={`${styles.bar} ${menuOpen ? styles.bar2 : ""}`}></div>
        <div className={`${styles.bar} ${menuOpen ? styles.bar3 : ""}`}></div>
      </div>

      {/* Navigation Links */}
      <ul className={`${styles.links} ${menuOpen ? styles.active : ""}`}>
        {["Home", "About", "Skills", "Portfolio", "Projects", "Blog", "Contact"].map(
          (item) => (
            <li key={item}>
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={closeMenu}
              >
                {item}
              </Link>
            </li>
          )
        )}
        <li className={styles.theme}>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
