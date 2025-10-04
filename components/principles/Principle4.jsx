import React from "react";

export default function Principle4({ formData, setFormData }) {
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      principle4: {
        ...prev.principle4,
        [field]: value,
      },
    }));
  };

  const handleNestedChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      principle4: {
        ...prev.principle4,
        [section]: {
          ...prev.principle4[section],
          [field]: value,
        },
      },
    }));
  };

  return (
    <div className="card mx-auto">
      <h3 className="section-header text-center">
        Principle 4 – Businesses should respect the interests of and be
        responsive to all its stakeholders
      </h3>

      {/* Essential Indicators */}
      <div className="mb-8">
        <h4 className="subsection-header">Essential Indicators</h4>
      </div>

      {/* Question 1 - Stakeholder identification process */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          1. Describe the processes for identifying key stakeholder groups of
          the entity:
        </h5>

        <div>
          <textarea
            className="form-textarea"
            placeholder="Describe the processes for identifying key stakeholder groups..."
            value={formData.principle4?.stakeholderIdentificationProcess || ""}
            onChange={(e) =>
              handleInputChange(
                "stakeholderIdentificationProcess",
                e.target.value
              )
            }
          />
        </div>
      </div>

      {/* Question 2 - Stakeholder groups and engagement */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          2. List stakeholder groups identified as key for your entity and the
          frequency of engagement with each stakeholder group:
        </h5>

        <div className="space-y-6">
          {/* Stakeholder Group 1 */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h6 className="font-semibold text-gray-700 mb-4">
              Stakeholder Group 1
            </h6>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="form-label">Stakeholder Group</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter stakeholder group"
                  value={formData.principle4?.stakeholders?.group1_name || ""}
                  onChange={(e) =>
                    handleNestedChange(
                      "stakeholders",
                      "group1_name",
                      e.target.value
                    )
                  }
                />
              </div>

              <div>
                <label className="form-label">
                  Vulnerable & Marginalized Group
                </label>
                <select
                  className="form-select"
                  value={
                    formData.principle4?.stakeholders?.group1_vulnerable || ""
                  }
                  onChange={(e) =>
                    handleNestedChange(
                      "stakeholders",
                      "group1_vulnerable",
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
                <label className="form-label">Frequency of Engagement</label>
                <select
                  className="form-select"
                  value={
                    formData.principle4?.stakeholders?.group1_frequency || ""
                  }
                  onChange={(e) =>
                    handleNestedChange(
                      "stakeholders",
                      "group1_frequency",
                      e.target.value
                    )
                  }
                >
                  <option value="">Select frequency</option>
                  <option value="Annually">Annually</option>
                  <option value="Half yearly">Half yearly</option>
                  <option value="Quarterly">Quarterly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Others">Others - please specify</option>
                </select>
              </div>

              <div className="md:col-span-2 lg:col-span-3">
                <label className="form-label">Channels of Communication</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Email, SMS, Newspaper, Pamphlets, Advertisement, Community Meetings, Notice Board, Website, Others"
                  value={
                    formData.principle4?.stakeholders?.group1_channels || ""
                  }
                  onChange={(e) =>
                    handleNestedChange(
                      "stakeholders",
                      "group1_channels",
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="md:col-span-2 lg:col-span-3">
                <label className="form-label">
                  Purpose and scope of engagement including key topics and
                  concerns
                </label>
                <textarea
                  className="form-textarea"
                  placeholder="Describe purpose, scope, key topics and concerns raised during engagement..."
                  value={
                    formData.principle4?.stakeholders?.group1_purpose || ""
                  }
                  onChange={(e) =>
                    handleNestedChange(
                      "stakeholders",
                      "group1_purpose",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>
          </div>

          {/* Stakeholder Group 2 */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h6 className="font-semibold text-gray-700 mb-4">
              Stakeholder Group 2
            </h6>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="form-label">Stakeholder Group</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter stakeholder group"
                  value={formData.principle4?.stakeholders?.group2_name || ""}
                  onChange={(e) =>
                    handleNestedChange(
                      "stakeholders",
                      "group2_name",
                      e.target.value
                    )
                  }
                />
              </div>

              <div>
                <label className="form-label">
                  Vulnerable & Marginalized Group
                </label>
                <select
                  className="form-select"
                  value={
                    formData.principle4?.stakeholders?.group2_vulnerable || ""
                  }
                  onChange={(e) =>
                    handleNestedChange(
                      "stakeholders",
                      "group2_vulnerable",
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
                <label className="form-label">Frequency of Engagement</label>
                <select
                  className="form-select"
                  value={
                    formData.principle4?.stakeholders?.group2_frequency || ""
                  }
                  onChange={(e) =>
                    handleNestedChange(
                      "stakeholders",
                      "group2_frequency",
                      e.target.value
                    )
                  }
                >
                  <option value="">Select frequency</option>
                  <option value="Annually">Annually</option>
                  <option value="Half yearly">Half yearly</option>
                  <option value="Quarterly">Quarterly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Others">Others - please specify</option>
                </select>
              </div>

              <div className="md:col-span-2 lg:col-span-3">
                <label className="form-label">Channels of Communication</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Email, SMS, Newspaper, Pamphlets, Advertisement, Community Meetings, Notice Board, Website, Others"
                  value={
                    formData.principle4?.stakeholders?.group2_channels || ""
                  }
                  onChange={(e) =>
                    handleNestedChange(
                      "stakeholders",
                      "group2_channels",
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="md:col-span-2 lg:col-span-3">
                <label className="form-label">
                  Purpose and scope of engagement including key topics and
                  concerns
                </label>
                <textarea
                  className="form-textarea"
                  placeholder="Describe purpose, scope, key topics and concerns raised during engagement..."
                  value={
                    formData.principle4?.stakeholders?.group2_purpose || ""
                  }
                  onChange={(e) =>
                    handleNestedChange(
                      "stakeholders",
                      "group2_purpose",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>
          </div>

          {/* Stakeholder Group 3 */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h6 className="font-semibold text-gray-700 mb-4">
              Stakeholder Group 3
            </h6>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="form-label">Stakeholder Group</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter stakeholder group"
                  value={formData.principle4?.stakeholders?.group3_name || ""}
                  onChange={(e) =>
                    handleNestedChange(
                      "stakeholders",
                      "group3_name",
                      e.target.value
                    )
                  }
                />
              </div>

              <div>
                <label className="form-label">
                  Vulnerable & Marginalized Group
                </label>
                <select
                  className="form-select"
                  value={
                    formData.principle4?.stakeholders?.group3_vulnerable || ""
                  }
                  onChange={(e) =>
                    handleNestedChange(
                      "stakeholders",
                      "group3_vulnerable",
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
                <label className="form-label">Frequency of Engagement</label>
                <select
                  className="form-select"
                  value={
                    formData.principle4?.stakeholders?.group3_frequency || ""
                  }
                  onChange={(e) =>
                    handleNestedChange(
                      "stakeholders",
                      "group3_frequency",
                      e.target.value
                    )
                  }
                >
                  <option value="">Select frequency</option>
                  <option value="Annually">Annually</option>
                  <option value="Half yearly">Half yearly</option>
                  <option value="Quarterly">Quarterly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Others">Others - please specify</option>
                </select>
              </div>

              <div className="md:col-span-2 lg:col-span-3">
                <label className="form-label">Channels of Communication</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Email, SMS, Newspaper, Pamphlets, Advertisement, Community Meetings, Notice Board, Website, Others"
                  value={
                    formData.principle4?.stakeholders?.group3_channels || ""
                  }
                  onChange={(e) =>
                    handleNestedChange(
                      "stakeholders",
                      "group3_channels",
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="md:col-span-2 lg:col-span-3">
                <label className="form-label">
                  Purpose and scope of engagement including key topics and
                  concerns
                </label>
                <textarea
                  className="form-textarea"
                  placeholder="Describe purpose, scope, key topics and concerns raised during engagement..."
                  value={
                    formData.principle4?.stakeholders?.group3_purpose || ""
                  }
                  onChange={(e) =>
                    handleNestedChange(
                      "stakeholders",
                      "group3_purpose",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>
          </div>

          {/* Stakeholder Group 4 */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h6 className="font-semibold text-gray-700 mb-4">
              Stakeholder Group 4
            </h6>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="form-label">Stakeholder Group</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter stakeholder group"
                  value={formData.principle4?.stakeholders?.group4_name || ""}
                  onChange={(e) =>
                    handleNestedChange(
                      "stakeholders",
                      "group4_name",
                      e.target.value
                    )
                  }
                />
              </div>

              <div>
                <label className="form-label">
                  Vulnerable & Marginalized Group
                </label>
                <select
                  className="form-select"
                  value={
                    formData.principle4?.stakeholders?.group4_vulnerable || ""
                  }
                  onChange={(e) =>
                    handleNestedChange(
                      "stakeholders",
                      "group4_vulnerable",
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
                <label className="form-label">Frequency of Engagement</label>
                <select
                  className="form-select"
                  value={
                    formData.principle4?.stakeholders?.group4_frequency || ""
                  }
                  onChange={(e) =>
                    handleNestedChange(
                      "stakeholders",
                      "group4_frequency",
                      e.target.value
                    )
                  }
                >
                  <option value="">Select frequency</option>
                  <option value="Annually">Annually</option>
                  <option value="Half yearly">Half yearly</option>
                  <option value="Quarterly">Quarterly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Others">Others - please specify</option>
                </select>
              </div>

              <div className="md:col-span-2 lg:col-span-3">
                <label className="form-label">Channels of Communication</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Email, SMS, Newspaper, Pamphlets, Advertisement, Community Meetings, Notice Board, Website, Others"
                  value={
                    formData.principle4?.stakeholders?.group4_channels || ""
                  }
                  onChange={(e) =>
                    handleNestedChange(
                      "stakeholders",
                      "group4_channels",
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="md:col-span-2 lg:col-span-3">
                <label className="form-label">
                  Purpose and scope of engagement including key topics and
                  concerns
                </label>
                <textarea
                  className="form-textarea"
                  placeholder="Describe purpose, scope, key topics and concerns raised during engagement..."
                  value={
                    formData.principle4?.stakeholders?.group4_purpose || ""
                  }
                  onChange={(e) =>
                    handleNestedChange(
                      "stakeholders",
                      "group4_purpose",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>
          </div>

          {/* Stakeholder Group 5 */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h6 className="font-semibold text-gray-700 mb-4">
              Stakeholder Group 5
            </h6>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="form-label">Stakeholder Group</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter stakeholder group"
                  value={formData.principle4?.stakeholders?.group5_name || ""}
                  onChange={(e) =>
                    handleNestedChange(
                      "stakeholders",
                      "group5_name",
                      e.target.value
                    )
                  }
                />
              </div>

              <div>
                <label className="form-label">
                  Vulnerable & Marginalized Group
                </label>
                <select
                  className="form-select"
                  value={
                    formData.principle4?.stakeholders?.group5_vulnerable || ""
                  }
                  onChange={(e) =>
                    handleNestedChange(
                      "stakeholders",
                      "group5_vulnerable",
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
                <label className="form-label">Frequency of Engagement</label>
                <select
                  className="form-select"
                  value={
                    formData.principle4?.stakeholders?.group5_frequency || ""
                  }
                  onChange={(e) =>
                    handleNestedChange(
                      "stakeholders",
                      "group5_frequency",
                      e.target.value
                    )
                  }
                >
                  <option value="">Select frequency</option>
                  <option value="Annually">Annually</option>
                  <option value="Half yearly">Half yearly</option>
                  <option value="Quarterly">Quarterly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Others">Others - please specify</option>
                </select>
              </div>

              <div className="md:col-span-2 lg:col-span-3">
                <label className="form-label">Channels of Communication</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Email, SMS, Newspaper, Pamphlets, Advertisement, Community Meetings, Notice Board, Website, Others"
                  value={
                    formData.principle4?.stakeholders?.group5_channels || ""
                  }
                  onChange={(e) =>
                    handleNestedChange(
                      "stakeholders",
                      "group5_channels",
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="md:col-span-2 lg:col-span-3">
                <label className="form-label">
                  Purpose and scope of engagement including key topics and
                  concerns
                </label>
                <textarea
                  className="form-textarea"
                  placeholder="Describe purpose, scope, key topics and concerns raised during engagement..."
                  value={
                    formData.principle4?.stakeholders?.group5_purpose || ""
                  }
                  onChange={(e) =>
                    handleNestedChange(
                      "stakeholders",
                      "group5_purpose",
                      e.target.value
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Indicators */}
      <div className="mb-8">
        <h4 className="subsection-header">Leadership Indicators</h4>
      </div>

      {/* Leadership Question 1 - Board consultation processes */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          1. Provide the processes for consultation between stakeholders and the
          Board on economic, environmental, and social topics or if consultation
          is delegated, how is feedback from such consultations provided to the
          Board:
        </h5>

        <div>
          <textarea
            className="form-textarea"
            placeholder="Describe consultation processes between stakeholders and the Board..."
            value={formData.principle4?.boardConsultationProcesses || ""}
            onChange={(e) =>
              handleInputChange("boardConsultationProcesses", e.target.value)
            }
          />
        </div>
      </div>

      {/* Leadership Question 2 - Stakeholder consultation for ESG topics */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          2. Whether stakeholder consultation is used to support the
          identification and management of environmental, and social topics
          (Yes/No). If so, provide details of instances as to how the inputs
          received from stakeholders on these topics were incorporated into the
          policies and activities of the entity:
        </h5>

        <div>
          <textarea
            className="form-textarea"
            placeholder="Yes/No and provide details of how stakeholder inputs were incorporated into policies and activities..."
            value={formData.principle4?.stakeholderConsultationESG || ""}
            onChange={(e) =>
              handleInputChange("stakeholderConsultationESG", e.target.value)
            }
          />
        </div>
      </div>

      {/* Leadership Question 3 - Vulnerable stakeholder engagement */}
      <div className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mb-6">
          3. Provide details of instances of engagement with, and actions taken
          to, address the concerns of vulnerable/marginalized stakeholder
          groups:
        </h5>

        <div>
          <textarea
            className="form-textarea"
            placeholder="Provide details of engagement with vulnerable/marginalized stakeholder groups and actions taken to address their concerns..."
            value={formData.principle4?.vulnerableStakeholderEngagement || ""}
            onChange={(e) =>
              handleInputChange(
                "vulnerableStakeholderEngagement",
                e.target.value
              )
            }
          />
        </div>
      </div>
    </div>
  );
}
