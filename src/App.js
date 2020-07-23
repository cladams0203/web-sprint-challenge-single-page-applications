import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import { Switch, Route } from "react-router-dom";
import { Container } from "./components/styles";
import Home from "./components/Home";
import Form from "./components/Form";
import Confirmation from "./components/Confirmation";
import "./App.css";

const initialForm = {
  name: "",
  size: "small",
  pepperoni: false,
  cheese: false,
  sausage: false,
  pineapple: false,
  special: "",
};

const App = () => {
  const [order, setOrder] = useState([]);
  const [form, setForm] = useState(initialForm);

  const handleChange = (e, checkbox) => {
    e.persist();
    checkbox
      ? setForm({ ...form, [e.target.name]: e.target.checked })
      : setForm({ ...form, [e.target.name]: e.target.value });
  };
  console.log(form);
  return (
    <Container direction={"column"} width={"1000px"} className="App">
      <h1>Lambda Eats</h1>
      <Navigation />
      <Switch>
        <Route path="/pizza">
          <Form handleChange={handleChange} form={form} />
        </Route>
        <Route path="/confirmation">
          <Confirmation />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Container>
  );
};
export default App;
