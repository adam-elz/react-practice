import "./App.css";
import { useState } from "react";

export default function Counter() {
  const [x, setx] = useState(0);
  let text = OddEvenChecker();

  return (
    <section
      style={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        gap: "12px",
        marginTop: "0",
        alignItems: "center",
        justifyContent: "center",
        background: "#304159",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "24px",
          width: "200px",
          borderColor: "Black",
          borderWidth: "2px",
          border: "Solid",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Adder />
          {x}
          <Subtractor />
        </div>
        <p style={{ textAlign: "center" }}>This text is {text} numbered</p>
      </div>
    </section>
  );

  function handleAddClick() {
    setx(x + 1);
  }

  function handleSubClick() {
    setx(x - 1);
  }

  function Adder() {
    return (
      <div>
        <button onClick={handleAddClick}>+</button>
      </div>
    );
  }

  function Subtractor() {
    return (
      <div>
        <button onClick={handleSubClick}>-</button>
      </div>
    );
  }

  function OddEvenChecker() {
    if (x % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
}
