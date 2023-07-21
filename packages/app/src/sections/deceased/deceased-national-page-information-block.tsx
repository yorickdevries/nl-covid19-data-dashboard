import { Coronavirus } from '@corona-dashboard/icons';
import { PageInformationBlock } from '~/components/page-information-block';
import { WarningTile } from '~/components/warning-tile';
import { useIntl } from '~/intl';
import { SiteText } from '~/locale';
import { DeceasedNationalPageProps } from '~/pages/landelijk/sterfte';
import { useDynamicLokalizeTexts } from '~/utils/cms/use-dynamic-lokalize-texts';
import { getPageInformationHeaderContent } from '~/utils/get-page-information-header-content';

const selectLokalizeTexts = (siteText: SiteText) => ({
  textNl: siteText.pages.deceased_page.nl,
  textShared: siteText.pages.deceased_page.shared,
});

type LokalizeTexts = ReturnType<typeof selectLokalizeTexts>;

export const DeceasedNationalPageInformationBlock = (props: DeceasedNationalPageProps) => {
  const { pageText, selectedNlData: data, content } = props;

  const dataCbs = data.deceased_cbs;

  const { commonTexts } = useIntl();
  const { textNl, textShared } = useDynamicLokalizeTexts<LokalizeTexts>(pageText, selectLokalizeTexts);

  const hasActiveWarningTile = !!textShared.notification.message;

  return (
    <>
      <PageInformationBlock
        category={commonTexts.sidebar.categories.development_of_the_virus.title}
        title={textNl.section_sterftemonitor.title}
        icon={<Coronavirus />}
        description={textNl.section_sterftemonitor.description}
        referenceLink={textNl.section_sterftemonitor.reference.href}
        metadata={{
          datumsText: textNl.section_sterftemonitor.datums,
          dateOrRange: {
            start: dataCbs.last_value.date_start_unix,
            end: dataCbs.last_value.date_end_unix,
          },
          dateOfInsertionUnix: dataCbs.last_value.date_of_insertion_unix,
          dataSources: [textNl.section_sterftemonitor.bronnen.cbs],
        }}
        pageInformationHeader={getPageInformationHeaderContent({
          dataExplained: content.dataExplained,
          faq: content.faqs,
        })}
      />

      {hasActiveWarningTile && <WarningTile isFullWidth message={textShared.notification.message} variant="informational" />}
    </>
  );
};
