import { defineArrayMember, defineField, defineType } from 'sanity';

export const deceasedPageSectionsList = defineType({
  type: 'document',
  title: 'Secties op de Sterfte pagina',
  name: 'deceasedPageSections',
  fields: [
    defineField({
      title: 'Pagina informatie blok',
      name: 'PageInformationBlock',
      type: 'section',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Overleden per week',
      name: 'deceasedPerWeek',
      type: 'section',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Sterfte door Corona (door CBS)',
      name: 'deceasedByCorona',
      type: 'section',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Archivering informatie blok',
      name: 'ArchiveInformationBlock',
      type: 'section',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'KPI tegels',
      name: 'kpiTiles',
      type: 'section',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Overleden patiënten door de tijd heen',
      name: 'deceasedPatientsOverTime',
      type: 'section',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Overleden patiënten per leeftijdsgroep',
      name: 'deceasedPatientsByAgeGroup',
      type: 'section',
      validation: (rule) => rule.required(),
    }),
  ],
});
