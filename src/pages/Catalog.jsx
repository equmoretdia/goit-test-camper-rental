import React from 'react';

import { CamperFilter } from 'components/CamperFilter/CamperFilter';
import { CamperList } from 'components/CamperList/CamperList';
import { Header } from './PageStyles';

const Catalog = () => {
  return (
    <>
      <section style={{ display: 'flex' }}>
        <Header>Catalog</Header>
        <CamperFilter />
        <CamperList />
      </section>
    </>
  );
};

export default Catalog;
