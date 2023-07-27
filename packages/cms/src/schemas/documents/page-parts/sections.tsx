import React from 'react';
import { BsBarChartSteps } from 'react-icons/bs';
import { defineArrayMember, defineField, defineType } from 'sanity';
import { PAGE_IDENTIFIER_REFERENCE_FIELDS, PAGE_IDENTIFIER_REFERENCE_FIELDSET } from '../../fields/page-fields';

interface PreviewProps {
  renderDefault: (props: PreviewProps) => React.ReactNode;
}

// Render a div that wraps the default preview component
const MyPreviewComponent: React.FC<PreviewProps> = (props) => {
  return <div style={{ border: '1px solid green', height: '300px' }}>test</div>; // {props.renderDefault(props)}</div>;
};

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
      name: 'pageIsArchived',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      type: 'array',
      name: 'orderedListOfSections',
      title: 'Alle secties',
      of: [
        {
          type: 'object',
          name: 'section',
          title: 'Sectie',
          components: {
            preview: MyPreviewComponent,
          },
          fields: [
            {
              type: 'string',
              name: 'Naam van de sectie',
              title: 'name',
            },
            {
              type: 'boolean',
              name: 'Dit is een gearchiveerde sectie',
              title: 'isArchived',
            },
            {
              type: 'image',
              name: 'previewImage',
              title: 'Voorbeeld afbeelding',
            },
          ],
        },
      ],
    }),
  ],
});
