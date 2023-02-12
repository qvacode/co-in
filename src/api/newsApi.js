import axios from 'axios';
import { newsUrl, worldNewsUrl } from './urls';

//? This service only allows 600 calls per month.
/* export const getNews = async coin => {
  const url = newsUrl(coin);
  const { data } = await axios.get(url);
  const filterData = data.news.map(el =>
    el.description.length > 0 ? el.description : el.title
  );
  return filterData;
}; */

//* This service allows 50 calls per day, use sparingly.
export const getWorldNews = async coin => {
  const url = worldNewsUrl(coin);
  const { data } = await axios.get(url);
  const filterData = data.news.map(el => el.text);
  return filterData;
};
