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
import { convertFromUnix } from '../../utils/dateFormat';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function AllHistory() {
    const { email: userParam } = useParams();

    const { loading, data } = useQuery(QUERY_ME, {
      variables: { email: userParam },
    });

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
      
      const datesToFormat = user.gasolineConsumption.map((index) => index.purchaseDate)

      const labels = datesToFormat

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
