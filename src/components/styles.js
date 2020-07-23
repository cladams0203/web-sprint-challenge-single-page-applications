import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: ${(props) => props.wrap || "no-wrap"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
  width: ${(props) => props.width || "100%"};
  flex-direction: ${(props) => props.direction || "row"};
  border: 1px solid red;
`;

export const Button = styled.button`
  font-size: ${(props) => props.fontSize || "1rem"};
  width: ${(props) => props.width || ""};
  background-color: ${(props) => props.background || "lightgray"};
  color: ${(props) => props.color || "black"};
  margin: 5px;
  text-align: center;
  :hover {
    color: ${(props) => props.background || "lightgray"};
    background-color: ${(props) => props.color || "black"};
  }
`;
