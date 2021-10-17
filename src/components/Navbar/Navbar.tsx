import React from 'react';
import { NavLink }  from 'react-router-dom';
import { Nav, NavbarContainer, NavbarMenu, NavItem } from "./styles";

const Navbar = () => (
    <Nav>
        <NavbarContainer>
            <NavbarMenu>
                <NavItem>
                    <NavLink exact to="/" activeClassName='active' className="norm">
                        .home()
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink exact to="/about" activeClassName='active' className="norm">
                        .about()
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink exact to="/projects" activeClassName='active' className="norm">
                        .projects()
                    </NavLink>
                </NavItem>
            </NavbarMenu>
        </NavbarContainer>
    </Nav>
);

export default Navbar;
