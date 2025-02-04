import { ProjectCardProps } from "../types/project";
import { ProjectCard } from "./ProjectCard";

export const Projects: React.FC = () => {
  const projectData: ProjectCardProps[] = [
    {
      id: 1,
      title: "Posto",
      description: "Posto is a full-stack blog made for blogging!",
      techStack: ["Golang + Gin", "mySQL", "HTML Templates"],
      link: "https://postoblog.duckdns.org/profile/karim",
    },
    {
      id: 2,
      title: "Tic Tacity Toe",
      description:
        "Tic Tacity Toe allows you to play Single or Multiplayer Tic Tac Toe!",
      techStack: ["HTML", "CSS", "JS"],
      link: "https://tictacitytoe.netlify.app",
    },
    {
      id: 3,
      title: "NegativeScope",
      description: "It's a horoscope, but it's negative!",
      techStack: ["HTML", "CSS", "JS"],
      link: "https://shimmering-cheesecake-73dd7c.netlify.app/",
    },
    {
      id: 4,
      title: "WeatherWoo",
      description:
        "Why check the weather app on your phone when you have WeatherWoo!",
      techStack: ["HTML", "CSS", "JS"],
      link: "https://karimweatherapp.netlify.app",
    },
  ];

  return (
    <section className="project-section">
      <h2>Projects</h2>
      <div className="project">
        {projectData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};
