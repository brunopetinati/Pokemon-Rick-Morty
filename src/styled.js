import styled from "styled-components";

export const Welcome = styled.div`
  color: white;
  height: 776px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 25px;
  letter-spacing: 2px;
  word-spacing: 2px;
  background-color: black;
  color: white;
  font-variant: small-caps;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: end;
  font-size: 25px;
  background-color: black;
  color: white;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 25px;
  letter-spacing: 2px;
  word-spacing: 2px;
  background-color: black;
  height: 100px;
  color: white;
  font-variant: small-caps;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: Black;
  color: White;
  height: 300px;
  padding-top: 1px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border-right: 2px solid white;
  border-left: 2px solid white;
  cursor: pointer;
  width: 50px;
  :hover {
    background-color: white;
    color: black;
    transition: 0.8s;
  }
`;

export const Reset = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: Black;
  color: White;
  height: 300px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 25px;
  letter-spacing: 2px;
  word-spacing: 2px;
  font-variant: small-caps;
  padding-top: 1px;
  :hover {
    color: purple;
    transition: 0.8s;
    cursor: pointer;
  }
`;
