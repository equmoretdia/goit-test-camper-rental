import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import { CamperDetails } from './CamperDetails/CamperDetails';
import { CamperFeatures } from './CamperFeatures/CamperFeatures';
import { CamperReviews } from './CamperReviews/CamperReviews';

const Home = lazy(() => import('../pages/Home'));
const CamperList = lazy(() => import('../pages/CamperList'));
const Favorites = lazy(() => import('../pages/Favorites'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<CamperList />} />
        <Route path="catalog/:catalogId" element={<CamperDetails />}>
          <Route path="features" element={<CamperFeatures />} />
          <Route path="reviews" element={<CamperReviews />} />
        </Route>
        <Route path="favorites" element={<Favorites />} />
        {/* Default route for non-existent URLs */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
