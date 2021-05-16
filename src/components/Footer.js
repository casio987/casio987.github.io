import React from 'react'
import styled from 'styled-components';
import { ReactComponent as Github } from '../assets/github.svg';
import { ReactComponent as Gmail } from '../assets/gmail.svg';
import { ReactComponent as Linkedin } from '../assets/linkedin.svg';

const FooterBar = styled.div`
    display: flex;
    position: fixed;
    justify-content: center;
    margin-top: 1rem;
    bottom: 0;
    width: 100%;
`;

const ImageLink = styled.a`
    margin: 10px;
`;


function Footer() {
    return (
        <FooterBar>
            <ImageLink href="https://github.com/casio987" target="_blank">
                <Github fill="#4d52db"/>
            </ImageLink>
            <ImageLink href="https://www.linkedin.com/in/sunny-wang-033a19206/" target="_blank">
                <Linkedin fill="#4d52db"/>
            </ImageLink>
            <ImageLink href="mailto: sunnyw987@gmail.com" target="_blank">
                <Gmail fill="#4d52db"/>
            </ImageLink>
        </FooterBar>
            
    )
}

export default Footer