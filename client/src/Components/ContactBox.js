// src/components/ContactBox.js
import React, { useState } from 'react';
import styled from 'styled-components';
import img1 from '../assets/2342.jpeg';
import img2 from '../assets/212.jpeg';
import img3 from '../assets/12.jpeg';
import img4 from '../assets/342.jpeg';

const ContactBoxContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  width: 90%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const BoxTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
`;

const BoxDescription = styled.p`
  font-size: 16px;
  color: #555;
`;

const contactDetails = [
  { phone: '+91 9429428442', email: 'mehta.aditya@iitgn.ac.in', image: img1 },
  { phone: '+91 9328432001', email: 'mukulmee771@gmail.com', image: img2 },
  { phone: '+91 9876543210', email: 'priya.singh@iitgn.ac.in', image: img3 },
  { phone: '+91 9988776655', email: 'nisha.patel@iitgn.ac.in', image: img4 }
];

const ContactBox = ({ onContactSelect }) => (
  <ContactBoxContainer>
    <BoxTitle>Connect with our Team</BoxTitle>
    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      {contactDetails.map((contact, index) => (
        <div key={index} style={{ textAlign: 'center', margin: '10px' }} onClick={() => onContactSelect(contact.email)}>
          <img
            src={contact.image}
            alt="Contact Person"
            style={{ width: '200px', height: '200px', borderRadius: '10px', marginBottom: '10px', cursor: 'pointer' }}
          />
          <BoxDescription>
            Phone: {contact.phone}<br />
            Email: {contact.email}<br />
            IIT Gandhinagar
          </BoxDescription>
        </div>
      ))}
    </div>
  </ContactBoxContainer>
);

export default ContactBox;
