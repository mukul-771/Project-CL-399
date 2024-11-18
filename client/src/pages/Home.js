// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/final_logo-removebg-preview.png';

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
  padding: 20px;
  background-color: #f8f9fa;
`;

const WelcomeCard = styled.div`
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 40px;
  max-width: 1000px;
  width: 100%;
  text-align: center;
  margin: 20px;
`;

const LogoBox = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
`;

const Logo = styled.img`
  height: 120px;
  filter: invert(1);
`;

const BentoBox = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 30px;
  margin: 30px 0;
  text-align: left;
`;

const BoxTitle = styled.h2`
  color: #333;
  font-size: 1.8em;
  margin-bottom: 20px;
  font-family: 'Times New Roman', Times, serif;
`;

const BoxDescription = styled.p`
  color: #666;
  font-size: 1.1em;
  line-height: 1.8;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
`;

const Button = styled(Link)`
  background-color: #0b59de;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0947b3;
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled(Button)`
  background-color: #6c757d;

  &:hover {
    background-color: #5a6268;
  }
`;

function Home() {
  return (
    <HomeContainer>
      <WelcomeCard>
        <LogoBox>
          <Logo src={logo} alt="Peptide-Surface Interaction Tool" />
        </LogoBox>
        
        <BentoBox>
          <BoxTitle>Welcome to the database</BoxTitle>
          <BoxDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </BoxDescription>
          <BoxDescription>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </BoxDescription>
        </BentoBox>

        <ButtonContainer>
          <Button to="/tools">Get Started</Button>
          <SecondaryButton to="/about">Learn More</SecondaryButton>
        </ButtonContainer>
      </WelcomeCard>
    </HomeContainer>
  );
}

export default Home;
