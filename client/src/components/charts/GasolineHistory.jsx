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

export default function GasolineHistory() {
    const { email: userParam } = useParams();

    const { loading, data } = useQuery(QUERY_ME, {
      variables: { email: userParam },
    });
    console.log(data)

    const user = data?.me || data?.user || {};
    console.log(user)

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
      
      const gasolineDatesToFormat = user.gasolineConsumption.map((index) => new Date(parseInt(index.purchaseDate)).toLocaleDateString())

      const labels = gasolineDatesToFormat

      const chartDetails = {
        labels,
        datasets: [
            {
                label: 'Gasoline Use',
                data: user.gasolineConsumption.map((index) => index.gallons),
                backgroundColor: 'rgba(34, 139, 34, 0.5)'
            },
        ],
      };

    return (
        <>
        <Bar options={options} data={chartDetails} />
        </>
    )
}
