//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

let Counter = 0;
setInterval(() => {
    const numberSix = Math.floor(Counter / 100000 % 10)
    const numberFive = Math.floor(Counter / 10000 % 10)
    const numberFour = Math.floor(Counter / 1000 % 10)
    const numberThree = Math.floor(Counter / 100 % 10)
    const numberTwo = Math.floor(Counter / 10 % 10)
    const numberOne = Math.floor(Counter % 10)
    console.log(numberSix, numberFive, numberFour, numberThree, numberTwo, numberOne)
    Counter++;

    ReactDOM.render(<Home numberOne={numberOne} numberTwo={numberTwo} numberThree={numberThree} numberFour={numberFour} numberFive={numberFive} numberSix={numberSix}/>, document.querySelector("#app"))
}, 1000);