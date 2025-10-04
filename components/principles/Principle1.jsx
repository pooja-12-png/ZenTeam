import React from "react";

export default function Principle1({ formData, setFormData }) {
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      principle1: {
        ...prev.principle1,
        [field]: value,
      },
    }));
  };

  const handleNestedChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      principle1: {
        ...prev.principle1,
        [section]: {
          ...prev.principle1[section],
          [field]: value,
        },
      },
    }));
  };

  return (
    <div className="card mx-auto">
      <h3 className="section-header">
        Principle 1 – Businesses should conduct and govern themselves with
        integrity, and in a manner that is Ethical, Transparent and Accountable
      </h3>

      {/* Essential Indicators */}
      <div className="mb-8">
        <h4 className="subsection-header">Essential Indicators</h4>
      </div>

      {/* Question 1 - Training and Awareness Programmes */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          1. Percentage coverage by training and awareness programmes on any of
          the principles during the financial year:
        </h5>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="form-label">Segment</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g., Board of Directors, Key Managerial Personnel"
              value={formData.principle1?.training?.segment || ""}
              onChange={(e) =>
                handleNestedChange("training", "segment", e.target.value)
              }
            />
          </div>

          <div>
            <label className="form-label">
              Total number of training and awareness programmes held
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter number"
              value={formData.principle1?.training?.totalPrograms || ""}
              onChange={(e) =>
                handleNestedChange("training", "totalPrograms", e.target.value)
              }
            />
          </div>

          <div>
            <label className="form-label">
              Topics/principles covered under the training and its impact
            </label>
            <textarea
              className="form-textarea"
              placeholder="Describe topics covered and impact..."
              value={formData.principle1?.training?.topicsCovered || ""}
              onChange={(e) =>
                handleNestedChange("training", "topicsCovered", e.target.value)
              }
            />
          </div>

          <div>
            <label className="form-label">
              % of persons in respective category covered by the awareness
              programmes
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter percentage"
              value={formData.principle1?.training?.percentageCovered || ""}
              onChange={(e) =>
                handleNestedChange(
                  "training",
                  "percentageCovered",
                  e.target.value
                )
              }
            />
          </div>
        </div>
      </div>

      {/* Question 2 - Fines/Penalties */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          2. Details of fines/penalties/punishment/award/compounding
          fees/settlement amount paid in proceedings (by the entity or by
          directors/KMPs) with regulators/law enforcement agencies/judicial
          institutions in the financial year:
        </h5>

        <div>
          <label className="form-label">
            Details (format as per SEBI (LODR) Regulations, 2015)
          </label>
          <textarea
            className="form-textarea"
            placeholder="Provide details of any fines, penalties, or settlements..."
            value={formData.principle1?.finesDetails || ""}
            onChange={(e) => handleInputChange("finesDetails", e.target.value)}
          />
        </div>
      </div>

      {/* Question 3 - Appeals/Revisions */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          3. Of the instances disclosed in Question 2 above, details of the
          Appeal/Revision preferred in cases where monetary or non-monetary
          action has been appealed:
        </h5>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="form-label">Case Details</label>
            <textarea
              className="form-textarea"
              placeholder="Provide case details..."
              value={formData.principle1?.appeals?.caseDetails || ""}
              onChange={(e) =>
                handleNestedChange("appeals", "caseDetails", e.target.value)
              }
            />
          </div>

          <div>
            <label className="form-label">
              Name of the regulatory/enforcement agencies/judicial institutions
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter agency name"
              value={formData.principle1?.appeals?.agencyName || ""}
              onChange={(e) =>
                handleNestedChange("appeals", "agencyName", e.target.value)
              }
            />
          </div>
        </div>
      </div>

      {/* Question 4 - Anti-corruption Policy */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          4. Does the entity have an anti-corruption or anti-bribery policy? If
          yes, provide details in brief and if available, provide a web-link to
          the policy:
        </h5>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="form-label">Policy details and brief</label>
            <textarea
              className="form-textarea"
              placeholder="Describe the anti-corruption policy..."
              value={formData.principle1?.antiCorruption?.policyDetails || ""}
              onChange={(e) =>
                handleNestedChange(
                  "antiCorruption",
                  "policyDetails",
                  e.target.value
                )
              }
            />
          </div>

          <div>
            <label className="form-label">Web-link to policy</label>
            <input
              type="url"
              className="form-input"
              placeholder="https://example.com/policy"
              value={formData.principle1?.antiCorruption?.webLink || ""}
              onChange={(e) =>
                handleNestedChange("antiCorruption", "webLink", e.target.value)
              }
            />
          </div>
        </div>
      </div>

      {/* Question 5 - Disciplinary Actions */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          5. Number of Directors/KMPs/employees/workers against whom
          disciplinary action was taken by any law enforcement agency for the
          charges of bribery/corruption:
        </h5>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h6 className="font-semibold text-gray-700 mb-4">Directors</h6>
            <div className="space-y-4">
              <div>
                <label className="form-label text-sm">FY 2024-25</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter number"
                  value={
                    formData.principle1?.disciplinary?.directors?.fy2024_25 ||
                    ""
                  }
                  onChange={(e) =>
                    handleNestedChange(
                      "disciplinary",
                      "directors_fy2024_25",
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
                  placeholder="Enter number"
                  value={
                    formData.principle1?.disciplinary?.directors?.fy2023_24 ||
                    ""
                  }
                  onChange={(e) =>
                    handleNestedChange(
                      "disciplinary",
                      "directors_fy2023_24",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h6 className="font-semibold text-gray-700 mb-4">KMPs</h6>
            <div className="space-y-4">
              <div>
                <label className="form-label text-sm">FY 2024-25</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter number"
                  value={
                    formData.principle1?.disciplinary?.kmps_fy2024_25 || ""
                  }
                  onChange={(e) =>
                    handleNestedChange(
                      "disciplinary",
                      "kmps_fy2024_25",
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
                  placeholder="Enter number"
                  value={
                    formData.principle1?.disciplinary?.kmps_fy2023_24 || ""
                  }
                  onChange={(e) =>
                    handleNestedChange(
                      "disciplinary",
                      "kmps_fy2023_24",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h6 className="font-semibold text-gray-700 mb-4">Employees</h6>
            <div className="space-y-4">
              <div>
                <label className="form-label text-sm">FY 2024-25</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter number"
                  value={
                    formData.principle1?.disciplinary?.employees_fy2024_25 || ""
                  }
                  onChange={(e) =>
                    handleNestedChange(
                      "disciplinary",
                      "employees_fy2024_25",
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
                  placeholder="Enter number"
                  value={
                    formData.principle1?.disciplinary?.employees_fy2023_24 || ""
                  }
                  onChange={(e) =>
                    handleNestedChange(
                      "disciplinary",
                      "employees_fy2023_24",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h6 className="font-semibold text-gray-700 mb-4">Workers</h6>
            <div className="space-y-4">
              <div>
                <label className="form-label text-sm">FY 2024-25</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter number"
                  value={
                    formData.principle1?.disciplinary?.workers_fy2024_25 || ""
                  }
                  onChange={(e) =>
                    handleNestedChange(
                      "disciplinary",
                      "workers_fy2024_25",
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
                  placeholder="Enter number"
                  value={
                    formData.principle1?.disciplinary?.workers_fy2023_24 || ""
                  }
                  onChange={(e) =>
                    handleNestedChange(
                      "disciplinary",
                      "workers_fy2023_24",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Question 6 - Conflict of Interest Complaints */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          6. Details of complaints with regard to conflict of interest:
        </h5>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div>
            <label className="form-label">Particular</label>
            <input
              type="text"
              className="form-input"
              placeholder="Type of complaint"
              value={formData.principle1?.conflicts?.particular || ""}
              onChange={(e) =>
                handleNestedChange("conflicts", "particular", e.target.value)
              }
            />
          </div>

          <div>
            <label className="form-label">FY 2024-25 Number</label>
            <input
              type="text"
              className="form-input"
              placeholder="Number"
              value={formData.principle1?.conflicts?.fy2024_25Number || ""}
              onChange={(e) =>
                handleNestedChange(
                  "conflicts",
                  "fy2024_25Number",
                  e.target.value
                )
              }
            />
          </div>

          <div>
            <label className="form-label">FY 2024-25 Remarks</label>
            <input
              type="text"
              className="form-input"
              placeholder="Remarks"
              value={formData.principle1?.conflicts?.fy2024_25Remarks || ""}
              onChange={(e) =>
                handleNestedChange(
                  "conflicts",
                  "fy2024_25Remarks",
                  e.target.value
                )
              }
            />
          </div>

          <div>
            <label className="form-label">FY 2023-24 Number</label>
            <input
              type="text"
              className="form-input"
              placeholder="Number"
              value={formData.principle1?.conflicts?.fy2023_24Number || ""}
              onChange={(e) =>
                handleNestedChange(
                  "conflicts",
                  "fy2023_24Number",
                  e.target.value
                )
              }
            />
          </div>

          <div>
            <label className="form-label">FY 2023-24 Remarks</label>
            <input
              type="text"
              className="form-input"
              placeholder="Remarks"
              value={formData.principle1?.conflicts?.fy2023_24Remarks || ""}
              onChange={(e) =>
                handleNestedChange(
                  "conflicts",
                  "fy2023_24Remarks",
                  e.target.value
                )
              }
            />
          </div>
        </div>
      </div>

      {/* Question 7 - Corrective Actions */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          7. Provide details of any corrective action taken or underway on
          issues related to fines/penalties/action taken by regulators/law
          enforcement agencies/judicial institutions, on cases of corruption and
          conflicts of interest:
        </h5>

        <div>
          <label className="form-label">Details</label>
          <textarea
            className="form-textarea"
            placeholder="Describe corrective actions taken or underway..."
            value={formData.principle1?.correctiveActions || ""}
            onChange={(e) =>
              handleInputChange("correctiveActions", e.target.value)
            }
          />
        </div>
      </div>

      {/* Question 8 - Accounts Payables */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          8. Number of days of accounts payables (Accounts payable *365)/(Cost
          of goods/services procured):
        </h5>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="form-label">FY 2024-25</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter number of days"
              value={formData.principle1?.accountsPayables?.fy2024_25 || ""}
              onChange={(e) =>
                handleNestedChange(
                  "accountsPayables",
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
              placeholder="Enter number of days"
              value={formData.principle1?.accountsPayables?.fy2023_24 || ""}
              onChange={(e) =>
                handleNestedChange(
                  "accountsPayables",
                  "fy2023_24",
                  e.target.value
                )
              }
            />
          </div>
        </div>
      </div>

      {/* Question 9 - Openness of Business */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          9. Open-ness of business:
        </h5>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <label className="form-label">Parameter</label>
            <input
              type="text"
              className="form-input"
              placeholder="Parameter name"
              value={formData.principle1?.openness?.parameter || ""}
              onChange={(e) =>
                handleNestedChange("openness", "parameter", e.target.value)
              }
            />
          </div>

          <div>
            <label className="form-label">Metric</label>
            <input
              type="text"
              className="form-input"
              placeholder="Metric"
              value={formData.principle1?.openness?.metric || ""}
              onChange={(e) =>
                handleNestedChange("openness", "metric", e.target.value)
              }
            />
          </div>

          <div>
            <label className="form-label">FY 2024-25</label>
            <input
              type="text"
              className="form-input"
              placeholder="Value"
              value={formData.principle1?.openness?.fy2024_25 || ""}
              onChange={(e) =>
                handleNestedChange("openness", "fy2024_25", e.target.value)
              }
            />
          </div>

          <div>
            <label className="form-label">FY 2023-24</label>
            <input
              type="text"
              className="form-input"
              placeholder="Value"
              value={formData.principle1?.openness?.fy2023_24 || ""}
              onChange={(e) =>
                handleNestedChange("openness", "fy2023_24", e.target.value)
              }
            />
          </div>
        </div>
      </div>

      {/* Leadership Indicators */}
      <div className="mb-8">
        <h4 className="subsection-header">Leadership Indicators</h4>
      </div>

      {/* Leadership Indicator 1 */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          1. Awareness programs conducted for value chain partners on any of the
          Principles during the financial year:
        </h5>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="form-label">
              Total number of awareness programs held
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter number"
              value={
                formData.principle1?.valueChainAwareness?.totalPrograms || ""
              }
              onChange={(e) =>
                handleNestedChange(
                  "valueChainAwareness",
                  "totalPrograms",
                  e.target.value
                )
              }
            />
          </div>

          <div>
            <label className="form-label">
              Topics/principles covered under the training
            </label>
            <textarea
              className="form-textarea"
              placeholder="Topics covered..."
              value={
                formData.principle1?.valueChainAwareness?.topicsCovered || ""
              }
              onChange={(e) =>
                handleNestedChange(
                  "valueChainAwareness",
                  "topicsCovered",
                  e.target.value
                )
              }
            />
          </div>

          <div>
            <label className="form-label">
              %age of value chain partners covered (by value of business done
              with such partners) under the awareness programs
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter percentage"
              value={
                formData.principle1?.valueChainAwareness?.percentageCovered ||
                ""
              }
              onChange={(e) =>
                handleNestedChange(
                  "valueChainAwareness",
                  "percentageCovered",
                  e.target.value
                )
              }
            />
          </div>
        </div>
      </div>

      {/* Leadership Indicator 2 */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          2. Does the entity have processes in place to avoid/manage conflict of
          interests involving members of the Board? (Yes/No) If Yes, provide
          details of the same:
        </h5>

        <div>
          <textarea
            className="form-textarea"
            placeholder="Yes/No and provide details if yes..."
            value={formData.principle1?.boardConflictProcesses || ""}
            onChange={(e) =>
              handleInputChange("boardConflictProcesses", e.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
}
