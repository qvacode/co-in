import { Bars } from 'react-loader-spinner';

const SectionLoader = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Bars
        height="80"
        width="80"
        color="#8b5cf6"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default SectionLoader;
