import React from "react";
import { Link } from "react-router-dom";

export default function NavigationPage() {
  const styles = {
    container: {
      maxWidth: "700px",
      margin: "40px auto",
      padding: "30px",
      border: "1px solid #ddd",
      borderRadius: "12px",
      background: "#fdfdfd",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      fontSize: "28px",
      marginBottom: "25px",
      textAlign: "center",
      color: "#2c3e50",
    },
    list: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    listItem: {
      margin: "12px 0",
    },
    link: {
      display: "block",
      padding: "12px 18px",
      textDecoration: "none",
      background: "#007bff",
      color: "#fff",
      borderRadius: "6px",
      fontWeight: "600",
      fontSize: "15px",
      transition: "all 0.3s ease",
    },
    linkHover: {
      background: "#0056b3",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>BRSR Form Navigation</h1>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <Link style={styles.link} to="/sectionA">
            Section A – General Disclosures
          </Link>
        </li>
        <li style={styles.listItem}>
          <Link style={styles.link} to="/sectionB">
            Section B - Disclosure Questions
          </Link>
        </li>
        <li style={styles.listItem}>
          <Link style={styles.link} to="/sectionC">
            Section C - Principle-wise Performance (1-5)
          </Link>
        </li>
        <li style={styles.listItem}>
          <Link style={styles.link} to="/sectionII">
            Section II – Products/Services
          </Link>
        </li>
        <li style={styles.listItem}>
          <Link style={styles.link} to="/sectionIII">
            Section III – Operations
          </Link>
        </li>
        <li style={styles.listItem}>
          <Link style={styles.link} to="/sectionIV">
            Section IV – Employees
          </Link>
        </li>
        <li style={styles.listItem}>
          <Link style={styles.link} to="/sectionV">
            Section V – Holding/Subsidiary Companies
          </Link>
        </li>
        <li style={styles.listItem}>
          <Link style={styles.link} to="/sectionVI">
            Section VI – CSR Details
          </Link>
        </li>
        <li style={styles.listItem}>
          <Link style={styles.link} to="/sectionVII">
            Section VII – Transparency & Disclosure
          </Link>
        </li>
        <li style={styles.listItem}>
          <Link style={styles.link} to="/sectionVIII">
            Section VIII – Material Issues
          </Link>
        </li>
      </ul>
    </div>
  );
}
