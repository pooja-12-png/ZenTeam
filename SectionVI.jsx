import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SectionVI({ onNext }) {
  const [csr, setCsr] = useState({
    applicable: "",
    turnover: "",
    netWorth: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCsr({ ...csr, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Section VI Data:", csr);
    if (onNext) onNext(csr);
    navigate("/sectionVII");
  };

  return (
    <div>
      <style>
        {`
          .form-container {
            padding: 20px;
            max-width: 600px;
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
            margin-bottom: 15px;
          }
          .form-group label {
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
            color: #555;
          }
          .form-group input,
          .form-group select {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          .submit-btn {
            width: 100%;
            padding: 10px;
            background: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
          }
          .submit-btn:hover {
            background: #0056b3;
          }
        `}
      </style>

      <div className="form-container">
        <h2>Section VI: CSR Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Is CSR applicable as per Section 135 of Companies Act, 2013?</label>
            <select
              name="applicable"
              value={csr.applicable}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="form-group">
            <label>Turnover (in ₹ Crores):</label>
            <input
              type="number"
              name="turnover"
              value={csr.turnover}
              onChange={handleChange}
              min="0"
            />
          </div>

          <div className="form-group">
            <label>Net Worth (in ₹ Crores):</label>
            <input
              type="number"
              name="netWorth"
              value={csr.netWorth}
              onChange={handleChange}
              min="0"
            />
          </div>

          <button type="submit" className="submit-btn">
            Save & Next
          </button>
        </form>
      </div>
    </div>
  );
}
