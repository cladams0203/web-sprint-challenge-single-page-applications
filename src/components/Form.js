import React from "react";

export default function Form(props) {
  const { handleChange, form } = props;
  return (
    <form>
      <label>
        Your Name
        <input onChange={handleChange} name="name" placeholder="Name" />
      </label>
      <label>
        Pizza Size
        <select onChange={handleChange} name="size">
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
          name="cheese"
          onChange={(e) => handleChange(e, true)}
          type="checkbox"
        />
      </label>
      <label>
        Pepperoni
        <input
          name="pepperoni"
          onChange={(e) => handleChange(e, true)}
          type="checkbox"
        />
      </label>
      <label>
        Sausage
        <input
          name="sausage"
          onChange={(e) => handleChange(e, true)}
          type="checkbox"
        />
      </label>
      <label>
        Pineapple
        <input
          name="pineapple"
          onChange={(e) => handleChange(e, true)}
          type="checkbox"
        />
      </label>
      <label>
        Special Cooking Instructions
        <input
          name="special"
          onChange={handleChange}
          type="text"
          placeholder="special instructions"
        />
      </label>
      <button>Place Order</button>
    </form>
  );
}
