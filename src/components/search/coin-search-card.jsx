const CoinSearchCard = ({ coinData = {} }) => {
  return (
    <div className="absolute py-1 px-4 bg-gradient-to-b from-slate-900 to-transparent backdrop-blur-md rounded-xl">
      <div className="flex items-center gap-2">
        <img src={coinData.image.thumb} alt="" />
        <div className="flex gap-2 items-center">
          <p className="text-white font-rajdhani font-bold text-2xl">
            {coinData.symbol.toUpperCase()}
          </p>
          <p
            className={`font-rajdhani text-sm font-thin ${
              coinData.market_data.price_change_percentage_24h > 0
                ? 'text-green-500'
                : 'text-red-500'
            }`}
          >
            {'% ' + coinData.market_data.price_change_percentage_24h}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoinSearchCard;
