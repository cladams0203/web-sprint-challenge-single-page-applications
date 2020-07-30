import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Container } from "./styles";
export default function Home() {
  const history = useHistory();
  return (
    <Container direction={"column"}>
      <Container width={"80%"}>
        <img src={require("../Assets/Pizza.jpg")} alt="Pizza" />
      </Container>
      <Button fontSize={"1.5rem"} onClick={() => history.push("/pizza")}>
        Pizza?
      </Button>
    </Container>
  );
}
