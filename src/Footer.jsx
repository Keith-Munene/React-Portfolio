// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2024 Your Name. All rights reserved.</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 1rem;
  background: #333;
  color: #fff;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export default Footer;
