import { NlDeceasedRivmArchived_20221231, TimeframeOption, TimeframeOptionsList, colors } from '@corona-dashboard/common';
import { useState } from 'react';
import { ChartTile } from '~/components/chart-tile';
import { TimeSeriesChart } from '~/components/time-series-chart';
import { SiteText } from '~/locale';
import { DeceasedNationalPageProps } from '~/pages/landelijk/sterfte';
import { getTimelineEvents } from '~/queries/get-elements-query';
import { useDynamicLokalizeTexts } from '~/utils/cms/use-dynamic-lokalize-texts';

const selectLokalizeTexts = (siteText: SiteText) => ({
  metadataTexts: siteText.pages.topical_page.nl.nationaal_metadata,
  textNl: siteText.pages.deceased_page.nl,
  textShared: siteText.pages.deceased_page.shared,
});

type LokalizeTexts = ReturnType<typeof selectLokalizeTexts>;

export const DeceasedNationalPageTimeSeriesChart = (props: DeceasedNationalPageProps) => {
  const { pageText, selectedNlData: data, content } = props;

  const [deceasedOverTimeTimeframe, setDeceasedOverTimeTimeframe] = useState<TimeframeOption>(TimeframeOption.ALL);

  const dataRivm: NlDeceasedRivmArchived_20221231 = data.deceased_rivm_archived_20221231;

  const { textNl } = useDynamicLokalizeTexts<LokalizeTexts>(pageText, selectLokalizeTexts);

  return (
    <ChartTile
      timeframeOptions={TimeframeOptionsList}
      title={textNl.section_deceased_rivm.line_chart_covid_daily_title}
      description={textNl.section_deceased_rivm.line_chart_covid_daily_description}
      metadata={{
        source: textNl.section_deceased_rivm.bronnen.rivm,
      }}
      onSelectTimeframe={setDeceasedOverTimeTimeframe}
    >
      <TimeSeriesChart
        accessibility={{
          key: 'deceased_over_time_chart',
        }}
        values={dataRivm.values}
        timeframe={deceasedOverTimeTimeframe}
        seriesConfig={[
          {
            type: 'line',
            metricProperty: 'covid_daily_moving_average',
            label: textNl.section_deceased_rivm.line_chart_covid_daily_legend_trend_label_moving_average,
            shortLabel: textNl.section_deceased_rivm.line_chart_covid_daily_legend_trend_short_label_moving_average,
            color: colors.primary,
          },
          {
            type: 'bar',
            metricProperty: 'covid_daily',
            label: textNl.section_deceased_rivm.line_chart_covid_daily_legend_trend_label,
            shortLabel: textNl.section_deceased_rivm.line_chart_covid_daily_legend_trend_short_label,
            color: colors.primary,
          },
        ]}
        dataOptions={{
          timelineEvents: getTimelineEvents(content.elements.timeSeries, 'deceased_rivm_archived_20221231'),
        }}
      />
    </ChartTile>
  );
};
