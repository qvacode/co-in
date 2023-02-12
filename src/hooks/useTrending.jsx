import { useQuery } from '@tanstack/react-query';
import { getTrendingCoins } from '../api/coinApi';

const useTrending = () => {
  const trendingCoin = useQuery({
    queryKey: ['trending-coin'],
    queryFn: getTrendingCoins,
  });

  return { trendingCoin };
};

export default useTrending;
