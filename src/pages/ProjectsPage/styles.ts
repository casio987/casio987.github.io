import { fadeIn, rollIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

export const PageAnimation = keyframes`${fadeIn}`;
export const IdekAnimation = keyframes`${rollIn}`;
export const ProjectsContainer = styled.div`
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
