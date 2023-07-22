import { defineArrayMember, defineField, defineType } from 'sanity';

export const sections = defineType({
  name: 'paginaSecties',
  type: 'document',
  title: 'Archiveren van secties',
  fields: [
    defineField({
      title: 'PaginaID',
      name: 'pageId',
      type: 'string',
    }),
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
      of: [defineArrayMember({ type: 'reference', to: { type: 'section' } })],
      validation: (rule) => rule.required(),
    }),
  ],
});
