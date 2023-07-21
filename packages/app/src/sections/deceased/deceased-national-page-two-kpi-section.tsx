import { KpiTile } from '~/components/kpi-tile';
import { KpiValue } from '~/components/kpi-value';
import { Markdown } from '~/components/markdown';
import { TwoKpiSection } from '~/components/two-kpi-section';
import { Text } from '~/components/typography';
import { SiteText } from '~/locale';
import { DeceasedNationalPageProps } from '~/pages/landelijk/sterfte';
import { useDynamicLokalizeTexts } from '~/utils/cms/use-dynamic-lokalize-texts';

const selectLokalizeTexts = (siteText: SiteText) => ({
  textNl: siteText.pages.deceased_page.nl,
});

type LokalizeTexts = ReturnType<typeof selectLokalizeTexts>;

export const DeceasedNationalPageTwoKpiSection = (props: DeceasedNationalPageProps) => {
  const { pageText, selectedNlData: data } = props;

  const dataRivm = data.deceased_rivm_archived_20221231;

  const { textNl } = useDynamicLokalizeTexts<LokalizeTexts>(pageText, selectLokalizeTexts);

  return (
    <TwoKpiSection>
      <KpiTile
        title={textNl.section_deceased_rivm.kpi_covid_daily_title}
        metadata={{
          date: dataRivm.last_value.date_unix,
          source: textNl.section_deceased_rivm.bronnen.rivm,
        }}
      >
        <KpiValue absolute={dataRivm.last_value.covid_daily} difference={data.difference.deceased_rivm__covid_daily_archived_20221231} isAmount />
        <Markdown content={textNl.section_deceased_rivm.kpi_covid_daily_description} />
      </KpiTile>
      <KpiTile
        title={textNl.section_deceased_rivm.kpi_covid_total_title}
        metadata={{
          date: dataRivm.last_value.date_unix,
          source: textNl.section_deceased_rivm.bronnen.rivm,
        }}
      >
        <KpiValue absolute={dataRivm.last_value.covid_total} />
        <Text>{textNl.section_deceased_rivm.kpi_covid_total_description}</Text>
      </KpiTile>
    </TwoKpiSection>
  );
};
