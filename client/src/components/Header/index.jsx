import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

import '../../App.css'

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    // In the case of Bootstrap/reactstrap, this would change to a Header component. Will want to restyle later
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          {/* this link should probably route to /me (or whatever the user's main dashboard is) instead */}
          <Link className="text-light" to="/">
            <h1 id="title-CS" className="m-0">Welcome To Carbon Snapshot!</h1>
          </Link>
          <p id="subTitle-CS" className="m-0">It feels good to be green.</p>
        </div>
        <div>
          {/* This will all get adjusted based on what we decide. Definitely axe the username part and the signup link if login/signup happens on a headerless landing page */}
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {/* Run the getProfile() method to get access to the unencrypted token value in order to retrieve the user's username  */}
                {Auth.getProfile().authenticatedPerson.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
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