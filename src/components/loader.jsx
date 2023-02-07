import { ProgressBar } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-r from-slate-700 to-gray-900">
      <ProgressBar
        height="160"
        width="160"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#86198f"
        barColor="#8b5cf6"
      />
      <p className="font-rajdhani font-bold text-2xl text-white -mt-4">
        Loading ...
      </p>
    </div>
  );
};

export default Loader;
