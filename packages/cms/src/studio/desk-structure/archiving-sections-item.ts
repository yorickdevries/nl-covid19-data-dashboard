import { BsBarChartSteps } from 'react-icons/bs';
import { StructureBuilder } from 'sanity/desk';
import { addStructureItem } from '../utils';

export const archivingSectionsItem = (S: StructureBuilder) => {
  return S.listItem()
    .id('archivingSections')
    .title('Secties configuratie')
    .icon(BsBarChartSteps)

    .child(
      S.list()
        .title('Pagina secties')
        .items([addStructureItem(S, BsBarChartSteps, 'Secties', 'paginaSecties'), ...S.documentTypeListItems().filter((item) => item.getId() === 'section')])
    );
};
