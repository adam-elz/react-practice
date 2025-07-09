export function Navbar() {
    return(
        <section 
        style={{
            display: "flex", 
            padding: "10px", 
            background: "lightgray",
            height:"20px",
            overflow: "hidden",
            alignContent: "center",
            justifyContent: "space-between",
            border: "2px solid black"
            }}
        >
            <div>Welcome!</div>
            <div>React Test 1</div>
            <button style={{background:"red"}}>Logout</button>
        </section>
    )
}