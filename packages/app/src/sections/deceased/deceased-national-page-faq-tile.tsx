import { PageFaqTile } from '~/components/page-faq-tile';
import { DeceasedNationalPageProps } from '~/pages/landelijk/sterfte';

export const DeceasedNationalPageFaqTile = (props: DeceasedNationalPageProps) => {
  const { content } = props;

  return <>{content.faqs && content.faqs.questions?.length > 0 && <PageFaqTile questions={content.faqs.questions} title={content.faqs.sectionTitle} />}</>;
};
