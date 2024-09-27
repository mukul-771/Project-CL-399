// src/components/SearchBar.js
import React from 'react';
import styled from 'styled-components';

// Styled-components for styling the search bar
const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 70%; /* Adjust based on your design needs */
//   border: 0.5px solid black;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3); 
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  font-size: 1.125rem; /* Adjust this value as needed */
  background: transparent;
  padding: 0.5rem 1rem;
  color: black; 
  outline: none;

  &::placeholder {
    color: #9ca3af; 
  }

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  margin: 0.5rem;
  border-radius: 8px;
  background-color: #0b59de; 
  padding: 0.5rem 1rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
`;

const Icon = styled.svg`
  fill: currentColor;
  height: 24px;
  width: 24px;
`;

const SearchBar = () => {
  return (
    <SearchWrapper>
      <SearchInput type="search" name="search" placeholder="Search..." />
      <SearchButton type="submit">
        <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966">
          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
        </Icon>
      </SearchButton>
    </SearchWrapper>
  );
}

export default SearchBar;
