import React from "react";
import {BrowserRouter,Route} from "react-router-dom";
import Register from "./Register.jsx"
import Login from "./Login.jsx";
import Shome from "./Shome.jsx";
import Thome from "./Thome.jsx";


const App=()=>{
  return(
    <BrowserRouter>
      <Route exact path="/" component={()=> <Register/>}/>
      <Route exact path="/login" component={()=> <Login/>}/> 
      <Route exact path="/shome" component={()=> <Shome/>}/>
      <Route exact path="/thome" component={()=> <Thome/>}/>
    </BrowserRouter>
  )
}
export default App;