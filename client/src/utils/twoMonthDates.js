// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY_ME } from '../../utils/queries';

// export default function twoMonthDates() {
//     const { email: userParam } = useParams();

//     const { loading, data } = useQuery(QUERY_ME, {
//         variables: { email: userParam },
//     });

//     const user = data?.me || data?.user || {};

//     // Set the end date of the last month to be now
//     const lastMonthEndDate = Date.now()

//     // Set the start date of the last month
//     const lastMonthStartDate = new Date(lastMonthEndDate);
//     lastMonthStartDate.setMonth(lastMonthStartDate.getMonth() - 1);
//     lastMonthStartDate.setHours(0, 0, 0, 0);

//     // Set the end date of the previous month
//     const previousMonthEndDate = new Date(lastMonthStartDate);
//     previousMonthEndDate.setDate(previousMonthEndDate.getDate() - 1);
//     previousMonthEndDate.setHours(23, 59, 59, 999);

//     // Set the start date of the previous month
//     const previousMonthStartDate = new Date(previousMonthEndDate);
//     previousMonthStartDate.setMonth(previousMonthStartDate.getMonth() - 1);
//     previousMonthStartDate.setHours(0, 0, 0, 0);

//     const formattedLastMonthEndDate = new Date(parseInt(lastMonthEndDate)).toLocaleDateString()
//     const lastMonthLabels = [`${lastMonthStartDate.toLocaleDateString()} - ${formattedLastMonthEndDate}`]
//     const previousMonthLabels = [`${previousMonthStartDate.toLocaleDateString()} - ${previousMonthEndDate.toLocaleDateString()}`]

//     return [ lastMonthEndDate, lastMonthStartDate, lastMonthLabels, previousMonthEndDate, previousMonthStartDate, previousMonthLabels ]
// }