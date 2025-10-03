import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SectionII({ onNext }) {
  const navigate = useNavigate();

  const [activities, setActivities] = useState([
    { mainActivity: "", businessActivity: "", turnoverPercent: "" },
  ]);

  const [products, setProducts] = useState([
    { product: "", nicCode: "", turnoverPercent: "" },
  ]);

  // Handle changes for activities
  const handleActivityChange = (index, e) => {
    const { name, value } = e.target;
    setActivities((prev) => {
      const updated = [...prev];
      updated[index][name] = value;
      return updated;
    });
  };

  // Handle changes for products
  const handleProductChange = (index, e) => {
    const { name, value } = e.target;
    setProducts((prev) => {
      const updated = [...prev];
      updated[index][name] = value;
      return updated;
    });
  };

  const addActivity = () => {
    setActivities((prev) => [
      ...prev,
      { mainActivity: "", businessActivity: "", turnoverPercent: "" },
    ]);
  };

  const addProduct = () => {
    setProducts((prev) => [
      ...prev,
      { product: "", nicCode: "", turnoverPercent: "" },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { activities, products };
    console.log("Section II Data:", formData);
    if (onNext) onNext(formData);
    navigate("/sectionIII");
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
          .form-card {
            background: #f9f9f9;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 6px;
            margin-bottom: 15px;
            transition: box-shadow 0.3s ease;
          }
          .form-card:hover {
            box-shadow: 0 0 8px rgba(0,0,0,0.15);
          }
          .form-group {
            margin-bottom: 12px;
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
            border-radius: 5px;
            outline: none;
            transition: border-color 0.3s;
          }
          .form-group input:focus {
            border-color: #007bff;
          }
          .add-btn, .submit-btn {
            padding: 10px 15px;
            margin-top: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          }
          .add-btn {
            background: #28a745;
            color: #fff;
            margin-bottom: 20px;
          }
          .add-btn:hover {
            background: #218838;
          }
          .submit-btn {
            background: #007bff;
            color: #fff;
            width: 100%;
            font-size: 16px;
          }
          .submit-btn:hover {
            background: #0056b3;
          }
        `}
      </style>

      <div className="form-container">
        <h2>Section II: Products / Services</h2>
        <form onSubmit={handleSubmit}>
          <h3>Business Activities (90% of Turnover)</h3>
          {activities.map((activity, index) => (
            <div key={index} className="form-card">
              <div className="form-group">
                <label>Main Activity:</label>
                <input
                  name="mainActivity"
                  value={activity.mainActivity}
                  onChange={(e) => handleActivityChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label>Business Activity:</label>
                <input
                  name="businessActivity"
                  value={activity.businessActivity}
                  onChange={(e) => handleActivityChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label>% of Turnover:</label>
                <input
                  type="number"
                  name="turnoverPercent"
                  value={activity.turnoverPercent}
                  onChange={(e) => handleActivityChange(index, e)}
                />
              </div>
            </div>
          ))}
          <button type="button" className="add-btn" onClick={addActivity}>
            + Add Activity
          </button>

          <h3>Products / Services Sold (90% of Turnover)</h3>
          {products.map((product, index) => (
            <div key={index} className="form-card">
              <div className="form-group">
                <label>Product / Service:</label>
                <input
                  name="product"
                  value={product.product}
                  onChange={(e) => handleProductChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label>NIC Code:</label>
                <input
                  name="nicCode"
                  value={product.nicCode}
                  onChange={(e) => handleProductChange(index, e)}
                />
              </div>
              <div className="form-group">
                <label>% of Total Turnover:</label>
                <input
                  type="number"
                  name="turnoverPercent"
                  value={product.turnoverPercent}
                  onChange={(e) => handleProductChange(index, e)}
                />
              </div>
            </div>
          ))}
          <button type="button" className="add-btn" onClick={addProduct}>
            + Add Product
          </button>

          <button type="submit" className="submit-btn">
            Save & Next
          </button>
        </form>
      </div>
    </div>
  );
}
