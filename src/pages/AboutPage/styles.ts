import { fadeIn, swing } from 'react-animations';
import styled, { keyframes } from 'styled-components';

export const PageAnimation = keyframes`${fadeIn}`;
export const AboutContainer = styled.div`
    animation-delay: 1s;
    animation: 1s ${PageAnimation};
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const InfoHolder = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
    margin-left: 150px;
    margin-right: 150px;
    gap: 4rem;
        
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const TextHolder = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 12.5px; 
    justify-content: center;
`;

export const Image = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 100px;  
    @media (max-width: 960px) {
        display: flex;
        flex-direction: column;
    }
`;

export const WaveAnimation = keyframes`${swing}`;
export const Text = styled.h2`
    text-align: left;
    color: #3e3f41;
    .wave {
        animation: 1.5s ${WaveAnimation};
        display: inline-block;
    }
    .youtube {
        text-decoration: none;
        color: #FF0000;
        &:hover {
            text-decoration: underline;
        }
    }
    .discord {
        text-decoration: none;
        color: #738ADB;
        &:hover {
            text-decoration: underline;
        }
    }
`;