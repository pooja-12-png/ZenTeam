import React from "react";

export default function Principle2({ formData, setFormData }) {
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      principle2: {
        ...prev.principle2,
        [field]: value,
      },
    }));
  };

  const handleNestedChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      principle2: {
        ...prev.principle2,
        [section]: {
          ...prev.principle2[section],
          [field]: value,
        },
      },
    }));
  };

  return (
    <div className="card mx-auto">
      <h3 className="section-header text-center">
        Principle 2 – Business should provide goods and services in a manner
        that is sustainable and safe
      </h3>

      {/* Essential Indicators */}
      <div className="mb-8">
        <h4 className="subsection-header">Essential Indicators</h4>
      </div>

      {/* Question 1 - R&D and Capital Expenditure */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          1. Percentage of R&D and capital expenditure (capex) investments in
          specific technologies to improve the environmental and social impacts
          of product and processes to total R&D and capex investments made by
          the entity, respectively:
        </h5>

        <div className="space-y-6">
          {/* R&D Investment */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h6 className="font-semibold text-gray-700 mb-4">R&D Investment</h6>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="form-label">Particulars</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="R&D"
                  value="R&D"
                  readOnly
                />
              </div>

              <div>
                <label className="form-label">FY 2024-25 (₹ Crores)</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter amount in crores"
                  value={formData.principle2?.rdInvestment?.fy2024_25 || ""}
                  onChange={(e) =>
                    handleNestedChange(
                      "rdInvestment",
                      "fy2024_25",
                      e.target.value
                    )
                  }
                />
              </div>

              <div>
                <label className="form-label">FY 2023-24 (₹ Crores)</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter amount in crores"
                  value={formData.principle2?.rdInvestment?.fy2023_24 || ""}
                  onChange={(e) =>
                    handleNestedChange(
                      "rdInvestment",
                      "fy2023_24",
                      e.target.value
                    )
                  }
                />
              </div>

              <div>
                <label className="form-label">
                  Details of improvements in environmental and social impacts
                </label>
                <textarea
                  className="form-textarea"
                  placeholder="Describe the improvements..."
                  value={formData.principle2?.rdInvestment?.impactDetails || ""}
                  onChange={(e) =>
                    handleNestedChange(
                      "rdInvestment",
                      "impactDetails",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>
          </div>

          {/* Capex Investment */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h6 className="font-semibold text-gray-700 mb-4">
              Capital Expenditure (Capex)
            </h6>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="form-label">Particulars</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Capex"
                  value="Capex"
                  readOnly
                />
              </div>

              <div>
                <label className="form-label">FY 2024-25 (₹ Crores)</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter amount in crores"
                  value={formData.principle2?.capexInvestment?.fy2024_25 || ""}
                  onChange={(e) =>
                    handleNestedChange(
                      "capexInvestment",
                      "fy2024_25",
                      e.target.value
                    )
                  }
                />
              </div>

              <div>
                <label className="form-label">FY 2023-24 (₹ Crores)</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter amount in crores"
                  value={formData.principle2?.capexInvestment?.fy2023_24 || ""}
                  onChange={(e) =>
                    handleNestedChange(
                      "capexInvestment",
                      "fy2023_24",
                      e.target.value
                    )
                  }
                />
              </div>

              <div>
                <label className="form-label">
                  Details of improvements in environmental and social impacts
                </label>
                <textarea
                  className="form-textarea"
                  placeholder="Describe the improvements..."
                  value={
                    formData.principle2?.capexInvestment?.impactDetails || ""
                  }
                  onChange={(e) =>
                    handleNestedChange(
                      "capexInvestment",
                      "impactDetails",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Question 2 - Sustainable Sourcing */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          2. Sustainable Sourcing:
        </h5>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="form-label">
              a. Does the entity have procedures in place for sustainable
              sourcing? (Yes/No)
            </label>
            <select
              className="form-select"
              value={
                formData.principle2?.sustainableSourcing?.hasProcedures || ""
              }
              onChange={(e) =>
                handleNestedChange(
                  "sustainableSourcing",
                  "hasProcedures",
                  e.target.value
                )
              }
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div>
            <label className="form-label">
              b. If yes, what percentage of inputs were sourced sustainably?
            </label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter percentage"
              value={
                formData.principle2?.sustainableSourcing
                  ?.percentageSustainable || ""
              }
              onChange={(e) =>
                handleNestedChange(
                  "sustainableSourcing",
                  "percentageSustainable",
                  e.target.value
                )
              }
            />
          </div>
        </div>
      </div>

      {/* Question 3 - Product Reclaim Processes */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          3. Describe the processes in place to safely reclaim your products for
          recycling, reusing and disposing at the end of life for:
        </h5>

        <div className="space-y-6">
          <div>
            <label className="form-label">
              (a) Plastics (including packaging)
            </label>
            <textarea
              className="form-textarea"
              placeholder="Describe processes for plastic recycling, reusing and disposal..."
              value={formData.principle2?.productReclaim?.plastics || ""}
              onChange={(e) =>
                handleNestedChange("productReclaim", "plastics", e.target.value)
              }
            />
          </div>

          <div>
            <label className="form-label">(b) E-waste</label>
            <textarea
              className="form-textarea"
              placeholder="Describe processes for e-waste recycling, reusing and disposal..."
              value={formData.principle2?.productReclaim?.eWaste || ""}
              onChange={(e) =>
                handleNestedChange("productReclaim", "eWaste", e.target.value)
              }
            />
          </div>

          <div>
            <label className="form-label">(c) Hazardous waste</label>
            <textarea
              className="form-textarea"
              placeholder="Describe processes for hazardous waste recycling, reusing and disposal..."
              value={formData.principle2?.productReclaim?.hazardousWaste || ""}
              onChange={(e) =>
                handleNestedChange(
                  "productReclaim",
                  "hazardousWaste",
                  e.target.value
                )
              }
            />
          </div>

          <div>
            <label className="form-label">(d) Other waste</label>
            <textarea
              className="form-textarea"
              placeholder="Describe processes for other waste recycling, reusing and disposal..."
              value={formData.principle2?.productReclaim?.otherWaste || ""}
              onChange={(e) =>
                handleNestedChange(
                  "productReclaim",
                  "otherWaste",
                  e.target.value
                )
              }
            />
          </div>
        </div>
      </div>

      {/* Question 4 - Extended Producer Responsibility */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          4. Whether Extended Producer Responsibility (EPR) is applicable to the
          entity's activities (Yes/No). If yes, whether the waste collection
          plan is in line with the Extended Producer Responsibility (EPR) plan
          submitted to Pollution Control Boards? If not, provide steps taken to
          address the same:
        </h5>

        <div>
          <textarea
            className="form-textarea"
            placeholder="Describe EPR applicability, compliance status, and any corrective steps..."
            value={formData.principle2?.eprCompliance || ""}
            onChange={(e) => handleInputChange("eprCompliance", e.target.value)}
          />
        </div>
      </div>

      {/* Leadership Indicators */}
      <div className="mb-8">
        <h4 className="subsection-header">Leadership Indicators</h4>
      </div>

      {/* Leadership Indicator 1 - Life Cycle Assessment */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          1. Has the entity conducted Life Cycle Perspective/Assessments (LCA)
          for any of its products (for manufacturing industry) or for its
          services (for service industry)? If yes, provide details in the
          following format:
        </h5>

        <div>
          <label className="form-label">Details</label>
          <textarea
            className="form-textarea"
            placeholder="Provide details of LCA conducted, products/services assessed, methodology used, findings, etc..."
            value={formData.principle2?.lcaDetails || ""}
            onChange={(e) => handleInputChange("lcaDetails", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
