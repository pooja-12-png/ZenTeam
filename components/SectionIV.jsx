import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SectionIV({ onNext }) {
  const navigate = useNavigate();

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
    navigate("/sectionV");
  };

  return (
    <div>
      {/* Internal CSS */}
      <style>
        {`
          .form-container {
            padding: 30px;
            max-width: 850px;
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
          .section-title {
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
          .row-inputs {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 10px;
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
        <h2>Section IV: Employees</h2>
        <form onSubmit={handleSubmit}>
          {/* Employees */}
          <h3 className="section-title">Employees</h3>
          <div className="form-group">
            <label>Permanent Employees (Total, Male, Female, Others)</label>
            <div className="row-inputs">
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
          </div>

          {/* Workers */}
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

          {/* Women */}
          <h3 className="section-title">Women Representation</h3>
          <div className="form-group">
            <label>Board of Directors (Total, Female)</label>
            <div className="row-inputs">
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
          </div>

          {/* Turnover */}
          <h3 className="section-title">
            Turnover Rate (Permanent Employees & Workers)
          </h3>
          <div className="form-group">
            <label>FY 2024-25 (Male, Female, Others)</label>
            <div className="row-inputs">
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
          </div>

          <button type="submit" className="submit-btn">
            Save & Next
          </button>
        </form>
      </div>
    </div>
  );
}
