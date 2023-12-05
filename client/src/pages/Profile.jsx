import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import AllHistory from '../components/charts/AllHistory'
import ElectricForm from '../components/ElectricForm';
import GasForm from '../components/GasForm';
import GasolineForm from '../components/GasolineForm';
import { Container, Row } from 'reactstrap';

const Profile = () => {
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
    return <Navigate to="/me" />;
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
    <div>
      <Container fluid>
        <Row className='d-flex'>
          <ElectricForm />
          <GasForm />
          <GasolineForm />
        </Row>
      </Container>
      <Container fluid>
        <Row className='d-flex'>
          <AllHistory />
        </Row>
      </Container>
    </div >
  );
};

export default Profile;
