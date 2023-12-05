import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default function Navigation(args) {

  return (
    <div>
      <Navbar {...args}>
          <Nav id="mainFont" className="me-auto" navbar>
            <NavItem>
              <NavLink href="/me">Dashboard</NavLink>
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
          </Nav>
      </Navbar>
    </div>
  );
}