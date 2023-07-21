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
        .title('Pagina configuratie')
        .items([addStructureItem(S, BsBarChartSteps, 'Sterfte pagina', 'deceasedPageSections')])
    );
};
