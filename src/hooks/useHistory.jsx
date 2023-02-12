import { useQuery } from '@tanstack/react-query';
import { getHistoryCoinData } from '../api/coinApi';

const useHistory = coin => {
  const historyCoinData = useQuery({
    queryKey: ['history-coin-data', coin],
    queryFn: () => getHistoryCoinData(coin),
  });

  return { historyCoinData };
};

export default useHistory;
