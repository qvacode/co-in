import { BiDollarCircle, BiInfoCircle } from 'react-icons/bi';
import { FcBullish, FcBearish } from 'react-icons/fc';
import { BsFillPeopleFill } from 'react-icons/bs';

const TrainigSection = () => {
  return (
    <section className="bg-gradient-to-l from-gray-900 to-slate-700 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl font-rajdhani">
            AI Training for Cryptocurrency Analysis
          </h2>

          <p className="mt-4 text-gray-300 font-rajdhani text-xl">
            In this section, we will delve into how we train our AI to analyze
            cryptocurrency news and market sentiment. Discover how technology is
            utilized to provide accurate and reliable information to our users.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 font-rajdhani">
          <a className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-violet-500/10 hover:shadow-violet-500/10">
            <FcBullish className="text-3xl" />

            <h2 className="mt-4 text-xl font-bold text-white">Bullish</h2>

            <p className="mt-1 text-lg text-gray-300">
              1. Trading volume has increased significantly in recent days.{' '}
              <br />
              2. Multiple key resistance breaks have occurred. <br />
              3. Most technical indicators show a bullish trend.
            </p>
          </a>

          <a className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-violet-500/10 hover:shadow-violet-500/10">
            <FcBearish className="text-3xl" />

            <h2 className="mt-4 text-xl font-bold text-white">Bearish</h2>

            <p className="mt-1 text-lg text-gray-300">
              1. The trading volume has decreased compared to previous periods.{' '}
              <br />
              2. Behavior patterns have been identified that suggest a downward
              trend. <br />
              3. Most of the technical indicators indicate a decrease in price.
            </p>
          </a>

          <a className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-violet-500/10 hover:shadow-violet-500/10">
            <BiDollarCircle className="text-3xl text-violet-500" />

            <h2 className="mt-4 text-xl font-bold text-white">Marker Cap</h2>

            <p className="mt-1 text-lg text-gray-300">
              1. Market capitalization has increased significantly in recent
              months. <br />
              2. Important mergers and acquisitions have taken place in the
              sector. <br />
              3. The currency has gained positions in the market capitalization
              ranking.
            </p>
          </a>

          <a className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-violet-500/10 hover:shadow-violet-500/10">
            <BiInfoCircle className="text-3xl text-violet-500" />

            <h2 className="mt-4 text-xl font-bold text-white">FOMO</h2>

            <p className="mt-1 text-lg text-gray-300">
              1. There has been a significant increase in the number of positive
              mentions on social media. <br />
              2. There are a large number of institutional investors interested
              in the currency. <br />
              3. The demand for the currency has dramatically increased in
              recent weeks.
            </p>
          </a>

          <a className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-violet-500/10 hover:shadow-violet-500/10">
            <BsFillPeopleFill className="text-3xl text-violet-500" />

            <h2 className="mt-4 text-xl font-bold text-white">Community</h2>

            <p className="mt-1 text-lg text-gray-300">
              1. Multiple announcements have been made by developers and experts
              in the currency. <br />
              2. The currency community has grown significantly in recent
              months. <br />
              3. The currency has been adopted by a significant number of
              merchants and online services.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrainigSection;
