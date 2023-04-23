import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import { Layout } from './Layout/Layout';
import TweetsPage from 'pages/Tweets';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="tweets" element={<TweetsPage />} />
        {/* <Route path="tweets/:page" element={<TweetsPage />} /> */}
        <Route path="*" element={<Navigate to="/" />} replace={true} />
      </Route>
    </Routes>
  );
};
