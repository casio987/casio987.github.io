import React from 'react'
import { fadeIn, rollIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const PageAnimation = keyframes`${fadeIn}`;
const IdekAnimation = keyframes`${rollIn}`;
const ProjectsContainer = styled.div`
    animation: 1s ${PageAnimation};
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 8rem - 35px);

    > * {
        font-size: 36px;
        animation: 2s ${IdekAnimation};
    }
`;


function Projects() {
    return (
        <ProjectsContainer>
            <span>¯\_(ツ)_/¯</span>
        </ProjectsContainer>
    )
}

export default Projects
