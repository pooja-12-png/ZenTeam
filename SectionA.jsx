import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SectionA({ onNext }) {
  const navigate = useNavigate();
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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
    navigate("/sectionII");
  };

  return (
    <div>
      {/* Internal CSS */}
      <style>
        {`
          .form-container {
            max-width: 800px;
            margin: 30px auto;
            padding: 25px;
            background: #f9f9f9;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            font-family: Arial, sans-serif;
          }
          .form-container h2 {
            text-align: center;
            color: #007bff;
            margin-bottom: 20px;
          }
          .form-group {
            margin-bottom: 15px;
          }
          .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #333;
          }
          .form-group input {
            width: 100%;
            padding: 8px 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 14px;
          }
          .submit-btn {
            display: block;
            width: 100%;
            padding: 12px;
            background: #28a745;
            color: white;
            font-weight: bold;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 16px;
            transition: background 0.3s ease;
          }
          .submit-btn:hover {
            background: #218838;
          }
        `}
      </style>

      <div className="form-container">
        <h2>Section A – General Disclosures</h2>
        <form onSubmit={handleSubmit}>
          {Object.entries(formData).map(([key, value], i) => (
            <div key={i} className="form-group">
              <label htmlFor={key}>{key.replace(/([A-Z])/g, ' $1')}</label>
              <input
                id={key}
                name={key}
                value={value}
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
