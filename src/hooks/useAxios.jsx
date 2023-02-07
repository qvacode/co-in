import { useEffect, useState } from 'react';

import axios from 'axios';

const useAxios = (url = '') => {
  const [res, setRes] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await axios.get(url);
      setRes(data);
    } catch (error) {
      setRes(error.response.data);
    }
  };

  return res;
};

export default useAxios;
