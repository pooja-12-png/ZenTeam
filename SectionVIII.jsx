import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SectionVIII({ onNext }) {
  const navigate = useNavigate();
  const [issues, setIssues] = useState([
    {
      issue: "",
      type: "",
      rationale: "",
      approach: "",
      implications: "",
    },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...issues];
    updated[index][field] = value;
    setIssues(updated);
  };

  const addIssue = () => {
    setIssues([
      ...issues,
      { issue: "", type: "", rationale: "", approach: "", implications: "" },
    ]);
  };

  const removeIssue = (index) => {
    const updated = [...issues];
    updated.splice(index, 1);
    setIssues(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Section VIII Data:", issues);
    if (onNext) onNext(issues);
    navigate("/submit");
  };

  return (
    <div>
      <style>
        {`
          .form-container {
            padding: 20px;
            max-width: 750px;
            margin: auto;
            background: #fdfdfd;
            border-radius: 8px;
            box-shadow: 0 0 8px rgba(0,0,0,0.1);
          }
          .form-container h2 {
            text-align: center;
            color: #333;
          }
          .form-group {
            margin-bottom: 12px;
          }
          .form-group label {
            display: block;
            font-weight: bold;
            margin-bottom: 4px;
            color: #555;
          }
          .form-group input,
          .form-group textarea,
          .form-group select {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          .btn {
            padding: 8px 12px;
            margin: 5px 5px 0 0;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          .add-btn {
            background: #28a745;
            color: #fff;
          }
          .add-btn:hover { background: #218838; }
          .remove-btn {
            background: #dc3545;
            color: #fff;
          }
          .remove-btn:hover { background: #c82333; }
          .submit-btn {
            width: 100%;
            background: #007bff;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
            margin-top: 15px;
          }
          .submit-btn:hover {
            background: #0056b3;
          }
        `}
      </style>

      <div className="form-container">
        <h2>Section VIII: Material Responsible Business Issues</h2>
        <form onSubmit={handleSubmit}>
          {issues.map((issue, index) => (
            <div
              key={index}
              style={{
                borderBottom: "1px solid #ddd",
                marginBottom: "15px",
                paddingBottom: "15px",
              }}
            >
              <div className="form-group">
                <label>Material Issue Identified:</label>
                <input
                  type="text"
                  value={issue.issue}
                  onChange={(e) => handleChange(index, "issue", e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Type (Risk or Opportunity):</label>
                <select
                  value={issue.type}
                  onChange={(e) => handleChange(index, "type", e.target.value)}
                  required
                >
                  <option value="">Select</option>
                  <option value="Risk">Risk</option>
                  <option value="Opportunity">Opportunity</option>
                </select>
              </div>

              <div className="form-group">
                <label>Rationale for Identifying:</label>
                <textarea
                  rows="2"
                  value={issue.rationale}
                  onChange={(e) => handleChange(index, "rationale", e.target.value)}
                />
              </div>

              {issue.type === "Risk" && (
                <div className="form-group">
                  <label>Approach to Adapt/Mitigate:</label>
                  <textarea
                    rows="2"
                    value={issue.approach}
                    onChange={(e) => handleChange(index, "approach", e.target.value)}
                  />
                </div>
              )}

              <div className="form-group">
                <label>Financial Implications:</label>
                <textarea
                  rows="2"
                  value={issue.implications}
                  onChange={(e) => handleChange(index, "implications", e.target.value)}
                />
              </div>

              {issues.length > 1 && (
                <button
                  type="button"
                  className="btn remove-btn"
                  onClick={() => removeIssue(index)}
                >
                  Remove Issue
                </button>
              )}
            </div>
          ))}

          <button type="button" className="btn add-btn" onClick={addIssue}>
            + Add Another Issue
          </button>

          <button type="submit" className="submit-btn">
            Save & Next
          </button>
        </form>
      </div>
    </div>
  );
}
