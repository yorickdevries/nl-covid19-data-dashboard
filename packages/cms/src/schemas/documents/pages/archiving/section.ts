import { BsBarChartSteps } from 'react-icons/bs';
import { defineField, defineType } from 'sanity';

export const section = defineType({
  type: 'document',
  title: 'section',
  name: 'section',
  icon: BsBarChartSteps,
  fields: [
    defineField({
      title: 'Gearchiveerd',
      name: 'archived',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      title: 'Volgorde van de sectie',
      name: 'order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title.nl',
      subtitle: 'subTitle.nl',
    },
  },
});
