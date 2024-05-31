import React, { useState, useEffect } from "react";

import WindowHook from "./components/windowHook";

import UseDocumentClick from "./customs/Hooks/useDocumentClick";

export default function App() {


  const [toggle, setToggle] = useState(false);


  return (

    <div>


      <button onClick={() => setToggle((currentState) => !currentState)} >Toggle</button>


      {toggle && <WindowHook />}


      < UseDocumentClick />
    </div>

  )

  

}