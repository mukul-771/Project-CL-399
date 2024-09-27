// src/components/ContactForm.js
import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const FormContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  width: 90%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const FormTitle = styled.h3`
  font-family: Inter, sans-serif;
  font-size: 24px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
`;



const ContactForm = ({ email }) => {
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS service ID, template ID, and user ID
    const serviceID = 'service_4s5mw5d';
    const templateID = 'service_cdqj85m';
    const userID = 'aSDxIBy3TFs2gV1Cf';

    const templateParams = {
      sender_email: senderEmail,
      receiver_email: email,
      subject,
      description,
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        alert('Email sent successfully!');
        setSenderEmail('');
        setSubject('');
        setDescription('');
      })
      .catch((error) => {
        alert('Failed to send email. Please try again.');
        console.error('Email sending error:', error);
      });
  };

  return (
    <FormContainer>
      <FormTitle>Contact Form</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Sender Email:</FormLabel>
          <FormInput
            type="email"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Receiver Email:</FormLabel>
          <FormInput
            type="email"
            value={email}
            readOnly
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Subject:</FormLabel>
          <FormInput
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>Description:</FormLabel>
          <FormTextarea
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </FormGroup>
        <button type="submit">Send</button>
      </form>
    </FormContainer>
  );
};

export default ContactForm;
