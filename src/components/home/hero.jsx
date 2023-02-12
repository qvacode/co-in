import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

import { motion } from 'framer-motion';
import { Toast } from '../../helpers/toast';

const Hero = () => {
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  const sendSearch = () => {
    if (search.length > 3) {
      navigate(`/search/${search.toLowerCase().trim()}`);
    } else {
      Toast.fire({
        icon: 'error',
        title: 'Your search must be at least 2 characters long.',
      });
    }
  };

  return (
    <>
      <motion.div
        className="w-screen h-screen bg-[url('/img/bg.jpg')] bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute h-screen w-screen backdrop-blur-3xl top-0">
          <div className="flex flex-col w-screen h-screen justify-center items-center gap-2">
            <h1 className="text-5xl text-center text-white font-rajdhani font-bold sm:w-11/12 md:w-2/3  p-2 mt-2">
              Make informed decision:
            </h1>
            <p className="text-white text-3xl text-center font-rajdhani sm:w-11/12 md:w-7/12 lg:w-1/2">
              We use Cohere AI to analyze the latest cryptocurrency news and get
              market sentiment that allows you to make informed decisions.
            </p>
            <div className="sm:w-11/12 md:w-7/12 lg:w-1/2 xl:w-1/3 flex items-center justify-end mt-5">
              <input
                type="text"
                className="w-full py-5 rounded-full ring-1 ring-gray-400 focus:ring focus:ring-violet-600 focus:outline-none border-none bg-slate-50  pl-8 text-xl font-raleway text-dark shadow-md shadow-gray-800"
                placeholder="e.g. bitcoin"
                value={search}
                onChange={handleSearch}
              />
              <button
                onClick={sendSearch}
                className="text-white font-raleway inline-flex items-center gap-2 absolute mr-3 py-3 px-4 bg-violet-600 rounded-full hover:bg-teal-700 transition duration-500"
              >
                <FaSearch />
                <p>Search</p>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
