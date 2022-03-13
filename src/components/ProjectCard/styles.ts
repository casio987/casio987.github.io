import styled from "styled-components";

export const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 17.25rem;
  border-radius: 3.125rem;
  border: 5px solid black;
  padding: 1rem;
  box-shadow: 0.5rem 0.5rem 0.25rem #C0C0C0;
`;

export const ProjectImage = styled.img`
  width: 420px;
  height: 200px;
  margin-right: 1rem;
`;

export const Divider = styled.div`
  height: 100%;
  border-right: 5px solid black;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
