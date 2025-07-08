export function Navbar() {
    return(
        <section 
        style={{
            display: "flex", 
            padding: "10px", 
            background: "lightgray",
            gap:"40%",
            height:"20px",
            overflow: "hidden",
            alignContent: "center",
            justifyContent: "center",
            border: "2px solid black"
            }}
        >
            <div>Welcome!</div>
            <div>React Test 1</div>
            <button style={{background:"red"}}>Logout</button>
        </section>
    )
}