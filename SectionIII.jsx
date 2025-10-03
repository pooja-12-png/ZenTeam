import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SectionIII({ onNext }) {
  const navigate = useNavigate();

  const [locations, setLocations] = useState({
    nationalPlants: "",
    nationalOffices: "",
    totalNational: "",
    internationalPlants: "",
    internationalOffices: "",
    totalInternational: ""
  });

  const [markets, setMarkets] = useState({
    nationalStates: "",
    internationalCountries: "",
    exportContribution: "",
    customerTypes: ""
  });

  const handleLocationChange = (e) => {
    const { name, value } = e.target;
    setLocations((prev) => ({ ...prev, [name]: value }));
  };

  const handleMarketChange = (e) => {
    const { name, value } = e.target;
    setMarkets((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { locations, markets };
    console.log("Section III Data:", formData);
    if (onNext) onNext(formData);
    navigate("/sectionIV"); // ✅ go to next
  };

  return (
    <div>
      {/* Internal CSS */}
      <style>
        {`
          .form-container {
            padding: 30px;
            max-width: 750px;
            margin: auto;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            font-family: Arial, sans-serif;
          }
          .form-container h2 {
            text-align: center;
            color: #222;
            margin-bottom: 20px;
          }
          .form-container h3 {
            margin-top: 25px;
            color: #444;
            border-bottom: 2px solid #007bff;
            padding-bottom: 6px;
            font-size: 18px;
          }
          .form-group {
            margin-bottom: 15px;
          }
          .form-group label {
            display: block;
            font-weight: bold;
            margin-bottom: 6px;
            color: #555;
          }
          .form-group input,
          .form-group textarea {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 6px;
            outline: none;
            transition: border-color 0.3s;
          }
          .form-group input:focus,
          .form-group textarea:focus {
            border-color: #007bff;
          }
          .submit-btn {
            width: 100%;
            padding: 12px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            cursor: pointer;
            margin-top: 20px;
          }
          .submit-btn:hover {
            background-color: #0056b3;
          }
        `}
      </style>

      <div className="form-container">
        <h2>Section III: Operations</h2>
        <form onSubmit={handleSubmit}>
          <h3>Locations of Plants / Offices</h3>
          <div className="form-group">
            <label>Number of National Plants:</label>
            <input
              name="nationalPlants"
              value={locations.nationalPlants}
              onChange={handleLocationChange}
            />
          </div>
          <div className="form-group">
            <label>Number of National Offices:</label>
            <input
              name="nationalOffices"
              value={locations.nationalOffices}
              onChange={handleLocationChange}
            />
          </div>
          <div className="form-group">
            <label>Total National Locations:</label>
            <input
              name="totalNational"
              value={locations.totalNational}
              onChange={handleLocationChange}
            />
          </div>
          <div className="form-group">
            <label>Number of International Plants:</label>
            <input
              name="internationalPlants"
              value={locations.internationalPlants}
              onChange={handleLocationChange}
            />
          </div>
          <div className="form-group">
            <label>Number of International Offices:</label>
            <input
              name="internationalOffices"
              value={locations.internationalOffices}
              onChange={handleLocationChange}
            />
          </div>
          <div className="form-group">
            <label>Total International Locations:</label>
            <input
              name="totalInternational"
              value={locations.totalInternational}
              onChange={handleLocationChange}
            />
          </div>

          <h3>Markets Served</h3>
          <div className="form-group">
            <label>National (No. of States):</label>
            <input
              name="nationalStates"
              value={markets.nationalStates}
              onChange={handleMarketChange}
            />
          </div>
          <div className="form-group">
            <label>International (No. of Countries):</label>
            <input
              name="internationalCountries"
              value={markets.internationalCountries}
              onChange={handleMarketChange}
            />
          </div>
          <div className="form-group">
            <label>Contribution of Exports (% of Turnover):</label>
            <input
              type="number"
              name="exportContribution"
              value={markets.exportContribution}
              onChange={handleMarketChange}
            />
          </div>
          <div className="form-group">
            <label>Types of Customers (Brief):</label>
            <textarea
              rows="3"
              name="customerTypes"
              value={markets.customerTypes}
              onChange={handleMarketChange}
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
