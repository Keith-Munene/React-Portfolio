// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactContainer>
      <h1>Contact Me</h1>
      <p>You can reach me at itugikeith14@gmail.com</p>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

export default Contact;
