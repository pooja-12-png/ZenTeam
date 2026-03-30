import React from "react";
import { useNavigate } from "react-router-dom";

export default function SubmitPage({ formData }) {
  const navigate = useNavigate();

  const handleFinalSubmit = () => {
    console.log("Final Submission:", formData);
    alert("✅ Form submitted successfully!");
    navigate("/"); // Redirect to home/navigation page after submit
  };

  const styles = {
    container: {
      maxWidth: "800px",
      margin: "30px auto",
      padding: "25px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      background: "#fdfdfd",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      fontSize: "26px",
      marginBottom: "15px",
      textAlign: "center",
      color: "#2c3e50",
    },
    section: {
      marginBottom: "20px",
      padding: "15px",
      border: "1px solid #eee",
      borderRadius: "8px",
      background: "#fafafa",
    },
    sectionTitle: {
      fontSize: "20px",
      color: "#007bff",
      marginBottom: "10px",
    },
    pre: {
      background: "#272822",
      color: "#f8f8f2",
      padding: "12px",
      borderRadius: "6px",
      fontSize: "14px",
      overflowX: "auto",
    },
    button: {
      display: "block",
      margin: "25px auto 0",
      padding: "12px 20px",
      fontSize: "16px",
      fontWeight: "bold",
      color: "#fff",
      background: "#28a745",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>📋 Review & Submit BRSR Form</h2>
      <p style={{ textAlign: "center", marginBottom: "20px" }}>
        Please review your data below before final submission.
      </p>

      {/* Section A */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Section A – General Disclosures</h3>
        <pre style={styles.pre}>
          {JSON.stringify(formData.sectionA || {}, null, 2)}
        </pre>
      </div>

      {/* Section B */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Section B – Disclosure Questions</h3>
        <pre style={styles.pre}>
          {JSON.stringify(formData.sectionB || {}, null, 2)}
        </pre>
      </div>

      {/* Section C */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>
          Section C – Principle-wise Performance
        </h3>
        <pre style={styles.pre}>
          {JSON.stringify(
            {
              p1TrainingSegment: formData.p1TrainingSegment,
              p2Sourcing: formData.p2Sourcing,
              p3HealthInsurance: formData.p3HealthInsurance,
            },
            null,
            2
          )}
        </pre>
      </div>

      {/* Section D */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Section D – Employees</h3>
        <pre style={styles.pre}>
          {JSON.stringify(
            {
              permanentEmployees: formData.permanentEmployees,
              womenDirectors: formData.womenDirectors,
              turnoverEmp2025: formData.turnoverEmp2025,
            },
            null,
            2
          )}
        </pre>
      </div>

      {/* Section E */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>
          Section E – Holding / Subsidiary Companies
        </h3>
        <pre style={styles.pre}>
          {JSON.stringify(
            {
              companyType: formData.companyType,
              sharePercent: formData.sharePercent,
              participationBR: formData.participationBR,
            },
            null,
            2
          )}
        </pre>
      </div>

      {/* Section F */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Section F – CSR Details</h3>
        <pre style={styles.pre}>
          {JSON.stringify(
            {
              csrApplicable: formData.csrApplicable,
              csrTurnover: formData.csrTurnover,
              csrNetWorth: formData.csrNetWorth,
            },
            null,
            2
          )}
        </pre>
      </div>

      {/* Section G */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>
          Section G – Transparency & Disclosure
        </h3>
        <pre style={styles.pre}>
          {JSON.stringify(
            {
              complaintsFiled2025: formData.complaintsFiled2025,
              complaintsPending2025: formData.complaintsPending2025,
            },
            null,
            2
          )}
        </pre>
      </div>

      {/* Section H */}
      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>Section H – Material Issues</h3>
        <pre style={styles.pre}>
          {JSON.stringify(
            {
              materialIssue: formData.materialIssue,
              riskOrOpportunity: formData.riskOrOpportunity,
              rationale: formData.rationale,
            },
            null,
            2
          )}
        </pre>
      </div>

      {/* Final Submit */}
      <button style={styles.button} onClick={handleFinalSubmit}>
        🚀 Submit Form
      </button>
    </div>
  );
}
