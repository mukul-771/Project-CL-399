// src/pages/Contact.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import img1 from '../assets/2342.jpeg';
import img2 from '../assets/212.jpeg';
import img3 from '../assets/12.jpeg';
import img4 from '../assets/342.jpeg';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 60vh;
  padding: 20px;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-family: 'Times New Roman', Times, serif;
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.2em;
  margin-bottom: 40px;
  color: #666;
  text-align: center;
  max-width: 800px;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
`;

const ContactInfo = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 400px;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: fit-content;
`;

const ContactForm = styled.form`
  flex: 2;
  min-width: 300px;
  max-width: 600px;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const InfoTitle = styled.h2`
  color: #333;
  margin-bottom: 20px;
  font-size: 1.5em;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color: #666;
`;

const IconWrapper = styled.div`
  margin-right: 15px;
  color: #0b59de;
  font-size: 1.2em;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  width: 100%;
  max-width: 500px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-size: 1.1em;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1em;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #0b59de;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1em;
  min-height: 120px;
  max-height: 200px;
  resize: vertical;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #0b59de;
  }
`;

const SubmitButton = styled.button`
  background-color: #0b59de;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 1.1em;
  cursor: pointer;
  transition: background-color 0.3s;
  width: auto;

  &:hover {
    background-color: #0947b3;
  }
`;

const TeamSection = styled.div`
  width: 90%;
  max-width: 1200px;
  margin-bottom: 40px;
`;

const TeamContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  margin-top: 20px;
`;

const TeamTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
`;

const TeamGrid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const TeamMember = styled.div`
  text-align: center;
  margin: 10px;
  cursor: pointer;
`;

const MemberImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const MemberInfo = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.5;
`;

const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #0b59de;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-left: 10px;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const contactDetails = [
  { phone: '+91 9429428442', email: 'mehta.aditya@iitgn.ac.in', image: img1 },
  { phone: '+91 9328432001', email: 'mukulmee771@gmail.com', image: img2 },
  { phone: '+91 9876543210', email: 'priya.singh@iitgn.ac.in', image: img3 },
  { phone: '+91 9988776655', email: 'nisha.patel@iitgn.ac.in', image: img4 }
];

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Replace these with your EmailJS credentials
      const templateParams = {
        to_email: formData.email,
        from_name: formData.name,
        subject: formData.subject,
        message: formData.message
      };

      await emailjs.send(
        'service_4s5mw5d',  // From EmailJS dashboard
        'template_0uvmfne', // From EmailJS dashboard
        templateParams,
        'aSDxIBy3TFs2gV1Cf'   // From EmailJS dashboard
      );

      toast.success('Email sent successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });

      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Email error:', error);
      toast.error('Failed to send email. Please try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleContactSelect = (email) => {
    setFormData(prev => ({
      ...prev,
      email: email
    }));
    
    // Scroll to form
    const formElement = document.getElementById('contactForm');
    formElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Show toast notification
    toast.info('Email selected! Fill out the form to send your message.', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <PageContainer>
      <ToastContainer />

      <Title>Contact Us</Title>
      <Description>
        Have questions about our research? Want to collaborate? 
        Feel free to reach out to us using the form below.
      </Description>

      <TeamSection>
        <TeamContainer>
          <TeamTitle>Connect with our Team</TeamTitle>
          <TeamGrid>
            {contactDetails.map((contact, index) => (
              <TeamMember 
                key={index} 
                onClick={() => handleContactSelect(contact.email)}
              >
                <MemberImage
                  src={contact.image}
                  alt="Team Member"
                />
                <MemberInfo>
                  Phone: {contact.phone}<br />
                  Email: {contact.email}<br />
                  IIT Gandhinagar
                </MemberInfo>
              </TeamMember>
            ))}
          </TeamGrid>
        </TeamContainer>
      </TeamSection>

      <ContactContainer>
        <ContactInfo>
          <InfoTitle>Contact Information</InfoTitle>
          <InfoItem>
            <IconWrapper>
              <FaPhone />
            </IconWrapper>
            <div>
              <p>+1 (555) 123-4567</p>
              <p>Mon-Fri 9:00 AM - 5:00 PM</p>
            </div>
          </InfoItem>
          <InfoItem>
            <IconWrapper>
              <FaEnvelope />
            </IconWrapper>
            <div>
              <p>contact@research.edu</p>
              <p>support@research.edu</p>
            </div>
          </InfoItem>
          <InfoItem>
            <IconWrapper>
              <FaMapMarkerAlt />
            </IconWrapper>
            <div>
              <p>123 Research Avenue</p>
              <p>Innovation District</p>
              <p>Science City, SC 12345</p>
            </div>
          </InfoItem>
        </ContactInfo>

        <ContactForm id="contactForm" onSubmit={handleSubmit}>
          <InfoTitle>Send us a Message</InfoTitle>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleInputChange}
              required 
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleInputChange}
              required 
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input 
              type="text" 
              id="subject" 
              name="subject" 
              value={formData.subject}
              onChange={handleInputChange}
              required 
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleInputChange}
              required 
            />
          </FormGroup>

          <SubmitButton type="submit" isLoading={isLoading} disabled={isLoading}>
            {isLoading ? (
              <>
                Sending...
                <LoadingSpinner />
              </>
            ) : (
              'Send Message'
            )}
          </SubmitButton>
        </ContactForm>
      </ContactContainer>
    </PageContainer>
  );
}

export default Contact;
