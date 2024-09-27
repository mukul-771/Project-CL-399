// src/components/LogoAndBentoBoxes.js
import React, { useState } from 'react';
import styled from 'styled-components';
import BarLabel from './BarLabel';
import logoImage from '../assets/final_logo-removebg-preview.png'; // Replace with your logo image
import img5650 from '../assets/IMG_5650.JPG';

const Container = styled.section`
  padding: 40px;
  text-align: center;
`;

const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* Default single column layout */
  grid-gap: 20px;
  justify-content: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* Two columns layout for medium screens */
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Single column layout for small screens */
  }
`;

const BentoBox = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const LogoBox = styled(BentoBox)`
  background: black url(${logoImage}) center/contain no-repeat; /* Black background with logo */
  background-size: contain; /* Ensure logo fits well */
  color: black; /* Hide text */
  font-size: 0; /* Hide text size */
  padding: 40px; /* Adjust padding as needed */
  box-shadow: none; /* Remove shadow for the logo box */
  border: 2px solid #000000; /* Optional border for the logo box */
`;

const BoxTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const BoxDescription = styled.p`
  font-size: 16px;
  color: #555;
`;

const ContactBox = styled(BentoBox)`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Dropdown = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 10px;
`;

const Option = styled.option`
  font-size: 16px;
`;

function LogoAndBentoBoxes() {
  const [selectedSurface, setSelectedSurface] = useState('');
  const [selectedPeptide, setSelectedPeptide] = useState('');

  const dummyPeptides = [
    'Alpha-Peptide', 'Beta-Peptide', 'Gamma-Peptide', 'Delta-Peptide', 'Epsilon-Peptide',
    'Zeta-Peptide', 'Eta-Peptide', 'Theta-Peptide', 'Iota-Peptide', 'Kappa-Peptide',
    'Lambda-Peptide', 'Mu-Peptide', 'Nu-Peptide', 'Xi-Peptide', 'Omicron-Peptide',
    'Pi-Peptide', 'Rho-Peptide', 'Sigma-Peptide', 'Tau-Peptide', 'Upsilon-Peptide'
  ];

  const allItems = [
    'Plastic Laminate', 'Engineered Stone', 'Butcher Block', 'Soapstone Slab', 'Recycled Glass',
    'Marble Slab', 'Granite Tile', 'Quartz Countertop', 'Glass Panel', 'Wood Plank',
    'Ceramic Tile', 'Stainless Steel Sheet', 'Concrete Slab', 'Granite Countertop', 'Limestone Tile',
    'Porcelain Tile', 'Slate Tile', 'Travertine Tile', 'Onyx Slab', 'Metal Panel'
  ];

  return (
    <Container>
      <BentoGrid>
        <LogoBox>
          {/* Replace with your logo */}
        </LogoBox>
        
        <BentoBox>
          <BoxTitle>Welcome to the database</BoxTitle>
          <BoxDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </BoxDescription>
        </BentoBox>
        
        <BentoGrid style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <BentoBox>
            <BoxTitle>Surface Selection</BoxTitle>
            <Dropdown
              value={selectedSurface}
              onChange={(e) => setSelectedSurface(e.target.value)}
            >
              <Option value="" disabled>Select a Surface</Option>
              {allItems.map((item, index) => (
                <Option key={index} value={item}>{item}</Option>
              ))}
            </Dropdown>
          </BentoBox>
          <BentoBox>
            <BoxTitle>Peptide Selection</BoxTitle>
            <Dropdown
              value={selectedPeptide}
              onChange={(e) => setSelectedPeptide(e.target.value)}
            >
              <Option value="" disabled>Select a Peptide</Option>
              {dummyPeptides.map((peptide, index) => (
                <Option key={index} value={peptide}>{peptide}</Option>
              ))}
            </Dropdown>
          </BentoBox>
        </BentoGrid>

        <BentoBox>
          <BoxTitle>Graphes</BoxTitle>
          <BoxDescription><BarLabel /></BoxDescription>
        </BentoBox>

        <ContactBox>
          <BoxTitle>Contact us</BoxTitle>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            {[...Array(4)].map((_, index) => (
              <div key={index} style={{ textAlign: 'center', margin: '10px' }}>
                <img 
                  src={img5650} 
                  alt={`Contact Person ${index + 1}`} 
                  style={{ width: '200px', height: '200px', borderRadius: '10px', marginBottom: '10px' }} 
                />
                <BoxDescription>
                  Phone: +91 9429428442<br />
                  Email: mehta.aditya@iitgn.ac.in<br />
                  Address: IIT Gandhinagar
                </BoxDescription>
              </div>
            ))}
          </div>
        </ContactBox>
      </BentoGrid>
    </Container>
  );
}

export default LogoAndBentoBoxes;
