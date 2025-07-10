import "./App.css";
import { Navbar } from "./Navbar.jsx";
import {CounterGrid} from "./CounterGrid.jsx";
import Test from "./Test.jsx";


export default function Homepage() {
  return (
    <section style={{display:"flex",flexDirection:"column",background: "#304159", height:"100vh", justifyContent:"center"}}>
      <Navbar/>
        <div style={{display: "flex",width: "100vw", height: "100vh", justifyContent:"center",alignContent:"center"}}>
          <div style={{width:"30%", alignContent:"center", justifyContent: "center"}}>
            <CounterGrid/>
          </div>
        </div>
       
   </section>

  //  <div>
  //   <Test/>
  //  </div>
   
  )
}
