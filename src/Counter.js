import { useState } from "react";

export function Counter() {
  const [x, setx] = useState(0);

  return (
    <section
      style={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        gap: "12px",
        alignItems: "center",
        justifyContent: "center",
        background: "#304159",
      }}
    >

      

      <div
        style={{
          background: "white",
          padding: "24px",
          width: "50%",
          height: "50%",
          borderColor: "Black",
          borderWidth: "3px",
          borderRadius: "20px",
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
        <p style={{ textAlign: "center" }}>This count is { (x % 2===0 ? "even" : "odd") } numbered</p>
        {x === 10 && <p style={{textAlign: "center"}}>this is max</p>}
        {x === 0 && <p style={{textAlign: "center"}}>this is min</p>}
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
        <button disabled = {x >= 10} onClick={handleAddClick}>+</button>
      </div>
    );
  }

  function Subtractor() {
    return (
      <div>
        <button disabled = {x <= 0} onClick={handleSubClick}>-</button>
      </div>
    );
  }
}
