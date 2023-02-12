import { useQuery } from '@tanstack/react-query';
import { getWorldNews } from '../api/newsApi';

const useNews = coin => {
  const news = useQuery({
    queryKey: ['news', coin],
    queryFn: () => getWorldNews(coin),
  });

  return { news };
};

export default useNews;
