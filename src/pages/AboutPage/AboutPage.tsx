import React, { useState } from 'react';
import { AboutContainer, InfoHolder, TextHolder, Image, Text } from "./styles";
import Tb from '../../assets/tb.jpg'
import { YTLIST } from "../../constants/links";

const AboutPage = () => {
    const [randomNum, setRandomNum] = useState(0);
    const randomYoutubeVid = YTLIST[randomNum];

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
                        If I'm not beep booping my way through code, you can find me spending too much time on <a href={ randomYoutubeVid } onClick={() => setRandomNum(Math.floor(Math.random() * YTLIST.length))} className="youtube" target="_blank" rel="noreferrer">Youtube</a>, 
                        stuffing my face or lurking in the <a href="https://bit.ly/CSESocDiscord" className="discord" target="_blank" rel="noreferrer">CSESoc Discord server</a>.
                    </Text>
                </TextHolder>
            </InfoHolder>
        </AboutContainer>
    );
};

export default AboutPage;
