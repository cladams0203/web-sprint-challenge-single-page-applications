import React from "react";

export default function Form(props) {
  const { handleChange, form, handleSubmit, disable } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Your Name
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
      <label>
        Special Cooking Instructions
        <input
          id="special"
          value={form.special}
          name="special"
          onChange={handleChange}
          type="text"
          placeholder="special instructions"
        />
      </label>
      <button disabled={disable} type="submit">
        Place Order
      </button>
    </form>
  );
}
