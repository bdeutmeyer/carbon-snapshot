import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { QUERY_ME } from '../../utils/queries';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function History() {
    const { email: userParam } = useParams();

    const { loading, data } = useQuery(QUERY_ME, {
      variables: { email: userParam },
    });

    const user = data?.me || data?.user || {};

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: `${user.name}'s Usage History`,
          },
        },
      };
      
      const labels = [user.electricConsumption[0].billDate, 'February', 'March', 'April', 'May', 'June', 'July'];

      const chartDetails = {
        labels,
        datasets: [
          {
            label: `Electric Use through ${user.electricCompany}`,
            data: user.electricConsumption.map((index) => index.kWh),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Natural Gas Use',
            data: user.naturalGasConsumption.map((index) => index.therms),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };

    return (
        <>
        <Bar options={options} data={chartDetails} />
        </>
    )
}
