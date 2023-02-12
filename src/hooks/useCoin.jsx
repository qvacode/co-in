import { useQuery } from '@tanstack/react-query';
import { getCoinInfo } from '../api/coinApi';

const useCoin = (coin) => {
  const coinQuery = useQuery(['coin-info', coin], () => getCoinInfo(coin));

  return { coinQuery };
};

export default useCoin;
