import React from 'react';
import { Container, Grid, Typography, Link, Divider, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import logoImage from '../assets/final_logo-removebg-preview.png'; // Replace with your logo image

const FooterContainer = styled('footer')({
  padding: '2rem 0',
  marginbottom:'0px',
  backgroundColor: '#f8f9fa',
  borderTop: '1px solid #e9ecef',
});

// const FooterSection = styled(Grid)({
//   marginBottom: '1rem',
// });

const FooterTitle = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: '0.5rem',
});

const FooterLink = styled(Link)({
  display: 'block',
  color: '#495057',
  textDecoration: 'none',
  marginBottom: '0.5rem',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const Logo = styled('img')({
  maxHeight: '70px',
  filter: 'invert(1)', // Apply the negative filter
});

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Grid container spacing={4}>
          {/* Logo Section */}
          <Grid item xs={12} sm={3}>
            <Box display="flex" alignItems="center" height="100%">
              <Logo src={logoImage} alt="Company Logo" />
            </Box>
          </Grid>

          {/* Product Section */}
          <Grid item xs={12} sm={3}>
            <FooterTitle variant="h6">Product</FooterTitle>
            <FooterLink href="#">Overview</FooterLink>
            <FooterLink href="#">Features</FooterLink>
            <FooterLink href="#">Solutions</FooterLink>
            <FooterLink href="#">Tutorials</FooterLink>
          </Grid>

          {/* Company Section */}
          <Grid item xs={12} sm={3}>
            <FooterTitle variant="h6">Company</FooterTitle>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Press</FooterLink>
            <FooterLink href="#">News</FooterLink>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} sm={3}>
            <FooterTitle variant="h6">Contact</FooterTitle>
            <FooterLink href="#">Contact Us</FooterLink>
            <FooterLink href="#">Support</FooterLink>
            <FooterLink href="#">FAQs</FooterLink>
          </Grid>
        </Grid>
        <Divider style={{ margin: '1rem 0' }} />
        <Typography variant="body2" align="center" color="textSecondary">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
