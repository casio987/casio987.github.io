import { IconContainer, PageContainer, ProfilePic, ProjectListContainer } from "./styles";
import Tb from "../../assets/tb.jpg";
import Github from "../../assets/github.svg";
import Gmail from "../../assets/gmail.svg";
import Linkedin from "../../assets/linkedin.svg";
import { ProjectList } from "../../constants/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Icon } from "../../components/Icon/Icon";
import { Text } from "../../components/Text/Text";
import Navbar from "../../components/Navbar/Navbar";

const LandingPage = () => {
  const renderProjects = ProjectList.map(project => (
    <ProjectCard
      img={project.img}
      titleText={project.titleText}
      bodyText={project.bodyText}
    />
  ));

  return (
    <PageContainer>
      <Navbar /> 
      <ProfilePic src={Tb} />
      <Text
        fontSize="4rem"
        color="#2A2B2E"
        style={{ margin: "2.5rem 0 1rem 0" }}
      >
        Sunny Wang
      </Text>
      <Text
        fontSize="2rem"
        color="#2A2B2E"
        noMargin
      >
        Intern @ Optus
      </Text>
      {/* TODO: adjust icon container margins */}
      <IconContainer>
        <Icon src={Github} size={1.875} />
        <Icon src={Linkedin} size={1.875} />
        <Icon src={Gmail} size={1.875} />
      </IconContainer>
      <Text
        fontSize="4rem"
        color="#2A2B2E"
        noMargin
      >
        About Me
      </Text>
      <Text
        align="center"
        fontSize="1.5rem"
        style={{ marginBottom: "5rem "}}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus et maximus nunc. Maecenas sit amet posuere nibh, eu
        consectetur magna. Maecenas sagittis dignissim lacinia. Quisque 
        at augue vitae mi dignissim mollis. Maecenas tempor mauris mauris, 
        sed fringilla quam porta et. Maecenas sapien turpis, aliquam et ex eget, 
        porttitor volutpat ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
      </Text>
      <Text
        fontSize="4rem"
        color="#2A2B2E"
        noMargin
      >
        Projects
      </Text>
      <ProjectListContainer>
        {renderProjects}
      </ProjectListContainer>
    </PageContainer>
  )
};

export default LandingPage;
