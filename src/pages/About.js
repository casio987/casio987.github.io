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
    margin-top: 200px;
    gap: 4rem;
`;

const TextHolder = styled.div`
    display: flex;
    flex-direction: column;
    width: 800px;
    font-size: 0.85rem; 
`;

const Image = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 100px;  
`;

const ytList = [ 
    "https://www.youtube.com/watch?v=OPLIvF1efoE&t=3592s&ab_channel=HaydenSmith",
    "https://www.youtube.com/watch?v=xb-rb35ZzTQ&t=2711s&ab_channel=CSESoc",
    "https://www.youtube.com/watch?v=KmDYXaaT9sA&ab_channel=TeamCoco",
    "https://www.youtube.com/watch?v=MpzWxMFtFRU&t=315s&ab_channel=MarcChee",
    "https://www.youtube.com/watch?v=qzpxWtDMIME&ab_channel=Lordramza76",
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
    }
    .discord {
        text-decoration: none;
        color: #738ADB;
    }
`;


function About() {
    // used to access index of 'random' youtube vids
    const [randomNum, setRandomNum] = useState(0);
    const randomYoutubeVid = ytList[randomNum];

    console.log(randomNum);
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
                        pumping iron, stuffing my face or lurking in the <a href="https://bit.ly/CSESocDiscord" className="discord" target="_blank" rel="noreferrer">CSESoc Discord server</a>.
                    </Text>
                </TextHolder>
            </InfoHolder>
        </AboutContainer>
    )
}

export default About
