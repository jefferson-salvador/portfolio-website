"use client";

import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 Description",
    image: "/images/about-image.png",
    gitUrl: "/",
    previewUrl: "/",
    tag: ["All", "Website"],
  },
  {
    id: 2,
    title: "React Portfolio Website 2",
    description: "Project 2 Description",
    image: "/images/about-image.png",
    gitUrl: "/",
    previewUrl: "/",
    tag: ["All", "Website"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => {
    return project.tag.includes(tag);
  });
  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          name={"All"}
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name={"Website"}
          onClick={handleTagChange}
          isSelected={tag === "Website"}
        />
        <ProjectTag
          name={"Graphics"}
          onClick={handleTagChange}
          isSelected={tag === "Graphics"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          ></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
