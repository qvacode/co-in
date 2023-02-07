import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const Paginate = ({ previosPage, nextPage }) => {
  return (
    <div className="flex justify-center mt-5 mb-5">
      <div className="flex justify-between items-center w-full text-white font-rajdhani font-semibold">
        <button
          onClick={previosPage}
          className=" text-white text-xl flex items-center"
        >
          <BiChevronLeft className="text-3xl" />
          Anterior
        </button>
        <button
          onClick={nextPage}
          className=" text-white text-xl flex items-center"
        >
          Siguiente
          <BiChevronRight className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Paginate;
