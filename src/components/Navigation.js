import React from "react";
import { Container, Button } from "./styles";
import { useHistory } from "react-router-dom";

export default function Navigation() {
  const history = useHistory();
  return (
    <Container width={"80%"} justify={"space-between"}>
      <h3>Lambda Eats</h3>
      <Container width={"30%"} justify={"flex-end"}>
        <Button onClick={() => history.push("/")} width={"40%"} id={"home"}>
          Home
        </Button>
        <Button width={"40%"}>Help</Button>
      </Container>
    </Container>
  );
}
