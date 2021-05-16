import React from 'react';
import styled from 'styled-components';
import { NavLink }  from 'react-router-dom';

const Nav = styled.nav`
    background-color: white;
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
    justify-content: center;
    align-item: center;
    width: 100%;
    heigh:80px;
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
        background: #ffdd40;
    }
    .active {
        color: #ffdd40;
        border: 1px solid #ffdd40;
    }
`;






function Navbar() {
    return (
        <Nav>
            <NavbarContainer>
                <NavbarMenu>
                    <NavItem>
                        <NavLink exact to="/">
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/about">
                            About
                        </NavLink>
                    </NavItem>
                </NavbarMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
