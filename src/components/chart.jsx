import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const ChartView = ({ historicData = [], query }) => {
  return (
    <Line
      className="text-white"
      data={{
        labels: historicData.map(coin => {
          let date = new Date(coin[0]);
          return date.toLocaleDateString();
        }),

        datasets: [
          {
            data: historicData.map(coin => coin[1]),
            label: `${query} price in the last 7 days.`,
            borderColor: '#8b5cf6',
          },
        ],
      }}
      options={{
        elements: {
          point: {
            radius: 1,
          },
        },
      }}
    />
  );
};

export default ChartView;
