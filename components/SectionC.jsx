import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Principle1 from "./principles/Principle1.jsx";
import Principle2 from "./principles/Principle2.jsx";
import Principle3 from "./principles/Principle3.jsx";
import Principle4 from "./principles/Principle4.jsx";

export default function SectionC({ onNext }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    // Principle 1 - Essential Indicators
    principle1: {
      training: {
        segment: "",
        totalPrograms: "",
        topicsCovered: "",
        percentageCovered: "",
      },
      finesDetails: "",
      appeals: {
        caseDetails: "",
        agencyName: "",
      },
      antiCorruption: {
        policyDetails: "",
        webLink: "",
      },
      disciplinary: {
        directors_fy2024_25: "",
        directors_fy2023_24: "",
        kmps_fy2024_25: "",
        kmps_fy2023_24: "",
        employees_fy2024_25: "",
        employees_fy2023_24: "",
        workers_fy2024_25: "",
        workers_fy2023_24: "",
      },
      conflicts: {
        particular: "",
        fy2024_25Number: "",
        fy2024_25Remarks: "",
        fy2023_24Number: "",
        fy2023_24Remarks: "",
      },
      correctiveActions: "",
      accountsPayables: {
        fy2024_25: "",
        fy2023_24: "",
      },
      openness: {
        parameter: "",
        metric: "",
        fy2024_25: "",
        fy2023_24: "",
      },
      // Leadership Indicators
      valueChainAwareness: {
        totalPrograms: "",
        topicsCovered: "",
        percentageCovered: "",
      },
      boardConflictProcesses: "",
    },

    // Principle 2 - Essential Indicators
    principle2: {
      rdInvestment: {
        fy2024_25: "",
        fy2023_24: "",
        impactDetails: "",
      },
      capexInvestment: {
        fy2024_25: "",
        fy2023_24: "",
        impactDetails: "",
      },
      sustainableSourcing: {
        hasProcedures: "",
        percentageSustainable: "",
      },
      productReclaim: {
        plastics: "",
        eWaste: "",
        hazardousWaste: "",
        otherWaste: "",
      },
      eprCompliance: "",
      // Leadership Indicators
      lcaDetails: "",
    },

    // Placeholder for other principles (3-5)
    principle3: {},
    principle4: {},
    principle5: {},
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Section C Data:", formData);
    if (onNext) onNext(formData);
    // Navigate to next section
    navigate("/submit");
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 px-4 flex justify-center">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 mt-0">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Section C</h1>
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">
            Principle-wise Performance Disclosure
          </h2>
          <p className="text-md text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Detailed disclosures on performance parameters related to the
            National Guidelines on Responsible Business Conduct (NGRBC)
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Principle 1 */}
          <Principle1 formData={formData} setFormData={setFormData} />

          {/* Principle 2 */}
          <Principle2 formData={formData} setFormData={setFormData} />

          {/* Principle 3 */}
          <Principle3 formData={formData} setFormData={setFormData} />

          {/* Principle 4 */}
          <Principle4 formData={formData} setFormData={setFormData} />

          {/* Placeholder section for Principle 5 */}
          <div className="card mx-auto">
            <h3 className="section-header text-center text-gray-500">
              Principle 5 (Coming Soon)
            </h3>
            <p className="text-center text-gray-600">
              Principle 5 will be implemented here following the same pattern.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-between items-center pt-12 pb-16">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="btn-secondary w-full sm:w-auto order-2 sm:order-1"
            >
              ← Back to Navigation
            </button>

            <div className="text-center order-1 sm:order-2">
              <p className="text-gray-600 text-lg font-medium">
                Section C of 8
              </p>
            </div>

            <button
              type="submit"
              className="btn-primary w-full sm:w-auto order-3"
            >
              Save & Continue →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
