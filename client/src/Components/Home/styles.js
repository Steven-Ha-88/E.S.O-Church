import styled from "styled-components";

export const ImageWrapper = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: 100%;
  background-blend-mode: saturation;
  // background-attachment: fixed;
  height: 300px;
  min-width: 350px;
  width: 100%;
  position: relative;

  @media (min-width: 1300px) {
    height: 80vh;
  }

  @media (max-width: 768px) {
    background-image: url(${(props) => props.image});
    height: 396px;
  }

  @media (max-width: 480px) {
    background-image: url(${(props) => props.image});
    background-size: 100%
    height: 350px;
  }
`;
