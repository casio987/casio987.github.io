import React from 'react';
import { ErrorContainer, ErrorText } from "./styles";

const ErrorPage = () => {
    return (
        <ErrorContainer>
            <ErrorText>
                looks like something went wrong 
                <br/>
                <span>😢</span>
            </ErrorText>
        </ErrorContainer>
    );
};

export default ErrorPage;
