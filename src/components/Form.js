import React from "react";
import { Container, Button } from "./styles";

export default function Form(props) {
  const { handleChange, form, handleSubmit, disable } = props;
  return (
    <Container
      border={"2px solid black"}
      direction={"column"}
      as="form"
      onSubmit={handleSubmit}
    >
      <label>
        Your Name:
        <input
          id="name"
          value={form.name}
          onChange={handleChange}
          name="name"
          placeholder="Name"
        />
      </label>
      <label>
        Pizza Size
        <select onChange={handleChange} name="size" value={form.size}>
          <option disabled value="">
            Select Size
          </option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </label>
      <label>
        Cheese
        <input
          id="cheese"
          checked={form.cheese}
          name="cheese"
          onChange={(e) => handleChange(e, true)}
          type="checkbox"
        />
      </label>
      <label>
        Pepperoni
        <input
          id="pepperoni"
          checked={form.pepperoni}
          name="pepperoni"
          onChange={(e) => handleChange(e, true)}
          type="checkbox"
        />
      </label>
      <label>
        Sausage
        <input
          id="sausage"
          checked={form.sausage}
          name="sausage"
          onChange={(e) => handleChange(e, true)}
          type="checkbox"
        />
      </label>
      <label>
        Pineapple
        <input
          id="pineapple"
          checked={form.pineapple}
          name="pineapple"
          onChange={(e) => handleChange(e, true)}
          type="checkbox"
        />
      </label>

      <p>Special Cooking Instructions:</p>
      <input
        style={{ height: "50px", width: "30%", textAlign: "center" }}
        id="special"
        value={form.special}
        name="special"
        onChange={handleChange}
        type="text"
        placeholder="special instructions"
      />

      <Button fontSize={"1.5rem"} disabled={disable} type="submit">
        Place Order
      </Button>
    </Container>
  );
}
