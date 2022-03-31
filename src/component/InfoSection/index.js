import React from "react";
import step from "../../images/step.png";

import { Button } from "../ButtonElement";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
  ContactDetails,
  Contact,
  Mentions,
} from "./InfoElements";

const InfoSection = ({
  id,
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  flex,
  details,
  info,
  copyright,
  address1,
  address2,
  cp,
  contact,
 
}) => {
  return (
    <>
      <InfoContainer id={id} lightBg={lightBg}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine> {topLine} </TopLine>
                <Heading lightText={lightText}> {headline} </Heading>
                <Subtitle darkText={darkText}>
                  
                  {description} <br /> {contact}
                </Subtitle>
                <BtnWrap>
                  <Button
                    to="services"
                    smooth={true}
                    duration={500}
                    spy={true}
                    extact="true"
                    offsset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    flex={flex ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
            <Contact details={details ? 1 : 0}>
              <ContactDetails>
                
                {address1} <br />
                {address2} <br />
                {cp} <br />
                <Mentions style={{ marginTop: "50px" }} >&copy; {copyright}</Mentions>
                <Img
                  style={{ width: "60px", marginTop: "5px" }}
                  src={step}
                  alt={alt}
                />
              </ContactDetails>
            </Contact>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
