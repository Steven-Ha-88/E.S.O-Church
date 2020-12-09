import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  width: 100vw;
  min-height: 300px;
  padding: 100px 300px;
  justify-content: start;
  flex-flow: column nowrap;
  align-content: center;
  align-items: center;
  background-color: white;
  color: black;
  margin-top: 20px;
  @media (max-width: 480px) {
    padding: 50px;
  }

  @media (max-height: 635px) {
    height: auto;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: auto;
  justify-content: center;
  @media (max-width: 480px) {
    flex-flow: column nowrap;
    height: 500px;
    flex-direction: column;
  }
`;

export const Wrapper = styled.div`
  width: 60%;
  display: flex;
  color: black;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  padding: 20px 50px;
  background-color: white;
  @media (max-width: 480px) {
    align-items: center;
    text-align: center;
    padding: 50px;
    width: 100%;
    height: 100%;
    order: ${(props) => (props.order ? 1 : 0)};
  }
`;

export const ImgWrapper = styled.div`
  padding: 30px;
  width: 40%;
  align-self: center;
  @media (max-width: 480px) {
    width: 95%;
    height: 100%;
    padding: 10px;
    order: ${(props) => (props.order ? 2 : 0)};
  }
`;

export const Header = styled.h1`
  font-size: 2rem;
  font-family: Secular One, sans-serif;
  color: #ab393c;
`;

export const Text = styled.p`
  font-size: 1.5rem;
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
