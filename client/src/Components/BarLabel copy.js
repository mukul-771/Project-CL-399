import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarLabel() {
  const data = {
    labels: ['W', 'A', 'L', 'R', 'R', 'S', 'I', 'R', 'R', 'Q', 'S', 'Y'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [0.514, 0.697, 0.786, 0.260, 0.560, 0.262, 0.574, 0.259, 0.700, 0.260, 0.527, 0.828],
        backgroundColor: '#1976d2',
      },
      {
        label: 'Dataset 2',
        data: [0.410, 0.620, 0.750, 0.300, 0.530, 0.280, 0.610, 0.290, 0.680, 0.290, 0.490, 0.800],
        backgroundColor: '#ff9800',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: 'Comparison of Two Datasets',
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        max: 1, // Adjust this based on your data range
      },
    },
  };

  return (
    <div style={{ width: '500px', height: '300px' }}>
      <Bar data={data} options={options} />
    </div>
  );
}
