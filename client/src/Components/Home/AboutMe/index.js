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
        <Header>Podcasts</Header>
        <Text style={{ textAlign: "center" }}>
          AniMates release a new podcast every fortnight featuring a new Anime
          enthusiast. Every episode, they dive into this Anime plots, themes and
          news. Get to know the hosts KB and Big Murksz by listen to the lastest
          episode of the AniMates Podcast.
        </Text>
      </Section>
      <Container>
        <Wrapper data-aos='fade-up'>
          <Header>What we have in store?</Header>
          <Text>
            AniMates aim to create UKs biggest Anime events. Bringing you go
            vibes, good energy and great discussions at a venue near you! To
            find out more email the AniMates Team.
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
          <Header>Merchandise</Header>
          <Text>
            AniMates also plan to bring you high quality anime Clothing.
            Everything for hats to hoodies; gloves and much more! For more
            information on the AniMates Clothing, please email the AniMates
            Team.
          </Text>
        </Wrapper>
      </Container>
      <Container>
        <Wrapper data-aos='fade-up'>
          <Header>Live Shows</Header>
          <Text>
            The AniMates want to get you involved with all the action. We will
            be hosting live shows for you Anime fans to join. Due to the COV19
            outbreak, we will be running the LIVE SHOWS on YouTube and Discord
            until venues reopen.
          </Text>
        </Wrapper>
        <ImgWrapper data-aos='flip-left'>
          <img alt='anime img' width='100%' src={pic3} />
        </ImgWrapper>
      </Container>
    </>
  );
};
