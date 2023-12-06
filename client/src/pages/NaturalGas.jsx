import React from 'react';
import NaturalGasCalculation from '../components/calculations/NaturalGasCalculation';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import NaturalGasHistory from '../components/charts/NaturalGasHistory';

const NaturalGas = () => {
  const { email: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_ME, {
    variables: { email: userParam },
  });

  const user = data?.me || data?.user || {};
  if (
    Auth.loggedIn() && 

    Auth.getProfile().authenticatedPerson.email === userParam
  ) {
    return <Navigate to="/naturalgas" />;
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
    <main className="natural-gas-page">
      <NaturalGasCalculation />
      <NaturalGasHistory />
    </main>
  );
};

export default NaturalGas;




