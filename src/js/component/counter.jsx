import React from "react";

 const Counter = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container text-white display-1 box">
                   <div className="clockIcon display-4"><i class="fa fa-solid fa-clock text-white"></i></div>
                  <strong> <div className="numberSix">{props.numberSix}</div></strong> 
                  <strong><div className="numberFive">{props.numberFive}</div></strong> 
                  <strong> <div className="numberFour">{props.numberFour}</div></strong> 
                  <strong><div className="numberThree">{props.numberThree}</div></strong> 
                  <strong> <div className="numberTwo">{props.numberTwo}</div></strong> 
                  <strong> <div className="numberOne">{props.numberOne}</div></strong> 
                </div>
            </nav>
        </div>
    );
};

export default Counter;