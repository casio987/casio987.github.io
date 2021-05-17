import React from 'react';
import styled, { keyframes } from 'styled-components';
import Tb from '../assets/tb.jpg'
import { tada, shake } from 'react-animations';

const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 75px;
    color: #3e3f41;
`;

const ProfileAnimation = keyframes`${tada}`;
const Profile = styled.img`
    animation: 1.5s ${ProfileAnimation};
    border-radius: 50%;
    width: 240px;
    height: 240px;  
`;

const GreetingAnimation = keyframes`${shake}`;
const Greeting = styled.h1`
    animation: 1.5s ${GreetingAnimation};
    font-size: 128px;
    margin-block-start: 0.7em;
    margin-block-end: 0.6em;
    line-height: 17px;
`;

const Meme = styled.h2`
    font-size: 2rem;    
`;

const Info = styled.h2`
    font-size: 1rem;
    color: #878e95;
`;  

function Home() {
    return (
        <HomeContainer>
            <Profile src={Tb}/>
            <Greeting>Hi!</Greeting>
            <Meme>My name Jeff</Meme>
            <Info>CS @ UNSW</Info>
        </HomeContainer>
    )
}

export default Home
