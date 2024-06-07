import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

export const NavBar = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/">Nutshell | Steer Clear</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/articles/">Articles</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/events">
                Events
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/tasks">
                Tasks
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/messages">
                Messages
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/"
                onClick={() => {
                    localStorage.removeItem("activeUser")
                }}
              >
                <strong>Logout</strong>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
