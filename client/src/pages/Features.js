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
  const features = [
    {
      title: "Peptide Analysis",
      description: "Advanced tools for analyzing peptide sequences and structures with detailed molecular insights."
    },
    {
      title: "Surface Characterization",
      description: "Comprehensive surface analysis tools for understanding material properties and interactions."
    },
    {
      title: "Interactive Visualization",
      description: "Dynamic 3D visualization of molecular structures and surface topographies."
    },
    {
      title: "Data Integration",
      description: "Seamless integration of experimental data with computational predictions."
    },
    {
      title: "Customizable Workflows",
      description: "Create and save custom analysis workflows tailored to your research needs."
    },
    {
      title: "Real-time Collaboration",
      description: "Work together with team members in real-time on complex research projects."
    },
    {
      title: "Advanced Analytics",
      description: "Powerful statistical tools and machine learning algorithms for data analysis."
    },
    {
      title: "Export Capabilities",
      description: "Export your results in multiple formats for publications and presentations."
    },
    {
      title: "Database Access",
      description: "Direct access to comprehensive peptide and surface databases."
    },
    {
      title: "Automated Reports",
      description: "Generate detailed reports of your analyses with just a few clicks."
    },
    {
      title: "Cloud Storage",
      description: "Secure cloud storage for all your research data and results."
    },
    {
      title: "API Integration",
      description: "Connect with other research tools through our robust API system."
    }
  ];

  return (
    <FeaturesContainer>
      <Title>Platform Features</Title>
      <Description>
        Discover our comprehensive suite of research tools designed to accelerate 
        your peptide-surface interaction studies. Our platform combines cutting-edge 
        technology with user-friendly interfaces to enhance your research experience.
      </Description>

      <FeatureGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeatureGrid>
    </FeaturesContainer>
  );
}

export default Features;
