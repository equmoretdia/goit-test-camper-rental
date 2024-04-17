import React from 'react';

import { CamperList } from 'components/CamperList/CamperList';

const Catalog = () => {
  return (
    <section style={{ display: 'flex' }}>
      <aside>Aside</aside>
      <CamperList />
    </section>
  );
};

export default Catalog;
