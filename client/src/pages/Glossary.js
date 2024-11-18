// src/pages/Glossary.js
import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from '../Components/SearchBar';

const GlossaryContainer = styled.div`
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
`;

const Description = styled.p`
  font-size: 1.2em;
  margin-bottom: 40px;
  color: #666;
  text-align: center;
  max-width: 800px;
`;

const SearchBarContainer = styled.div`
  margin-bottom: 30px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const GlossaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const GlossaryCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
  }
`;

const GlossaryTerm = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #222;
`;

const GlossaryDefinition = styled.p`
  font-size: 1em;
  color: #444;
  line-height: 1.6;
`;

const glossaryData = [
  {
    term: "API",
    definition: "Application Programming Interface - A set of rules that allows different software applications to communicate with each other."
  },
  {
    term: "Component",
    definition: "A reusable piece of UI in React that can contain its own logic and styling."
  },
  {
    term: "State",
    definition: "Data that determines how a component renders and behaves."
  },
  {
    term: "Props",
    definition: "Properties passed to a component from its parent component."
  },
  {
    term: "Hook",
    definition: "Functions that allow you to use state and other React features in functional components."
  },
  {
    term: "JSX",
    definition: "JavaScript XML - A syntax extension for JavaScript that allows you to write HTML-like code in JavaScript."
  },
  {
    term: "Virtual DOM",
    definition: "A lightweight copy of the actual DOM that React uses to optimize rendering performance."
  },
  {
    term: "Middleware",
    definition: "Software that acts as a bridge between different applications or components."
  },
  // Add more terms as needed
];

function Glossary() {
  const [selectedTerm, setSelectedTerm] = useState(null);

  const handleResultSelect = (result) => {
    setSelectedTerm(result);
    const element = document.getElementById(result.term);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <GlossaryContainer>
      <Title>Glossary</Title>
      <Description>
        Find definitions and explanations of key terms used in this application.
        Use the search bar below to quickly find specific terms.
      </Description>

      <SearchBarContainer>
        <SearchBar
          data={glossaryData}
          onResultSelect={handleResultSelect}
          placeholder="Search glossary terms..."
          primaryKey="term"
          secondaryKey="definition"
        />
      </SearchBarContainer>

      <GlossaryGrid>
        {glossaryData.map((item, index) => (
          <GlossaryCard
            key={index}
            id={item.term}
            style={selectedTerm?.term === item.term ? {
              border: '2px solid #0b59de',
              transform: 'translateY(-5px)',
              boxShadow: '0 12px 20px rgba(11, 89, 222, 0.2)'
            } : {}}
          >
            <GlossaryTerm>{item.term}</GlossaryTerm>
            <GlossaryDefinition>{item.definition}</GlossaryDefinition>
          </GlossaryCard>
        ))}
      </GlossaryGrid>
    </GlossaryContainer>
  );
}

export default Glossary;
