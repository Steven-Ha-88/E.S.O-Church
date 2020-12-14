import React from "react";
import pic1 from "./../../../Images/esomorning/picture-of-history.png";
import pic2 from "./../../../Images/esomorning/picture-of-ambition.png";
import pic3 from "./../../../Images/esomorning/picture-of-goals.png";
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
      {/* <Section data-aos='fade-up' id='about'>
        <Header>Our History</Header>
        <Text style={{ textAlign: "center" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Text>
      </Section> */}
      <Container color='rgb(18, 23, 93)'>
        <Wrapper data-aos='fade-up'>
          <Header>Our History</Header>
          <Text color='white'>
            The Church was founded by Late Saint Moses Orimolade Tunolase of
            blessed memory. The group was unique in that they worship in white
            garments and are the first authentic African church founded by a
            Nigerian. St. Moses Orimolade Tunolase was born on Sunday 11
            November, 1877 at Okorun Street, Ikare Akoko in Ondo State. He
            started his evangelistic and spiritual healing work from his
            hometown, in Ikare Akoko and moved to other parts of the country
            before moving to Lagos when he had a vision that the Atlantic Ocean
            was about to submerge Lagos. After many successful prayer sessions
            and revival services he won many followers. He never intended to
            start a church but only to spiritually reawaken the existing
            churches by teaching them the way and injunction of the Holy Spirit.
            Many of the church leaders rejected him for many reasons including
            the fact that he was not only an illiterate but also that he had no
            known religious root. With the huge followership, it became
            expedient to find a name for the prayer group. At Agosofin in Lagos
            Island the Order was named added on Wednesday 9 September, 1925. And
            Cherub was thursday 26" May, 1927.
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
          <Header color='rgb(18, 23, 93)'>Where We Are</Header>
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
      <Container color='rgb(18, 23, 93)'>
        <Wrapper data-aos='fade-up'>
          <Header>Our Future</Header>
          <Text color='white'>
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
