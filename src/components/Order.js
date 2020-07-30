import React from "react";

export default function Order(props) {
  const { order } = props;
  return (
    <div>
      <h3>{`${order.name}'s Order`}</h3>
      <p>Size: {order.size}</p>
      <div>
        <p>Toppings: </p>
        {order.cheese && <p> Cheese </p>}
        {order.pepperoni && <p> Pepperoni </p>}
        {order.sausage && <p> Sausage </p>}
        {order.pineapple && <p> Pineapple </p>}
      </div>
      <p>Special Instructions:</p>
      <p> {order.special} </p>
    </div>
  );
}
