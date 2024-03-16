import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import API_URL from './api'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const HistoryGraph = ({id}) => {
  const [weightData, setWeightData] = useState([]);
  const [fatData, setFatData] = useState([]);
  const [muscleData, setMuscleData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weightResponse = await fetch(`${API_URL}/user/${id}/historical-data/weight`);
        const weightDataJson = await weightResponse.json();
        setWeightData(weightDataJson);

        const fatResponse = await fetch(`${API_URL}/user/${id}/historical-data/fat`);
        const fatDataJson = await fatResponse.json();
        setFatData(fatDataJson);

        const muscleResponse = await fetch(`${API_URL}/user/${id}/historical-data/muscle`);
        const muscleDataJson = await muscleResponse.json();
        setMuscleData(muscleDataJson);
      } catch (error) {
        console.error('Error fetching historical data:', error);
      }
    };

    fetchData();
  }, [id]);

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false,
        type: 'linear',
      },
    },
  };

  const weightChartData = {
    labels: weightData.map((item) => item.date),
    datasets: [
      {
        label: 'Weight (kg)',
        data: weightData.map((item) => item.value),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192,0.2)',
      },
    ],
  };

  const fatChartData = {
    labels: fatData.map((item) => item.date),
    datasets: [
      {
        label: 'Fat (%)',
        data: fatData.map((item) => item.value),
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
      },
    ],
  };

  const muscleChartData = {
    labels: muscleData.map((item) => item.date),
    datasets: [
      {
        label: 'Muscle (kg)',
        data: muscleData.map((item) => item.value),
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
      },
    ],
  };

  return (
    <div className="history-graph">
      <h2>History</h2>
      <div className="graph-container">
        <Line data={weightChartData} options={options} />
      </div>
      <div className="graph-container">
        <Line data={fatChartData} options={options} />
      </div>
      <div className="graph-container">
        <Line data={muscleChartData} options={options} />
      </div>
    </div>
  );
};

export default HistoryGraph;