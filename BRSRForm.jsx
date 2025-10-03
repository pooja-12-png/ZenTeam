import React, { useState } from "react";
import SectionA from "../components/SectionA";
import SectionB from "../components/SectionB";
// import SectionC, SectionD... as you build them

export default function BRSRForm() {
  const [formData, setFormData] = useState({});
  const [currentSection, setCurrentSection] = useState("A");

  const styles = {
    container: {
      maxWidth: "900px",
      margin: "30px auto",
      padding: "30px",
      border: "1px solid #ddd",
      borderRadius: "12px",
      background: "#fdfdfd",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      fontSize: "26px",
      marginBottom: "20px",
      color: "#2c3e50",
      textAlign: "center",
    },
    nav: {
      marginBottom: "25px",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "10px",
    },
    navButton: {
      padding: "10px 18px",
      border: "none",
      borderRadius: "6px",
      background: "#007bff",
      color: "#fff",
      fontSize: "14px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.2s ease-in-out",
    },
    navButtonActive: {
      background: "#0056b3",
    },
    submitButton: {
      marginTop: "25px",
      padding: "12px 20px",
      background: "#28a745",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "15px",
      fontWeight: "600",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      transition: "all 0.2s ease-in-out",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>BRSR Reporting Form</h1>

      {/* Section Navigation */}
      <nav style={styles.nav}>
        <button
          style={{
            ...styles.navButton,
            ...(currentSection === "A" ? styles.navButtonActive : {}),
          }}
          onClick={() => setCurrentSection("A")}
        >
          Section A
        </button>
        <button
          style={{
            ...styles.navButton,
            ...(currentSection === "B" ? styles.navButtonActive : {}),
          }}
          onClick={() => setCurrentSection("B")}
        >
          Section B
        </button>
        {/* Add more buttons for C, D... */}
      </nav>

      {/* Section Rendering */}
      {currentSection === "A" && (
        <SectionA formData={formData} setFormData={setFormData} />
      )}
      {currentSection === "B" && (
        <SectionB formData={formData} setFormData={setFormData} />
      )}

      <button
        style={styles.submitButton}
        onClick={() => console.log("Form Submitted:", formData)}
      >
        Submit
      </button>
    </div>
  );
}
