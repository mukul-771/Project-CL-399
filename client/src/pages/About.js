import React from 'react';
import styled from 'styled-components';

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

const Content = styled.div`
  max-width: 800px;
  width: 100%;
  line-height: 1.6;
  color: #444;
`;

function About() {
  return (
    <PageContainer>
      <Title>About Us</Title>
      <Content>
        <p>
          Welcome to the Peptide-Surface Interaction Analysis Tool. Our platform is dedicated to advancing
          research in the field of peptide-surface interactions through computational analysis and prediction.
        </p>
        <br />
        <p>
          Our tool combines advanced algorithms with comprehensive databases to help researchers
          understand and predict the behavior of peptides on various surfaces, enabling more
          efficient and targeted research in fields such as biomaterials, drug delivery, and
          surface modification.
        </p>
        <br />
        <p>
          Developed by a team of computational biologists and materials scientists, our platform
          aims to bridge the gap between theoretical predictions and experimental validation,
          making peptide-surface interaction research more accessible and efficient.
        </p>
      </Content>
    </PageContainer>
  );
}

export default About; 