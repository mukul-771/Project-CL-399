// src/pages/Contact.js
import React, { useState } from 'react';
import styled from 'styled-components';
import ContactBox from '../Components/ContactBox'; // Import the ContactBox component
import ContactForm from '../Components/ContactForm'; // Import the ContactForm component

// Container for centering content
const ContactContainer = styled.div`
  display: flex;
  font-family: 'Times New Roman', Times, serif; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  min-height: 40vh;  // Adjust as needed
  text-align: center;  // Center text within the container
`;

function Contact() {
  const [selectedEmail, setSelectedEmail] = useState('');

  const handleContactSelect = (email) => {
    setSelectedEmail(email);
  };

  return (
    <ContactContainer>
      <h1>Contact Page</h1>
      <p>Get in touch with us through the following means:</p>
      <ContactBox onContactSelect={handleContactSelect} />
      {selectedEmail && <ContactForm email={selectedEmail} />}
    </ContactContainer>
  );
}

export default Contact;
