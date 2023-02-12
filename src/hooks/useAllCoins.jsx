import { useQuery } from '@tanstack/react-query';
import { getAllCoins } from '../api/coinApi';

const useAllCoins = () => {
  const coins = useQuery({
    queryKey: ['all-coins'],
    queryFn: getAllCoins,
  });

  return {
    coins,
  };
};

export default useAllCoins;
