import { Feature } from '~/types';

export const features: Feature[] = [
  {
    name: 'inHomePage',
    isEnabled: false,
  },
  {
    name: 'inPositiveTestsPage',
    isEnabled: false,
    dataScopes: ['in', 'in_collection'],
    metricName: 'tested_overall',
  },
  {
    name: 'inVariantsPage',
    isEnabled: false,
    dataScopes: ['in'],
    metricName: 'variants',
  },
  {
    name: 'gmRankingHospital',
    isEnabled: false,
    dataScopes: ['gm'],
    metricName: 'hospital_nice_sum',
  },
  {
    name: 'gmRankingTested',
    isEnabled: false,
    dataScopes: ['gm'],
    metricName: 'tested_overall_sum',
  },
  {
    name: 'nlVaccineAdministeredGgd',
    isEnabled: false,
    dataScopes: ['nl'],
    metricName: 'vaccine_administered_ggd',
  },
  {
    name: 'nlVaccineAdministeredHospitalsAndCareInstitutions',
    isEnabled: false,
    dataScopes: ['nl'],
    metricName: 'vaccine_administered_hospitals_and_care_institutions',
  },
  {
    name: 'nlVaccineAdministeredDoctors',
    isEnabled: false,
    dataScopes: ['nl'],
    metricName: 'vaccine_administered_doctors',
  },
  {
    name: 'nlVaccineAdministeredGgdGhor',
    isEnabled: false,
    dataScopes: ['nl'],
    metricName: 'vaccine_administered_ggd_ghor',
  },
  {
    name: 'nlHospitalVaccinationStatus',
    isEnabled: true,
    dataScopes: ['nl'],
    metricName: 'hospital_vaccination_status',
  },
  {
    name: 'nlIntensiveCareVaccinationStatus',
    isEnabled: true,
    dataScopes: ['nl'],
    metricName: 'intensive_care_vaccination_status',
  },
  {
    name: 'nlVaccinationHospitalVaccinationStatus',
    isEnabled: true,
    dataScopes: ['nl'],
    metricName: 'hospital_vaccination_status',
  },
  {
    name: 'nlVaccinationIntensiveCareVaccinationStatus',
    isEnabled: true,
    dataScopes: ['nl'],
    metricName: 'intensive_care_vaccination_status',
  },
  {
    name: 'nlHospitalAdmissionsVaccineIncidencePerAgeGroup',
    isEnabled: true,
    dataScopes: ['nl'],
    metricName: 'hospital_vaccine_incidence_per_age_group',
  },
  {
    name: 'nlIcAdmissionsIncidencePerAgeGroup',
    isEnabled: true,
    dataScopes: ['nl'],
    metricName: 'hospital_vaccine_incidence_per_age_group',
  },
  {
    name: 'nlVaccinationsIncidencePerAgeGroup',
    isEnabled: true,
    dataScopes: ['nl'],
    metricName: 'hospital_vaccine_incidence_per_age_group',
  },
  {
    name: 'nlTestedOverallTopicalPage',
    isEnabled: false,
    dataScopes: ['nl', 'vr', 'gm'],
    metricName: 'tested_overall',
    metricProperties: ['infected_moving_average'],
  },
  {
    name: 'nlVaccinationsBoosterInformationBlock',
    isEnabled: true,
  },
  {
    name: 'nlVaccinationBoosterShotsPerAgeGroup',
    isEnabled: true,
    dataScopes: ['nl'],
    metricName: 'booster_shot_per_age_group',
  },
  {
    name: 'nlVaccinationsBoosterShotsKpi',
    isEnabled: true,
    dataScopes: ['nl'],
    metricName: 'booster_shot',
  },

  /**
   * These flags are only here that the schemas will not be required when validating.
   * But the features can be seen once toggled on with dummy data and have a seperate flag.
   */
  {
    name: 'nlVaccinationBoosterShotsPerAgeGroupSchemaDisable',
    isEnabled: false,
    dataScopes: ['nl'],
    metricName: 'booster_shot_per_age_group',
  },
  {
    name: 'nlVaccinationsBoosterShotsKpiSchemaDisable',
    isEnabled: false,
    dataScopes: ['nl'],
    metricName: 'booster_shot',
  },
];
