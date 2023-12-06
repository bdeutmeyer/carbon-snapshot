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
import { Col } from 'reactstrap'

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

  const electricDatesToFormat = user.electricConsumption.map((index) => new Date(parseInt(index.billDate)).toLocaleDateString(undefined, { timeZone: 'Asia/Bangkok' }));
  const electricLabels = electricDatesToFormat
  const naturalGasDatesToFormat = user.naturalGasConsumption.map((index) => new Date(parseInt(index.billDate)).toLocaleDateString(undefined, { timeZone: 'Asia/Bangkok' }));
  const naturalGasLabels = naturalGasDatesToFormat
  const gasolineDatesToFormat = user.gasolineConsumption.map((index) => new Date(parseInt(index.purchaseDate)).toLocaleDateString(undefined, { timeZone: 'Asia/Bangkok' }));
  const gasolineLabels = gasolineDatesToFormat

  const electricChartDetails = {
    labels: electricLabels,
    datasets: [
      {
        label: `Electric Use through ${user.electricCompany} (kWh)`,
        data: user.electricConsumption.map((index) => index.kwh),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ]
  };

  const naturalGasChartDetails = {
    labels: naturalGasLabels,
    datasets: [
      {
        label: 'Natural Gas Use (therms)',
        data: user.naturalGasConsumption.map((index) => index.therms),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ]
  };

  const gasolineChartDetails = {
    labels: gasolineLabels,
    datasets: [
      {
        label: 'Gasoline Use (gallons)',
        data: user.gasolineConsumption.map((index) => index.gallons),
        backgroundColor: 'rgba(34, 139, 34, 0.5)'
      },
    ],
  };

  return (
    <>
      <Col>
        <Bar options={options} data={electricChartDetails} className='chart-color' />
      </Col>
      <Col>
        <Bar options={options} data={naturalGasChartDetails} className='chart-color' />
      </Col>
      <Col>
        <Bar options={options} data={gasolineChartDetails} className='chart-color' />
      </Col>
    </>
  )
}
