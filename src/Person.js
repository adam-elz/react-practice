export function Person(props){
    return(
        <div style={{padding:"10px"}}>
        <p>name: {props.name}</p>
        <p>age: {props.age}</p>
        </div>
    )
}