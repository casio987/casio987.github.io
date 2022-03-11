import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 3rem;
`;

export const ProfilePic = styled.img`
  width: 11rem;
  height: 11rem;
  border-radius: 10rem;
  box-shadow: 0.5rem 0.5rem 0.25rem #C0C0C0;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 20%;
  margin: 2rem 0 5rem 0;
`;

export const ProjectListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  & > * {
    margin-top: 1.5rem;
  }

`;