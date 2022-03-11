import { IconContainer, PageContainer, ProfilePic, ProjectListContainer } from "./styles";
import Tb from "../../assets/tb.jpg";
import Github from "../../assets/github.svg";
import Gmail from "../../assets/gmail.svg";
import Linkedin from "../../assets/linkedin.svg";
import { ProjectList } from "../../constants/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Icon } from "../../components/Icon/Icon";

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
      <h1 style={{ fontSize: "64px" }}>Sunny Wang</h1>
      <h2 style={{ fontSize: "36px" }}>Intern @ Optus</h2>
      <IconContainer>
        <Icon src={Github} size={1.875}/>
        <Icon src={Linkedin} size={1.875}/>
        <Icon src={Gmail} size={1.875}/>
      </IconContainer>
      <h2 style={{ fontSize: "64px" }}>About Me</h2>
      <p style={{ textAlign: "center", fontSize: "24px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus et maximus nunc. Maecenas sit amet posuere nibh, eu
        consectetur magna. Maecenas sagittis dignissim lacinia. Quisque 
        at augue vitae mi dignissim mollis. Maecenas tempor mauris mauris, 
        sed fringilla quam porta et. Maecenas sapien turpis, aliquam et ex eget, 
        porttitor volutpat ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
      </p>
      <h2 style={{ fontSize: "64px" }}>Projects</h2>
      <ProjectListContainer>
        {renderProjects}
      </ProjectListContainer>
    </PageContainer>
  )
};

export default LandingPage;
