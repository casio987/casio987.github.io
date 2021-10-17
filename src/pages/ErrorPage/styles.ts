import styled, { keyframes } from 'styled-components';
import { shake } from 'react-animations';

export const ErrorContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 8rem - 35px);
`;

export const SadEmoji = keyframes`${shake}`;
export const ErrorText = styled.h1`
    color: #3e3f41;r
    animation: 0.5s ${SadEmoji};
    display: inline-block;
`;