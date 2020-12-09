import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
   margin: 0; 
  //  background-image: url(${(props) => props.image});
  background-color: white;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: saturation;
  background-attachment: fixed;
  background-color: #fff0;
  height: 500px;
  min-width: 350px;
  width: 100%;
  position: relative;

  @media (min-width: 1300px) {
    height: 80vh;
  }

  @media (max-width: 768px) {
    background-color: white;

    // background-image: url(${(props) => props.image});
    height: 371px;
  }

  @media (max-width: 480px) {
    background-color: white;
    // background-image: url(${(props) => props.mobile});
    background-size: cover;
    background-attachment: fixed;
    height: 200px;
    // background-attachment: scroll;
  }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Nunito Sans", sans-serif;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: ${(props) => props.height};
  background-color: ${(props) => props.colour};
  color: ${(props) => props.fontcolor};
`;
