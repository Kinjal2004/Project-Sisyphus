import React from "react";
import styled from "styled-components";
import GitHubLogo from "../resources/GitHub-Logo.wine.svg";
import LeetCodeLogo from "../resources/leetcode.svg";
import LinkedInLogo from "../resources/LinkedIn-Icon-Logo.wine.svg";

const NavContainer = styled.div`
  height: 50px;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 768px) {
    width: 100vw;
    justify-content: center;
  }
`;
const StyledImage = styled.img`
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

const NavIcons = () => {
  return (
    <NavContainer>
      <a href="mailto:bkinjal2004@gmail.com">
        <StyledImage src="https://www.svgrepo.com/show/442233/mail-unread-symbolic.svg" />
      </a>
      <a href="https://github.com/Kinjal2004">
        <StyledImage src={GitHubLogo}/>
      </a>
      <a href="https://leetcode.com/KingKinjal/">
        <StyledImage src={LeetCodeLogo}/>
      </a>
      <a href="https://www.linkedin.com/in/kinjal-bhattacharyya-546b7a232/">
        {" "}
        <StyledImage src={LinkedInLogo} />
      </a>
    </NavContainer>
  );
};

export default NavIcons;
