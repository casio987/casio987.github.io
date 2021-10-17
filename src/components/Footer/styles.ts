import styled from 'styled-components';


export const FooterBar = styled.div`
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    bottom: 0;
    width: 100%;
    gap: 2rem;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const ImageLink = styled.a`
    fill: #4d52db;
    height: 50px;

    .gmail:hover {
        fill: #EA4335;
    }
    
    .linkedin:hover {
        fill: #0077B5;
    }

    .github:hover {
            fill: black;
    }
`;