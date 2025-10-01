
import React, { useState } from "react";

export default function SectionA({ onNext }) {
  const [formData, setFormData] = useState({
    cin: "",
    name: "",
    yearOfIncorporation: "",
    registeredOfficeAddress: "",
    corporateAddress: "",
    email: "",
    telephone: "",
    website: "",
    financialYear: "",
    stockExchanges: "",
    paidUpCapital: "",
    contactPerson: "",
    reportingBoundary: "",
    assuranceProvider: "",
    assuranceType: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Section A Data:", formData);
    if (onNext) onNext(formData);
  };

  return (
    <div>
      {/* Internal CSS */}
      <style>
        {`
          .form-container {
            padding: 20px;
            max-width: 600px;
            margin: auto;
            background: #f9f9f9;
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
          .form-group input {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          .submit-btn {
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
          }
          .submit-btn:hover {
            background-color: #0056b3;
          }
        `}
      </style>

      <div className="form-container">
        <h2>Section A: General Disclosures</h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((key, index) => (
            <div className="form-group" key={index}>
              <label>{key.replace(/([A-Z])/g, " $1")}</label>
              <input
                name={key}
                value={formData[key]}
                onChange={handleChange}
              />
            </div>
          ))}

          <button type="submit" className="submit-btn">
            Save & Next
          </button>
        </form>
      </div>
    </div>
  );
}

