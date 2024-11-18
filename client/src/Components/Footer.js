import React, { useState } from 'react';
import { Container, Grid, Typography, Link, Divider, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import logoImage from '../assets/final_logo-removebg-preview.png';

const FooterContainer = styled('footer')({
  padding: '2rem 0',
  marginBottom: '0px',
  backgroundColor: '#f8f9fa',
  borderTop: '1px solid #e9ecef',
});

const FooterTitle = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: '1rem',
  color: '#0b59de',
});

const FooterLink = styled(Link)({
  display: 'block',
  color: '#495057',
  textDecoration: 'none',
  marginBottom: '0.5rem',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#0b59de',
    textDecoration: 'none',
    transform: 'translateX(5px)',
  },
});

const Logo = styled('img')({
  maxHeight: '70px',
  marginBottom: '1rem',
  filter: 'invert(1)'
});

const FooterDescription = styled(Typography)({
  color: '#666',
  fontSize: '0.9rem',
  marginTop: '1rem',
});

const ContactInfo = styled(Typography)({
  color: '#495057',
  marginBottom: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

const Footer = () => {
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <FooterContainer>
      <Container>
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} sm={3}>
            <Box display="flex" flexDirection="column">
              <Logo src={logoImage} alt="Peptide-Surface Interaction Tool" />
              <FooterDescription>
                Advanced computational tools for analyzing and predicting peptide-surface interactions
                in biological and materials science applications.
              </FooterDescription>
            </Box>
          </Grid>

          {/* Research Tools Section */}
          <Grid item xs={12} sm={3}>
            <FooterTitle variant="h6">Research Tools</FooterTitle>
            <FooterLink href="/tools">Research Tools</FooterLink>
            <FooterLink href="/glossary">Glossary</FooterLink>
            <FooterLink href="/features">Platform Features</FooterLink>
            <FooterLink href="#">Interaction Analysis</FooterLink>
            <FooterLink href="#">Prediction Models</FooterLink>
          </Grid>

          {/* Resources Section */}
          <Grid item xs={12} sm={3}>
            <FooterTitle variant="h6">Resources</FooterTitle>
            <FooterLink href="#">Scientific Publications</FooterLink>
            <FooterLink href="#">Research Methods</FooterLink>
            <FooterLink href="#">Documentation</FooterLink>
            <FooterLink href="#">Tutorial Videos</FooterLink>
            <FooterLink href="#">API Access</FooterLink>
          </Grid>

          {/* Support Section */}
          <Grid item xs={12} sm={3}>
            <FooterTitle variant="h6">Support</FooterTitle>
            <FooterLink href="#">User Guide</FooterLink>
            <FooterLink href="#">FAQs</FooterLink>
            <FooterLink href="#">Technical Support</FooterLink>
            <FooterLink href="#">Report an Issue</FooterLink>
            <Box mt={2}>
              <ContactInfo>
                Email: support@peptideinteractions.org
              </ContactInfo>
              <ContactInfo>
                Research Lab: +1 (555) 123-4567
              </ContactInfo>
            </Box>
          </Grid>
        </Grid>

        <Divider style={{ margin: '2rem 0' }} />
        
        <Grid container spacing={2} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography variant="body2" color="textSecondary">
              © {new Date().getFullYear()} Peptide-Surface Interaction Analysis Tool. 
              All rights reserved. A research tool developed by the Computational Biology Department.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box display="flex" gap={2} justifyContent={{ xs: 'center', md: 'flex-end' }}>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Use</FooterLink>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
