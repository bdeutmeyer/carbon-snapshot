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

  const utilDatesToFormat = user.electricConsumption.map((index) => new Date(parseInt(index.billDate)).toLocaleDateString())

  const utilLabels = utilDatesToFormat

  const gasolineDatesToFormat = user.gasolineConsumption.map((index) => new Date(parseInt(index.purchaseDate)).toLocaleDateString())

  const gasolineLabels = gasolineDatesToFormat

  const utilsChartDetails = {
    labels: utilLabels,
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
    ]
  };

  const gasolineChartDetails = {
    labels: gasolineLabels,
    datasets: [
      {
        label: 'Gasoline Use',
        data: user.gasolineConsumption.map((index) => index.gallons),
        backgroundColor: 'rgba(34, 139, 34, 0.5)'
      },
    ],
  };
  console.log(gasolineChartDetails)

  return (
    <>
      <Bar options={options} data={utilsChartDetails} className='bg-white'/>
      <Bar options={options} data={gasolineChartDetails} className='bg-white'/>
    </>
  )
}
