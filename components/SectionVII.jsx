
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";   // ✅ import navigate hook

export default function SectionVII({ onNext }) {
  const [complaints, setComplaints] = useState([
    {
      stakeholder: "",
      grievanceMechanism: "",
      fy2024_25: { filed: "", pending: "", remarks: "" },
      fy2023_24: { filed: "", pending: "", remarks: "" },
    },
  ]);
   const navigate = useNavigate();  // ✅ create navigat

  const handleChange = (index, field, value) => {
    const updated = [...complaints];
    updated[index][field] = value;
    setComplaints(updated);
  };

  const handleYearChange = (index, year, field, value) => {
    const updated = [...complaints];
    updated[index][year][field] = value;
    setComplaints(updated);
  };

  const addComplaint = () => {
    setComplaints([
      ...complaints,
      {
        stakeholder: "",
        grievanceMechanism: "",
        fy2024_25: { filed: "", pending: "", remarks: "" },
        fy2023_24: { filed: "", pending: "", remarks: "" },
      },
    ]);
  };

  const removeComplaint = (index) => {
    const updated = [...complaints];
    updated.splice(index, 1);
    setComplaints(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Section VII Data:", complaints);
    if (onNext) onNext(complaints);
    navigate("/sectionVIII");
  };

  return (
    <div>
      {/* Internal CSS */}
      <style>
        {`
          .form-container {
            padding: 20px;
            max-width: 800px;
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
            margin-bottom: 5px;
            color: #555;
          }
          .form-group input, .form-group textarea, .form-group select {
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
        <h2>Section VII: Transparency & Disclosure Compliances</h2>
        <form onSubmit={handleSubmit}>
          {complaints.map((comp, index) => (
            <div
              key={index}
              style={{
                borderBottom: "1px solid #ddd",
                marginBottom: "15px",
                paddingBottom: "15px",
              }}
            >
              <div className="form-group">
                <label>Stakeholder Group:</label>
                <input
                  value={comp.stakeholder}
                  onChange={(e) =>
                    handleChange(index, "stakeholder", e.target.value)
                  }
                />
              </div>
              <div className="form-group">
                <label>Grievance Redressal Mechanism (Yes/No or Weblink):</label>
                <input
                  value={comp.grievanceMechanism}
                  onChange={(e) =>
                    handleChange(index, "grievanceMechanism", e.target.value)
                  }
                />
              </div>

              <h4>FY 2024-25</h4>
              <div className="form-group">
                <label>Number of complaints filed:</label>
                <input
                  value={comp.fy2024_25.filed}
                  onChange={(e) =>
                    handleYearChange(index, "fy2024_25", "filed", e.target.value)
                  }
                />
              </div>
              <div className="form-group">
                <label>Number pending at year end:</label>
                <input
                  value={comp.fy2024_25.pending}
                  onChange={(e) =>
                    handleYearChange(index, "fy2024_25", "pending", e.target.value)
                  }
                />
              </div>
              <div className="form-group">
                <label>Remarks:</label>
                <textarea
                  rows="2"
                  value={comp.fy2024_25.remarks}
                  onChange={(e) =>
                    handleYearChange(index, "fy2024_25", "remarks", e.target.value)
                  }
                />
              </div>

              <h4>FY 2023-24</h4>
              <div className="form-group">
                <label>Number of complaints filed:</label>
                <input
                  value={comp.fy2023_24.filed}
                  onChange={(e) =>
                    handleYearChange(index, "fy2023_24", "filed", e.target.value)
                  }
                />
              </div>
              <div className="form-group">
                <label>Number pending at year end:</label>
                <input
                  value={comp.fy2023_24.pending}
                  onChange={(e) =>
                    handleYearChange(index, "fy2023_24", "pending", e.target.value)
                  }
                />
              </div>
              <div className="form-group">
                <label>Remarks:</label>
                <textarea
                  rows="2"
                  value={comp.fy2023_24.remarks}
                  onChange={(e) =>
                    handleYearChange(index, "fy2023_24", "remarks", e.target.value)
                  }
                />
              </div>

              {complaints.length > 1 && (
                <button
                  type="button"
                  className="btn remove-btn"
                  onClick={() => removeComplaint(index)}
                >
                  Remove Stakeholder
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            className="btn add-btn"
            onClick={addComplaint}
          >
            + Add Stakeholder Group
          </button>

          <button type="submit" className="submit-btn">
            Save & Next
          </button>
        </form>
      </div>
    </div>
  );
}

