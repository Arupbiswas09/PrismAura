import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const CursorDot = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
`;

const AnimatedCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <CursorDot
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
      }}
      transition={{
        type: 'spring',
        damping: 25,
        stiffness: 250,
      }}
    />
  );
};

export default AnimatedCursor;