const FaqSection = () => {
  return (
    <div className="space-y-4 sm:px-2 md:px-3 lg:px-4 xl:px-24 py-4 bg-gradient-to-r from-slate-700 to-gray-900 font-rajdhani">
      <h2 className="text-3xl font-bold sm:text-4xl font-rajdhani text-center text-white">
        FAQs
      </h2>

      <div className="flex flex-col gap-2 sm:px-4 xl:w-[72%] mx-auto">
        <details className="group border-l-4 border-violet-500 bg-gray-900 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between cursor-pointer">
            <h2 className="text-xl font-bold text-white">
              What is this website about?
            </h2>

            <span className="ml-1.5 flex-shrink-0 rounded-full bg-gray-900 p-1.5 text-white sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-50 text-xl">
            This website is a platform that provides information about
            cryptocurrencies and market sentiment related to them.
          </p>
        </details>
        <details className="group border-l-4 border-violet-500 bg-gray-900 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between cursor-pointer">
            <h2 className="text-xl font-bold text-white">
              How does market sentiment analysis work?
            </h2>

            <span className="ml-1.5 flex-shrink-0 rounded-full bg-gray-900 p-1.5 text-white sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-50 text-xl">
            Market sentiment analysis is performed by consuming a news API and
            processing them with another sentiment analysis API called Cohere.
          </p>
        </details>
        <details className="group border-l-4 border-violet-500 bg-gray-900 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between cursor-pointer">
            <h2 className="text-xl font-bold text-white">
              Is the information on this website accurate?
            </h2>

            <span className="ml-1.5 flex-shrink-0 rounded-full bg-gray-900 p-1.5 text-white sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-50 text-xl">
            We cannot guarantee the accuracy of the information on this site. It
            is recommended to conduct your own research and consult reliable
            sources before making decisions related to cryptocurrencies.
          </p>
        </details>

        <details className="group border-l-4 border-violet-500 bg-gray-900 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between cursor-pointer">
            <h2 className="text-xl font-bold text-white">
              How do we select news for market sentiment analysis?
            </h2>

            <span className="ml-1.5 flex-shrink-0 rounded-full bg-gray-900 p-1.5 text-white sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-50 text-xl">
            News is selected by consuming a news API and selecting the 30 most
            recent articles published about the cryptocurrency in question.
          </p>
        </details>
        <details className="group border-l-4 border-violet-500 bg-gray-900 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between cursor-pointer">
            <h2 className="text-xl font-bold text-white">
              Why can't I see a particular cryptocurrency in the search section?
            </h2>

            <span className="ml-1.5 flex-shrink-0 rounded-full bg-gray-900 p-1.5 text-white sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-50 text-xl">
            Why can't I see a particular cryptocurrency in the search section?
            It is possible that the cryptocurrency in question is not available
            on the CoinGecko API or has not yet been included on our website.
          </p>
        </details>
        <details className="group border-l-4 border-violet-500 bg-gray-900 p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex items-center justify-between cursor-pointer">
            <h2 className="text-xl font-bold text-white">
              Is market sentiment analysis a precise prediction of the
              cryptocurrency price?
            </h2>

            <span className="ml-1.5 flex-shrink-0 rounded-full bg-gray-900 p-1.5 text-white sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-50 text-xl">
            No. Market sentiment analysis is not a precise prediction of the
            cryptocurrency price and should not be used as such.
          </p>
        </details>
      </div>
    </div>
  );
};

export default FaqSection;
