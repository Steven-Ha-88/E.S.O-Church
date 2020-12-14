import styled from 'styled-components';

// SearchBar Component

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 300px;
  background-color: rgba(250, 250, 250, 0.877);
  font-family: 'Open Sans', sans-serif
`;

export const PostTitle = styled.h1`
  margin-bottom: 0;
  color: grey;
`;

export const Search = styled.input`
  width: 250px;
  line-height: 1.6em;
  font-size: 0.8rem;
  padding: 3px 10px;
  border: solid 1px grey;
`;

export const Label = styled.label`
  margin-right: 20px
  margin-top: 4px
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

// Posts Component

export const Card = styled.div`
  position: relative;
  width: 100%;
  padding: 10px 20px;
  margin-bottom: 20px;
  background-color: rgb(248, 248, 248)
`;

export const DropDown = styled.i`
  position: absolute;
  right: 10px;
  top: 13px;
  color: rgb(196, 196, 196);

  &:hover {
    cursor: pointer
  }
`;

export const Title = styled.h5`
  margin-bottom: 0;
  color: grey;
`;

export const Description = styled.p`
  color: grey;
`;

export const RefId = styled.p`
  color: grey;
`;


// App

export const Heading = styled.div`
  position: relative;
  width: 100%;
  padding: 10px;
  margin: 20px 0;
  background-color: rgb(236, 236, 236);
  color: grey;
  text-align: center
`;

export const Container = styled.div`
  padding: 10px 45px
`;
