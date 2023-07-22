import { BsBarChartSteps } from 'react-icons/bs';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { PAGE_IDENTIFIER_REFERENCE_FIELDS, PAGE_IDENTIFIER_REFERENCE_FIELDSET } from '../../fields/page-fields';

export const pageSections = defineType({
  title: 'Pagina Secties',
  name: 'pageSections',
  type: 'document',
  icon: BsBarChartSteps,
  fieldsets: [PAGE_IDENTIFIER_REFERENCE_FIELDSET],
  fields: [
    ...PAGE_IDENTIFIER_REFERENCE_FIELDS,
    defineField({
      title: 'Gearchiveerde pagina',
      description: 'Wanneer deze waarde aan staat is de pagina gearchiveerde',
      name: 'pogeIsArchived',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      title: 'Secties',
      name: 'sections',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: { type: 'section' },
        }),
      ],
      validation: (rule) => rule.unique(),
    }),
  ],
});
