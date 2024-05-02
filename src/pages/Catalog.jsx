import React from 'react';

import { CamperFilter } from 'components/CamperFilter/CamperFilter';
import { CamperList } from 'components/CamperList/CamperList';
import { HiddenHeader } from './PageStyles';

const Catalog = () => {
  return (
    <>
      <section style={{ display: 'flex' }}>
        <HiddenHeader>Catalog</HiddenHeader>
        <CamperFilter />
        <CamperList />
      </section>
    </>
  );
};

export default Catalog;
