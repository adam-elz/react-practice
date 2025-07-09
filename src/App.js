import "./App.css";
import { Navbar } from "./Navbar";
import { CounterGrid } from "./CounterGrid";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          background: "#304159",
          alignItems: "center",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <CounterGrid />
      </section>
    </>
  );
}
