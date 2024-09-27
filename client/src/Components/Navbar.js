// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';
import { FaReact } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate and useLocation

// Styled-components for styling the Navbar
const Nav = styled.nav`
  background: #0b59de;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const NavLogo = styled.div`
  color: #f2f2f2;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 24px;
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.div`
  color: ${props => props.isActive ? '#ffcc00' : '#fff'}; // Highlight color for active link
  text-decoration: none;
  cursor: pointer;
  font-weight: ${props => props.isActive ? 'bold' : 'normal'}; // Optional: make active link bold
`;

// Navbar component
function Navbar() {
  const navigate = useNavigate(); // Hook for programmatic navigation
  const location = useLocation(); // Hook to get the current path

  // Function to handle navigation
  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified path
  };

  // Determine if the current path matches the nav item
  const isActive = (path) => location.pathname === path;

  return (
    <Nav>
      {/* Logo and brand navigation */}
      <NavLogo onClick={() => handleNavigation('/')}>
        <FaReact style={{ marginRight: '10px' }} />
        CODEV
      </NavLogo>
      {/* Navigation Menu */}
      <NavMenu>
        <NavItem onClick={() => handleNavigation('/')} isActive={isActive('/')}>Home</NavItem>
        <NavItem onClick={() => handleNavigation('/surface-selection')} isActive={isActive('/surface-selection')}>Surface Selection</NavItem>
        <NavItem onClick={() => handleNavigation('/peptide-selection')} isActive={isActive('/peptide-selection')}>Peptide Selection</NavItem>
        <NavItem onClick={() => handleNavigation('/glossary')} isActive={isActive('/glossary')}>Glossary</NavItem>
        <NavItem onClick={() => handleNavigation('/features')} isActive={isActive('/features')}>Features</NavItem>
        <NavItem onClick={() => handleNavigation('/contact')} isActive={isActive('/contact')}>Contact us</NavItem>
      </NavMenu>
    </Nav>
  );
}

export default Navbar;
