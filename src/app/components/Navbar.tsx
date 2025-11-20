"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "../styles/Navbar.module.css";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // <-- ACTIVE LINK DETECTION

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

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

      {/* Nav Links */}
      <ul className={`${styles.links} ${menuOpen ? styles.active : ""}`}>
        {links.map((item) => (
          <li key={item.name}>
            <Link
              href={item.path}
              onClick={closeMenu}
              className={pathname === item.path ? styles.activeLink : ""}
            >
              {item.name}
            </Link>
          </li>
        ))}

        <li className={styles.theme}>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
