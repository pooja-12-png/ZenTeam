import React from "react";

export default function Principle5({ formData, setFormData }) {
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      principle5: {
        ...prev.principle5,
        [field]: value,
      },
    }));
  };

  const handleNestedChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      principle5: {
        ...prev.principle5,
        [section]: {
          ...prev.principle5[section],
          [field]: value,
        },
      },
    }));
  };

  return (
    <div className="card mx-auto">
      <h3 className="section-header text-center">
        Principle 5 – Businesses should respect and promote human rights
      </h3>

      {/* Essential Indicators */}
      <div className="mb-8">
        <h4 className="subsection-header">Essential Indicators</h4>
      </div>

      {/* Question 1 - Human rights training */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          1. Employees and workers who have been provided training on human
          rights issues and policy(ies) of the Company:
        </h5>

        <div className="space-y-6">
          {[
            "Permanent",
            "Other than Permanent",
            "Total Employees",
            "Permanent Workers",
            "Other than Permanent Workers",
            "Total Workers",
          ].map((category) => (
            <div key={category} className="bg-gray-50 rounded-lg p-6">
              <h6 className="font-semibold text-gray-700 mb-4">{category}</h6>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label text-sm">FY 2024-25</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Total (A), No. covered (B), % (B/A)"
                    value={
                      formData.principle5?.humanRightsTraining?.[
                        `${category
                          .toLowerCase()
                          .replace(/\s+/g, "_")}_fy2024_25`
                      ] || ""
                    }
                    onChange={(e) =>
                      handleNestedChange(
                        "humanRightsTraining",
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
                    placeholder="Total (C), No. covered (D), % (D/C)"
                    value={
                      formData.principle5?.humanRightsTraining?.[
                        `${category
                          .toLowerCase()
                          .replace(/\s+/g, "_")}_fy2023_24`
                      ] || ""
                    }
                    onChange={(e) =>
                      handleNestedChange(
                        "humanRightsTraining",
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

      {/* Question 2 - Minimum wages */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          2. Details of minimum wages paid to employees and workers:
        </h5>

        <div className="space-y-6">
          {[
            "Permanent Employees - Male",
            "Permanent Employees - Female",
            "Permanent Employees - Others",
            "Other than Permanent Employees - Male",
            "Other than Permanent Employees - Female",
            "Other than Permanent Employees - Others",
            "Workers - Permanent",
            "Workers - Other than Permanent",
            "Workers - Male",
            "Workers - Female",
          ].map((category) => (
            <div key={category} className="bg-gray-50 rounded-lg p-6">
              <h6 className="font-semibold text-gray-700 mb-4">{category}</h6>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label text-sm">FY 2024-25</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Total (A), Equal to Min Wage: No. (B), % (B/A), More than Min Wage: No. (C), % (C/A)"
                    value={
                      formData.principle5?.minimumWages?.[
                        `${category
                          .toLowerCase()
                          .replace(/\s+/g, "_")
                          .replace(/-/g, "_")}_fy2024_25`
                      ] || ""
                    }
                    onChange={(e) =>
                      handleNestedChange(
                        "minimumWages",
                        `${category
                          .toLowerCase()
                          .replace(/\s+/g, "_")
                          .replace(/-/g, "_")}_fy2024_25`,
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
                    placeholder="Total (D), Equal to Min Wage: No. (E), % (E/D), More than Min Wage: No. (F), % (F/D)"
                    value={
                      formData.principle5?.minimumWages?.[
                        `${category
                          .toLowerCase()
                          .replace(/\s+/g, "_")
                          .replace(/-/g, "_")}_fy2023_24`
                      ] || ""
                    }
                    onChange={(e) =>
                      handleNestedChange(
                        "minimumWages",
                        `${category
                          .toLowerCase()
                          .replace(/\s+/g, "_")
                          .replace(/-/g, "_")}_fy2023_24`,
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

      {/* Question 3a - Median remuneration */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          3. a. Median remuneration/wages:
        </h5>

        <div className="space-y-6">
          {[
            "Board of Directors",
            "Key Managerial Personnel",
            "Employees other than BoD and KMP",
            "Workers",
          ].map((category) => (
            <div key={category} className="bg-gray-50 rounded-lg p-6">
              <h6 className="font-semibold text-gray-700 mb-4">{category}</h6>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="form-label text-sm">Male</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Number, Median remuneration (₹ Lakhs per annum)"
                    value={
                      formData.principle5?.medianRemuneration?.[
                        `${category.toLowerCase().replace(/\s+/g, "_")}_male`
                      ] || ""
                    }
                    onChange={(e) =>
                      handleNestedChange(
                        "medianRemuneration",
                        `${category.toLowerCase().replace(/\s+/g, "_")}_male`,
                        e.target.value
                      )
                    }
                  />
                </div>

                <div>
                  <label className="form-label text-sm">Female</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Number, Median remuneration (₹ Lakhs per annum)"
                    value={
                      formData.principle5?.medianRemuneration?.[
                        `${category.toLowerCase().replace(/\s+/g, "_")}_female`
                      ] || ""
                    }
                    onChange={(e) =>
                      handleNestedChange(
                        "medianRemuneration",
                        `${category.toLowerCase().replace(/\s+/g, "_")}_female`,
                        e.target.value
                      )
                    }
                  />
                </div>

                <div>
                  <label className="form-label text-sm">Others</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Number, Median remuneration (₹ Lakhs per annum)"
                    value={
                      formData.principle5?.medianRemuneration?.[
                        `${category.toLowerCase().replace(/\s+/g, "_")}_others`
                      ] || ""
                    }
                    onChange={(e) =>
                      handleNestedChange(
                        "medianRemuneration",
                        `${category.toLowerCase().replace(/\s+/g, "_")}_others`,
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

      {/* Question 3b - Gross wages to females */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          3. b. Gross wages paid to females as % of total wages paid by the
          entity:
        </h5>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="form-label">FY 2024-25</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter percentage"
              value={
                formData.principle5?.femaleWagesPercentage?.fy2024_25 || ""
              }
              onChange={(e) =>
                handleNestedChange(
                  "femaleWagesPercentage",
                  "fy2024_25",
                  e.target.value
                )
              }
            />
          </div>

          <div>
            <label className="form-label">FY 2023-24</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter percentage"
              value={
                formData.principle5?.femaleWagesPercentage?.fy2023_24 || ""
              }
              onChange={(e) =>
                handleNestedChange(
                  "femaleWagesPercentage",
                  "fy2023_24",
                  e.target.value
                )
              }
            />
          </div>
        </div>
      </div>

      {/* Question 4 - Focal point for human rights */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          4. Do you have a focal point (Individual/Committee) responsible for
          addressing human rights impacts or issues caused or contributed to by
          the business? (Yes/No):
        </h5>

        <div>
          <textarea
            className="form-textarea"
            placeholder="Yes/No and provide details..."
            value={formData.principle5?.humanRightsFocalPoint || ""}
            onChange={(e) =>
              handleInputChange("humanRightsFocalPoint", e.target.value)
            }
          />
        </div>
      </div>

      {/* Question 5 - Internal mechanisms */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          5. Describe the internal mechanisms in place to redress grievances
          related to human rights issues:
        </h5>

        <div>
          <textarea
            className="form-textarea"
            placeholder="Describe internal mechanisms for human rights grievance redress..."
            value={formData.principle5?.internalMechanisms || ""}
            onChange={(e) =>
              handleInputChange("internalMechanisms", e.target.value)
            }
          />
        </div>
      </div>

      {/* Question 6 - Complaints by employees and workers */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          6. Number of complaints on the following made by employees and
          workers:
        </h5>

        <div className="space-y-6">
          {[
            "Sexual Harassment",
            "Discrimination at Workplace",
            "Child Labor",
            "Forced Labor/Involuntary Labor",
            "Wages",
            "Other human rights related issues",
          ].map((issue) => (
            <div key={issue} className="bg-gray-50 rounded-lg p-6">
              <h6 className="font-semibold text-gray-700 mb-4">{issue}</h6>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label text-sm">FY 2024-25</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Filed during year, Pending at end, Remarks"
                    value={
                      formData.principle5?.complaints?.[
                        `${issue
                          .toLowerCase()
                          .replace(/\s+/g, "_")
                          .replace(/\//g, "_")}_fy2024_25`
                      ] || ""
                    }
                    onChange={(e) =>
                      handleNestedChange(
                        "complaints",
                        `${issue
                          .toLowerCase()
                          .replace(/\s+/g, "_")
                          .replace(/\//g, "_")}_fy2024_25`,
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
                    placeholder="Filed during year, Pending at end, Remarks"
                    value={
                      formData.principle5?.complaints?.[
                        `${issue
                          .toLowerCase()
                          .replace(/\s+/g, "_")
                          .replace(/\//g, "_")}_fy2023_24`
                      ] || ""
                    }
                    onChange={(e) =>
                      handleNestedChange(
                        "complaints",
                        `${issue
                          .toLowerCase()
                          .replace(/\s+/g, "_")
                          .replace(/\//g, "_")}_fy2023_24`,
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

      {/* Question 7 - POSH complaints */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          7. Complaints filed under the Sexual Harassment of Women at Workplace
          (Prevention, Prohibition and Redressal) Act, 2013:
        </h5>

        <div className="space-y-6">
          {[
            "Total complaints reported",
            "Complaints on POSH as a % of female employees/workers",
            "Complaints on POSH upheld",
          ].map((particular) => (
            <div key={particular} className="bg-gray-50 rounded-lg p-6">
              <h6 className="font-semibold text-gray-700 mb-4">{particular}</h6>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label text-sm">FY 2024-25</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Filed during the year"
                    value={
                      formData.principle5?.poshComplaints?.[
                        `${particular
                          .toLowerCase()
                          .replace(/\s+/g, "_")
                          .replace(/\//g, "_")
                          .replace(/%/g, "percent")}_fy2024_25`
                      ] || ""
                    }
                    onChange={(e) =>
                      handleNestedChange(
                        "poshComplaints",
                        `${particular
                          .toLowerCase()
                          .replace(/\s+/g, "_")
                          .replace(/\//g, "_")
                          .replace(/%/g, "percent")}_fy2024_25`,
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
                    placeholder="Filed during the year"
                    value={
                      formData.principle5?.poshComplaints?.[
                        `${particular
                          .toLowerCase()
                          .replace(/\s+/g, "_")
                          .replace(/\//g, "_")
                          .replace(/%/g, "percent")}_fy2023_24`
                      ] || ""
                    }
                    onChange={(e) =>
                      handleNestedChange(
                        "poshComplaints",
                        `${particular
                          .toLowerCase()
                          .replace(/\s+/g, "_")
                          .replace(/\//g, "_")
                          .replace(/%/g, "percent")}_fy2023_24`,
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

      {/* Question 8 - Prevention of adverse consequences */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          8. Mechanism to prevent adverse consequences to the complainant in
          discrimination and harassment cases:
        </h5>

        <div>
          <textarea
            className="form-textarea"
            placeholder="Describe mechanisms to prevent adverse consequences to complainants..."
            value={formData.principle5?.preventAdverseConsequences || ""}
            onChange={(e) =>
              handleInputChange("preventAdverseConsequences", e.target.value)
            }
          />
        </div>
      </div>

      {/* Question 9 - Human rights in business agreements */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          9. Do human rights requirements form part of your business agreements
          and contracts? (Yes/No):
        </h5>

        <div>
          <textarea
            className="form-textarea"
            placeholder="Yes/No and provide details..."
            value={formData.principle5?.humanRightsInContracts || ""}
            onChange={(e) =>
              handleInputChange("humanRightsInContracts", e.target.value)
            }
          />
        </div>
      </div>

      {/* Question 10 - Assessments */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          10. Assessments for the year:
        </h5>

        <div className="space-y-6">
          {[
            "Child Labor",
            "Forced/Involuntary Labor",
            "Sexual Harassment",
            "Discrimination at workplace",
            "Wages",
            "Others",
          ].map((particular) => (
            <div key={particular} className="bg-gray-50 rounded-lg p-6">
              <h6 className="font-semibold text-gray-700 mb-4">{particular}</h6>
              <div>
                <label className="form-label text-sm">
                  % of plants and offices assessed
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="% assessed by entity or statutory authorities or third parties"
                  value={
                    formData.principle5?.assessments?.[
                      `${particular
                        .toLowerCase()
                        .replace(/\s+/g, "_")
                        .replace(/\//g, "_")}_percentage`
                    ] || ""
                  }
                  onChange={(e) =>
                    handleNestedChange(
                      "assessments",
                      `${particular
                        .toLowerCase()
                        .replace(/\s+/g, "_")
                        .replace(/\//g, "_")}_percentage`,
                      e.target.value
                    )
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Question 11 - Corrective actions */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          11. Provide details of any corrective actions taken or underway to
          address significant risks/concerns arising from the assessments at
          Question 10 above:
        </h5>

        <div>
          <textarea
            className="form-textarea"
            placeholder="Describe corrective actions taken or underway..."
            value={formData.principle5?.correctiveActions || ""}
            onChange={(e) =>
              handleInputChange("correctiveActions", e.target.value)
            }
          />
        </div>
      </div>

      {/* Leadership Indicators */}
      <div className="mb-8">
        <h4 className="subsection-header">Leadership Indicators</h4>
      </div>

      {/* Leadership Question 1 - Business process modifications */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          1. Details of a business process being modified/introduced as a result
          of addressing human rights grievances/complaints:
        </h5>

        <div>
          <textarea
            className="form-textarea"
            placeholder="Describe business process modifications made to address human rights grievances..."
            value={formData.principle5?.businessProcessModifications || ""}
            onChange={(e) =>
              handleInputChange("businessProcessModifications", e.target.value)
            }
          />
        </div>
      </div>

      {/* Leadership Question 2 - Human rights due diligence */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          2. Details of the scope and coverage of any Human rights due-diligence
          conducted:
        </h5>

        <div>
          <textarea
            className="form-textarea"
            placeholder="Describe scope and coverage of human rights due-diligence..."
            value={formData.principle5?.humanRightsDueDiligence || ""}
            onChange={(e) =>
              handleInputChange("humanRightsDueDiligence", e.target.value)
            }
          />
        </div>
      </div>

      {/* Leadership Question 3 - Accessibility for differently abled visitors */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          3. Is the premise/office of the entity accessible to differently abled
          visitors, as per the requirements of the Rights of Persons with
          Disabilities Act, 2016?:
        </h5>

        <div>
          <textarea
            className="form-textarea"
            placeholder="Yes/No and provide details of accessibility measures..."
            value={formData.principle5?.accessibilityForVisitors || ""}
            onChange={(e) =>
              handleInputChange("accessibilityForVisitors", e.target.value)
            }
          />
        </div>
      </div>

      {/* Leadership Question 4 - Value chain assessment */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          4. Details on assessment of value chain partners:
        </h5>

        <div className="space-y-6">
          {[
            "Sexual harassment",
            "Discrimination at workplace",
            "Child labor",
            "Forced/involuntary labor",
            "Wages",
            "Others",
          ].map((riskCategory) => (
            <div key={riskCategory} className="bg-gray-50 rounded-lg p-6">
              <h6 className="font-semibold text-gray-700 mb-4">
                {riskCategory}
              </h6>
              <div>
                <label className="form-label text-sm">
                  % of value chain partners assessed
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="% of value chain partners (by value of business) that were assessed"
                  value={
                    formData.principle5?.valueChainAssessment?.[
                      `${riskCategory
                        .toLowerCase()
                        .replace(/\s+/g, "_")
                        .replace(/\//g, "_")}_percentage`
                    ] || ""
                  }
                  onChange={(e) =>
                    handleNestedChange(
                      "valueChainAssessment",
                      `${riskCategory
                        .toLowerCase()
                        .replace(/\s+/g, "_")
                        .replace(/\//g, "_")}_percentage`,
                      e.target.value
                    )
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership Question 5 - Value chain corrective actions */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          5. Provide details of any corrective actions taken or underway to
          address significant risks/concerns arising from the assessments at
          Question 4 above:
        </h5>

        <div>
          <textarea
            className="form-textarea"
            placeholder="Describe corrective actions for value chain partner risks/concerns..."
            value={formData.principle5?.valueChainCorrectiveActions || ""}
            onChange={(e) =>
              handleInputChange("valueChainCorrectiveActions", e.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
}
