import React from 'react';
import ElectricCalculation from '../components/calculations/ElectricCalculation';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import ElectricHistory from '../components/charts/ElectricHistory';

const Electricity = () => {
  const { email: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_ME, {
    variables: { email: userParam },
  });

  const user = data?.me || data?.user || {};
  if (
    Auth.loggedIn() && 

    Auth.getProfile().authenticatedPerson.email === userParam
  ) {
    return <Navigate to="/electricity" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.name) {
    return (
      <h4>
        You need to be logged in to see this page. Use the navigation links above to sign up or log in!
      </h4>
    );
  }
  return (
    <main className="electricity-page">
      <ElectricCalculation />
      <ElectricHistory />
    </main>
  );
};

export default Electricity;




