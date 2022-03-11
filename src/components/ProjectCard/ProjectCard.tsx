import { Text } from "../Text/Text";
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
        <Text fontSize="2rem">{titleText}</Text>
        <Text fontSize="1.5rem">{bodyText}</Text>
      </TextContainer>
    </ProjectCardContainer>
  );
};

export default ProjectCard;