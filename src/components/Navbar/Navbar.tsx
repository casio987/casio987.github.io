import React from 'react';
import { LinkContainer, NavbarContainer } from "./styles";

const Navbar = () => {
    const handleAboutClick = () => {
        // TODO: add some smooth to link thingo
    };

    return (
        <NavbarContainer>
            <p>Home</p>
            <LinkContainer>
                <p>.about()</p>
                <p>/</p>
                <p>projects()</p>
            </LinkContainer>
        </NavbarContainer>
    );
};
export default Navbar;
