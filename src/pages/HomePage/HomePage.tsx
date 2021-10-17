import React from 'react';
import { HomeContainer, Profile, TextContainer, Greeting, Meme, Info } from './styles';
import Tb from '../../assets/tb.jpg'

const HomePage = () => {
    return (
        <HomeContainer>
            <Profile src={Tb}/>
            <TextContainer>
                <Greeting>Hi!</Greeting>
                <Meme>I'm Sunny</Meme>
                <Info>CS @ UNSW</Info>
            </TextContainer>
        </HomeContainer>
    );
};

export default HomePage;
