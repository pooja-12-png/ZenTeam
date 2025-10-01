
import React, { useState } from "react";

export default function SectionIV({ onNext }) {
  const [employees, setEmployees] = useState({
    permanent: { total: "", male: "", female: "", others: "" },
    otherThanPermanent: { total: "", male: "", female: "", others: "" },
    total: { total: "", male: "", female: "", others: "" },
  });

  const [workers, setWorkers] = useState({
    permanent: "",
    otherThanPermanent: "",
    total: "",
  });

  const [women, setWomen] = useState({
    boardDirectors: { total: "", female: "" },
    kmp: { total: "", female: "" },
  });

  const [turnover, setTurnover] = useState({
    employees: {
      FY2024_25: { male: "", female: "", others: "" },
      FY2023_24: { male: "", female: "", others: "" },
      FY2022_23: { male: "", female: "", others: "" },
    },
    workers: {
      FY2024_25: { male: "", female: "", others: "" },
      FY2023_24: { male: "", female: "", others: "" },
      FY2022_23: { male: "", female: "", others: "" },
    },
  });

  const handleChange = (setter, category, field, value) => {
    setter((prev) => ({
      ...prev,
      [category]: { ...prev[category], [field]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { employees, workers, women, turnover };
    console.log("Section IV Data:", formData);
    if (onNext) onNext(formData);
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
            background: #fff;
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
            color: #444;
          }
          .form-group input {
            width: 100%;
            padding: 6px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          .section-title {
            margin-top: 20px;
            color: #007bff;
          }
          .submit-btn {
            width: 100%;
            padding: 12px;
            background: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
          }
          .submit-btn:hover {
            background: #0056b3;
          }
        `}
      </style>

      <div className="form-container">
        <h2>Section IV: Employees</h2>
        <form onSubmit={handleSubmit}>
          <h3 className="section-title">Employees</h3>
          <div className="form-group">
            <label>Permanent Employees (Total, Male, Female, Others)</label>
            <input
              placeholder="Total"
              value={employees.permanent.total}
              onChange={(e) =>
                handleChange(setEmployees, "permanent", "total", e.target.value)
              }
            />
            <input
              placeholder="Male"
              value={employees.permanent.male}
              onChange={(e) =>
                handleChange(setEmployees, "permanent", "male", e.target.value)
              }
            />
            <input
              placeholder="Female"
              value={employees.permanent.female}
              onChange={(e) =>
                handleChange(setEmployees, "permanent", "female", e.target.value)
              }
            />
            <input
              placeholder="Others"
              value={employees.permanent.others}
              onChange={(e) =>
                handleChange(setEmployees, "permanent", "others", e.target.value)
              }
            />
          </div>

          <h3 className="section-title">Workers</h3>
          <div className="form-group">
            <label>Permanent Workers</label>
            <input
              value={workers.permanent}
              onChange={(e) =>
                setWorkers({ ...workers, permanent: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Other than Permanent Workers</label>
            <input
              value={workers.otherThanPermanent}
              onChange={(e) =>
                setWorkers({ ...workers, otherThanPermanent: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Total Workers</label>
            <input
              value={workers.total}
              onChange={(e) => setWorkers({ ...workers, total: e.target.value })}
            />
          </div>

          <h3 className="section-title">Women Representation</h3>
          <div className="form-group">
            <label>Board of Directors (Total, Female)</label>
            <input
              placeholder="Total"
              value={women.boardDirectors.total}
              onChange={(e) =>
                setWomen({
                  ...women,
                  boardDirectors: {
                    ...women.boardDirectors,
                    total: e.target.value,
                  },
                })
              }
            />
            <input
              placeholder="Female"
              value={women.boardDirectors.female}
              onChange={(e) =>
                setWomen({
                  ...women,
                  boardDirectors: {
                    ...women.boardDirectors,
                    female: e.target.value,
                  },
                })
              }
            />
          </div>

          <h3 className="section-title">Turnover Rate (Permanent Employees & Workers)</h3>
          <div className="form-group">
            <label>FY 2024-25 (Male, Female, Others)</label>
            <input
              placeholder="Male"
              value={turnover.employees.FY2024_25.male}
              onChange={(e) =>
                setTurnover({
                  ...turnover,
                  employees: {
                    ...turnover.employees,
                    FY2024_25: {
                      ...turnover.employees.FY2024_25,
                      male: e.target.value,
                    },
                  },
                })
              }
            />
            <input
              placeholder="Female"
              value={turnover.employees.FY2024_25.female}
              onChange={(e) =>
                setTurnover({
                  ...turnover,
                  employees: {
                    ...turnover.employees,
                    FY2024_25: {
                      ...turnover.employees.FY2024_25,
                      female: e.target.value,
                    },
                  },
                })
              }
            />
            <input
              placeholder="Others"
              value={turnover.employees.FY2024_25.others}
              onChange={(e) =>
                setTurnover({
                  ...turnover,
                  employees: {
                    ...turnover.employees,
                    FY2024_25: {
                      ...turnover.employees.FY2024_25,
                      others: e.target.value,
                    },
                  },
                })
              }
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

