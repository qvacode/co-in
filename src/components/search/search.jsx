import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import axios from 'axios';
import Swal from 'sweetalert2';

import Navbar from '../navbar';
import Loader from '../loader';
import ChartView from '../chart';
import useCohere from '../../hooks/useCohere';
import ChartSentimentView from '../chart-market-sentiment';
import SectionLoader from '../section-loader';
import CoinSearchCard from './coin-search-card';
import TableInfo from '../table-only-info';
import Footer from '../home/footer';

const Search = () => {
  const navigate = useNavigate();

  const { search } = useLocation();

  const [query, setQuery] = useState('');
  const [coinData, setCoinData] = useState(null);
  const [historicData, setHistoricData] = useState(null);
  const [news, setNews] = useState(null);
  const [marketSentiment, setMarketSentiment] = useState(null);
  const [trending, setTrending] = useState(null);

  useEffect(() => {
    setQuery(search.substring(1));
  }, []);

  useEffect(() => {
    getData();
  }, [query]);

  useEffect(() => {
    getHistoricData();
  }, [query]);

  useEffect(() => {
    getTrendingCoins();
  }, [query]);

  useEffect(() => {
    getNews();
  }, [coinData]);

  useEffect(() => {
    getMarketSentiment();
  }, [news]);

  const getData = async () => {
    try {
      const url = `https://api.coingecko.com/api/v3/coins/${query}`;
      const { data } = await axios.get(url);
      const { image, market_data, symbol, name } = data;
      setCoinData({ image, market_data, symbol, name });
    } catch (error) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: error.response.data.error.toUpperCase(),
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/coin-list');
    }
  };

  const getHistoricData = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/${query}/market_chart?vs_currency=usd&days=7`;
    const { data } = await axios.get(url);
    setHistoricData(data.prices);
  };

  // const apiKey2 = '61b771cd22af4892a81aa51eb8b60b42'
  const getNews = async () => {
    const url = `https://newsapi.org/v2/everything?q=${coinData.name}&apiKey=a4487af12c6e4bf087aea40d3ed8a265&language=en&sortBy=publishedAt`;
    const { data } = await axios.get(url);
    const filterData = data.articles
      .filter((_, index) => index < 50)
      .map(el => el.content.toString());
    setNews(filterData);
  };

  const getMarketSentiment = async () => {
    const sentiment = await useCohere(news);
    setMarketSentiment(sentiment);
  };

  const getTrendingCoins = async () => {
    const url =
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h';
    const { data } = await axios.get(url);
    setTrending(data);
  };

  return (
    <>
      {!coinData ? (
        <Loader />
      ) : (
        <div className="flex flex-col bg-gradient-to-r from-slate-700 to-gray-900 text-white">
          <Navbar />
          <p className="text-white font-rajdhani text-3xl mt-16 text-center font-bold px-5">
            Use the charts (price and market sentiment) to make the best
            decision.
          </p>
          <div className="flex sm:flex-col md:flex-row items-center w-full mt-5 sm:divide-y-2 sm:divide-x-0 md:divide-x-2  md:divide-y-0 divide-violet-500">
            <div className="sm:w-full md:w-1/2 h-auto flex flex-col items-start">
              {historicData && (
                <ChartView
                  historicData={historicData}
                  query={query.toUpperCase()}
                />
              )}
            </div>
            <div className="sm:w-full md:w-1/2 h-auto flex flex-col items-start">
              {marketSentiment ? (
                <ChartSentimentView
                  params={Object.keys(marketSentiment).map(el =>
                    el.toLocaleUpperCase()
                  )}
                  sentiments={Object.values(marketSentiment)}
                />
              ) : (
                <SectionLoader />
              )}
            </div>
          </div>

          <div className="flex flex-col items-center mt-8">
            <p className="text-white font-rajdhani text-3xl mb-5 font-bold px-5 text-center">
              Top trending cryptocurrencies.
            </p>
            {!trending ? (
              <SectionLoader />
            ) : (
              <TableInfo
                data={trending}
                setQuery={setQuery}
                setMarketSentiment={setMarketSentiment}
              />
            )}
          </div>

          <Footer />
        </div>
      )}
    </>
  );
};

export default Search;
