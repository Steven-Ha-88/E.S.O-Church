import React from "react";
import { Container, Wrapper, Header, Button, Description } from "./styles";

export const Contact = () => {
  return (
    <Container id='contact'>
      <Wrapper>
        <Header data-aos='fade-right'>Contact for any enquiries</Header>
        <Description data-aos='fade-right'>
          Are you a big anime fan?
        </Description>
        <Button href='mailto:animatestv@gmail.com' data-aos='fade-right'>
          get in touch!
        </Button>
      </Wrapper>
    </Container>
  );
};
