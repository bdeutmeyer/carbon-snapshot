import { useLocation, useNavigate } from 'react-router-dom';

import '../../App.css'

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      {/* we'll probably axe this? */}
      <div className="container text-center mb-5">
        {/* {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )} */}
        <h4>
          Carbon Snapshot - 2023. All rights reserved. Made by:
          <a href="https://github.com/ckietzm2" id= "github-link">Cody, </a>
          <a href="https://github.com/ericolson1977" id= "github-link">Eric, </a>
          <a href="https://github.com/bdeutmeyer" id= "github-link">Beth, </a>and
          <a href="https://github.com/vladesovc" id= "github-link"> Corey.</a>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
