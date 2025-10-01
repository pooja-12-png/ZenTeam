
import React, { useState } from "react";

export default function SectionIII({ onNext }) {
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
    setLocations({ ...locations, [name]: value });
  };

  const handleMarketChange = (e) => {
    const { name, value } = e.target;
    setMarkets({ ...markets, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { locations, markets };
    console.log("Section III Data:", formData);
    if (onNext) onNext(formData);
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
            margin-bottom: 15px;
          }
          .form-group label {
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
            color: #555;
          }
          .form-group input, .form-group textarea {
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
        <h2>Section III: Operations</h2>
        <form onSubmit={handleSubmit}>
          <h3>Locations of Plants/Offices</h3>
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

