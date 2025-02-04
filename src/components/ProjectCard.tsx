import { ProjectCardProps } from "../types/project";

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  link,
}) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <strong>Tech Stack:</strong>
      <p>{techStack.join(", ")}</p>
      <a href={link} target="_blank">
        View Project
      </a>
    </div>
  );
};
