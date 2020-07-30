import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import { Switch, Route, useHistory } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
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

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .required("Please enter your name"),
});

const App = () => {
  const [order, setOrder] = useState();
  const [form, setForm] = useState(initialForm);
  const [disable, setDisable] = useState(true);
  const [errors, setErrors] = useState(initialForm);
  const history = useHistory();

  useEffect(() => {
    formSchema.isValid(form).then((valid) => {
      setDisable(!valid);
    });
  }, [form]);

  const validateForm = (e) => {
    yup
      .reach(formSchema, "name")
      .validate(e.target.value)
      .then((valid) => setErrors({ ...errors, [e.target.name]: "" }))
      .catch((err) => setErrors({ ...errors, [e.target.name]: err.errors }));
  };

  const handleChange = (e, checkbox) => {
    e.persist();
    checkbox
      ? setForm({ ...form, [e.target.name]: e.target.checked })
      : setForm({ ...form, [e.target.name]: e.target.value });
    validateForm(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/users", form)
      .then((res) => {
        setOrder(res.data);
        setForm(initialForm);
        history.push("/confirmation");
      })
      .catch((err) => console.log(err));
  };

  console.log(order);
  return (
    <Container direction={"column"} width={"1000px"} className="App">
      <h1>Lambda Eats</h1>
      <Navigation />
      <div className="errors">
        {errors.name.length > 0 ? <p> {errors.name} </p> : null}
      </div>
      <Switch>
        <Route path="/pizza">
          <Form
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            form={form}
            disable={disable}
          />
        </Route>
        <Route path="/confirmation">
          <Confirmation order={order} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Container>
  );
};
export default App;
