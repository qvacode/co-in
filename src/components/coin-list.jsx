import { useEffect, useState } from 'react';

import Navbar from './navbar';
import Loader from './loader';
import { motion } from 'framer-motion';

import CoinTable from './coin-table';
import Paginate from './paginate';
import Footer from './home/footer';
import useAllCoins from '../hooks/useAllCoins';

const CoinList = () => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { coins } = useAllCoins();

  const filterCoins = !coins.data ? null : coins.data.slice(page, page + 20);

  const nextPage = () => {
    if (page < 179) setPage(page + 20);
  };

  const previosPage = () => {
    if (page > 0) setPage(page - 20);
  };

  return (
    <>
      {!coins.data ? (
        <Loader />
      ) : (
        <motion.div
          className="flex flex-col justify-center items-center bg-gradient-to-r from-slate-700 to-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          exit={{ opacity: 0 }}
        >
          <Navbar />

          <div className="flex flex-col gap-2 w-screen justify-center mt-20 sm:w-full md:w-10/12 lg:w-7/12 xl:w-2/3">
            <p className="text-center font-rajdhani font-bold text-4xl w-10/12 mx-auto text-white">
              Find the cryptocurrency you are looking for.
            </p>
            <CoinTable data={filterCoins} />
            <Paginate nextPage={nextPage} previosPage={previosPage} />
          </div>
          <Footer />
        </motion.div>
      )}
    </>
  );
};

export default CoinList;
