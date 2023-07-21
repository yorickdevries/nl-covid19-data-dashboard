import { defineField, defineType } from 'sanity';
import { localeStringValidation, localeValidation } from '../../../../studio/validation/locale-validation';

export const archivering = defineType({
  name: 'archiving',
  type: 'document',
  title: 'Archiveren van secties',
  fields: [
    defineField({
      title: 'Sterfte',
      name: 'deceasedPage',
      type: 'deceasedPageSections',
      validation: (rule) => rule.required(),
    }),
  ],
});
