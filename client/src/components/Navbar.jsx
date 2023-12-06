import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';
import Auth from '../utils/auth';

import '../App.css'

export default function Navigation(args) {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    window.location.assign('/');
  };
  return (
    <>
    {Auth.loggedIn() ? (
        <div id="mainFont">
      <Navbar {...args}>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/me">
                Dashboard
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/electricity">
                Electricity
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/naturalgas">
                Natural Gas
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/gasoline">
                Gasoline
              </NavLink>
            </NavItem>
            <NavItem>
            <NavLink onClick={logout}>
                Logout
              </NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
    ) : ( <div></div> )}
    </>

  );
}