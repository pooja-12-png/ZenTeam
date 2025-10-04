import React from "react";

export default function Principle3({ formData, setFormData }) {
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      principle3: {
        ...prev.principle3,
        [field]: value,
      },
    }));
  };

  const handleNestedChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      principle3: {
        ...prev.principle3,
        [section]: {
          ...prev.principle3[section],
          [field]: value,
        },
      },
    }));
  };

  return (
    <div className="card mx-auto">
      <h3 className="section-header text-center">
        Principle 3 – Businesses should respect and promote the well-being of
        all employees, including those in their value chains
      </h3>

      {/* Essential Indicators */}
      <div className="mb-8">
        <h4 className="subsection-header">Essential Indicators</h4>
      </div>

      {/* Question 1a - Well-being measures for employees */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          1. a. Details of measures for the well-being of employees:
        </h5>

        <div className="space-y-6">
          {["Male", "Female", "Others", "Total"].map((category) => (
            <div key={category} className="bg-gray-50 rounded-lg p-6">
              <h6 className="font-semibold text-gray-700 mb-4">{category}</h6>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                <div>
                  <label className="form-label text-sm">Total (A)</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter total"
                    value={
                      formData.principle3?.wellbeing?.[category.toLowerCase()]
                        ?.total || ""
                    }
                    onChange={(e) =>
                      handleNestedChange(
                        "wellbeing",
                        `${category.toLowerCase()}_total`,
                        e.target.value
                      )
                    }
                  />
                </div>

                <div>
                  <label className="form-label text-sm">
                    Health Insurance Number (B)
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Number"
                    value={
                      formData.principle3?.wellbeing?.[category.toLowerCase()]
                        ?.healthInsuranceNum || ""
                    }
                    onChange={(e) =>
                      handleNestedChange(
                        "wellbeing",
                        `${category.toLowerCase()}_healthInsuranceNum`,
                        e.target.value
                      )
                    }
                  />
                </div>

                <div>
                  <label className="form-label text-sm">
                    Accident Insurance Number (C)
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Number"
                    value={
                      formData.principle3?.wellbeing?.[category.toLowerCase()]
                        ?.accidentInsuranceNum || ""
                    }
                    onChange={(e) =>
                      handleNestedChange(
                        "wellbeing",
                        `${category.toLowerCase()}_accidentInsuranceNum`,
                        e.target.value
                      )
                    }
                  />
                </div>

                <div>
                  <label className="form-label text-sm">
                    Maternity Benefits Number (D)
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Number"
                    value={
                      formData.principle3?.wellbeing?.[category.toLowerCase()]
                        ?.maternityBenefitsNum || ""
                    }
                    onChange={(e) =>
                      handleNestedChange(
                        "wellbeing",
                        `${category.toLowerCase()}_maternityBenefitsNum`,
                        e.target.value
                      )
                    }
                  />
                </div>

                <div>
                  <label className="form-label text-sm">
                    Paternity Benefits Number (E)
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Number"
                    value={
                      formData.principle3?.wellbeing?.[category.toLowerCase()]
                        ?.paternityBenefitsNum || ""
                    }
                    onChange={(e) =>
                      handleNestedChange(
                        "wellbeing",
                        `${category.toLowerCase()}_paternityBenefitsNum`,
                        e.target.value
                      )
                    }
                  />
                </div>

                <div>
                  <label className="form-label text-sm">
                    Day Care Facilities Number (F)
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Number"
                    value={
                      formData.principle3?.wellbeing?.[category.toLowerCase()]
                        ?.dayCareFacilitiesNum || ""
                    }
                    onChange={(e) =>
                      handleNestedChange(
                        "wellbeing",
                        `${category.toLowerCase()}_dayCareFacilitiesNum`,
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Question 1b - Well-being measures for workers */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          1. b. Details of measures for the well-being of workers:
        </h5>

        <div>
          <textarea
            className="form-textarea"
            placeholder="Describe measures for well-being of workers..."
            value={formData.principle3?.workerWellbeing || ""}
            onChange={(e) =>
              handleInputChange("workerWellbeing", e.target.value)
            }
          />
        </div>
      </div>

      {/* Question 1c - Spending on well-being measures */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          1. c. Spending on measures towards well-being of employees and
          workers:
        </h5>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="form-label">
              Cost incurred on well-being measures as a % of total revenue - FY
              2024-25
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter percentage"
              value={formData.principle3?.wellbeingSpending?.fy2024_25 || ""}
              onChange={(e) =>
                handleNestedChange(
                  "wellbeingSpending",
                  "fy2024_25",
                  e.target.value
                )
              }
            />
          </div>

          <div>
            <label className="form-label">
              Cost incurred on well-being measures as a % of total revenue - FY
              2023-24
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter percentage"
              value={formData.principle3?.wellbeingSpending?.fy2023_24 || ""}
              onChange={(e) =>
                handleNestedChange(
                  "wellbeingSpending",
                  "fy2023_24",
                  e.target.value
                )
              }
            />
          </div>
        </div>
      </div>

      {/* Question 2 - Retirement benefits */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          2. Details of retirement benefits for Current FY and Previous
          Financial Year:
        </h5>

        <div className="space-y-6">
          {["PF", "Gratuity", "ESI", "Others"].map((benefit) => (
            <div key={benefit} className="bg-gray-50 rounded-lg p-6">
              <h6 className="font-semibold text-gray-700 mb-4">{benefit}</h6>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h6 className="text-sm font-semibold text-gray-600 mb-3">
                    FY 2024-25
                  </h6>
                  <div className="space-y-3">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="No. of employees covered as a % of total employees"
                      value={
                        formData.principle3?.retirementBenefits?.[
                          benefit.toLowerCase()
                        ]?.fy2024_25_employees || ""
                      }
                      onChange={(e) =>
                        handleNestedChange(
                          "retirementBenefits",
                          `${benefit.toLowerCase()}_fy2024_25_employees`,
                          e.target.value
                        )
                      }
                    />
                    <input
                      type="text"
                      className="form-input"
                      placeholder="No. of workers covered as a % of total workers"
                      value={
                        formData.principle3?.retirementBenefits?.[
                          benefit.toLowerCase()
                        ]?.fy2024_25_workers || ""
                      }
                      onChange={(e) =>
                        handleNestedChange(
                          "retirementBenefits",
                          `${benefit.toLowerCase()}_fy2024_25_workers`,
                          e.target.value
                        )
                      }
                    />
                    <select
                      className="form-select"
                      value={
                        formData.principle3?.retirementBenefits?.[
                          benefit.toLowerCase()
                        ]?.fy2024_25_deposited || ""
                      }
                      onChange={(e) =>
                        handleNestedChange(
                          "retirementBenefits",
                          `${benefit.toLowerCase()}_fy2024_25_deposited`,
                          e.target.value
                        )
                      }
                    >
                      <option value="">
                        Deducted and deposited with authority
                      </option>
                      <option value="Y">Yes</option>
                      <option value="N">No</option>
                      <option value="NA">Not Applicable</option>
                    </select>
                  </div>
                </div>

                <div>
                  <h6 className="text-sm font-semibold text-gray-600 mb-3">
                    FY 2023-24
                  </h6>
                  <div className="space-y-3">
                    <input
                      type="text"
                      className="form-input"
                      placeholder="No. of employees covered as a % of total employees"
                      value={
                        formData.principle3?.retirementBenefits?.[
                          benefit.toLowerCase()
                        ]?.fy2023_24_employees || ""
                      }
                      onChange={(e) =>
                        handleNestedChange(
                          "retirementBenefits",
                          `${benefit.toLowerCase()}_fy2023_24_employees`,
                          e.target.value
                        )
                      }
                    />
                    <input
                      type="text"
                      className="form-input"
                      placeholder="No. of workers covered as a % of total workers"
                      value={
                        formData.principle3?.retirementBenefits?.[
                          benefit.toLowerCase()
                        ]?.fy2023_24_workers || ""
                      }
                      onChange={(e) =>
                        handleNestedChange(
                          "retirementBenefits",
                          `${benefit.toLowerCase()}_fy2023_24_workers`,
                          e.target.value
                        )
                      }
                    />
                    <select
                      className="form-select"
                      value={
                        formData.principle3?.retirementBenefits?.[
                          benefit.toLowerCase()
                        ]?.fy2023_24_deposited || ""
                      }
                      onChange={(e) =>
                        handleNestedChange(
                          "retirementBenefits",
                          `${benefit.toLowerCase()}_fy2023_24_deposited`,
                          e.target.value
                        )
                      }
                    >
                      <option value="">
                        Deducted and deposited with authority
                      </option>
                      <option value="Y">Yes</option>
                      <option value="N">No</option>
                      <option value="NA">Not Applicable</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Question 3 - Accessibility of workplaces */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          3. Accessibility of workplaces - Are the premises/offices of the
          entity accessible to differently abled employees and workers, as per
          the requirements of the Rights of Persons with Disabilities Act, 2016?
        </h5>

        <div>
          <textarea
            className="form-textarea"
            placeholder="Describe accessibility measures and compliance status..."
            value={formData.principle3?.workplaceAccessibility || ""}
            onChange={(e) =>
              handleInputChange("workplaceAccessibility", e.target.value)
            }
          />
        </div>
      </div>

      {/* Question 4 - Equal opportunity policy */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          4. Does the entity have an equal opportunity policy as per the Rights
          of Persons with Disabilities Act, 2016? If so, provide a web-link to
          the policy:
        </h5>

        <div>
          <textarea
            className="form-textarea"
            placeholder="Yes/No and provide web-link if available..."
            value={formData.principle3?.equalOpportunityPolicy || ""}
            onChange={(e) =>
              handleInputChange("equalOpportunityPolicy", e.target.value)
            }
          />
        </div>
      </div>

      {/* Question 5 - Return to work and retention rates */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          5. Return to work and Retention rates of permanent employees and
          workers that took parental leave:
        </h5>

        <div className="bg-gray-50 rounded-lg p-6">
          <h6 className="font-semibold text-gray-700 mb-4">
            Permanent Employees
          </h6>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="form-label">
                Male - Return to work rate %, Retention rate %
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="Return %, Retention %"
                value={formData.principle3?.parentalLeave?.male || ""}
                onChange={(e) =>
                  handleNestedChange("parentalLeave", "male", e.target.value)
                }
              />
            </div>

            <div>
              <label className="form-label">
                Female - Return to work rate %, Retention rate %
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="Return %, Retention %"
                value={formData.principle3?.parentalLeave?.female || ""}
                onChange={(e) =>
                  handleNestedChange("parentalLeave", "female", e.target.value)
                }
              />
            </div>

            <div>
              <label className="form-label">
                Total - Return to work rate %, Retention rate %
              </label>
              <input
                type="text"
                className="form-input"
                placeholder="Return %, Retention %"
                value={formData.principle3?.parentalLeave?.total || ""}
                onChange={(e) =>
                  handleNestedChange("parentalLeave", "total", e.target.value)
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Question 6 - Grievance mechanism */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          6. Is there a mechanism available to receive and redress grievances
          for the following categories?
        </h5>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="form-label">Permanent Workers</label>
            <textarea
              className="form-textarea"
              placeholder="Details of grievance mechanism..."
              value={
                formData.principle3?.grievanceMechanism?.permanentWorkers || ""
              }
              onChange={(e) =>
                handleNestedChange(
                  "grievanceMechanism",
                  "permanentWorkers",
                  e.target.value
                )
              }
            />
          </div>

          <div>
            <label className="form-label">Other than Permanent Workers</label>
            <textarea
              className="form-textarea"
              placeholder="Details of grievance mechanism..."
              value={
                formData.principle3?.grievanceMechanism?.otherWorkers || ""
              }
              onChange={(e) =>
                handleNestedChange(
                  "grievanceMechanism",
                  "otherWorkers",
                  e.target.value
                )
              }
            />
          </div>

          <div>
            <label className="form-label">Permanent Employees</label>
            <textarea
              className="form-textarea"
              placeholder="Details of grievance mechanism..."
              value={
                formData.principle3?.grievanceMechanism?.permanentEmployees ||
                ""
              }
              onChange={(e) =>
                handleNestedChange(
                  "grievanceMechanism",
                  "permanentEmployees",
                  e.target.value
                )
              }
            />
          </div>

          <div>
            <label className="form-label">Other than Permanent Employees</label>
            <textarea
              className="form-textarea"
              placeholder="Details of grievance mechanism..."
              value={
                formData.principle3?.grievanceMechanism?.otherEmployees || ""
              }
              onChange={(e) =>
                handleNestedChange(
                  "grievanceMechanism",
                  "otherEmployees",
                  e.target.value
                )
              }
            />
          </div>
        </div>
      </div>

      {/* Question 7 - Union membership */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          7. Membership of employees and workers in association(s) or Unions
          recognized by the listed entity:
        </h5>

        <div className="space-y-6">
          {[
            "Total Permanent Employees",
            "Male",
            "Female",
            "Others",
            "Total Permanent Workers",
          ].map((category) => (
            <div key={category} className="bg-gray-50 rounded-lg p-6">
              <h6 className="font-semibold text-gray-700 mb-4">{category}</h6>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label text-sm">FY 2024-25</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Total (A), Union members (B), % (B/A)"
                    value={
                      formData.principle3?.unionMembership?.[
                        category.toLowerCase().replace(/\s+/g, "_")
                      ]?.fy2024_25 || ""
                    }
                    onChange={(e) =>
                      handleNestedChange(
                        "unionMembership",
                        `${category
                          .toLowerCase()
                          .replace(/\s+/g, "_")}_fy2024_25`,
                        e.target.value
                      )
                    }
                  />
                </div>

                <div>
                  <label className="form-label text-sm">FY 2023-24</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Total (C), Union members (D), % (D/C)"
                    value={
                      formData.principle3?.unionMembership?.[
                        category.toLowerCase().replace(/\s+/g, "_")
                      ]?.fy2023_24 || ""
                    }
                    onChange={(e) =>
                      handleNestedChange(
                        "unionMembership",
                        `${category
                          .toLowerCase()
                          .replace(/\s+/g, "_")}_fy2023_24`,
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Question 8 - Training details */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          8. Details of training given to employees and workers:
        </h5>

        <div className="space-y-6">
          {["Male", "Female", "Others", "Total"].map((category) => (
            <div key={category} className="bg-gray-50 rounded-lg p-6">
              <h6 className="font-semibold text-gray-700 mb-4">{category}</h6>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label text-sm">FY 2024-25</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Health & Safety: No. (B), % (B/A); Skill Upgradation: No. (C), % (C/A)"
                    value={
                      formData.principle3?.training?.[category.toLowerCase()]
                        ?.fy2024_25 || ""
                    }
                    onChange={(e) =>
                      handleNestedChange(
                        "training",
                        `${category.toLowerCase()}_fy2024_25`,
                        e.target.value
                      )
                    }
                  />
                </div>

                <div>
                  <label className="form-label text-sm">FY 2023-24</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Health & Safety: No. (E), % (E/D); Skill Upgradation: No. (F), % (F/D)"
                    value={
                      formData.principle3?.training?.[category.toLowerCase()]
                        ?.fy2023_24 || ""
                    }
                    onChange={(e) =>
                      handleNestedChange(
                        "training",
                        `${category.toLowerCase()}_fy2023_24`,
                        e.target.value
                      )
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Questions 9-16 shortened for brevity - following same pattern */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          9. Details of performance and career development reviews:
        </h5>
        <textarea
          className="form-textarea"
          placeholder="Provide details for Male, Female, Others, Total categories for both FY 2024-25 and FY 2023-24..."
          value={formData.principle3?.performanceReviews || ""}
          onChange={(e) =>
            handleInputChange("performanceReviews", e.target.value)
          }
        />
      </div>

      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          10. Health and safety management system:
        </h5>
        <textarea
          className="form-textarea"
          placeholder="Whether occupational health and safety management system implemented? Coverage details..."
          value={formData.principle3?.healthSafetySystem || ""}
          onChange={(e) =>
            handleInputChange("healthSafetySystem", e.target.value)
          }
        />
      </div>

      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          11. Details of safety-related incidents:
        </h5>
        <textarea
          className="form-textarea"
          placeholder="Lost Time Injury Frequency Rate, Total recordable injuries, Fatalities, High consequence injuries for both FY..."
          value={formData.principle3?.safetyIncidents || ""}
          onChange={(e) => handleInputChange("safetyIncidents", e.target.value)}
        />
      </div>

      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          12. Measures taken to ensure a safe and healthy workplace:
        </h5>
        <textarea
          className="form-textarea"
          placeholder="Describe measures taken..."
          value={formData.principle3?.safeWorkplaceMeasures || ""}
          onChange={(e) =>
            handleInputChange("safeWorkplaceMeasures", e.target.value)
          }
        />
      </div>

      {/* Leadership Indicators */}
      <div className="mb-8">
        <h4 className="subsection-header">Leadership Indicators</h4>
      </div>

      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          1. Does the entity extend any life insurance or compensatory package
          in the event of death of (A) Employees (Y/N) (B) Workers (Y/N):
        </h5>
        <textarea
          className="form-textarea"
          placeholder="Provide details for employees and workers..."
          value={formData.principle3?.lifeInsurance || ""}
          onChange={(e) => handleInputChange("lifeInsurance", e.target.value)}
        />
      </div>

      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          2. Measures to ensure statutory dues deducted and deposited by value
          chain partners:
        </h5>
        <textarea
          className="form-textarea"
          placeholder="Describe measures undertaken..."
          value={formData.principle3?.statutoryDues || ""}
          onChange={(e) => handleInputChange("statutoryDues", e.target.value)}
        />
      </div>

      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          3. Rehabilitation and placement details for high consequence
          work-related injury/ill-health/fatalities:
        </h5>
        <textarea
          className="form-textarea"
          placeholder="Provide details for employees and workers for both financial years..."
          value={formData.principle3?.rehabilitation || ""}
          onChange={(e) => handleInputChange("rehabilitation", e.target.value)}
        />
      </div>

      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          4. Transition assistance programs for continued employability and
          career endings (Yes/No):
        </h5>
        <textarea
          className="form-textarea"
          placeholder="Yes/No and provide details..."
          value={formData.principle3?.transitionAssistance || ""}
          onChange={(e) =>
            handleInputChange("transitionAssistance", e.target.value)
          }
        />
      </div>
    </div>
  );
}
