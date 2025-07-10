export function Person(props) {
  return (
    <div
      style={{
        padding: "10px",
        minHeight: "150px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>name: {props.name}</p>
      <p>age: {props.age}</p>
    </div>
  );
}
