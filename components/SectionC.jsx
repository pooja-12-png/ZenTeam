import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Principle1 from "./principles/Principle1.jsx";
import Principle2 from "./principles/Principle2.jsx";
import Principle3 from "./principles/Principle3.jsx";
import Principle4 from "./principles/Principle4.jsx";
import Principle5 from "./principles/Principle5.jsx";

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
      lcaDetails: "",
    },

    // Principle 3 - Essential Indicators
    principle3: {
      // 1a. Well-being measures for employees by category
      wellbeing: {
        male_total: "",
        male_healthInsuranceNum: "",
        male_accidentInsuranceNum: "",
        male_maternityBenefitsNum: "",
        male_paternityBenefitsNum: "",
        male_dayCareFacilitiesNum: "",
        female_total: "",
        female_healthInsuranceNum: "",
        female_accidentInsuranceNum: "",
        female_maternityBenefitsNum: "",
        female_paternityBenefitsNum: "",
        female_dayCareFacilitiesNum: "",
        others_total: "",
        others_healthInsuranceNum: "",
        others_accidentInsuranceNum: "",
        others_maternityBenefitsNum: "",
        others_paternityBenefitsNum: "",
        others_dayCareFacilitiesNum: "",
        total_total: "",
        total_healthInsuranceNum: "",
        total_accidentInsuranceNum: "",
        total_maternityBenefitsNum: "",
        total_paternityBenefitsNum: "",
        total_dayCareFacilitiesNum: "",
      },
      // 1b. Worker well-being measures
      workerWellbeing: "",
      // 1c. Well-being spending
      wellbeingSpending: {
        fy2024_25: "",
        fy2023_24: "",
      },
      // 2. Retirement benefits
      retirementBenefits: {
        pf_fy2024_25_employees: "",
        pf_fy2024_25_workers: "",
        pf_fy2024_25_deposited: "",
        pf_fy2023_24_employees: "",
        pf_fy2023_24_workers: "",
        pf_fy2023_24_deposited: "",
        gratuity_fy2024_25_employees: "",
        gratuity_fy2024_25_workers: "",
        gratuity_fy2024_25_deposited: "",
        gratuity_fy2023_24_employees: "",
        gratuity_fy2023_24_workers: "",
        gratuity_fy2023_24_deposited: "",
        esi_fy2024_25_employees: "",
        esi_fy2024_25_workers: "",
        esi_fy2024_25_deposited: "",
        esi_fy2023_24_employees: "",
        esi_fy2023_24_workers: "",
        esi_fy2023_24_deposited: "",
        others_fy2024_25_employees: "",
        others_fy2024_25_workers: "",
        others_fy2024_25_deposited: "",
        others_fy2023_24_employees: "",
        others_fy2023_24_workers: "",
        others_fy2023_24_deposited: "",
      },
      // 3. Workplace accessibility
      workplaceAccessibility: "",
      // 4. Equal opportunity policy
      equalOpportunityPolicy: "",
      // 5. Parental leave return/retention rates
      parentalLeave: {
        male: "",
        female: "",
        total: "",
      },
      // 6. Grievance mechanisms
      grievanceMechanism: {
        permanentWorkers: "",
        otherWorkers: "",
        permanentEmployees: "",
        otherEmployees: "",
      },
      // 7. Union membership
      unionMembership: {
        total_permanent_employees_fy2024_25: "",
        total_permanent_employees_fy2023_24: "",
        male_fy2024_25: "",
        male_fy2023_24: "",
        female_fy2024_25: "",
        female_fy2023_24: "",
        others_fy2024_25: "",
        others_fy2023_24: "",
        total_permanent_workers_fy2024_25: "",
        total_permanent_workers_fy2023_24: "",
      },
      // 8. Training details
      training: {
        male_fy2024_25: "",
        male_fy2023_24: "",
        female_fy2024_25: "",
        female_fy2023_24: "",
        others_fy2024_25: "",
        others_fy2023_24: "",
        total_fy2024_25: "",
        total_fy2023_24: "",
      },
      // 9-12. Other essential indicators
      performanceReviews: "",
      healthSafetySystem: "",
      safetyIncidents: "",
      safeWorkplaceMeasures: "",
      // 13. Complaints on working conditions/health & safety
      complaints: {
        working_conditions_fy2024_25_filed: "",
        working_conditions_fy2024_25_pending: "",
        working_conditions_fy2024_25_remarks: "",
        working_conditions_fy2023_24_filed: "",
        working_conditions_fy2023_24_pending: "",
        working_conditions_fy2023_24_remarks: "",
        health_and_safety_fy2024_25_filed: "",
        health_and_safety_fy2024_25_pending: "",
        health_and_safety_fy2024_25_remarks: "",
        health_and_safety_fy2023_24_filed: "",
        health_and_safety_fy2023_24_pending: "",
        health_and_safety_fy2023_24_remarks: "",
      },
      // 14. Assessments for the year
      assessments: {
        health_and_safety_practices_percentage: "",
        working_conditions_percentage: "",
      },
      // 15. Corrective actions
      correctiveActions: "",
      // 16. Risk & concerns
      risks: {
        risk_1_description: "",
        risk_1_action: "",
        risk_2_description: "",
        risk_2_action: "",
        risk_3_description: "",
        risk_3_action: "",
      },
      // Leadership Indicators
      lifeInsurance: "",
      statutoryDues: "",
      rehabilitation: "",
      transitionAssistance: "",
      // 5. Value chain partners assessment
      valueChainAssessment: {
        health_and_safety_practices_percentage: "",
        working_conditions_percentage: "",
      },
      // 6. Value chain partners corrective actions
      valueChainCorrectiveActions: "",
    },

    // Principle 4 - Essential Indicators
    principle4: {
      // 1. Stakeholder identification process
      stakeholderIdentificationProcess: "",
      // 2. Stakeholder groups (5 groups)
      stakeholders: {
        group1_name: "",
        group1_vulnerable: "",
        group1_channels: "",
        group1_frequency: "",
        group1_purpose: "",
        group2_name: "",
        group2_vulnerable: "",
        group2_channels: "",
        group2_frequency: "",
        group2_purpose: "",
        group3_name: "",
        group3_vulnerable: "",
        group3_channels: "",
        group3_frequency: "",
        group3_purpose: "",
        group4_name: "",
        group4_vulnerable: "",
        group4_channels: "",
        group4_frequency: "",
        group4_purpose: "",
        group5_name: "",
        group5_vulnerable: "",
        group5_channels: "",
        group5_frequency: "",
        group5_purpose: "",
      },
      // Leadership Indicators
      boardConsultationProcesses: "",
      stakeholderConsultationESG: "",
      vulnerableStakeholderEngagement: "",
    },

    // Principle 5 - Essential Indicators
    principle5: {
      // 1. Human rights training
      humanRightsTraining: {
        permanent_fy2024_25: "",
        permanent_fy2023_24: "",
        other_than_permanent_fy2024_25: "",
        other_than_permanent_fy2023_24: "",
        total_employees_fy2024_25: "",
        total_employees_fy2023_24: "",
        permanent_workers_fy2024_25: "",
        permanent_workers_fy2023_24: "",
        other_than_permanent_workers_fy2024_25: "",
        other_than_permanent_workers_fy2023_24: "",
        total_workers_fy2024_25: "",
        total_workers_fy2023_24: "",
      },
      // 2. Minimum wages
      minimumWages: {
        permanent_employees___male_fy2024_25: "",
        permanent_employees___male_fy2023_24: "",
        permanent_employees___female_fy2024_25: "",
        permanent_employees___female_fy2023_24: "",
        permanent_employees___others_fy2024_25: "",
        permanent_employees___others_fy2023_24: "",
        other_than_permanent_employees___male_fy2024_25: "",
        other_than_permanent_employees___male_fy2023_24: "",
        other_than_permanent_employees___female_fy2024_25: "",
        other_than_permanent_employees___female_fy2023_24: "",
        other_than_permanent_employees___others_fy2024_25: "",
        other_than_permanent_employees___others_fy2023_24: "",
        workers___permanent_fy2024_25: "",
        workers___permanent_fy2023_24: "",
        workers___other_than_permanent_fy2024_25: "",
        workers___other_than_permanent_fy2023_24: "",
        workers___male_fy2024_25: "",
        workers___male_fy2023_24: "",
        workers___female_fy2024_25: "",
        workers___female_fy2023_24: "",
      },
      // 3a. Median remuneration
      medianRemuneration: {
        board_of_directors_male: "",
        board_of_directors_female: "",
        board_of_directors_others: "",
        key_managerial_personnel_male: "",
        key_managerial_personnel_female: "",
        key_managerial_personnel_others: "",
        employees_other_than_bod_and_kmp_male: "",
        employees_other_than_bod_and_kmp_female: "",
        employees_other_than_bod_and_kmp_others: "",
        workers_male: "",
        workers_female: "",
        workers_others: "",
      },
      // 3b. Female wages percentage
      femaleWagesPercentage: {
        fy2024_25: "",
        fy2023_24: "",
      },
      // 4-11. Other essential indicators
      humanRightsFocalPoint: "",
      internalMechanisms: "",
      // 6. Complaints by type
      complaints: {
        sexual_harassment_fy2024_25: "",
        sexual_harassment_fy2023_24: "",
        discrimination_at_workplace_fy2024_25: "",
        discrimination_at_workplace_fy2023_24: "",
        child_labor_fy2024_25: "",
        child_labor_fy2023_24: "",
        forced_labor_involuntary_labor_fy2024_25: "",
        forced_labor_involuntary_labor_fy2023_24: "",
        wages_fy2024_25: "",
        wages_fy2023_24: "",
        other_human_rights_related_issues_fy2024_25: "",
        other_human_rights_related_issues_fy2023_24: "",
      },
      // 7. POSH complaints
      poshComplaints: {
        total_complaints_reported_fy2024_25: "",
        total_complaints_reported_fy2023_24: "",
        complaints_on_posh_as_a_percent_of_female_employees_workers_fy2024_25:
          "",
        complaints_on_posh_as_a_percent_of_female_employees_workers_fy2023_24:
          "",
        complaints_on_posh_upheld_fy2024_25: "",
        complaints_on_posh_upheld_fy2023_24: "",
      },
      preventAdverseConsequences: "",
      humanRightsInContracts: "",
      // 10. Assessments
      assessments: {
        child_labor_percentage: "",
        forced_involuntary_labor_percentage: "",
        sexual_harassment_percentage: "",
        discrimination_at_workplace_percentage: "",
        wages_percentage: "",
        others_percentage: "",
      },
      correctiveActions: "",
      // Leadership Indicators
      businessProcessModifications: "",
      humanRightsDueDiligence: "",
      accessibilityForVisitors: "",
      // 4. Value chain assessment
      valueChainAssessment: {
        sexual_harassment_percentage: "",
        discrimination_at_workplace_percentage: "",
        child_labor_percentage: "",
        forced_involuntary_labor_percentage: "",
        wages_percentage: "",
        others_percentage: "",
      },
      valueChainCorrectiveActions: "",
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Section C Data:", formData);
    if (onNext) onNext(formData);
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
          <Principle1 formData={formData} setFormData={setFormData} />
          <Principle2 formData={formData} setFormData={setFormData} />
          <Principle3 formData={formData} setFormData={setFormData} />
          <Principle4 formData={formData} setFormData={setFormData} />
          <Principle5 formData={formData} setFormData={setFormData} />

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
