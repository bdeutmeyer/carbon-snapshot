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

export default function ElectricHistory() {
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
          labels: {
            color: '#134611'
          }
        },
        title: {
          display: true,
          text: `${user.name}'s Usage History`,
          color: '#134611'
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#134611'
          }
        },
        y: {
          ticks: {
            color: '#134611'
          }
        }
      }
    };
      
      const datesToFormat = user.electricConsumption.map((index) => new Date(parseInt(index.billDate)).toLocaleDateString())

      const labels = datesToFormat
      console.log(labels)

      const chartDetails = {
        labels,
        datasets: [
          {
            label: `Electric Use through ${user.electricCompany}`,
            data: user.electricConsumption.map((index) => index.kwh),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };

    return (
        <>
        <Bar options={options} data={chartDetails} className='chart-color' />
        </>
    )
}
