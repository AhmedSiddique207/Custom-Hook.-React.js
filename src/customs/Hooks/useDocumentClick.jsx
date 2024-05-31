import React, {useState, useEffect  } from "react";


export default function useDocumentClick (){

useEffect(()=>{

const handleDocumentClick=(event)=>{
    console.log("Click Document")

};
window.addEventListener("resize", handleDocumentClick);


return () => {

    console.log("Removing Resize event listener ")

    window.removeEventListener("resize", handleDocumentClick);

}

})

}