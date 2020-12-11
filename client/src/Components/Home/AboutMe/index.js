import React from "react";
import pic1 from "./../../../Images/goku.jpeg";
import pic2 from "./../../../Images/onepiece.jpeg";
import pic3 from "./../../../Images/demonslayer.jpeg";
import {
  Section,
  Container,
  Wrapper,
  ImgWrapper,
  Header,
  Text,
} from "./styles";

export const AboutMe = () => {
  return (
    <>
      <Section data-aos='fade-up' id='about'>
        <Header>Who Are We?</Header>
        <Text style={{ textAlign: "center" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Text>
      </Section>
      <Container>
        <Wrapper data-aos='fade-up'>
          <Header>What we have in store?</Header>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </Text>
        </Wrapper>
        <ImgWrapper data-aos='flip-left'>
          <img alt='anime img' width='100%' src={pic1} />
        </ImgWrapper>
      </Container>
      <Container>
        <ImgWrapper order='true' data-aos='flip-right'>
          <img alt='anime img' width='100%' src={pic2} />
        </ImgWrapper>
        <Wrapper order='true' data-aos='fade-up'>
          <Header>Meet The Crew</Header>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </Text>
        </Wrapper>
      </Container>
      <Container>
        <Wrapper data-aos='fade-up'>
          <Header>Our Future</Header>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </Text>
        </Wrapper>
        <ImgWrapper data-aos='flip-left'>
          <img alt='anime img' width='100%' src={pic3} />
        </ImgWrapper>
      </Container>
    </>
  );
};
