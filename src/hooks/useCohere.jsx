import { useQuery } from '@tanstack/react-query';
import { getMarketSentiment } from '../api/cohereApi';
import useNews from './useNews';

const useCohere = coin => {
  const { news } = useNews(coin);

  const inputs = news?.data;

  const sentiment = useQuery({
    queryKey: ['sentiment', coin],
    queryFn: () => getMarketSentiment(inputs),
    enabled: !!inputs,
  });

  return { sentiment };
};

export default useCohere;
