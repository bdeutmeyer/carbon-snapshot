import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

import '../../App.css'

const Header = () => {
  const { email: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_ME, {
    variables: { email: userParam },
  });

  const user = data?.me || data?.user || {};
  
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <div className="text-light" to="/">
            <h1 id="title-CS" className="m-0">{Auth.loggedIn() ? ('Carbon Snapshot') : ('Welcome To Carbon Snapshot!')}</h1>
          </div>
          <p id="subTitle-CS" className="m-0">{Auth.loggedIn() ? (`Welcome, ${user.name} !`) : ('It feels good to be green.')}</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <></>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;