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

  const formattedData = user.gasolineConsumption.map((index) => {
    const formattedDate = new Date(parseInt(index.purchaseDate)).toLocaleDateString(undefined, { timeZone: 'Asia/Bangkok' });
    return {
      ...index,
      purchaseDate: formattedDate,
    };
  });
  
  const sortedData = formattedData.sort((a, b) => {
    a = a.purchaseDate.split('/');
    b = b.purchaseDate.split('/');
    return a[2] - b[2] || a[0] - b[0] || a[1] - b[1];
});

  const footer = (tooltipItems) => {
    let comment;
    tooltipItems.forEach(function(tooltipItem) {
      comment = sortedData[tooltipItem.dataIndex].comment || '';
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

  const sortedDates = formattedData.map(index => index.purchaseDate)

  const labels = sortedDates

  const chartDetails = {
    labels,
    datasets: [
      {
        label: 'Gasoline Use (gallons)',
        data: sortedData.map((index) => index.gallons),
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
