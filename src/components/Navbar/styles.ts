import styled from 'styled-components';

export const NavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 100px;
    font-size: 2rem;
`;

export const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;

    & > * {
        margin-right: 1rem;
    }
`;