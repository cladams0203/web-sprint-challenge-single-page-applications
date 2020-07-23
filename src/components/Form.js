import React from "react";

export default function Form(props) {
  const { handleChange, form, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Your Name
        <input
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
          checked={form.cheese}
          name="cheese"
          onChange={(e) => handleChange(e, true)}
          type="checkbox"
        />
      </label>
      <label>
        Pepperoni
        <input
          checked={form.pepperoni}
          name="pepperoni"
          onChange={(e) => handleChange(e, true)}
          type="checkbox"
        />
      </label>
      <label>
        Sausage
        <input
          checked={form.sausage}
          name="sausage"
          onChange={(e) => handleChange(e, true)}
          type="checkbox"
        />
      </label>
      <label>
        Pineapple
        <input
          checked={form.pineapple}
          name="pineapple"
          onChange={(e) => handleChange(e, true)}
          type="checkbox"
        />
      </label>
      <label>
        Special Cooking Instructions
        <input
          value={form.special}
          name="special"
          onChange={handleChange}
          type="text"
          placeholder="special instructions"
        />
      </label>
      <button type="submit">Place Order</button>
    </form>
  );
}
