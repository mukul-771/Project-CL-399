// src/pages/Features.js
import React from 'react';
import styled from 'styled-components';

// Container for centering content
const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;  // Adjust as needed
  text-align: center;  // Center text within the container
  padding: 20px;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  font-family: 'Times New Roman', Times, serif;
  margin-top: 20px;  // Adjusted top margin
  margin-bottom: 20px;
  color: #333;
`;

const Description = styled.p`
  font-size: 1.2em;
  margin-bottom: 40px;
  color: #666;
  max-width: 800px;  // Added max-width for better readability
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);  // Default to 1 column
  gap: 20px;
  width: 100%;
  max-width: 1200px;

  // Responsive adjustments
  @media (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);  // 2 columns on small screens
  }

  @media (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);  // 3 columns on medium screens
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);  // 4 columns on larger screens
  }
`;

const FeatureCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);  // Slightly reduced transform distance
    box-shadow: 0 12px 18px rgba(0, 0, 0, 0.15);  // Slightly adjusted shadow
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #222;
`;

const FeatureDescription = styled.p`
  font-size: 1em;
  color: #444;
`;

function Features() {
  return (
    <FeaturesContainer>
      <Title>Features</Title>
      <Description>Explore the features of CODEV and learn how it can assist you.</Description>
      <FeatureGrid>
        <FeatureCard>
          <FeatureTitle>Real-time Sync</FeatureTitle>
          <FeatureDescription>Instantly synchronize your data across all devices.</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Advanced Analytics</FeatureTitle>
          <FeatureDescription>Analyze data deeply with our advanced tools and reports.</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Custom UI</FeatureTitle>
          <FeatureDescription>Personalize the user interface to fit your needs.</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Secure Storage</FeatureTitle>
          <FeatureDescription>Ensure your data is protected with top-notch encryption.</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Seamless Integration</FeatureTitle>
          <FeatureDescription>Effortlessly connect with various popular platforms.</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Automated Backups</FeatureTitle>
          <FeatureDescription>Automatic backups to keep your data safe and recoverable.</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Intuitive Dashboard</FeatureTitle>
          <FeatureDescription>Navigate easily with our user-friendly dashboard.</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>24/7 Support</FeatureTitle>
          <FeatureDescription>Get round-the-clock support for any issues or queries.</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Cloud Access</FeatureTitle>
          <FeatureDescription>Access your data from anywhere with cloud connectivity.</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Multi-language Support</FeatureTitle>
          <FeatureDescription>Use our application in various languages to suit your preference.</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Custom Alerts</FeatureTitle>
          <FeatureDescription>Set custom alerts for important notifications and events.</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Data Visualization</FeatureTitle>
          <FeatureDescription>Visualize your data with customizable charts and graphs.</FeatureDescription>
        </FeatureCard>
      </FeatureGrid>
    </FeaturesContainer>
  );
}

export default Features;
