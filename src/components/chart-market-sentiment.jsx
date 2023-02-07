import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const ChartSentimentView = ({ params = [], sentiments = [] }) => {
  return (
    <Line
      className="text-white"
      data={{
        labels: params.map(param => param),

        datasets: [
          {
            data: sentiments.map(sentiment => sentiment),
            label: `Market Sentiment`,
            borderColor: '#8b5cf6',
          },
        ],
      }}
      options={{
        elements: {
          point: {
            radius: 7,
          },
        },
      }}
    />
  );
};

export default ChartSentimentView;
