import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, and Route
import GlobalStyle from './styles/GlobalStyles';
import LogoAndBentoBoxes from './Components/LogoAndBentoBoxes';


// Import your pages
import Home from './pages/Home';
import SurfaceSelection from './pages/SurfaceSelection'; 
import PeptideSelection from './pages/PeptideSelection';
import Glossary from './pages/Glossary';
import Features from './pages/Features';
import Contact from './pages/Contact';
import Layout from './Components/Layout';


function App() {
  return (
    
    <Router> {/* Wrap the entire application with Router */}

      <GlobalStyle />
      
      <Routes> {/* Define all your routes here */}
        <Route 
          path="/" 
          element={
            <Layout>
              <Home />
              <LogoAndBentoBoxes />
            </Layout>
          } 
        />
        <Route 
          path="/surface-selection" 
          element={
            <Layout>
              <SurfaceSelection />
            </Layout>
          } 
        />
        <Route 
          path="/peptide-selection" 
          element={
            <Layout>
              <PeptideSelection />
            </Layout>
          } 
        />
        <Route 
          path="/glossary" 
          element={
            <Layout>
              <Glossary />
            </Layout>
          } 
        />
        <Route 
          path="/features" 
          element={
            <Layout>
              <Features />
            </Layout>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <Layout>
              <Contact />
            </Layout>
          } 
        />
      </Routes>
     
    </Router>
  );
}

export default App;
