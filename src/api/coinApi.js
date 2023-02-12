import axios from 'axios';

import {
  allCoinsUrl,
  coinInfoUrl,
  historyCoinDataUrl,
  trendingCoinsUrl,
} from './urls';

export const getCoinInfo = async query => {
  const url = coinInfoUrl(query);
  const { data } = await axios.get(url);
  return data;
};

export const getTrendingCoins = async () => {
  const { data } = await axios.get(trendingCoinsUrl);
  return data;
};

export const getHistoryCoinData = async coin => {
  const url = historyCoinDataUrl(coin);
  const { data } = await axios.get(url);
  return data;
};

export const getAllCoins = async () => {
  const { data } = await axios.get(allCoinsUrl);
  return data;
};
