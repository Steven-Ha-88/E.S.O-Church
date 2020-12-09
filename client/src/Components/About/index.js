import React from "react";
import { Section, Header, ImgWrapper, Wrapper } from "./styles";

const About = () => {
  return (
    <Section id='about'>
      <Wrapper>
        <Header>About Us</Header>
        <p style={{ textAlign: "start", fontSize: "1.5rem" }}>
          We are applying for this grant because we are in a position to grow
          our anime podcast very rapidly. Amassing a large following on our
          social media platforms with a solid fan base; has shown us we have a
          identified a gap in the market that needed to be filled. Understanding
          our audience needs is imperative when building a podcast and is
          something that we have truly grasped.
          <br />
          <br />
          We at the AniMates believe, that our best chance to normalise Anime in
          UK culture, would be to create the UK’s very first anime show. This
          podcast not only brings about fun and interesting topic and
          discussions but on a larger mission, brings about inclusivity and
          representation for young black males and females, who enjoy anime but
          don’t have a community that gives them the opportunity to share their
          opinions and be apart of.
        </p>
      </Wrapper>
      <ImgWrapper>
        <img
          src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpre15.deviantart.net%2F8d96%2Fth%2Fpre%2Ff%2F2007%2F208%2Fc%2Fd%2Fyoung_kakashi_by_sadritheus.jpg&f=1&nofb=1'
          data-id='210014928007202'
          data-size='medium'
          data-head='1'
          data-foot='1'
          alt='#naruto #tsunade #funny   '
          width='100%'
          height='100%'
        />
      </ImgWrapper>
    </Section>
  );
};

export default About;
