import { Divider, ProjectCardContainer, ProjectImage, TextContainer } from "./styles";

type ProjectCardProps = {
  img: string;
  titleText: string;
  bodyText: string;
};

const ProjectCard = ({ img, titleText, bodyText} : ProjectCardProps) => {
  return(
    <ProjectCardContainer>
      <ProjectImage src={img} />
      <Divider />
      <TextContainer>
        <h1>{titleText}</h1>
        <p>{bodyText}</p>
      </TextContainer>
    </ProjectCardContainer>
  );
};

export default ProjectCard;