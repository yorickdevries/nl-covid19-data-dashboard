import { BsBarChartSteps } from 'react-icons/bs';
import { defineField, defineType } from 'sanity';
import { deceasedNationalPage } from '@corona-dashboard/common';

export const section = defineType({
  type: 'document',
  title: 'section',
  name: 'section',
  icon: BsBarChartSteps,
  fields: [
    defineField({
      title: 'Sectie naam',
      name: 'name',
      type: 'string',
      options: {
        list: deceasedNationalPage,
      },
    }),
    defineField({
      title: 'Gearchiveerd',
      name: 'isArchived',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      name: 'name',
      archived: 'archived',
    },
  },
});
