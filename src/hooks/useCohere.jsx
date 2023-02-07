import axios from 'axios';

import examples from '../components/helpers/cohere-examples';
const COHERE_API_TOKEN = 'GzR00mZ94uJVvyTkMbwzI48KTNSaPyvQTZtnKnsl';

const useCohere = async (inputs = []) => {
  const options = {
    url: 'https://api.cohere.ai/classify',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${COHERE_API_TOKEN}`,
      'Content-Type': 'application/json',
      'Cohere-Version': '2022-12-06',
    },
    data: {
      model: 'large',
      inputs,
      examples,
    },
  };

  const bullish = {
    total: 0,
    count: 0,
  };

  const bearish = {
    total: 0,
    count: 0,
  };

  const marquetCap = {
    total: 0,
    count: 0,
  };

  const fomo = {
    total: 0,
    count: 0,
  };

  const community = {
    total: 0,
    count: 0,
  };

  const response = await axios.request(options);
  const data = response.data.classifications;

  data.forEach(el => {
    if (el.prediction === 'Bullish') {
      bullish.total += el.confidence;
      bullish.count += 1;
    } else if (el.prediction === 'Bearish') {
      bearish.total += el.confidence;
      bearish.count += 1;
    } else if (el.prediction === 'Marketcap') {
      marquetCap.total += el.confidence;
      marquetCap.count += 1;
    } else if (el.prediction === 'FOMO') {
      fomo.total += el.confidence;
      fomo.count += 1;
    } else if (el.prediction === 'Community') {
      community.total += el.confidence;
      community.count += 1;
    }
  });

  const bullishProm = ((bullish.total / bullish.count) * 100).toFixed(0) * 1;
  const bearishProm = ((bearish.total / bearish.count) * 100).toFixed(0) * 1;
  const marketProm =
    ((marquetCap.total / marquetCap.count) * 100).toFixed(0) * 1;
  const fomoProm = ((fomo.total / fomo.count) * 100).toFixed(0) * 1;
  const communityProm =
    ((community.total / community.count) * 100).toFixed(0) * 1;

  const sentiment = {
    bullish: bullishProm,
    bearish: bearishProm,
    marketCap: marketProm,
    fomo: fomoProm,
    community: communityProm,
  };

  return sentiment;
};

export default useCohere;
