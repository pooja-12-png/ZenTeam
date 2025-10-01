
import React, { useState } from "react";

export default function SectionV({ onNext }) {
  const [companies, setCompanies] = useState([
    {
      name: "",
      relation: "",
      sharePercent: "",
      participatesInBR: "",
    },
  ]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...companies];
    updated[index][name] = value;
    setCompanies(updated);
  };

  const addCompany = () => {
    setCompanies([
      ...companies,
      { name: "", relation: "", sharePercent: "", participatesInBR: "" },
    ]);
  };

  const removeCompany = (index) => {
    const updated = [...companies];
    updated.splice(index, 1);
    setCompanies(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Section V Data:", companies);
    if (onNext) onNext(companies);
  };

  return (
    <div>
      {/* Internal CSS */}
      <style>
        {`
          .form-container {
            padding: 20px;
            max-width: 700px;
            margin: auto;
            background: #fafafa;
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
          .form-group input, .form-group select {
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
        <h2>Section V: Holding / Subsidiary / Associate Companies</h2>
        <form onSubmit={handleSubmit}>
          {companies.map((company, index) => (
            <div key={index} style={{ borderBottom: "1px solid #ddd", paddingBottom: "15px", marginBottom: "15px" }}>
              <div className="form-group">
                <label>Company Name:</label>
                <input
                  name="name"
                  value={company.name}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label>Relation (Holding/Subsidiary/Associate/JV):</label>
                <input
                  name="relation"
                  value={company.relation}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label>% of Shares Held:</label>
                <input
                  type="number"
                  name="sharePercent"
                  value={company.sharePercent}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label>Participates in Business Responsibility (Yes/No):</label>
                <select
                  name="participatesInBR"
                  value={company.participatesInBR}
                  onChange={(e) => handleChange(index, e)}
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              {companies.length > 1 && (
                <button
                  type="button"
                  className="btn remove-btn"
                  onClick={() => removeCompany(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button type="button" className="btn add-btn" onClick={addCompany}>
            + Add Another Company
          </button>
          <button type="submit" className="submit-btn">
            Save & Next
          </button>
        </form>
      </div>
    </div>
  );
}

