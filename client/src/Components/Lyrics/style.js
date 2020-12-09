import styled from "styled-components";

export const Wrapper = styled.div`
  height: auto;
  display: flex;
  justify-content: flex-start;
  flex-flow: column nowrap;
  align-items: center;
  padding: 50px;
  white-space: pre-wrap;
  text-align: center;
  @media (max-width: 480px) {
    padding: 20px;
  }
`;
