// src/components/ProjectCard.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <Card
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <a href={project.url} target="_blank" rel="noopener noreferrer">View Project</a>
    </Card>
  );
};

const Card = styled(motion.div)`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  text-align: center;
`;

export default ProjectCard;
