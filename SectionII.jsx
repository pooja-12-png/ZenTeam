
import React, { useState } from "react";

export default function SectionII({ onNext }) {
  const [activities, setActivities] = useState([
    { mainActivity: "", businessActivity: "", turnoverPercent: "" },
  ]);

  const [products, setProducts] = useState([
    { product: "", nicCode: "", turnoverPercent: "" },
  ]);

  const handleActivityChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...activities];
    updated[index][name] = value;
    setActivities(updated);
  };

  const handleProductChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...products];
    updated[index][name] = value;
    setProducts(updated);
  };

  const addActivity = () => {
    setActivities([...activities, { mainActivity: "", businessActivity: "", turnoverPercent: "" }]);
  };

  const addProduct = () => {
    setProducts([...products, { product: "", nicCode: "", turnoverPercent: "" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { activities, products };
    console.log("Section II Data:", formData);
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
            background: #fefefe;
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
          .add-btn, .submit-btn {
            padding: 8px 12px;
            margin-top: 8px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          .add-btn {
            background: #28a745;
            color: #fff;
            margin-right: 10px;
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
            <div key={index} className="form-group">
              <label>Main Activity:</label>
              <input
                name="mainActivity"
                value={activity.mainActivity}
                onChange={(e) => handleActivityChange(index, e)}
              />
              <label>Business Activity:</label>
              <input
                name="businessActivity"
                value={activity.businessActivity}
                onChange={(e) => handleActivityChange(index, e)}
              />
              <label>% of Turnover:</label>
              <input
                type="number"
                name="turnoverPercent"
                value={activity.turnoverPercent}
                onChange={(e) => handleActivityChange(index, e)}
              />
            </div>
          ))}
          <button type="button" className="add-btn" onClick={addActivity}>
            + Add Activity
          </button>

          <h3>Products / Services Sold (90% of Turnover)</h3>
          {products.map((product, index) => (
            <div key={index} className="form-group">
              <label>Product / Service:</label>
              <input
                name="product"
                value={product.product}
                onChange={(e) => handleProductChange(index, e)}
              />
              <label>NIC Code:</label>
              <input
                name="nicCode"
                value={product.nicCode}
                onChange={(e) => handleProductChange(index, e)}
              />
              <label>% of Total Turnover:</label>
              <input
                type="number"
                name="turnoverPercent"
                value={product.turnoverPercent}
                onChange={(e) => handleProductChange(index, e)}
              />
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

