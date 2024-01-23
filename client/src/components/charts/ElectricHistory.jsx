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

export default function ElectricHistory() {
  const { email: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_ME, {
    variables: { email: userParam },
  });

  const user = data?.me || data?.user || {};

  const footer = (tooltipItems) => {
    let comment;
    tooltipItems.forEach(function(tooltipItem) {
      comment = user.electricConsumption[tooltipItem.dataIndex].comment || '';
      if (comment) {
        comment = 'Comment: ' + comment;
      }
    });
    return comment;
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'black'
        }
      },
      tooltip: {
        callbacks: {
          footer: footer
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

  const datesToFormat = user.electricConsumption.map((index) => new Date(parseInt(index.billDate)).toLocaleDateString(undefined, { timeZone: 'Asia/Bangkok' }))

  const labels = datesToFormat

  const chartDetails = {
    labels,
    datasets: [
      {
        label: `Electric Use (kWh)`,
        data: user.electricConsumption.map((index) => index.kwh),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
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
