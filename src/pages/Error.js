import React from 'react'
import styled, { keyframes } from 'styled-components';
import { shake } from 'react-animations';

const ErrorContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 8rem - 35px);
`;

const SadEmoji = keyframes`${shake}`;
const ErrorText = styled.h1`
    color: #3e3f41;
    animation: 0.5s ${SadEmoji};
    display: inline-block;
`;

function Error() {
    return (
        <ErrorContainer>
            <ErrorText>
                looks like something went wrong 
                <br/>
                <span>😢</span>
            </ErrorText>
        </ErrorContainer>
    )
}

export default Error
