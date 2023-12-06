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

export default function CarbonSnapshot() {
    const { email: userParam } = useParams();

    const { loading, data } = useQuery(QUERY_ME, {
        variables: { email: userParam },
    });

    const user = data?.me || data?.user || {};

    const lastMonthEndDate = new Date(parseInt(Date.now())).toLocaleDateString()
    const lastMonthStartDate = new Date(lastMonthEndDate);
    
    // Set the start date of the last month
    lastMonthStartDate.setMonth(lastMonthStartDate.getMonth() - 1);
    lastMonthStartDate.setHours(0, 0, 0, 0);
    
    // Copy the lastMonthStartDate for the previous month end date
    const previousMonthEndDate = new Date(lastMonthStartDate);
    
    // Subtract one day to get the end date of the previous month
    previousMonthEndDate.setDate(previousMonthEndDate.getDate() - 1);
    previousMonthEndDate.setHours(23, 59, 59, 999);
    
    // Set the start date of the previous month
    const previousMonthStartDate = new Date(previousMonthEndDate);
    previousMonthStartDate.setMonth(previousMonthStartDate.getMonth() - 1);
    previousMonthStartDate.setHours(0, 0, 0, 0);
    
    console.log(
      'Last Month End Date:', lastMonthEndDate,
      'Last Month Start Date:', lastMonthStartDate,
      'Previous Month End Date:', previousMonthEndDate,
      'Previous Month Start Date:', previousMonthStartDate
    );
    

    // Filter entries within the last 6 months
    // const filteredElectricData = user.electricConsumption.filter(entry => {
    //     const billDate = parseInt(entry.billDate);
    //     return billDate >= startDate.getTime() && billDate <= endDate;
    // });

    // const filteredNaturalGasData = user.naturalGasConsumption.filter(entry => {
    //     const billDate = parseInt(entry.billDate);
    //     return billDate >= startDate.getTime() && billDate <= endDate;
    // });

    // const filteredGasolineData = user.gasolineConsumption.filter(entry => {
    //     const purchaseDate = parseInt(entry.purchaseDate);
    //     return purchaseDate >= startDate.getTime() && purchaseDate <= endDate;
    // });

    // console.log(filteredElectricData);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: `${user.name}'s Carbon Footprint`,
            },
        },
    };

    const electricDatesToFormat = user.electricConsumption.map((index) => new Date(parseInt(index.billDate)).toLocaleDateString())

    const electricLabels = electricDatesToFormat

    const naturalGasDatesToFormat = user.naturalGasConsumption.map((index) => new Date(parseInt(index.billDate)).toLocaleDateString())

    const naturalGasLabels = naturalGasDatesToFormat

    const gasolineDatesToFormat = user.gasolineConsumption.map((index) => new Date(parseInt(index.purchaseDate)).toLocaleDateString())

    const gasolineLabels = gasolineDatesToFormat

    const chartDetails = {
        labels: electricDatesToFormat,
        datasets: [
            {
                label: 'Electricity Footprint',
                data: user.electricConsumption.map((index) => index.carbonOutput),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Natural Gas Footprint',
                data: user.naturalGasConsumption.map((index) => index.carbonOutput),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Gasoline Footprint',
                data: user.gasolineConsumption.map((index) => index.carbonOutput),
                backgroundColor: 'rgba(34, 139, 34, 0.5)'
            },
        ]
    };

    return (
        <>
            <Col>
                <Bar options={options} data={chartDetails} className='bg-white' />
            </Col>

        </>
    )
}
