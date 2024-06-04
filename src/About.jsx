// src/components/About.js
import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutContainer>
      <h1>About Me</h1>
      <p>This is the about section.</p>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

export default About;
