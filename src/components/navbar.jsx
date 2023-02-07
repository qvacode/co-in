import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';

import { FaGithub, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <nav className="flex absolute items-center justify-between sm:px-5 md:px-12 py-5 w-full bg-gradient-to-b from-slate-800 backdrop-blur-xl to-transparent top-0 z-20">
        <Link to={'/'}>
          <img src={logo} alt="logo" className="w-[140px]" />
        </Link>
        <div className="flex gap-3 text-white text-xl">
          <a
            className="hover:text-violet-500 hover:cursor-pointer transition duration-500"
            href="https://github.com/qvacode"
            target={'_blank'}
          >
            <FaGithub />
          </a>
          <a
            className="hover:text-blue-500 transition duration-500 hover:cursor-pointer"
            href="https://twitter.com/qvacode"
            target={'_blank'}
          >
            <FaTwitter />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
