import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 400px;
  background-color: #ab393c;
  color: white;
  line-height: 1.8;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Header = styled.h1`
  font-family: Secular One, sans-serif;
  @media (max-width: 375px) {
    font-size: 1.6em;
  }
`;

export const Description = styled.p`
  font-family: "Roboto";
  margin: 0 0 20px 0;
  padding: 0px;
  text-align: center;
`;

export const Button = styled.a`
  margin-bottom: 21.44px;
  font-family: "Roboto Mono", monospace;
  width: 230px;
  height: 3.125em;
  line-height: 3.125em;
  color: white;
  background-color: transparent;
  border: 2px solid #fff;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  border-radius: 0px;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  box-shadow: none !important;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  text-decoration: none;
  :hover {
    background-color: white;
    color: black;
    text-decoration: none;
  }
`;

// // export const ButtonAnchor = styled.a`
// //     textDecoration: none;
// //     color: white;
// //     :hover {
// //       color: black
// //     }
// `;
