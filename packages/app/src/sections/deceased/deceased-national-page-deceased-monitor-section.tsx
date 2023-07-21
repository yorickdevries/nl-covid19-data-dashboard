import { DeceasedMonitorSection } from '~/domain/deceased';
import { SiteText } from '~/locale';
import { DeceasedNationalPageProps } from '~/pages/landelijk/sterfte';
import { useDynamicLokalizeTexts } from '~/utils/cms/use-dynamic-lokalize-texts';

const selectLokalizeTexts = (siteText: SiteText) => ({
  metadataTexts: siteText.pages.topical_page.nl.nationaal_metadata,
  textNl: siteText.pages.deceased_page.nl,
  textShared: siteText.pages.deceased_page.shared,
});

type LokalizeTexts = ReturnType<typeof selectLokalizeTexts>;

export const DeceasedNationalPageDeceasedMonitorSection = (props: DeceasedNationalPageProps) => {
  const { pageText, selectedNlData: data } = props;

  const dataCbs = data.deceased_cbs;

  const { textNl } = useDynamicLokalizeTexts<LokalizeTexts>(pageText, selectLokalizeTexts);

  return <DeceasedMonitorSection data={dataCbs} text={textNl.section_sterftemonitor} showCauseMessage />;
};
