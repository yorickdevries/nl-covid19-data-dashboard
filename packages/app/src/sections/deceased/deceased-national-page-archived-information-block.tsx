import { Coronavirus } from '@corona-dashboard/icons';
import { PageInformationBlock } from '~/components/page-information-block';
import { SiteText } from '~/locale';
import { DeceasedNationalPageProps } from '~/pages/landelijk/sterfte';
import { useDynamicLokalizeTexts } from '~/utils/cms/use-dynamic-lokalize-texts';
import { getLastInsertionDateOfPage } from '~/utils/get-last-insertion-date-of-page';

const pageMetrics = ['deceased_rivm_archived_20221231'];

const selectLokalizeTexts = (siteText: SiteText) => ({
  metadataTexts: siteText.pages.topical_page.nl.nationaal_metadata,
  textNl: siteText.pages.deceased_page.nl,
  textShared: siteText.pages.deceased_page.shared,
});

type LokalizeTexts = ReturnType<typeof selectLokalizeTexts>;

export const DeceasedNationalPageArchivedInformationBlock = (props: DeceasedNationalPageProps) => {
  const { pageText, selectedNlData: data } = props;

  const dataRivm = data.deceased_rivm_archived_20221231;

  const { textNl } = useDynamicLokalizeTexts<LokalizeTexts>(pageText, selectLokalizeTexts);

  const lastInsertionDateOfPage = getLastInsertionDateOfPage(data, pageMetrics);

  return (
    <>
      <PageInformationBlock
        title={textNl.section_deceased_rivm.title}
        icon={<Coronavirus aria-hidden="true" />}
        description={textNl.section_deceased_rivm.description}
        referenceLink={textNl.section_deceased_rivm.reference.href}
        metadata={{
          datumsText: textNl.section_deceased_rivm.datums,
          dateOrRange: dataRivm.last_value.date_unix,
          dateOfInsertionUnix: lastInsertionDateOfPage,
          dataSources: [textNl.section_deceased_rivm.bronnen.rivm],
        }}
      />
    </>
  );
};
