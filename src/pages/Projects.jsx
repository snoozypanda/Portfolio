import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/github/repos?sort=updated&per_page=6")
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching repos:", error);
        setLoading(false);
      });
  }, []);

  const projects = [
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      link: "https://github.com",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      technologies: ["React", "Firebase", "Material-UI"],
      link: "https://github.com",
    },
    {
      title: "Student Management App",
      description: "Student Managemnt application management application",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      technologies: ["React", "C#", "Material-UI"],
      link: "https://github.com",
    },
  ];

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

  
    </div>
  );
}

export default Projects;
