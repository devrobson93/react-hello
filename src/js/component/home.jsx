import React from "react";
import Counter from "./counter.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<Counter numberOne={props.numberOne} numberTwo={props.numberTwo} numberThree={props.numberThree} numberFour={props.numberFour} numberFive={props.numberFive} numberSix={props.numberSix} />
	);
};

export default Home;