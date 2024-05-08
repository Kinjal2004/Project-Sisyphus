import React from "react";
import styled, { keyframes } from "styled-components";
import OptionSelector from "../resources/OptionSelector";

const rainbowAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

const StyledContainer = styled.div`
  color: white;
  height: 500px;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  margin-top: 40px;
  @media (max-width: 768px) {
    width: 100vw;
    height: 700px;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
  }
`;
const SpecsContainer = styled.div`
  display: flex;
  color: white;
  height: 475px;
  width: 600px;
  border-radius: 20px;
  padding-top: 50px;
  align-items: center;
  @media (max-width: 768px) {
    align-items: center;
    width: 100vw;
  }
`;
const HeroTextContainer = styled.div`
  color: white;
  height: 475px;
  width: 750px;
  border-radius: 20px;
  padding-left: 50px;
  @media (max-width: 768px) {
    width: 100vw;
    margin: 100px;
    height: 200px;
    padding: 0px;
    justify-content: center;
  }
`;
const NameContainer = styled.div`
  display: flex;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  font-weight: bold;
  font-size: 50px;
  margin-top: 100px;
  align-items: center;
  background: linear-gradient(
    135deg,
    white,
    aliceblue,
    lightblue,
    blue,
    indigo,
    violet,
    white,
    white
  );
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 200% 100%;
  animation: ${rainbowAnimation} 10s alternate infinite;
  @media (max-width: 768px) {
    margin: 0px;
    padding: 0px;
    font-size: 30px;
    text-align: center;
    justify-content: center;
  }
`;
const AboutContainer = styled.div`
  color: gray;
  display: flex;
  @media (max-width: 768px) {
    margin: 0px;
    padding: 0px;
    justify-content: center;
  }
`;
const TextContainer = styled.div`
  padding-top: 10px;
  padding-right: 10px;
  font-size: 20px;
  font-family: monospace;
  color: white;
  opacity: 0.7;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const BlabberContainer = styled.div`
  display: flex;
  margin-top: 20px;
  width : 450px;
  color: white;
  @media (max-width: 768px) {
    font-size: 11px;
    padding-left: 70px;
    padding-right: 70px;
    text-align: center;
    width: auto;
    justify-content: center;
  }
  @media(max-width : 425px){
    font-size: 10px;
    padding-left: 30px;
    padding-right:30px;
    width: auto;
    text-align: center;
  }
`;
const TechStackContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  font-size: 20px ;
  font-family: monospace;
  @media(max-width : 768px){
    text-align: center;
    justify-content: center;
  }
`;
const IconsContainer = styled.div`
  display: flex;
  @media(max-width : 768px){
    width: auto;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const Icon = styled.img`
  height: 50px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.1s ease;
  &:hover {
    transform: scale(1.1);
    filter: brightness(1.2);
  }
  @media (max-width: 768px) {
    height: 30px;
    &:hover {
    transform: scale(1.1);
    filter: brightness(1.2);
  }
  }
`;
const Hero = () => {
  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <StyledContainer>
        <HeroTextContainer>
          <NameContainer>
            KINJAL
            <br />
            BHATTACHARYYA
          </NameContainer>
          <AboutContainer>
            <TextContainer>DREAMER. </TextContainer>
            <TextContainer>EXPLORER. </TextContainer>
            <TextContainer>DEVELOPER. </TextContainer>
          </AboutContainer>
          <BlabberContainer>
            Passionate Software Developer from India, adept at creating
            captivating full-stack web applications infused with machine
            learning models for an enhanced user experience.<br></br>Feel free to reach out via
            email or LinkedIn!
          </BlabberContainer>
          <TechStackContainer>
            SKILLS:
            <IconsContainer>
            <Icon src="https://www.svgrepo.com/show/354259/react.svg"/>
            <Icon src="https://www.openxcell.com/wp-content/uploads/2021/11/dango-inner-2.png"/>
            <Icon src="https://www.svgrepo.com/show/374118/tailwind.svg"/>
            <Icon src="https://www.svgrepo.com/show/452075/node-js.svg"/>
            <Icon src="https://www.svgrepo.com/show/373595/firebase.svg"/>
            <Icon src="https://www.svgrepo.com/show/354200/postgresql.svg"/>
            <Icon src="https://www.svgrepo.com/show/452091/python.svg"/>
            <Icon src="https://www.svgrepo.com/show/353614/c-plusplus.svg"/>
            </IconsContainer>
          </TechStackContainer>
        </HeroTextContainer>
        <SpecsContainer>
          <OptionSelector />
        </SpecsContainer>
      </StyledContainer>
    </>
  );
};
export default Hero;
