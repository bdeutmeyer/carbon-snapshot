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
import { Col } from 'reactstrap';

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

  const user = data?.me || data?.user || {};

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'black'
        }
      },
      title: {
        display: true,
        text: `${user.name}'s Usage History`,
        color: 'black'
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'black'
        }
      },
      y: {
        ticks: {
          color: 'black'
        }
      }
    }
  };

  const gasolineDatesToFormat = user.gasolineConsumption.map((index) => new Date(parseInt(index.purchaseDate)).toLocaleDateString(undefined, { timeZone: 'Asia/Bangkok' }))

  const labels = gasolineDatesToFormat

  const chartDetails = {
    labels,
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
      <Col className="chart-color"
        md={{
          offset: 1,
          size: 10
        }}
        sm="12"
      >
        <Bar options={options} data={chartDetails} className='chart-color' />
      </Col>
    </>
  )
}
