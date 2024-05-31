import React, { useState, useEffect } from "react"


export default function windowHook() {


    const resizeEventHandler = (event) => {

        console.log("Resized")

    };

    window.addEventListener("resize", resizeEventHandler);


    return () => {

        console.log("Removing Resize event listener ")

        window.removeEventListener("resize", resizeEventHandler);

    }



}

