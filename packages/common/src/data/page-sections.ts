type PageIds = 'deceased_page';

type DeceasedNationalPageSections =
  | 'DeceasedNationalPageInformationBlock'
  | 'DeceasedNationalPageDeceasedMonitorSection'
  | 'DeceasedNationalPageFaqTile'
  | 'DeceasedNationalPageArticlesTile'
  | 'DeceasedNationalPageArchivedInformationBlock'
  | 'DeceasedNationalPageTwoKpiSection'
  | 'DeceasedNationalPageTimeSeriesChart'
  | 'DeceasedNationalPageAgeDemographic';

type PageSectionsOptionsValues = { title: string; value: DeceasedNationalPageSections };

export const deceasedNationalPage: PageSectionsOptionsValues[] = [
  { title: 'DeceasedNationalPageInformationBlock', value: 'DeceasedNationalPageInformationBlock' },
  { title: 'DeceasedNationalPageDeceasedMonitorSection', value: 'DeceasedNationalPageDeceasedMonitorSection' },
  { title: 'DeceasedNationalPageFaqTile', value: 'DeceasedNationalPageFaqTile' },
  { title: 'DeceasedNationalPageArticlesTile', value: 'DeceasedNationalPageArticlesTile' },
  { title: 'DeceasedNationalPageArchivedInformationBlock', value: 'DeceasedNationalPageArchivedInformationBlock' },
  { title: 'DeceasedNationalPageTwoKpiSection', value: 'DeceasedNationalPageTwoKpiSection' },
  { title: 'DeceasedNationalPageTimeSeriesChart', value: 'DeceasedNationalPageTimeSeriesChart' },
  { title: 'DeceasedNationalPageAgeDemographic', value: 'DeceasedNationalPageAgeDemographic' },
];
