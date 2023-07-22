import { NlDeceasedRivmPerAgeGroupArchived_20221231 } from '@corona-dashboard/common';
import { AgeDemographic } from '~/components/age-demographic';
import { ChartTile } from '~/components/chart-tile';
import { useIntl } from '~/intl';
import { SiteText } from '~/locale';
import { useDynamicLokalizeTexts } from '~/utils/cms/use-dynamic-lokalize-texts';
import { getLastInsertionDateOfPage } from '~/utils/get-last-insertion-date-of-page';
import { colors } from '@corona-dashboard/common';
import { DeceasedNationalPageProps } from '~/pages/landelijk/sterfte';

const selectLokalizeTexts = (siteText: SiteText) => ({
  metadataTexts: siteText.pages.topical_page.nl.nationaal_metadata,
  textNl: siteText.pages.deceased_page.nl,
  textShared: siteText.pages.deceased_page.shared,
});

type LokalizeTexts = ReturnType<typeof selectLokalizeTexts>;

export const DeceasedNationalPageAgeDemographic = (props: DeceasedNationalPageProps) => {
  const { pageText, selectedNlData: data } = props;

  const dataDeceasedPerAgeGroup: NlDeceasedRivmPerAgeGroupArchived_20221231 = data.deceased_rivm_per_age_group_archived_20221231;

  const { formatPercentage } = useIntl();
  const { textNl } = useDynamicLokalizeTexts<LokalizeTexts>(pageText, selectLokalizeTexts);

  const lastdeceasedPerAgeGroupInsertionDate = getLastInsertionDateOfPage(data, ['deceased_rivm_per_age_group_archived_20221231']);

  return (
    <ChartTile
      title={textNl.age_groups.title}
      description={textNl.age_groups.description}
      metadata={{
        date: lastdeceasedPerAgeGroupInsertionDate,
        source: textNl.age_groups.bronnen.rivm,
      }}
    >
      <AgeDemographic
        accessibility={{
          key: 'deceased_per_age_group_over_time_chart',
        }}
        data={dataDeceasedPerAgeGroup}
        rightMetricProperty="covid_percentage"
        leftMetricProperty="age_group_percentage"
        rightColor={colors.primary}
        leftColor={colors.neutral}
        maxDisplayValue={60}
        text={textNl.age_groups.graph}
        formatValue={(a: number) => `${formatPercentage(a * 100)}%`}
      />
    </ChartTile>
  );
};
