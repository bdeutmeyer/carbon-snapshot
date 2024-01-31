// This file is a MONSTER. I would love to have it modularized. The charts and header all use the same previous month/last month dates, though, so would need to be able to share those variables OR would all need to do the same calculating separately/redundantly. I've tried a couple of different ways to get the variables to export from another file, but haven't found a successful solution yet. I'm sure I can, it just hasn't gotten to the top of the priority list.

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
} from 'chart.js/auto';
import { Bar, Doughnut } from 'react-chartjs-2';
import { QUERY_ME } from '../../utils/queries';
import { Row, Col } from 'reactstrap'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function TwoMonthComparisons() {
    const { email: userParam } = useParams();

    const { loading, data } = useQuery(QUERY_ME, {
        variables: { email: userParam },
    });

    const user = data?.me || data?.user || {};

    // Set the end date of the last month to be now
    const lastMonthEndDate = Date.now()

    // Set the start date of the last month
    const lastMonthStartDate = new Date(lastMonthEndDate);
    lastMonthStartDate.setMonth(lastMonthStartDate.getMonth() - 1);
    lastMonthStartDate.setHours(0, 0, 0, 0);

    // Set the end date of the previous month
    const previousMonthEndDate = new Date(lastMonthStartDate);
    previousMonthEndDate.setDate(previousMonthEndDate.getDate() - 1);
    previousMonthEndDate.setHours(23, 59, 59, 999);

    // Set the start date of the previous month
    const previousMonthStartDate = new Date(previousMonthEndDate);
    previousMonthStartDate.setMonth(previousMonthStartDate.getMonth() - 1);
    previousMonthStartDate.setHours(0, 0, 0, 0);

    // Filter electric data to extract last month
    const lastMonthElectricData = user.electricConsumption.filter(entry => {
        const billDate = parseInt(entry.billDate);
        return billDate >= lastMonthStartDate.getTime() && billDate <= lastMonthEndDate;
    });
    // Total kWh and electric carbon output for last month
    let lastMonthTotalKwh = 0;
    let lastMonthTotalElecCarbon = 0;
    for (let i = 0; i < lastMonthElectricData.length; i++) {
        lastMonthTotalKwh += lastMonthElectricData[i].kwh
        lastMonthTotalElecCarbon += lastMonthElectricData[i].carbonOutput
    }

    // Filter electric data to extract previous month
    const previousMonthElectricData = user.electricConsumption.filter(entry => {
        const billDate = parseInt(entry.billDate);
        return billDate >= previousMonthStartDate.getTime() && billDate <= previousMonthEndDate;
    });
    // Total kWh and electric carbon output for previous month
    let previousMonthTotalKwh = 0;
    let previousMonthTotalElecCarbon = 0;
    for (let i = 0; i < previousMonthElectricData.length; i++) {
        previousMonthTotalKwh += previousMonthElectricData[i].kwh
        previousMonthTotalElecCarbon += previousMonthElectricData[i].carbonOutput
    }

    // Filter natgas data to extract last month
    const lastMonthNaturalGasData = user.naturalGasConsumption.filter(entry => {
        const billDate = parseInt(entry.billDate);
        return billDate >= lastMonthStartDate.getTime() && billDate <= lastMonthEndDate;
    });
    // Total therms and natgas carbon output for last month
    let lastMonthTotalTherms = 0;
    let lastMonthTotalNatGasCarbon = 0;
    for (let i = 0; i < lastMonthNaturalGasData.length; i++) {
        lastMonthTotalTherms += lastMonthNaturalGasData[i].therms
        lastMonthTotalNatGasCarbon += lastMonthNaturalGasData[i].carbonOutput
    }

    // Filter natgas data to extract previous month
    const previousMonthNaturalGasData = user.naturalGasConsumption.filter(entry => {
        const billDate = parseInt(entry.billDate);
        return billDate >= previousMonthStartDate.getTime() && billDate <= previousMonthEndDate;
    });
    // Total therms and natgas carbon output for previous month
    let previousMonthTotalTherms = 0;
    let previousMonthTotalNatGasCarbon = 0;
    for (let i = 0; i < previousMonthNaturalGasData.length; i++) {
        previousMonthTotalTherms += previousMonthNaturalGasData[i].therms
        previousMonthTotalNatGasCarbon += previousMonthNaturalGasData[i].carbonOutput
    }

    // Filter gasoline data to extract last month
    const lastMonthGasolineData = user.gasolineConsumption.filter(entry => {
        const purchaseDate = parseInt(entry.purchaseDate);
        return purchaseDate >= lastMonthStartDate.getTime() && purchaseDate <= lastMonthEndDate;
    });
    let lastMonthTotalGallons = 0;
    let lastMonthTotalGasolineCarbon = 0;
    for (let i = 0; i < lastMonthGasolineData.length; i++) {
        lastMonthTotalGallons += lastMonthGasolineData[i].gallons
        lastMonthTotalGasolineCarbon += lastMonthGasolineData[i].carbonOutput
    }

    // Filter gasoline data to extract previous month
    const previousMonthGasolineData = user.gasolineConsumption.filter(entry => {
        const purchaseDate = parseInt(entry.purchaseDate);
        return purchaseDate >= previousMonthStartDate.getTime() && purchaseDate <= previousMonthEndDate;
    });
    // Total gallons and gasoline carbon output for previous month
    let previousMonthTotalGallons = 0;
    let previousMonthTotalGasolineCarbon = 0;
    for (let i = 0; i < previousMonthGasolineData.length; i++) {
        previousMonthTotalGallons += previousMonthGasolineData[i].gallons
        previousMonthTotalGasolineCarbon += previousMonthGasolineData[i].carbonOutput
    }

    // Month totals for carbon
    const lastMonthTotalCarbon = lastMonthTotalElecCarbon + lastMonthTotalNatGasCarbon + lastMonthTotalGasolineCarbon

    const previousMonthTotalCarbon = previousMonthTotalElecCarbon + previousMonthTotalNatGasCarbon + previousMonthTotalGasolineCarbon

    // Carbon trend heading info
    let carbonDifference = 0;
    let carbonDirection = '';
    if (lastMonthTotalCarbon > previousMonthTotalCarbon) {
        carbonDifference = lastMonthTotalCarbon - previousMonthTotalCarbon;
        carbonDirection = `up from last month by ${carbonDifference} pounds of CO₂.`;
    } else if (lastMonthTotalCarbon < previousMonthTotalCarbon) {
        carbonDifference = previousMonthTotalCarbon - lastMonthTotalCarbon;
        carbonDirection = `down from last month by ${carbonDifference} pounds of CO₂.`;
    } else {
        carbonDirection = 'equal to last month'
    }

    // Labels for charts
    const formattedLastMonthEndDate = new Date(parseInt(lastMonthEndDate)).toLocaleDateString()
    const lastMonthLabels = [`${lastMonthStartDate.toLocaleDateString()} - ${formattedLastMonthEndDate}`]
    const previousMonthLabels = [`${previousMonthStartDate.toLocaleDateString()} - ${previousMonthEndDate.toLocaleDateString()}`]

    const carbonCompOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: { color: 'black' }
            },
            title: {
                display: true,
                text: `Total Carbon Output (pounds of CO₂) ${previousMonthLabels} vs. ${lastMonthLabels}`,
                color: 'black'
            },
        },
        scales: {
            x: { ticks: { color: 'black' } },
            y: { ticks: { color: 'black' } }
        }
    };

    const prevCarbBreakdownOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: { color: 'black' }
            },
            title: {
                display: true,
                text: `Carbon Output Sources`,
                color: 'black'
            },
        },
    };

    const lastCarbBreakdownOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: { color: 'black' }
            },
            title: {
                display: true,
                text: `Carbon Output Sources`,
                color: 'black'
            },
        },
    };

    const elecOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: { color: 'black' }
            },
            title: {
                display: true,
                text: `Electric Usage (kWh) ${previousMonthLabels} vs. ${lastMonthLabels}`,
                color: 'black'
            },
        },
        scales: {
            x: { ticks: { color: 'black' } },
            y: { ticks: { color: 'black' } }
        }
    };

    const natGasOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: { color: 'black' }
            },
            title: {
                display: true,
                text: `Natural Gas Usage (therms) ${previousMonthLabels} vs. ${lastMonthLabels}`,
                color: 'black'
            },
        },
        scales: {
            x: { ticks: { color: 'black' } },
            y: { ticks: { color: 'black' } }
        }
    };

    const gasolineOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: { color: 'black' }
            },
            title: {
                display: true,
                text: `Gasoline Usage (gallons) ${previousMonthLabels} vs. ${lastMonthLabels}`,
                color: 'black'
            },
        },
        scales: {
            x: { ticks: { color: 'black' } },
            y: { ticks: { color: 'black' } }
        }
    };

    const twoMonthCarbonComparison = {
        labels: ['Carbon Output'],
        datasets: [
            {
                label: [previousMonthLabels],
                data: [previousMonthTotalCarbon],
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
            }, {
                label: [lastMonthLabels],
                data: [lastMonthTotalCarbon],
                backgroundColor: 'rgba(0, 0, 0, 0.9)'
            },
        ]
    }

    const previousMonthCarbonSources = {
        labels: ['Electric', 'Natural Gas', 'Gasoline'],
        datasets: [
            {
                label: ['Pounds of Carbon'],
                data: [
                    previousMonthTotalElecCarbon,
                    previousMonthTotalNatGasCarbon,
                    previousMonthTotalGasolineCarbon
                ],
                backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(53, 162, 235, 0.5)', 'rgba(34, 139, 34, 0.5)']
            }
        ]
    }

    const lastMonthCarbonSources = {
        labels: ['Electric', 'Natural Gas', 'Gasoline'],
        datasets: [
            {
                label: ['Pounds of Carbon'],
                data: [
                    lastMonthTotalElecCarbon,
                    lastMonthTotalNatGasCarbon,
                    lastMonthTotalGasolineCarbon
                ],
                backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(53, 162, 235, 0.5)', 'rgba(34, 139, 34, 0.5)']
            }
        ]
    }

    const twoMonthElecUsageComparison = {
        labels: ['Electric Usage (kWh)'],
        datasets: [
            {
                label: [previousMonthLabels],
                data: [previousMonthTotalKwh],
                backgroundColor: 'rgba(255, 99, 132, 0.5)'
            }, {
                label: [lastMonthLabels],
                data: [lastMonthTotalKwh],
                backgroundColor: 'rgba(255, 99, 132, 0.9)',
            },
        ]
    }

    const twoMonthNatGasUsageComparison = {
        labels: ['Natural Gas Usage (therms)'],
        datasets: [
            {
                label: [previousMonthLabels],
                data: [previousMonthTotalTherms],
                backgroundColor: 'rgba(53, 162, 235, 0.5)'
            }, {
                label: [lastMonthLabels],
                data: [lastMonthTotalTherms],
                backgroundColor: 'rgba(53, 162, 235, 0.9)'
            },
        ]
    }

    const twoMonthGasolineUsageComparison = {
        labels: ['Gasoline Usage (gallons)'],
        datasets: [
            {
                label: [previousMonthLabels],
                data: [previousMonthTotalGallons],
                backgroundColor: 'rgba(34, 139, 34, 0.5)'
            }, {
                label: [lastMonthLabels],
                data: [lastMonthTotalGallons],
                backgroundColor: 'rgba(34, 139, 34, 0.9)'
            },
        ]
    }

    return (
        <>
        <Row>{carbonDirection !== '' ?             <h3>Your carbon output is {carbonDirection}</h3> : <></>}
        </Row>
            <Row>
                <Col className="chart-color carbon-chart"
                    md={{
                        offset: 2,
                        size: 5
                    }}
                    sm="12"
                >
                    <Bar options={carbonCompOptions} data={twoMonthCarbonComparison} className='chart-color' />
                </Col>
            </Row>
            <Row>
                <Col  className="chart-color carbon-chart"
                    md={{
                        offset: 2,
                        size: 3
                    }}
                    sm="12"
                >
                    <Doughnut options={prevCarbBreakdownOptions} data={previousMonthCarbonSources} className='chart-color' />
                </Col>
                <Col className="chart-color carbon-chart"
                    md={{
                        offset: 2,
                        size: 3
                    }}
                    sm="12"
                >
                    <Doughnut options={lastCarbBreakdownOptions} data={lastMonthCarbonSources} className='chart-color' />
                </Col>
            </Row>
            <Row>
                <Col className="chart-color carbon-chart"
                    md={{
                        offset: 2,
                        size: 4
                    }}
                    sm="12"
                >
                    <Bar options={elecOptions} data={twoMonthElecUsageComparison} className='chart-color' />
                </Col>
                <Col className="chart-color carbon-chart"
                    md={{
                        offset: 2,
                        size: 4
                    }}
                    sm="12">
                    <Bar options={natGasOptions} data={twoMonthNatGasUsageComparison} className='chart-color' />
                </Col>

                <Col className="chart-color carbon-chart"
                    md={{
                        offset: 2,
                        size: 4
                    }}
                    sm="12"
                >
                    <Bar options={gasolineOptions} data={twoMonthGasolineUsageComparison} className='chart-color' />
                </Col>
            </Row>

        </>
    )
}