// src/components/SearchBar.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled-components for styling the search bar
const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px; // Increased to match GlossaryGrid max-width
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
  position: relative;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  font-size: 1.125rem;
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
  transition: background-color 0.2s;

  &:hover {
    background-color: #0947b3;
  }
`;

const Icon = styled.svg`
  fill: currentColor;
  height: 24px;
  width: 24px;
`;

const SearchResults = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-height: 400px;
  overflow-y: auto;
  z-index: 1000;
  width: 100%;
`;

const ResultCard = styled.div`
  padding: 16px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: all 0.2s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f8f9fa;
    transform: translateY(-2px);
  }
`;

const ResultTerm = styled.h4`
  margin: 0 0 8px 0;
  color: #1a1a1a;
  font-size: 1.1rem;
`;

const ResultDefinition = styled.p`
  margin: 0;
  color: #666;
  font-size: 0.9rem;
  line-height: 1.4;
`;

const NoResults = styled.div`
  padding: 16px;
  text-align: center;
  color: #666;
`;

const SearchBar = ({ 
  data = [], 
  onResultSelect, 
  placeholder = "Search...", 
  primaryKey = 'name', 
  secondaryKey = 'description'
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (searchQuery.length >= 2 && Array.isArray(data)) {
      const filteredResults = data.filter(item =>
        Object.values(item).some(value => 
          value && typeof value === 'string' && 
          value.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setResults(filteredResults);
      setShowResults(true);
    } else {
      setResults([]);
      setShowResults(false);
    }
  }, [searchQuery, data]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleResultClick = (result) => {
    if (onResultSelect) {
      onResultSelect(result);
    }
    setSearchQuery('');
    setShowResults(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (results.length > 0) {
      handleResultClick(results[0]);
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <SearchWrapper>
          <SearchInput
            type="search"
            placeholder={placeholder}
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={() => setShowResults(true)}
          />
          <SearchButton type="submit">
            <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966">
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17s-17-7.626-17-17S14.61,6,23.984,6z" />
            </Icon>
          </SearchButton>
        </SearchWrapper>

        {showResults && searchQuery.length >= 2 && (
          <SearchResults>
            {results.length > 0 ? (
              results.map((result, index) => (
                <ResultCard key={index} onClick={() => handleResultClick(result)}>
                  <ResultTerm>{result[primaryKey]}</ResultTerm>
                  <ResultDefinition>
                    {result[secondaryKey]?.length > 100
                      ? `${result[secondaryKey].substring(0, 100)}...`
                      : result[secondaryKey]}
                  </ResultDefinition>
                </ResultCard>
              ))
            ) : (
              <NoResults>No matching results found</NoResults>
            )}
          </SearchResults>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
