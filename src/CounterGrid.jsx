import { useState } from "react";
import { Counter } from "./Counter.jsx";
import { Person } from "./Person.jsx";

export function CounterGrid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignContent: "center",
        justifyContent: "center",
        background: "white",
        border: "2px solid black",
        borderRadius: "20px",
      }}
    >
      <Person name="test" age={30} />
      <Counter />
    </div>
  );
}
