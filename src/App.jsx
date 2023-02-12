import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/home/home';
import Search from './components/search';
import CoinList from './components/coin-list';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:coin" element={<Search />} />
        <Route path="/coin-list" element={<CoinList />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
