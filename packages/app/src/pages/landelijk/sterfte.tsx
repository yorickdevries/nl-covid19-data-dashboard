import { GetStaticPropsContext } from 'next';
import { useState } from 'react';
import { Box } from '~/components/base/box';
import { Divider } from '~/components/divider';
import { PageInformationBlock } from '~/components/page-information-block';
import { TileList } from '~/components/tile-list';
import { Layout, NlLayout } from '~/domain/layout';
import { Languages, SiteText } from '~/locale';
import { ElementsQueryResult, getElementsQuery } from '~/queries/get-elements-query';
import { getArticleParts, getDataExplainedParts, getFaqParts, getPagePartsQuery, getPageSectionsParts } from '~/queries/get-page-parts-query';
import { StaticProps, createGetStaticProps } from '~/static-props/create-get-static-props';
import { createGetContent, getLastGeneratedDate, getLokalizeTexts, selectNlData } from '~/static-props/get-data';
import { space } from '~/style/theme';
import { ArticleParts, PagePartQueryResult } from '~/types/cms';
import { useDynamicLokalizeTexts } from '~/utils/cms/use-dynamic-lokalize-texts';
import { DeceasedNationalPageInformationBlock } from '~/sections/deceased/deceased-national-page-information-block';
import { DeceasedNationalPageDeceasedMonitorSection } from '~/sections/deceased/deceased-national-page-deceased-monitor-section';
import { DeceasedNationalPageFaqTile } from '~/sections/deceased/deceased-national-page-faq-tile';
import { DeceasedNationalPageArticlesTile } from '~/sections/deceased/deceased-national-page-article-tile';
import { DeceasedNationalPageArchivedInformationBlock } from '~/sections/deceased/deceased-national-page-archived-information-block';
import { DeceasedNationalPageTwoKpiSection } from '~/sections/deceased/deceased-national-page-two-kpi-section';
import { DeceasedNationalPageTimeSeriesChart } from '~/sections/deceased/deceased-national-page-time-series-chart';
import { DeceasedNationalPageAgeDemographic } from '~/sections/deceased/deceased-national-page-age-demographic';
import { colors } from '@corona-dashboard/common';

const selectLokalizeTexts = (siteText: SiteText) => ({
  metadataTexts: siteText.pages.topical_page.nl.nationaal_metadata,
  textNl: siteText.pages.deceased_page.nl,
  textShared: siteText.pages.deceased_page.shared,
});

type LokalizeTexts = ReturnType<typeof selectLokalizeTexts>;

export const getStaticProps = createGetStaticProps(
  ({ locale }: { locale: keyof Languages }) => getLokalizeTexts(selectLokalizeTexts, locale),
  getLastGeneratedDate,
  selectNlData('deceased_cbs', 'deceased_rivm_per_age_group_archived_20221231', 'deceased_rivm_archived_20221231', 'difference.deceased_rivm__covid_daily_archived_20221231'),
  async (context: GetStaticPropsContext) => {
    const { content } = await createGetContent<{
      parts: PagePartQueryResult<ArticleParts>;
      elements: ElementsQueryResult;
    }>((context) => {
      const { locale } = context;
      return `{
      "parts": ${getPagePartsQuery('deceased_page')},
      "elements": ${getElementsQuery('nl', ['deceased_rivm_archived_20221231'], locale)}
     }`;
    })(context);

    return {
      content: {
        articles: getArticleParts(content.parts.pageParts, 'deceasedMonitorArticles'),
        faqs: getFaqParts(content.parts.pageParts, 'deceasedPageFAQs'),
        dataExplained: getDataExplainedParts(content.parts.pageParts, 'deceasedPageDataExplained'),
        pageSections: getPageSectionsParts(content.parts.pageParts, 'deceasedPageDataExplained'),
        elements: content.elements,
      },
    };
  }
);

export type DeceasedNationalPageProps = StaticProps<typeof getStaticProps>;

const DeceasedNationalPage = (props: DeceasedNationalPageProps) => {
  const { pageText, lastGenerated, content } = props;

  console.log(content.pageSections);

  const [isArchivedContentShown, setIsArchivedContentShown] = useState<boolean>(false);

  const { metadataTexts, textNl } = useDynamicLokalizeTexts<LokalizeTexts>(pageText, selectLokalizeTexts);

  const metadata = {
    ...metadataTexts,
    title: textNl.metadata.title,
    description: textNl.metadata.description,
  };

  return (
    <Layout {...metadata} lastGenerated={lastGenerated}>
      <NlLayout>
        <TileList>
          <DeceasedNationalPageInformationBlock {...props} />
          <DeceasedNationalPageDeceasedMonitorSection {...props} />
          <DeceasedNationalPageFaqTile {...props} />
          <DeceasedNationalPageArticlesTile {...props} />

          <Divider />
          <PageInformationBlock
            title={textNl.section_archived.title}
            description={textNl.section_archived.description}
            isArchivedHidden={isArchivedContentShown}
            onToggleArchived={() => setIsArchivedContentShown(!isArchivedContentShown)}
          />
          {isArchivedContentShown && (
            <Box borderTop={`2px solid ${colors.gray2}`} spacing={5} paddingTop={space[4]}>
              <DeceasedNationalPageArchivedInformationBlock {...props} />
              <DeceasedNationalPageTwoKpiSection {...props} />
              <DeceasedNationalPageTimeSeriesChart {...props} />
              <DeceasedNationalPageAgeDemographic {...props} />
            </Box>
          )}
        </TileList>
      </NlLayout>
    </Layout>
  );
};

export default DeceasedNationalPage;
