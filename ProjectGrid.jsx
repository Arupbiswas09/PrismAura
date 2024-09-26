//import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectTitle = styled.h3`
  padding: 1rem;
  margin: 0;
`;

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ProjectGrid = ({ projects }) => {
  return (
    <GridContainer>
      {projects && projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          variants={projectVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ProjectImage src={project.image} alt={project.title} />
          <ProjectTitle>{project.title}</ProjectTitle>
        </ProjectCard>
      ))}
    </GridContainer>
  );
};

ProjectGrid.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

ProjectGrid.defaultProps = {
  projects: [],
};

export default ProjectGrid;
