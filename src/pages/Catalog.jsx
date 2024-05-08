import React from 'react';

import { CamperFilter } from 'components/CamperFilter/CamperFilter';
import { CamperList } from 'components/CamperList/CamperList';
import { Section, HiddenHeader, ContentContainer } from './PageStyles';

const Catalog = () => {
  return (
    <>
      <Section>
        <HiddenHeader>Catalog</HiddenHeader>
        <ContentContainer>
          <CamperFilter />
          <CamperList />
        </ContentContainer>
      </Section>
    </>
  );
};

export default Catalog;
