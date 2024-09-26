//import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const HeroContent = styled(motion.div)`
  max-width: 800px;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <HeroTitle>Prism Aura Design</HeroTitle>
        <HeroSubtitle>Crafting Visual Experiences That Inspire</HeroSubtitle>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;