// src/components/Projects.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/projects') // Replace with your API endpoint
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the projects!", error);
      });
  }, []);

  return (
    <ProjectsContainer>
      <h1>My Projects</h1>
      <ProjectsGrid>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`;

export default Projects;
