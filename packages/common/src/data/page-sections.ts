type PageIds = 'deceased_page';

export type DeceasedNationalPageSections =
  | 'DeceasedNationalPageInformationBlock'
  | 'DeceasedNationalPageDeceasedMonitorSection'
  | 'DeceasedNationalPageFaqTile'
  | 'DeceasedNationalPageArticlesTile'
  | 'DeceasedNationalPageArchivedInformationBlock'
  | 'DeceasedNationalPageTwoKpiSection'
  | 'DeceasedNationalPageTimeSeriesChart'
  | 'DeceasedNationalPageAgeDemographic';

type PageSectionsOptionsValues = { title: string; value: DeceasedNationalPageSections; image?: string };

export const deceasedNationalPage: PageSectionsOptionsValues[] = [
  { title: 'Information Block', value: 'DeceasedNationalPageInformationBlock', image: 'DeceasedNationalPageInformationBlock.png' },
  { title: 'Deceased Monitor Section', value: 'DeceasedNationalPageDeceasedMonitorSection', image: 'DeceasedNationalPageDeceasedMonitorSection.png' },
  { title: 'Faq Tile', value: 'DeceasedNationalPageFaqTile', image: 'DeceasedNationalPageFaqTile.png' },
  { title: 'Articles Tile', value: 'DeceasedNationalPageArticlesTile', image: 'DeceasedNationalPageArticlesTile.png' },
  { title: 'Archived Information Block', value: 'DeceasedNationalPageArchivedInformationBlock', image: 'DeceasedNationalPageArchivedInformationBlock.png' },
  { title: 'Two Kpi Section', value: 'DeceasedNationalPageTwoKpiSection', image: 'DeceasedNationalPageTwoKpiSection.png' },
  { title: 'Time Series Chart', value: 'DeceasedNationalPageTimeSeriesChart', image: 'DeceasedNationalPageTimeSeriesChart.png' },
  { title: 'Age Demographic', value: 'DeceasedNationalPageAgeDemographic', image: 'DeceasedNationalPageAgeDemographic.png' },
];
