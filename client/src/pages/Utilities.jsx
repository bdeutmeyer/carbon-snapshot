import React from 'react';
import GasForm from '../components/GasForm';
import Calculation from './Calculation'
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import ElectricForm from '../components/ElectricForm';
import UtilitiesHistory from '../components/charts/UtilitiesHistory'

const Utilities = () => {
  const { email: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_ME, {
    variables: { email: userParam },
  });

  const user = data?.me || data?.user || {};
  if (
    Auth.loggedIn() && 
    /* Run the getProfile() method to get access to the unencrypted token value in order to retrieve the user's email, and compare it to the userParam variable */
    Auth.getProfile().authenticatedPerson.email === userParam
  ) {
    return <Navigate to="/utilities" />;
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
    <main className="utilities-page">
      <h1>Utilities Information</h1>
      {<ElectricForm />}
      <Calculation />
      <GasForm />
      <UtilitiesHistory />
      {/* You can add more forms or components as needed */}
    </main>
  );
};

export default Utilities;




