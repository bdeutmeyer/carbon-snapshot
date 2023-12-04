import { useLocation, useNavigate } from 'react-router-dom';

import '../../App.css'

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      {/* we'll probably axe this? */}
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h4>
        Carbon Snapshot - 2023. All rights reserved. Made by: Cody, Eric, Beth and Corey.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
