import React from "react";
import Order from "./Order";

export default function Confirmation(props) {
  return (
    <div>
      <h2>Congrats! Pizza is on the way!</h2>
      <div>
        <img src={require("../Assets/Pizza.jpg")} alt="pizza" />
      </div>
      {props.order && <Order order={props.order} />}
    </div>
  );
}
