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
    console.log(user)
    const lastMonthEndDate = Date.now()
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

    const lastMonthElectricData = user.electricConsumption.filter(entry => {
        const billDate = parseInt(entry.billDate);
        return billDate >= lastMonthStartDate.getTime() && billDate <= lastMonthEndDate;
    });

    const previousMonthElectricData = user.electricConsumption.filter(entry => {
        const billDate = parseInt(entry.billDate);
        return billDate >= previousMonthStartDate.getTime() && billDate <= previousMonthEndDate;
    });

    const lastMonthNaturalGasData = user.naturalGasConsumption.filter(entry => {
        const billDate = parseInt(entry.billDate);
        return billDate >= lastMonthStartDate.getTime() && billDate <= lastMonthEndDate;
    });

    const previousMonthNaturalGasData = user.naturalGasConsumption.filter(entry => {
        const billDate = parseInt(entry.billDate);
        return billDate >= previousMonthStartDate.getTime() && billDate <= previousMonthEndDate;
    });

    const lastMonthGasolineData = user.gasolineConsumption.filter(entry => {
        const purchaseDate = parseInt(entry.purchaseDate);
        return purchaseDate >= lastMonthStartDate.getTime() && purchaseDate <= lastMonthEndDate;
    });

    const previousMonthGasolineData = user.gasolineConsumption.filter(entry => {
        const purchaseDate = parseInt(entry.purchaseDate);
        return purchaseDate >= previousMonthStartDate.getTime() && purchaseDate <= previousMonthEndDate;
    });

    const formattedLastMonthEndDate = new Date(parseInt(lastMonthEndDate)).toLocaleDateString()

    const electricData = [previousMonthElectricData, lastMonthElectricData]

    const naturalGasData = [previousMonthNaturalGasData, lastMonthNaturalGasData]

    const gasolineData = [previousMonthGasolineData, lastMonthGasolineData]

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
                text: `${user.name}'s Carbon Footprint`,
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

    const pastMonthLabels = [`${lastMonthStartDate.toLocaleDateString()} - ${formattedLastMonthEndDate}`]

    const previousMonthLabels = [`${previousMonthStartDate.toLocaleDateString()} - ${previousMonthEndDate.toLocaleDateString()}`]

    const previousMonthChartDetails = {
        labels: previousMonthLabels,
        datasets: [
            {
                label: 'Electricity Footprint',
                data: previousMonthElectricData.map((index) => index.carbonOutput),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Natural Gas Footprint',
                data: previousMonthNaturalGasData.map((index) => index.carbonOutput),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Gasoline Footprint',
                data: previousMonthGasolineData.map((index) => index.carbonOutput),
                backgroundColor: 'rgba(34, 139, 34, 0.5)'
            },
        ]
    };

    const pastMonthChartDetails = {
        labels: pastMonthLabels,
        datasets: [
            {
                label: 'Electricity Footprint',
                data: lastMonthElectricData.map((index) => index.carbonOutput),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Natural Gas Footprint',
                data: lastMonthNaturalGasData.map((index) => index.carbonOutput),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Gasoline Footprint',
                data: lastMonthGasolineData.map((index) => index.carbonOutput),
                backgroundColor: 'rgba(34, 139, 34, 0.5)'
            },
        ]
    };

    return (
        <>
            <Col id= 'carbon-chart' className="chart-color"
                md={{
                    offset: 2,
                    size: 8
                }}
                sm="12"
            >
                <Bar options={options} data={pastMonthChartDetails} className='chart-color' />
            </Col>
            <Col id= 'carbon-chart' className="chart-color"
                md={{
                    offset: 2,
                    size: 8
                }}
                sm="12"
            >
                <Bar options={options} data={previousMonthChartDetails} className='chart-color' />
            </Col>
        </>
    )
}
