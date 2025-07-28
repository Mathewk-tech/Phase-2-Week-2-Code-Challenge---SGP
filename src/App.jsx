import { useState,useEffect } from "react";
import Goal from "./goal";
import List from "./list";
import Deposit from "./Deposit";

const url="https://phase-2-week-2-code-challenge-sgp.onrender.com"
function App(){
  const[goals,setgoals]=useState([]);
  

    useEffect(()=>{
      fetch(`${url}/goals`)
      .then(res=> res.json())
      .then(data =>setgoals(data))
    },[])

    return(
      <div>
        <h1 style={{paddingLeft:"1100px"}}>Tracker</h1>
        <div style={{paddingLeft:"800px"}}>
          <Goal setgoals={setgoals}/>
        </div>
        <div style={{paddingLeft:"800px"}}>
          <Deposit goals={goals} setgoals={setgoals} />
        </div>
        <div style={{paddingLeft:"500px"}}>
           <List goals={goals} setgoals={setgoals}/>
        </div>
     </div>
    )
}
export default App;
