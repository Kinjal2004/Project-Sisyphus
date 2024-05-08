import React, { useState } from "react";
import styled from "styled-components";
import ExternalLink from "./ExternalLink.svg";
const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow: hidden;
  min-width: 600px;
  max-width: 900px;
  width: calc(100% - 100px);
  height: 400px;
  @media (max-width: 768px) {
    flex-direction: column;
    min-width: 100vw;
    padding-bottom: 40px;
    padding-top: 40px;
    justify-content: flex-end;
  }
`;

const Option = styled.div`
  position: relative;
  overflow: hidden;
  min-width: 60px;
  margin: 10px;
  background: ${(props) => `url(${props.backgroundUrl})`};
  background-size: auto 120%;
  background-position: center;
  cursor: pointer;
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
  @media (max-width: 768px) {
    width: 85vw;
    position: relative;
    height: 50px;
    overflow: hidden;
    background-size: cover;
    margin-bottom:5px;
    margin-top:5px;
  }

  &.active {
    flex-grow: 1000;
    transform: scale(1);
    max-width: 600px;
    margin: 0px;
    border-radius: 40px;
    background-size: auto 100%;
    opacity: 0.7;
    @media (max-width: 768px) {
      background-size: cover;
      flex-grow: 1000000;
      border-radius : 30px;
      margin-bottom:5px;
      max-width: 90vw;
      margin-top:5px;
      margin-left:7.5vw;
    }
    .shadow {
      box-shadow: inset 0 -120px 120px -120px black,
        inset 0 -120px 120px -100px black;
    }
    .label {
      bottom: 20px;
      left: 20px;
      .info > div {
        left: 0px;
        opacity: 1;
      }
      .info > a {
        left: 0px;
        opacity: 1;
      }
    }
  }
  &:not(.active) {
    flex-grow: 1;
    border-radius: 30px;
    @media (max-width: 768px) {
      margin-left:7.5vw;
    }
    .shadow {
      bottom: -40px;
      box-shadow: inset 0 -120px 0px -120px black,
        inset 0 -120px 0px -100px black;
    }
    .label {
      bottom: 10px;
      left: 10px;
      .info > div {
        left: 20px;
        opacity: 0;
      }
      .info > a {
        left: 20px;
        opacity: 0;
      }
    }
  }
`;

const Shadow = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 120px;
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
`;

const Label = styled.div`
  display: flex;
  position: absolute;
  right: 0px;
  height: 40px;
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
`;

const Icon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 40px;
  max-width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: white;
  color: ${(props) => props.theme.defaultBackground};
`;
const LinkImage = styled.img`
  width: 20px; /* Adjust size as needed */
  height: 20px; /* Adjust size as needed */
  padding-left: 10px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  color: white;
  white-space: pre;
  > div {
    position: relative;
    transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95), opacity 0.5s ease-out;
  }
  .main {
    font-weight: bold;
    font-size: 1.2rem;
  }
  .sub {
    transition-delay: 0.1s;
  }
`;

const OptionSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const options = [
    {
      backgroundUrl:
        "https://st4.depositphotos.com/13324256/20447/i/450/depositphotos_204477842-stock-photo-selective-focus-stethoscope-glass-surface.jpg",
      mainText: "Stellar-Med",
      subText: "Live Patient Monitoring System",
      link: "https://github.com/aryab2003/Stellar-Med",
    },
    {
      backgroundUrl:
        "https://cdn.analyticsvidhya.com/wp-content/uploads/2021/02/92495stock-market-trends-what-causes-stock-prices-to-change.jpg",
      mainText: "PyPred",
      subText: "Stock price predictor and analyser",
      link: "https://github.com/Kinjal2004/PyPred",
    },
    {
      backgroundUrl:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww",
      mainText: "RoomSync",
      subText: "Automated Hotel Room Management",
      link: "https://github.com/aryanchau1/LOC6.0",
    },
    {
      backgroundUrl:
        "https://t4.ftcdn.net/jpg/00/84/60/25/360_F_84602505_CbgZtlxEktGN0wfLfTQMuRNvBau4mujo.jpg",
      mainText: "RPS Live",
      subText: "Online two player rock-paper-scissor game",
      link: "https://github.com/Kinjal2004/rock-paper-scissor-server",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <OptionsContainer>
      {options.map((option, index) => (
        <Option
          key={index}
          backgroundUrl={option.backgroundUrl}
          className={index === activeIndex ? "active" : ""}
          onClick={() => handleClick(index)}
        >
          <Shadow className="shadow"></Shadow>
          <Label className="label">
            <Info className="info">
              <div style={{ display: "flex" }}>
                <div className="main">{option.mainText}</div>
                <a href={option.link}>
                  <LinkImage src={ExternalLink} />
                </a>
              </div>
              <div className="sub">{option.subText}</div>
            </Info>
          </Label>
        </Option>
      ))}
    </OptionsContainer>
  );
};

export default OptionSelector;
