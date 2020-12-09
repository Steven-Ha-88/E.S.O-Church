import styled from "styled-components";
// import fundingpic from "./../../Images/";

export const Section = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  // padding: 100px;
  justify-content: start;
  flex-flow: row;
  align-content: start;
  align-items: start;
  text-align: start;
  background-color: white;
  color: black;

  @media (max-width: 720px) {
    flex-flow: column;
    height: auto;
  }

  @media (max-height: 635px) {
    height: auto;
  }
`;

export const Header = styled.h1`
  font-size: 1.5rem;
  font-family: Secular One, sans-serif;
`;

export const ImgWrapper = styled.div`
  // padding-top: 100px;
  // padding-right: 50px;
  // padding-bottom: 50px;
  width: 40%;
  height: 100%;
  margin-top: 10px;
  align-self: center;
  @media (max-width: 780px) {
    width: 100%;
    // padding: 10px;
  }
`;

export const Wrapper = styled.div`
  paddingright: 0px;
  width: 60%;
  padding: 100px 50px 50px 50px;
  @media (max-width: 780px) {
    flex-flow: column;
    height: auto;
    width: 100%;
    padding: 10px;
  }
`;
