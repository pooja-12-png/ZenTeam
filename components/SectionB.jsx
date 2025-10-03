import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SectionB({ onNext }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    // Question 1a - Policy coverage for each principle
    policyCoverage: {
      P1: "",
      P2: "",
      P3: "",
      P4: "",
      P5: "",
      P6: "",
      P7: "",
      P8: "",
      P9: "",
    },

    // Question 1b - Board approval for each principle
    boardApproval: {
      P1: "",
      P2: "",
      P3: "",
      P4: "",
      P5: "",
      P6: "",
      P7: "",
      P8: "",
      P9: "",
    },

    // Question 1c - Web links for each principle
    webLinks: {
      P1: "",
      P2: "",
      P3: "",
      P4: "",
      P5: "",
      P6: "",
      P7: "",
      P8: "",
      P9: "",
    },

    // Question 2 - Policy translated to procedures
    policyProcedures: {
      P1: "",
      P2: "",
      P3: "",
      P4: "",
      P5: "",
      P6: "",
      P7: "",
      P8: "",
      P9: "",
    },

    // Question 3 - Policies extend to value chain
    valueChainExtension: {
      P1: "",
      P2: "",
      P3: "",
      P4: "",
      P5: "",
      P6: "",
      P7: "",
      P8: "",
      P9: "",
    },

    // Question 4 - Codes/certifications/standards
    certifications: {
      P1: "",
      P2: "",
      P3: "",
      P4: "",
      P5: "",
      P6: "",
      P7: "",
      P8: "",
      P9: "",
    },

    // Question 5 - Specific commitments, goals, targets
    commitments: "",

    // Question 6 - Performance against commitments
    performance: "",

    // Question 7 - Director statement on ESG
    directorStatement: "",

    // Question 8 - Highest authority details
    highestAuthority: "",

    // Question 9 - Board committee for sustainability
    boardCommittee: "",

    // Question 10.1 - Performance review
    performanceReview: {
      reviewBy: {
        P1: "",
        P2: "",
        P3: "",
        P4: "",
        P5: "",
        P6: "",
        P7: "",
        P8: "",
        P9: "",
      },
      frequency: {
        P1: "",
        P2: "",
        P3: "",
        P4: "",
        P5: "",
        P6: "",
        P7: "",
        P8: "",
        P9: "",
      },
    },

    // Question 10.2 - Compliance review
    complianceReview: {
      reviewBy: {
        P1: "",
        P2: "",
        P3: "",
        P4: "",
        P5: "",
        P6: "",
        P7: "",
        P8: "",
        P9: "",
      },
      frequency: {
        P1: "",
        P2: "",
        P3: "",
        P4: "",
        P5: "",
        P6: "",
        P7: "",
        P8: "",
        P9: "",
      },
    },

    // Question 11 - Independent assessment
    independentAssessment: "",

    // Question 12 - Reasons if not all principles covered
    reasonsNotCovered: "",
  });

  const principleLabels = [
    "P1",
    "P2",
    "P3",
    "P4",
    "P5",
    "P6",
    "P7",
    "P8",
    "P9",
  ];

  const principleNames = {
    P1: "Principle 1 - Businesses should conduct and govern themselves with integrity",
    P2: "Principle 2 - Businesses should provide goods and services in a sustainable manner",
    P3: "Principle 3 - Businesses should respect and promote the well-being of employees",
    P4: "Principle 4 - Businesses should respect the interests of and be responsive to stakeholders",
    P5: "Principle 5 - Businesses should respect and promote human rights",
    P6: "Principle 6 - Businesses should respect and make efforts to protect the environment",
    P7: "Principle 7 - Businesses should engage in and advocate responsible policy",
    P8: "Principle 8 - Businesses should promote inclusive growth and equitable development",
    P9: "Principle 9 - Businesses should engage with and provide value to customers",
  };

  const handleNestedChange = (section, subfield, principle, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [subfield]: {
          ...prev[section][subfield],
          [principle]: value,
        },
      },
    }));
  };

  const handleSimpleNestedChange = (section, principle, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [principle]: value,
      },
    }));
  };

  const handleSimpleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Section B Data:", formData);
    if (onNext) onNext(formData);
    navigate("/sectionII");
  };

  const PrincipleGrid = ({
    title,
    section,
    subfield = null,
    type = "select",
    options = ["Yes", "No"],
  }) => (
    <div className="mb-10">
      <h4 className="subsection-header">{title}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {principleLabels.map((principle) => (
          <div key={principle} className="card">
            <label className="form-label">
              {principle}
              <span className="block text-xs text-gray-500 font-normal mt-1">
                {principleNames[principle].split(" - ")[1]}
              </span>
            </label>
            {type === "select" ? (
              <select
                className="form-select"
                value={
                  subfield
                    ? formData[section][subfield][principle]
                    : formData[section][principle]
                }
                onChange={(e) =>
                  subfield
                    ? handleNestedChange(
                        section,
                        subfield,
                        principle,
                        e.target.value
                      )
                    : handleSimpleNestedChange(
                        section,
                        principle,
                        e.target.value
                      )
                }
              >
                <option value="">Select</option>
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                className="form-input"
                placeholder="Enter details..."
                value={
                  subfield
                    ? formData[section][subfield][principle]
                    : formData[section][principle]
                }
                onChange={(e) =>
                  subfield
                    ? handleNestedChange(
                        section,
                        subfield,
                        principle,
                        e.target.value
                      )
                    : handleSimpleNestedChange(
                        section,
                        principle,
                        e.target.value
                      )
                }
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 px-4 flex justify-center">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 mt-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Section B</h1>
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">
            Disclosure Questions
          </h2>
          <p className="text-md text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Management and process disclosures related to the National
            Guidelines on Responsible Business Conduct (NGRBC)
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Question 1 - Policy Coverage */}
          <div className="card mx-auto">
            <h3 className="section-header">
              1. Policy Coverage and Management
            </h3>

            {/* 1a - Policy Coverage */}
            <PrincipleGrid
              title="1.a. Whether your entity's policy/policies cover each principle and its core elements of the NGRBCs"
              section="policyCoverage"
            />

            {/* 1b - Board Approval */}
            <PrincipleGrid
              title="1.b. Has the policy been approved by the Board?"
              section="boardApproval"
            />

            {/* 1c - Web Links */}
            <div className="mb-10">
              <h4 className="subsection-header">
                1.c. Web Link of the Policies, if available
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {principleLabels.map((principle) => (
                  <div key={principle} className="card">
                    <label className="form-label">
                      {principle} - Web Link
                      <span className="block text-xs text-gray-500 font-normal mt-1">
                        {principleNames[principle].split(" - ")[1]}
                      </span>
                    </label>
                    <input
                      type="url"
                      className="form-input"
                      placeholder="https://example.com/policy"
                      value={formData.webLinks[principle]}
                      onChange={(e) =>
                        handleSimpleNestedChange(
                          "webLinks",
                          principle,
                          e.target.value
                        )
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Question 2 - Policy to Procedures */}
          <div className="card mx-auto">
            <PrincipleGrid
              title="2. Whether the entity has translated the policy into procedures"
              section="policyProcedures"
            />
          </div>

          {/* Question 3 - Value Chain Extension */}
          <div className="card mx-auto">
            <PrincipleGrid
              title="3. Do the enlisted policies extend to your value chain partners?"
              section="valueChainExtension"
            />
          </div>

          {/* Question 4 - Certifications */}
          <div className="card mx-auto">
            <PrincipleGrid
              title="4. Name of the national and international codes/certifications/labels/standards adopted by your entity"
              section="certifications"
              type="text"
            />
          </div>

          {/* Questions 5-9 - General Disclosures */}
          <div className="card mx-auto">
            <h3 className="section-header">General Management Disclosures</h3>

            <div className="space-y-8">
              <div>
                <label className="form-label block">
                  5. Specific commitments, goals, and targets set by the entity
                  with defined timelines
                </label>
                <textarea
                  className="form-textarea"
                  placeholder="Describe specific commitments, goals, and targets with timelines..."
                  value={formData.commitments}
                  onChange={(e) =>
                    handleSimpleChange("commitments", e.target.value)
                  }
                />
              </div>

              <div>
                <label className="form-label block">
                  6. Performance against specific commitments, goals, and
                  targets along with reasons if not met
                </label>
                <textarea
                  className="form-textarea"
                  placeholder="Describe performance and reasons for any unmet targets..."
                  value={formData.performance}
                  onChange={(e) =>
                    handleSimpleChange("performance", e.target.value)
                  }
                />
              </div>

              <div>
                <label className="form-label block">
                  7. Statement by director responsible for the business
                  responsibility report
                </label>
                <textarea
                  className="form-textarea"
                  placeholder="Director's statement highlighting ESG related challenges, targets and achievements..."
                  value={formData.directorStatement}
                  onChange={(e) =>
                    handleSimpleChange("directorStatement", e.target.value)
                  }
                />
              </div>

              <div>
                <label className="form-label block">
                  8. Details of the highest authority responsible for
                  implementation and oversight of Business Responsibility
                  policies
                </label>
                <textarea
                  className="form-textarea"
                  placeholder="Provide details of the highest authority..."
                  value={formData.highestAuthority}
                  onChange={(e) =>
                    handleSimpleChange("highestAuthority", e.target.value)
                  }
                />
              </div>

              <div>
                <label className="form-label block">
                  9. Does the entity have a specified Committee of the
                  Board/Director responsible for sustainability related issues?
                </label>
                <textarea
                  className="form-textarea"
                  placeholder="Yes/No and provide details if yes..."
                  value={formData.boardCommittee}
                  onChange={(e) =>
                    handleSimpleChange("boardCommittee", e.target.value)
                  }
                />
              </div>
            </div>
          </div>

          {/* Question 10 - Review Details */}
          <div className="card mx-auto">
            <h3 className="section-header text-center">
              10. Details of Review of NGRBCs by the Company
            </h3>

            {/* 10.1 Performance Review */}
            <div className="mb-8">
              <h4 className="subsection-header">
                10.1 Performance against policies and follow-up action
              </h4>

              <div className="mb-6">
                <h5 className="text-md font-semibold text-gray-700 mb-4">
                  Review undertaken by (Director/Committee of the Board/Any
                  other Committee)
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {principleLabels.map((principle) => (
                    <div key={principle} className="card">
                      <label className="form-label">{principle}</label>
                      <select
                        className="form-select"
                        value={formData.performanceReview.reviewBy[principle]}
                        onChange={(e) =>
                          handleNestedChange(
                            "performanceReview",
                            "reviewBy",
                            principle,
                            e.target.value
                          )
                        }
                      >
                        <option value="">Select</option>
                        <option value="Director">Director</option>
                        <option value="Committee of the Board">
                          Committee of the Board
                        </option>
                        <option value="Other Committee">Other Committee</option>
                      </select>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h5 className="text-md font-semibold text-gray-700 mb-4">
                  Frequency of Review
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {principleLabels.map((principle) => (
                    <div key={principle} className="card">
                      <label className="form-label">{principle}</label>
                      <select
                        className="form-select"
                        value={formData.performanceReview.frequency[principle]}
                        onChange={(e) =>
                          handleNestedChange(
                            "performanceReview",
                            "frequency",
                            principle,
                            e.target.value
                          )
                        }
                      >
                        <option value="">Select</option>
                        <option value="Annually">Annually</option>
                        <option value="Half yearly">Half yearly</option>
                        <option value="Quarterly">Quarterly</option>
                        <option value="Other">Other (please specify)</option>
                      </select>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 10.2 Compliance Review */}
            <div className="mb-8">
              <h4 className="subsection-header">
                10.2 Compliance with statutory requirements and rectification of
                non-compliances
              </h4>

              <div className="mb-6">
                <h5 className="text-md font-semibold text-gray-700 mb-4">
                  Review undertaken by (Director/Committee of the Board/Any
                  other Committee)
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {principleLabels.map((principle) => (
                    <div key={principle} className="card">
                      <label className="form-label">{principle}</label>
                      <select
                        className="form-select"
                        value={formData.complianceReview.reviewBy[principle]}
                        onChange={(e) =>
                          handleNestedChange(
                            "complianceReview",
                            "reviewBy",
                            principle,
                            e.target.value
                          )
                        }
                      >
                        <option value="">Select</option>
                        <option value="Director">Director</option>
                        <option value="Committee of the Board">
                          Committee of the Board
                        </option>
                        <option value="Other Committee">Other Committee</option>
                      </select>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h5 className="text-md font-semibold text-gray-700 mb-4">
                  Frequency of Review
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {principleLabels.map((principle) => (
                    <div key={principle} className="card">
                      <label className="form-label">{principle}</label>
                      <select
                        className="form-select"
                        value={formData.complianceReview.frequency[principle]}
                        onChange={(e) =>
                          handleNestedChange(
                            "complianceReview",
                            "frequency",
                            principle,
                            e.target.value
                          )
                        }
                      >
                        <option value="">Select</option>
                        <option value="Annually">Annually</option>
                        <option value="Half yearly">Half yearly</option>
                        <option value="Quarterly">Quarterly</option>
                        <option value="Other">Other (please specify)</option>
                      </select>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Questions 11-12 - Final Questions */}
          <div className="card mx-auto">
            <h3 className="section-header">Final Assessment Questions</h3>

            <div className="space-y-8">
              <div>
                <label className="form-label block">
                  11. Has the entity carried out independent
                  assessment/evaluation of the working of its policies by an
                  external agency?
                </label>
                <textarea
                  className="form-textarea"
                  placeholder="Yes/No. If yes, provide the name of the agency..."
                  value={formData.independentAssessment}
                  onChange={(e) =>
                    handleSimpleChange("independentAssessment", e.target.value)
                  }
                />
              </div>

              <div>
                <label className="form-label block">
                  12. If answer to question (1) above is "No" (not all
                  Principles are covered by a policy), state reasons
                </label>
                <textarea
                  className="form-textarea"
                  placeholder="State reasons why not all principles are covered..."
                  value={formData.reasonsNotCovered}
                  onChange={(e) =>
                    handleSimpleChange("reasonsNotCovered", e.target.value)
                  }
                />
              </div>
            </div>
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
                Section B of 8
              </p>
            </div>

            <button
              type="submit"
              className="btn-primary w-full sm:w-auto order-3"
            >
              Save & Continue to Section II →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
