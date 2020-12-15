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
  flex-flow: column nowrap;
  height: auto;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.color ? props.color : "white")};
`;

export const Wrapper = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  color: black;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  text-align: center;
  @media (max-width: 480px) {
    padding: 50px;
    width: 100%;
    height: 100%;
    order: ${(props) => (props.order ? 1 : 0)};
  }
`;

export const Expand = styled.span`
  display: ${(props) => (props.toggle ? "none" : "inline-block")};
  margin: 0px;
`;

export const ImgWrapper = styled.div`
  margin-bottom: 10px;
  width: 100%;
  align-self: center;
  @media (max-width: 480px) {
    width: 95%;
    height: 100%;
    padding: 10px;
    order: ${(props) => (props.order ? 2 : 0)};
  }
`;

export const Header = styled.h1`
  color: ${(props) => (props.color ? props.color : "white")};
  font-size: 2rem;
  font-family: Secular One, sans-serif;
  margin: 0px;
`;

export const Text = styled.p`
  color: ${(props) => (props.color ? props.color : "black")};
  font-size: 16px;
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
