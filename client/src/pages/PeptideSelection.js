// src/pages/PeptideSelection.js
import React, { useState } from 'react';
import SearchBar from '../Components/SearchBar';
import styled from 'styled-components';

// Container to center the content with shadow
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 40vh;
`;

// Container for the list of items with background and padding
const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;  // Gap between individual items
  padding: 20px;
  background-color: #0b59de;  
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 95%;
  max-width: 98%;
`;

// Bento box styling for each item
const BentoBox = styled.div`
  flex: 1 1 calc(20% - 20px);  // 5 items per row with gap
  box-sizing: border-box;
  padding: 15px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  // Ensuring proper responsive behavior
  @media (max-width: 600px) {
    flex: 1 1 calc(50% - 20px);  // 2 items per row on small screens
  }
  &:hover {
    background-color: #e0e0e0;  // Slightly darker shade for hover
    transform: translateY(-4px);  // Slightly larger elevation
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);  // Enhanced shadow for hover
  }
`;

// Pagination controls
const PaginationControls = styled.div`
  margin-top: 40px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;

// Styled button for pagination controls
const Button = styled.button`
  font-size: 1.125rem; /* Adjust this value as needed */
  width: 100px;
  height: 40px;
  color: white;
  border-radius: 10px;
  background-color: #0b59de; 
  padding: 5px;
  margin: 0 10px;
  border: none; /* Remove default border for a cleaner look */
  
  /* Transition effect for smoother color change */
  transition: background-color 0.3s ease;

  /* Hover effect for a lighter color */
  &:hover {
    background-color: #1a73e8; /* Lighter shade of the original color */
  }
`;

// Styled component for page indicator text
const PageIndicator = styled.span`
  font-size: 1.2rem; /* Increased font size */
  margin: 0 10px;
`;

// Styled component for heading
const Heading = styled.h1`
  margin-bottom: 20px; /* Adjust this value to increase space below the heading */
  margin-top:40px;
  font-size: 2.5em;
  font-family: 'Times New Roman', Times, serif;
`;

// Styled component for paragraph
const Description = styled.p`
  margin-top: 90px; /* Adjust this value to add space below the paragraph */
`;

// Dummy peptide names
const dummyPeptides = [
  'Alpha-Peptide', 'Beta-Peptide', 'Gamma-Peptide', 'Delta-Peptide', 'Epsilon-Peptide',
  'Zeta-Peptide', 'Eta-Peptide', 'Theta-Peptide', 'Iota-Peptide', 'Kappa-Peptide',
  'Lambda-Peptide', 'Mu-Peptide', 'Nu-Peptide', 'Xi-Peptide', 'Omicron-Peptide',
  'Pi-Peptide', 'Rho-Peptide', 'Sigma-Peptide', 'Tau-Peptide', 'Upsilon-Peptide'
];

const itemsPerPage = 5;

const PeptideSelection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(dummyPeptides.length / itemsPerPage);

  // Calculate the items to display on the current page
  const currentItems = dummyPeptides.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <PageContainer>
      <Heading>Peptide Selection</Heading>
      <SearchBar />
      <Description>Choose peptides that suit your needs from our curated list.</Description>
      
      <ItemsContainer>
        {currentItems.map(item => (
          <BentoBox key={item}>{item}</BentoBox>
        ))}
      </ItemsContainer>
      
      <PaginationControls>
        <Button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </Button>
        <PageIndicator>Page {currentPage} of {totalPages}</PageIndicator>
        <Button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </Button>
      </PaginationControls>
    </PageContainer>
  );
}

export default PeptideSelection;
