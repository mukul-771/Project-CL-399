// src/pages/Glossary.js
import React from 'react';
import styled from 'styled-components';
import SearchBar from '../Components/SearchBar';

// Container for centering content
const GlossaryContainer = styled.div`
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
  font-family: 'Times New Roman', Times, serif; 
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #333;
`;

const Description = styled.p`
  font-size: 1.2em;
  margin-bottom: 40px;
  color: #666;
`;

const SearchBarContainer = styled.div`
  margin-bottom: 30px;  // Space between search bar and glossary
  width: 100%;
  max-width: 100%;  // Adjust max-width to your preferred size
  display: flex;
  justify-content: center;  // Center align the search bar
  padding: 0 20px;  // Add padding for responsiveness
`;

const GlossaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);  // 2 columns in the grid
  gap: 20px;
  width: 100%;
  max-width: 1200px;

  // Responsive adjustments
  @media (max-width: 800px) {
    grid-template-columns: 1fr;  // 1 column on smaller screens
  }
`;

const GlossaryCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 16px 24px rgba(0, 0, 0, 0.2);
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
`;

function Glossary() {
  return (
    <GlossaryContainer>
      <Title>Glossary</Title>
      <Description>Find definitions and explanations of key terms used in this application.</Description>
      
      <SearchBarContainer>
        <SearchBar />
      </SearchBarContainer>

      <GlossaryGrid>
        <GlossaryCard>
          <GlossaryTerm>API</GlossaryTerm>
          <GlossaryDefinition>
            API stands for Application Programming Interface. It is a set of rules that allows different software applications to communicate with each other.
          </GlossaryDefinition>
        </GlossaryCard>
        <GlossaryCard>
          <GlossaryTerm>Component</GlossaryTerm>
          <GlossaryDefinition>
            In React, a component is a reusable piece of UI that can be rendered as part of the application. Components can be functional or class-based.
          </GlossaryDefinition>
        </GlossaryCard>
        <GlossaryCard>
          <GlossaryTerm>State</GlossaryTerm>
          <GlossaryDefinition>
            State refers to the data or information maintained by a component that can change over time and affect how the component renders.
          </GlossaryDefinition>
        </GlossaryCard>
        <GlossaryCard>
          <GlossaryTerm>Props</GlossaryTerm>
          <GlossaryDefinition>
            Props (short for properties) are inputs to a React component that allow data to be passed from a parent component to a child component.
          </GlossaryDefinition>
        </GlossaryCard>
        <GlossaryCard>
          <GlossaryTerm>Reducer</GlossaryTerm>
          <GlossaryDefinition>
            A reducer is a function used in state management (like Redux) to specify how the state of an application changes in response to actions.
          </GlossaryDefinition>
        </GlossaryCard>
        <GlossaryCard>
          <GlossaryTerm>Reducer</GlossaryTerm>
          <GlossaryDefinition>
            A reducer is a function used in state management (like Redux) to specify how the state of an application changes in response to actions.
          </GlossaryDefinition>
        </GlossaryCard>
        <GlossaryCard>
          <GlossaryTerm>Reducer</GlossaryTerm>
          <GlossaryDefinition>
            A reducer is a function used in state management (like Redux) to specify how the state of an application changes in response to actions.
          </GlossaryDefinition>
        </GlossaryCard>
        <GlossaryCard>
          <GlossaryTerm>Reducer</GlossaryTerm>
          <GlossaryDefinition>
            A reducer is a function used in state management (like Redux) to specify how the state of an application changes in response to actions.
          </GlossaryDefinition>
        </GlossaryCard>
        <GlossaryCard>
          <GlossaryTerm>Hook</GlossaryTerm>
          <GlossaryDefinition>
            Hooks are functions that let you use state and other React features without writing a class. Examples include `useState` and `useEffect`.
          </GlossaryDefinition>
        </GlossaryCard>
        <GlossaryCard>
          <GlossaryTerm>Event Handler</GlossaryTerm>
          <GlossaryDefinition>
            An event handler is a function that responds to user interactions or other events, such as clicks, form submissions, or keyboard inputs.
          </GlossaryDefinition>
        </GlossaryCard>
        <GlossaryCard>
          <GlossaryTerm>Virtual DOM</GlossaryTerm>
          <GlossaryDefinition>
            The Virtual DOM is a lightweight copy of the actual DOM used by React to optimize rendering and improve performance by minimizing direct manipulation of the real DOM.
          </GlossaryDefinition>
        </GlossaryCard>
        <GlossaryCard>
          <GlossaryTerm>Virtual DOM</GlossaryTerm>
          <GlossaryDefinition>
            The Virtual DOM is a lightweight copy of the actual DOM used by React to optimize rendering and improve performance by minimizing direct manipulation of the real DOM.
          </GlossaryDefinition>
        </GlossaryCard>
        <GlossaryCard>
          <GlossaryTerm>Virtual DOM</GlossaryTerm>
          <GlossaryDefinition>
            The Virtual DOM is a lightweight copy of the actual DOM used by React to optimize rendering and improve performance by minimizing direct manipulation of the real DOM.
          </GlossaryDefinition>
        </GlossaryCard>
        <GlossaryCard>
          <GlossaryTerm>Virtual DOM</GlossaryTerm>
          <GlossaryDefinition>
            The Virtual DOM is a lightweight copy of the actual DOM used by React to optimize rendering and improve performance by minimizing direct manipulation of the real DOM.
          </GlossaryDefinition>
        </GlossaryCard>
        <GlossaryCard>
          <GlossaryTerm>Virtual DOM</GlossaryTerm>
          <GlossaryDefinition>
            The Virtual DOM is a lightweight copy of the actual DOM used by React to optimize rendering and improve performance by minimizing direct manipulation of the real DOM.
          </GlossaryDefinition>
        </GlossaryCard>
        <GlossaryCard>
          <GlossaryTerm>Virtual DOM</GlossaryTerm>
          <GlossaryDefinition>
            The Virtual DOM is a lightweight copy of the actual DOM used by React to optimize rendering and improve performance by minimizing direct manipulation of the real DOM.
          </GlossaryDefinition>
        </GlossaryCard>
        <GlossaryCard>
          <GlossaryTerm>Virtual DOM</GlossaryTerm>
          <GlossaryDefinition>
            The Virtual DOM is a lightweight copy of the actual DOM used by React to optimize rendering and improve performance by minimizing direct manipulation of the real DOM.
          </GlossaryDefinition>
        </GlossaryCard>
        <GlossaryCard>
          <GlossaryTerm>Virtual DOM</GlossaryTerm>
          <GlossaryDefinition>
            The Virtual DOM is a lightweight copy of the actual DOM used by React to optimize rendering and improve performance by minimizing direct manipulation of the real DOM.
          </GlossaryDefinition>
        </GlossaryCard>
      </GlossaryGrid>
    </GlossaryContainer>
  );
}

export default Glossary;
