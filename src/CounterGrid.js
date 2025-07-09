import { useState } from "react";
import { Counter } from "./Counter";
import { Person } from "./Person";

export function CounterGrid() {
  return(<section style={{
    display:"grid",
    gridTemplateColumns:"1fr 1fr",
    background: "white",
    border: "2px solid black",
    borderRadius: "20px"
  }}>
    <Person name = "test" age = {30}/>
    <Counter/>
  </section>)
}
