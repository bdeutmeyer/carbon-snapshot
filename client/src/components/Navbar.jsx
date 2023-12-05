import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';
import Auth from '../utils/auth';

export default function Navigation(args) {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    window.location.assign('/');
  };
  return (
    <>
    {Auth.loggedIn() ? (
        <div>
      <Navbar {...args}>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/me">
                Dashboard
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/utilities">
                Utilities
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