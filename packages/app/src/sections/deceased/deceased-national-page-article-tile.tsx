import { InView } from '~/components/in-view';
import { PageArticlesTile } from '~/components/articles/page-articles-tile';
import { DeceasedNationalPageProps } from '~/pages/landelijk/sterfte';

export const DeceasedNationalPageArticlesTile = (props: DeceasedNationalPageProps) => {
  const { content } = props;

  return (
    <>
      {content.articles && content.articles.articles?.length > 0 && (
        <InView rootMargin="400px">
          <PageArticlesTile articles={content.articles.articles} title={content.articles.sectionTitle} />
        </InView>
      )}
    </>
  );
};
