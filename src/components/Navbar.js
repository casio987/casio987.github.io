import React from 'react';
import styled from 'styled-components';
import { NavLink }  from 'react-router-dom';

const Nav = styled.nav`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 50;
`;

const NavbarContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-item: center;
    width: 100%;
    height: 80px;
    max-width: 1500px;
`;

const NavbarMenu = styled.ul`
    display: flex;
    list-style: none;
    text-align: center;
    margin-right: 2rem;
`;

const NavItem = styled.li`
    line_height: 40px;
    margin-right: 1rem;

    &:after {
        content: "";
        display: block;
        height: 3px;
        width: 0;
        background: transparent;
        transition: width 0.7s ease, background-color 0.5s ease;
    }
    &:hover:after {
        width: 100%;
        background: #4d52db;
    }

    .norm {
        text-decoration: none; 
        color: black;
        padding: 0.5rem 1rem;
        height: 100%;
        border-bottom: 3px solid transparent;
    }

    .active {
        color: #4d52db;
        font-weight: bold;
    }
`;



function Navbar() {
    return (
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
                </NavbarMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
