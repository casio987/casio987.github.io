import { IconContainer, PageContainer, ProfilePic } from "./styles";
import Tb from "../../assets/tb.jpg";
import Github from "../../assets/github.svg";
import Gmail from "../../assets/gmail.svg";
import Linkedin from "../../assets/linkedin.svg";
import { ProjectList } from "../../constants/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { ProjectCardContainer } from "../../components/ProjectCard/styles";

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
      <ProfilePic src={Tb} />
      <h1>Sunny Wang</h1>
      <h2>Intern @ Optus</h2>
      <IconContainer>
        <img src={Github} />
        <img src={Gmail} />
        <img src={Linkedin} />
      </IconContainer>
      <h2>About Me</h2>
      <p style={{ textAlign: "center" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus et maximus nunc. Maecenas sit amet posuere nibh, eu
        consectetur magna. Maecenas sagittis dignissim lacinia. Quisque 
        at augue vitae mi dignissim mollis. Maecenas tempor mauris mauris, 
        sed fringilla quam porta et. Maecenas sapien turpis, aliquam et ex eget, 
        porttitor volutpat ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
      </p>
      <h2>Projects</h2>
      <ProjectCardContainer>
        {/* {renderProjects} */}
      </ProjectCardContainer>
    </PageContainer>
  )
};

export default LandingPage;
