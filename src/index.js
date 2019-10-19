import React from "react";
import ReactDOM from "react-dom";
import MenuApp from "./components/MenuApp";


const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<MenuApp />, wrapper) : null;