import React from 'react';

import { CamperList } from 'components/CamperList/CamperList';

const Catalog = () => {
  return (
    <>
      <section style={{ display: 'flex' }}>
        <h1>Catalog</h1>
        <aside>Aside</aside>
        <CamperList />
      </section>
    </>
  );
};

export default Catalog;
