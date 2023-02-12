import { useNavigate } from 'react-router-dom';

const CoinTable = ({ data = [] }) => {
  const navigate = useNavigate();

  return (
    <table className="table-auto rounded-3xl font-rajdhani">
      <thead className="text-white font-bold text-lg">
        <tr className="justify-center bg-violet-500 text-xl font-bold h-12">
          <th className="w-1/4">Coin</th>
          <th className="w-1/4">Price</th>
          <th className="w-1/4">24h Change </th>
          <th className="w-1/4">Market Cap</th>
        </tr>
      </thead>
      <tbody className="text-white font-bold text-md ml-5">
        {data.map(coin => (
          <tr
            key={coin.id}
            onClick={() => navigate(`/search/${coin.id}`)}
            className="text-center hover:bg-slate-700 hover:cursor-pointer"
          >
            <td className="w-1/4 py-2">
              <div className="flex justify-start ml-2 gap-2">
                <img src={coin.image} alt="" className="object-contain w-1/5" />

                <div className="flex flex-col items-start">
                  <p className="font-bold text-xl">
                    {coin.symbol.toUpperCase()}
                  </p>
                  <p>{coin.name}</p>
                </div>
              </div>
            </td>
            <td className="w-1/4">
              {'$ ' +
                new Intl.NumberFormat('en', {
                  maximumSignificantDigits: 3,
                }).format(coin.current_price)}
            </td>
            <td
              className={`w-1/4 ${
                coin.price_change_percentage_24h > 0
                  ? 'text-green-500'
                  : 'text-red-500'
              } `}
            >
              {coin.price_change_percentage_24h.toFixed(2) + ' %'}
            </td>
            <td className="w-1/4">
              {new Intl.NumberFormat('en', {
                maximumSignificantDigits: 3,
              }).format(coin.market_cap)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CoinTable;
