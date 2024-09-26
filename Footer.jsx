//import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  padding: 2rem;
`;

function Contact() {
  return (
    <ContactContainer>
      <h2>Contact Us</h2>
      <p>Get in touch with us for your next project.</p>
      {/* Add a contact form or contact information here */}
    </ContactContainer>
  );
}

export default Contact;