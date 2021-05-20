import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Tb from '../assets/tb.jpg'
import { fadeIn, swing } from 'react-animations';


const PageAnimation = keyframes`${fadeIn}`;
const AboutContainer = styled.div`
    animation-delay: 1s;
    animation: 1s ${PageAnimation};
    display: flex;
    justify-content: center;
    width: 100%;
`;

const InfoHolder = styled.div`
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

const TextHolder = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 12.5px; 
    justify-content: center;
`;

const Image = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 100px;  
    @media (max-width: 960px) {
        display: flex;
        flex-direction: column;
    }
`;

const ytList = [ 
    "https://www.youtube.com/watch?v=OPLIvF1efoE&t=3592s&ab_channel=HaydenSmith",
    "https://www.youtube.com/watch?v=xb-rb35ZzTQ&t=2711s&ab_channel=CSESoc",
    "https://www.youtube.com/watch?v=KmDYXaaT9sA&ab_channel=TeamCoco",
    "https://www.youtube.com/watch?v=MpzWxMFtFRU&t=315s&ab_channel=MarcChee",
    "https://www.youtube.com/watch?v=nMouIB-L8Nc&ab_channel=TeamCoco",
    "https://www.youtube.com/watch?v=gCVZIpxUEhg&ab_channel=HarvardUniversity",
];

const WaveAnimation = keyframes`${swing}`;
const Text = styled.h2`
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


function About() {
    // used to access index of 'random' youtube vids
    const [randomNum, setRandomNum] = useState(0);
    const randomYoutubeVid = ytList[randomNum];

    // console.log(randomNum);
    return (
        <AboutContainer>
            <InfoHolder>
                <Image src={Tb}></Image>
                <TextHolder>
                    <Text>
                        Hey <span className="wave">👋</span> I'm Sunny, a second year computer science student at the University of New South Wales.
                    </Text>
                    <Text>
                        I'm interested in anything tech, with web dev and shell scripting being my more recent undertakings
                    </Text>
                    <Text>
                        If I'm not beep booping my way through code, you can find me spending too much time on <a href={ randomYoutubeVid } onClick={() => setRandomNum(Math.floor(Math.random() * ytList.length))} className="youtube" target="_blank" rel="noreferrer">Youtube</a>, 
                        stuffing my face or lurking in the <a href="https://bit.ly/CSESocDiscord" className="discord" target="_blank" rel="noreferrer">CSESoc Discord server</a>.
                    </Text>
                </TextHolder>
            </InfoHolder>
        </AboutContainer>
    )
}

export default About
