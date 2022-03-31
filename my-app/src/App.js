import React from "react";
import NavBar from "./components/Navbar";
import Routers from "./router";

const App = (props) => {
  return(
    <>
      <NavBar/>
      <div>{props.children}</div>
    </>
  )
}

export default App
