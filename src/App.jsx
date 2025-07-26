import { useState,useEffect } from "react";
import Goal from "./goal";
import List from "./list";


function App(){
  const[goals,setgoals]=useState([]);

    useEffect(()=>{
      fetch("http://localhost:3001/goals")
      .then(res=> res.json())
      .then(data =>setgoals(data))
    },[])

    return(
      <div>
        <h1 style={{paddingLeft:"1100px"}}>Tracker</h1>
        <div style={{paddingLeft:"800px"}}>
          <Goal setgoals={setgoals}/>
        </div>
        <div style={{paddingLeft:"500px"}}>
           <List goals={goals} setgoals={setgoals}/>
        </div>
     </div>
    )
}
export default App;
