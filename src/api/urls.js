export const coinInfoUrl = query => {
  return `https://api.coingecko.com/api/v3/coins/${query}`;
};

export const trendingCoinsUrl =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h';

export const historyCoinDataUrl = coin => {
  return `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=7`;
};

export const allCoinsUrl =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false';

export const newsUrl = coin => {
  return `https://api.currentsapi.services/v1/search?keywords=${coin}&language=en&apiKey=PriyziiEYWeXWZL6yey4g9Mrqknj0H2TP1S2IkBY82n9Jc69`;
};

export const cohereUrl = 'https://api.cohere.ai/classify';

export const worldNewsUrl = (coin) => {
  return `https://api.worldnewsapi.com/search-news?api-key=082e0ac25f1143978d0c2a27050db86f&number=50&text=${coin}`
}
