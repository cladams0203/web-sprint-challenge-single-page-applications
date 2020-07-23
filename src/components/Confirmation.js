import React from "react";

export default function Confirmation() {
  return (
    <div>
      <h2>Congrats! Pizza is on the way!</h2>
      <div>
        <img src={require("../Assets/Pizza.jpg")} alt="pizza" />
      </div>
    </div>
  );
}
