import React from "react";
import Project from "../components/Project.jsx";

function Portfolio() {
  const projects = [
    {
      title: "My Weather App",
      description: "A Weather App",
      imageUrl: "src/assets/css/weather-app-pic.jpg",
      link: "https://sailorvirgo.github.io/My-Weather-App/",
    },
    {
      title: "Project 2",
      description: "Description of project 2",
      imageUrl: "path/to/image2.jpg",
    },
    // Add more projects as needed
  ];

  return (
    <section className="container">
      <h2 className="mb-4">My Portfolio</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <Project
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
