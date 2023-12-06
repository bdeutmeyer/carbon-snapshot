import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import AllHistory from '../components/charts/AllHistory'
import { Container, Row } from 'reactstrap';

const Profile = () => {
  const { email: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_ME, {
    variables: { email: userParam },
  });

  const user = data?.me || data?.user || {};

  if (
    Auth.loggedIn() &&

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
          <AllHistory />
        </Row>
      </Container>
    </div >
  );
};

export default Profile;
