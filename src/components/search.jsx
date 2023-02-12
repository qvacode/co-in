import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import useCoin from '../hooks/useCoin';
import useTrending from '../hooks/useTrending';
import useHistory from '../hooks/useHistory';
import useCohere from '../hooks/useCohere';

import CoinTable from './coin-table';
import Footer from './home/footer';
import Loader from './loader';
import Navbar from './navbar';
import SectionLoader from './section-loader';
import ChartView from './chart-coin-price';
import ChartSentimentView from './chart-market-sentiment';

import { Toast } from '../helpers/toast';

const Search = () => {
  const navigate = useNavigate();
  const { coin } = useParams();

  const { coinQuery } = useCoin(coin);
  const { trendingCoin } = useTrending();
  const { historyCoinData } = useHistory(coin);
  const { sentiment } = useCohere(coin);

  if (coinQuery.isLoading) return <Loader />;
  if (coinQuery.isError) {
    Toast.fire({
      icon: 'error',
      title: 'No matches found.',
    });
    navigate('/coin-list');
  }

  return (
    <>
      <motion.div
        className="flex flex-col bg-gradient-to-r from-slate-700 to-gray-900 text-white justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        exit={{ opacity: 0 }}
      >
        <Navbar />

        <p className="text-white font-rajdhani text-3xl mt-20 text-center font-bold px-5">
          Use the charts (price and market sentiment) to make the best decision.
        </p>
        <div className="flex sm:flex-col md:flex-row items-center sm:w-full xl:w-2/3 mt-5 sm:divide-y-2 sm:divide-x-0 md:divide-x-2  md:divide-y-0 divide-violet-500">
          <div className="sm:w-full md:w-1/2 h-auto flex flex-col items-start">
            {historyCoinData.isLoading || historyCoinData.isError ? (
              <SectionLoader />
            ) : (
              <ChartView
                historicData={historyCoinData.data.prices}
                query={coin.toUpperCase()}
              />
            )}
          </div>

          <div className="sm:w-full md:w-1/2 h-auto flex flex-col items-start">
            {sentiment.isLoading && <SectionLoader />}
            {sentiment.isError && (
              <div className="flex justify-center items-center w-full">
                <p className="text-white font-bold font-rajdhani text-2xl text-center">
                  The news of this coin have not been uploaded.
                </p>
              </div>
            )}

            {sentiment.data && (
              <ChartSentimentView
                params={Object.keys(sentiment.data).map(el =>
                  el.toLocaleUpperCase()
                )}
                sentiments={Object.values(sentiment.data)}
              />
            )}
          </div>
        </div>

        <div className="flex flex-col items-center mt-8 sm:w-full xl:w-2/3">
          <p className="text-white font-rajdhani text-3xl mb-5 font-bold px-5 text-center">
            Top trending cryptocurrencies.
          </p>
          {trendingCoin.isLoading ? (
            <SectionLoader />
          ) : (
            <CoinTable data={trendingCoin.data} />
          )}
        </div>

        <Footer />
      </motion.div>
    </>
  );
};

export default Search;
